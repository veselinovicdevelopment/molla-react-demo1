import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { useState, useEffect, useLayoutEffect } from 'react';
import { useLazyQuery } from '@apollo/client';

import ALink from '~/components/features/alink';
import PageHeader from '~/components/features/page-header';
import ShopListThree from '~/components/partials/shop/list/shop-list-three';
import ShopSidebarOne from '~/components/partials/shop/sidebar/shop-sidebar-one';

import { GET_PRODUCTS } from '~/server/queries';
import { scrollToPageContent } from '~/utils';
import { Product } from '~/utils/types';

interface Query {
    type?: string;
    color?: string;
    size?: string;
    brand?: string;
    minPrice?: string;
    maxPrice?: string;
    searchTerm?: string;
    category?: string;
    sortBy?: string;
    search?: string;
    page?: string;
}

const ShopNoSidebar: NextPage = () => {
    const router = useRouter();
    const type = router.query.type;
    const query: Query = router.query;
    const [getProducts, { data, loading, error }] = useLazyQuery(GET_PRODUCTS);
    const [loadMoreProducts, { data: newData }] = useLazyQuery(GET_PRODUCTS);
    const [perPage, setPerPage] = useState<number>(8);
    const [containerClass, setContainerClass] = useState<string>('container');
    const [pageTitle, setPageTitle] = useState<string>('Boxed No Sidebar');
    const [moreLoading, setMoreLoading] = useState<boolean>(false);
    const [products, setProducts] = useState<Product[]>([]);
    const totalCount = data && data.products.totalCount;

    useLayoutEffect(() => {
        if (data) {
            setProducts(data.products.data);
        }
    }, [data]);

    useEffect(() => {
        getProducts({
            variables: {
                searchTerm: query.searchTerm,
                color: query.color ? query.color.split(',') : [],
                size: query.size ? query.size.split(',') : [],
                brand: query.brand ? query.brand.split(',') : [],
                minPrice: parseInt(query.minPrice),
                maxPrice: parseInt(query.maxPrice),
                category: query.category,
                sortBy: query.sortBy ? query.sortBy : 'default',
                page: 1,
                perPage: perPage,
            },
        });
        scrollToPageContent();
    }, [query]);

    useEffect(() => {
        loadMoreProducts({
            variables: {
                searchTerm: query.searchTerm,
                color: query.color ? query.color.split(',') : [],
                size: query.size ? query.size.split(',') : [],
                brand: query.brand ? query.brand.split(',') : [],
                minPrice: parseInt(query.minPrice),
                maxPrice: parseInt(query.maxPrice),
                category: query.category,
                sortBy: query.sortBy ? query.sortBy : 'default',
                page: 1,
                from: perPage,
                perPage: 4,
            },
        });
    }, [perPage]);

    useEffect(() => {
        if (newData) {
            setProducts([...products, ...newData.products.data]);
        }
    }, [newData]);

    useEffect(() => {
        if (type == 'boxed') {
            setPageTitle('Boxed No Sidebar');
        } else {
            setPageTitle('Fullwidth No Sidebar');
        }

        if (type == 'fullwidth') {
            setContainerClass('container-fluid');
        } else {
            setContainerClass('container');
        }
    }, [type]);

    const onSortByChange = (e) => {
        let queryObject = router.query;
        let url = router.pathname.replace('[type]', query.type) + '?';
        for (let key in queryObject) {
            if (key !== 'type' && key !== 'sortBy') {
                url += key + '=' + queryObject[key] + '&';
            }
        }

        router.push(url + 'sortBy=' + e.target.value);
    };

    const showSidebar = (e) => {
        e.preventDefault();
        document.querySelector('body').classList.add('sidebar-filter-active');
    };

    const toggleSidebar = () => {
        if (
            document
                .querySelector('body')
                .classList.contains('sidebar-filter-active')
        ) {
            document
                .querySelector('body')
                .classList.remove('sidebar-filter-active');
        } else {
            document
                .querySelector('body')
                .classList.add('sidebar-filter-active');
        }
    };

    const hideSidebar = () => {
        document
            .querySelector('body')
            .classList.remove('sidebar-filter-active');
    };

    const loadMore = (e) => {
        e.preventDefault();
        if (perPage < totalCount) {
            setMoreLoading(true);
            setTimeout(() => {
                setPerPage(perPage + 4);
                setMoreLoading(false);
            }, 500);
        }
    };

    if (error) {
        return <div></div>;
    }

    return (
        <main className="main shop">
            <PageHeader title={pageTitle} subTitle="Shop" />
            <nav className="breadcrumb-nav mb-2">
                <div className={containerClass}>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <ALink href="/">Home</ALink>
                        </li>
                        <li className="breadcrumb-item">
                            <ALink href="/shop/sidebar/list">Shop</ALink>
                        </li>
                        <li className="breadcrumb-item active">{pageTitle}</li>
                        {query.search ? (
                            <li className="breadcrumb-item">
                                <span>Search - {query.searchTerm}</span>
                            </li>
                        ) : (
                            ''
                        )}
                    </ol>
                </div>
            </nav>

            <div className="page-content">
                <div className={containerClass}>
                    <div className="toolbox">
                        <div className="toolbox-left d-none d-lg-flex">
                            <a
                                href="#"
                                className="sidebar-toggler mr-0 mr-md-5"
                                onClick={showSidebar}
                            >
                                <i className="icon-bars"></i>Filters
                            </a>
                        </div>
                        <div className="toolbox-center">
                            {!loading && products ? (
                                <div className="toolbox-info">
                                    Showing
                                    <span>
                                        {' '}
                                        {products.length} of {totalCount}
                                    </span>{' '}
                                    Products
                                </div>
                            ) : (
                                ''
                            )}
                        </div>

                        <div className="toolbox-right">
                            <div className="toolbox-sort">
                                <label htmlFor="sortby">Sort by:</label>
                                <div className="select-custom">
                                    <select
                                        name="sortby"
                                        id="sortby"
                                        className="form-control"
                                        onChange={onSortByChange}
                                        value={
                                            query.sortBy
                                                ? query.sortBy
                                                : 'default'
                                        }
                                    >
                                        <option value="default">Default</option>
                                        <option value="featured">
                                            Most Popular
                                        </option>
                                        <option value="rating">
                                            Most Rated
                                        </option>
                                        <option value="new">Date</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ShopListThree
                        products={products}
                        loading={loading}
                    ></ShopListThree>
                    <div
                        className={`load-more-container text-center ${
                            totalCount > perPage || moreLoading ? '' : 'd-none'
                        }`}
                    >
                        <a
                            href="#"
                            className="btn btn-outline-darker btn-load-more"
                            onClick={loadMore}
                        >
                            More Products
                            <i
                                className={`icon-refresh ${
                                    moreLoading ? 'load-more-rotating' : ''
                                }`}
                            ></i>
                        </a>
                    </div>
                    <div
                        className="sidebar-filter-overlay"
                        onClick={hideSidebar}
                    ></div>
                    <ShopSidebarOne toggle={true}></ShopSidebarOne>
                    <button
                        className="sidebar-fixed-toggler d-lg-none"
                        onClick={toggleSidebar}
                    >
                        <i className="icon-cog"></i>
                    </button>
                </div>
            </div>
        </main>
    );
};

export default ShopNoSidebar;
