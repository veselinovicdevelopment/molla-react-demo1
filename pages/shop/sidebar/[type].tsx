import { useRouter } from 'next/router';
import React, { useState, useEffect, ChangeEvent } from 'react';
import { useLazyQuery } from '@apollo/client';
import StickyBox from 'react-sticky-box';

import ALink from '~/components/features/Alink';
import PageHeader from '~/components/features/PageHeader';
import ShopListOne from '~/components/partials/shop/list/ShopListOne';
import Pagination from '~/components/features/Pagination';
import ShopSidebarOne from '~/components/partials/shop/sidebar/ShopSidebarOne';

import { GET_PRODUCTS } from '~/server/queries';
import { scrollToPageContent } from '~/utils';

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

const ShopGrid = () => {
    const router = useRouter();
    const type = router.query.type;
    const query: Query = router.query;
    const [getProducts, { data, loading, error }] = useLazyQuery(GET_PRODUCTS);
    const [firstLoading, setFirstLoading] = useState(false);
    const [perPage, setPerPage] = useState(5);
    const [pageTitle, setPageTitle] = useState('List');
    const [toggle, setToggle] = useState(false);
    const products = data && data.products.data;
    const totalCount = data && data.products.totalCount;

    useEffect(() => {
        window.addEventListener('resize', resizeHandle);
        resizeHandle();
        return () => {
            window.removeEventListener('resize', resizeHandle);
        };
    }, []);

    const resizeHandle = () => {
        if (document.querySelector('body')!.offsetWidth < 992) setToggle(true);
        else setToggle(false);
    };

    useEffect(() => {
        getProducts({
            variables: {
                searchTerm: query.searchTerm,
                color: query.color ? query.color.split(',') : [],
                size: query.size ? query.size.split(',') : [],
                brand: query.brand ? query.brand.split(',') : [],
                minPrice: parseInt(query.minPrice as string),
                maxPrice: parseInt(query.maxPrice as string),
                category: query.category,
                sortBy: query.sortBy ? query.sortBy : 'default',
                page: query.page ? parseInt(query.page) : 1,
                perPage: perPage,
                list: true,
            },
        });

        scrollToPageContent();
    }, [query, perPage]);

    useEffect(() => {
        if (products) setFirstLoading(true);
    }, [products]);

    useEffect(() => {
        if (type == 'list') {
            setPageTitle('List');
            setPerPage(5);
        } else if (type == '2cols') {
            setPageTitle('Grid 2 Columns');
            setPerPage(6);
        } else if (type == '3cols') {
            setPageTitle('Grid 3 Columns');
            setPerPage(9);
        } else if (type == '4cols') {
            setPageTitle('Grid 4 Columns');
            setPerPage(12);
        }
    }, [type]);

    const onSortByChange = (e: ChangeEvent<HTMLSelectElement>) => {
        let queryObject = router.query;
        let url = router.pathname.replace('[type]', query.type as string) + '?';
        for (let key in queryObject) {
            if (key !== 'type' && key !== 'sortBy') {
                url += key + '=' + queryObject[key] + '&';
            }
        }

        router.push(url + 'sortBy=' + e.target.value);
    };

    const toggleSidebar = () => {
        if (
            document
                .querySelector('body')!
                .classList.contains('sidebar-filter-active')
        ) {
            document
                .querySelector('body')!
                .classList.remove('sidebar-filter-active');
        } else {
            document
                .querySelector('body')!
                .classList.add('sidebar-filter-active');
        }
    };

    const hideSidebar = () => {
        document
            .querySelector('body')!
            .classList.remove('sidebar-filter-active');
    };

    if (error) {
        return <div></div>;
    }

    return (
        <main className="main shop">
            <PageHeader title={pageTitle} subTitle="Shop" />
            <nav className="breadcrumb-nav mb-2">
                <div className="container">
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
                <div className="container">
                    <div className="row skeleton-body">
                        <div
                            className={`col-lg-9 skel-shop-products ${
                                !loading ? 'loaded' : ''
                            }`}
                        >
                            <div className="toolbox">
                                <div className="toolbox-left">
                                    {!loading && products ? (
                                        <div className="toolbox-info">
                                            Showing
                                            <span>
                                                {' '}
                                                {products.length} of{' '}
                                                {totalCount}
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
                                                <option value="default">
                                                    Default
                                                </option>
                                                <option value="featured">
                                                    Most Popular
                                                </option>
                                                <option value="rating">
                                                    Most Rated
                                                </option>
                                                <option value="new">
                                                    Date
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="toolbox-layout">
                                        <ALink
                                            href="/shop/sidebar/list"
                                            className={`btn-layout ${
                                                type == 'list' ? 'active' : ''
                                            }`}
                                            scroll={false}
                                        >
                                            <svg width="16" height="10">
                                                <rect
                                                    x="0"
                                                    y="0"
                                                    width="4"
                                                    height="4"
                                                />
                                                <rect
                                                    x="6"
                                                    y="0"
                                                    width="10"
                                                    height="4"
                                                />
                                                <rect
                                                    x="0"
                                                    y="6"
                                                    width="4"
                                                    height="4"
                                                />
                                                <rect
                                                    x="6"
                                                    y="6"
                                                    width="10"
                                                    height="4"
                                                />
                                            </svg>
                                        </ALink>

                                        <ALink
                                            href="/shop/sidebar/2cols"
                                            className={`btn-layout ${
                                                type == '2cols' ? 'active' : ''
                                            }`}
                                            scroll={false}
                                        >
                                            <svg width="10" height="10">
                                                <rect
                                                    x="0"
                                                    y="0"
                                                    width="4"
                                                    height="4"
                                                />
                                                <rect
                                                    x="6"
                                                    y="0"
                                                    width="4"
                                                    height="4"
                                                />
                                                <rect
                                                    x="0"
                                                    y="6"
                                                    width="4"
                                                    height="4"
                                                />
                                                <rect
                                                    x="6"
                                                    y="6"
                                                    width="4"
                                                    height="4"
                                                />
                                            </svg>
                                        </ALink>

                                        <ALink
                                            href="/shop/sidebar/3cols"
                                            className={`btn-layout ${
                                                type == '3cols' ? 'active' : ''
                                            }`}
                                            scroll={false}
                                        >
                                            <svg width="16" height="10">
                                                <rect
                                                    x="0"
                                                    y="0"
                                                    width="4"
                                                    height="4"
                                                />
                                                <rect
                                                    x="6"
                                                    y="0"
                                                    width="4"
                                                    height="4"
                                                />
                                                <rect
                                                    x="12"
                                                    y="0"
                                                    width="4"
                                                    height="4"
                                                />
                                                <rect
                                                    x="0"
                                                    y="6"
                                                    width="4"
                                                    height="4"
                                                />
                                                <rect
                                                    x="6"
                                                    y="6"
                                                    width="4"
                                                    height="4"
                                                />
                                                <rect
                                                    x="12"
                                                    y="6"
                                                    width="4"
                                                    height="4"
                                                />
                                            </svg>
                                        </ALink>

                                        <ALink
                                            href="/shop/sidebar/4cols"
                                            className={`btn-layout ${
                                                type == '4cols' ? 'active' : ''
                                            }`}
                                            scroll={false}
                                        >
                                            <svg width="22" height="10">
                                                <rect
                                                    x="0"
                                                    y="0"
                                                    width="4"
                                                    height="4"
                                                />
                                                <rect
                                                    x="6"
                                                    y="0"
                                                    width="4"
                                                    height="4"
                                                />
                                                <rect
                                                    x="12"
                                                    y="0"
                                                    width="4"
                                                    height="4"
                                                />
                                                <rect
                                                    x="18"
                                                    y="0"
                                                    width="4"
                                                    height="4"
                                                />
                                                <rect
                                                    x="0"
                                                    y="6"
                                                    width="4"
                                                    height="4"
                                                />
                                                <rect
                                                    x="6"
                                                    y="6"
                                                    width="4"
                                                    height="4"
                                                />
                                                <rect
                                                    x="12"
                                                    y="6"
                                                    width="4"
                                                    height="4"
                                                />
                                                <rect
                                                    x="18"
                                                    y="6"
                                                    width="4"
                                                    height="4"
                                                />
                                            </svg>
                                        </ALink>
                                    </div>
                                </div>
                            </div>

                            <ShopListOne
                                products={products}
                                perPage={perPage}
                                loading={loading}
                            ></ShopListOne>

                            {totalCount > perPage ? (
                                <Pagination
                                    perPage={perPage}
                                    total={totalCount}
                                ></Pagination>
                            ) : (
                                ''
                            )}
                        </div>

                        <aside
                            className={`col-lg-3 skel-shop-sidebar order-lg-first skeleton-body ${
                                !loading || firstLoading ? 'loaded' : ''
                            }`}
                        >
                            <div className="skel-widget"></div>
                            <div className="skel-widget"></div>
                            <div className="skel-widget"></div>
                            <div className="skel-widget"></div>
                            <StickyBox
                                className="sticky-content"
                                offsetTop={70}
                            >
                                <ShopSidebarOne
                                    toggle={toggle}
                                ></ShopSidebarOne>
                            </StickyBox>
                            {toggle ? (
                                <button
                                    className="sidebar-fixed-toggler"
                                    onClick={toggleSidebar}
                                >
                                    <i className="icon-cog"></i>
                                </button>
                            ) : (
                                ''
                            )}
                            <div
                                className="sidebar-filter-overlay"
                                onClick={hideSidebar}
                            ></div>
                        </aside>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ShopGrid;
