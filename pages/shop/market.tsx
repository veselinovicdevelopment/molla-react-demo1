import StickyBox from 'react-sticky-box';
import { useRouter } from 'next/router';
import React, { useState, useEffect, ChangeEvent } from 'react';
import { useLazyQuery } from '@apollo/client';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Swiper, SwiperSlide } from 'swiper/react';

import ALink from '~/components/features/Alink';
import PageHeader from '~/components/features/PageHeader';

import ShopListTwo from '~/components/partials/shop/list/ShopListTwo';
import Pagination from '~/components/features/Pagination';
import ShopSidebarThree from '~/components/partials/shop/sidebar/ShopSidebarThree';

import { GET_PRODUCTS } from '~/server/queries';
import { homeData } from '~/utils/data';
import { Navigation } from 'swiper';

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
    rating?: string;
}

const ShopMarket = () => {
    const router = useRouter();
    const query: Query = router.query;
    const [getProducts, { data, loading, error }] = useLazyQuery(GET_PRODUCTS);
    const [perPage, setPerPage] = useState(8);
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
                rating: query.rating ? query.rating.split(',') : [],
            },
        });
    }, [query, perPage]);

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
        <main className="main shop-market">
            <PageHeader title="Shop Market" subTitle="Shop" />
            <nav className="breadcrumb-nav mb-3">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <ALink href="/">Home</ALink>
                        </li>
                        <li className="breadcrumb-item">
                            <ALink href="/shop/sidebar/list">Shop</ALink>
                        </li>
                        <li className="breadcrumb-item active">Market</li>
                    </ol>
                </div>
            </nav>

            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-xl-4-5col">
                            <Swiper
                                className="category-banners-slider"
                                slidesPerView={1}
                                spaceBetween={0}
                            >
                                <SwiperSlide>
                                    <div className="banner banner-poster">
                                        <ALink href="#">
                                            <div className="lazy-overlay"></div>

                                            <LazyLoadImage
                                                src="images/market/slider/slider-1.jpg"
                                                alt="Banner"
                                                effect="blur"
                                                width={400}
                                                height={260}
                                            />
                                        </ALink>

                                        <div className="banner-content banner-content-right">
                                            <h3 className="banner-subtitle">
                                                <ALink href="#">
                                                    Amazing Value
                                                </ALink>
                                            </h3>
                                            <h2 className="banner-title">
                                                <ALink href="#">
                                                    High Performance 4K TVs
                                                </ALink>
                                            </h2>
                                            <ALink
                                                href="/shop/sidebar/list"
                                                className="banner-link"
                                            >
                                                Shop Now{' '}
                                                <i className="icon-long-arrow-right"></i>
                                            </ALink>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="banner banner-poster">
                                        <ALink href="#">
                                            <div className="lazy-overlay"></div>

                                            <LazyLoadImage
                                                src="images/market/slider/slider-2.jpg"
                                                alt="Banner"
                                                effect="blur"
                                                width={400}
                                                height={260}
                                            />
                                        </ALink>

                                        <div className="banner-content">
                                            <h3 className="banner-subtitle">
                                                <ALink href="#">
                                                    Weekend Deal
                                                </ALink>
                                            </h3>
                                            <h2 className="banner-title">
                                                <ALink href="#">
                                                    Apple & Accessories
                                                </ALink>
                                            </h2>
                                            <ALink
                                                href="/shop/sidebar/list"
                                                className="banner-link"
                                            >
                                                Shop Now{' '}
                                                <i className="icon-long-arrow-right"></i>
                                            </ALink>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>

                            <Swiper
                                modules={[Navigation]}
                                navigation
                                className="brand-carousel"
                                slidesPerView={6}
                                spaceBetween={30}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 2,
                                    },
                                    420: {
                                        slidesPerView: 3,
                                    },
                                    600: {
                                        slidesPerView: 4,
                                    },
                                    900: {
                                        slidesPerView: 5,
                                    },
                                    1024: {
                                        slidesPerView: 6,
                                    },
                                }}
                            >
                                {homeData.brands
                                    .slice(0, 7)
                                    .map((brand, index) => (
                                        <SwiperSlide key={index}>
                                            <ALink
                                                href="#"
                                                className="brand mr-0"
                                            >
                                                <img
                                                    src={brand.image}
                                                    alt="brand"
                                                    width={brand.width}
                                                    height={brand.height}
                                                />
                                            </ALink>
                                        </SwiperSlide>
                                    ))}
                            </Swiper>
                            <div className="cat-blocks-container">
                                <div className="row">
                                    <div className="col-6 col-md-4 col-lg-3">
                                        <ALink
                                            href="/shop/market?category=computers"
                                            className="cat-block"
                                            scroll={false}
                                        >
                                            <figure>
                                                <span>
                                                    <img
                                                        src="images/market/cats/1.jpg"
                                                        alt="Category"
                                                    />
                                                </span>
                                            </figure>

                                            <h3 className="cat-block-title">
                                                Desktop Computers
                                            </h3>
                                        </ALink>
                                    </div>

                                    <div className="col-6 col-md-4 col-lg-3">
                                        <ALink
                                            href="/shop/market?category=monitors"
                                            className="cat-block"
                                            scroll={false}
                                        >
                                            <figure>
                                                <span>
                                                    <img
                                                        src="images/market/cats/2.jpg"
                                                        alt="Category"
                                                    />
                                                </span>
                                            </figure>

                                            <h3 className="cat-block-title">
                                                Monitors
                                            </h3>
                                        </ALink>
                                    </div>

                                    <div className="col-6 col-md-4 col-lg-3">
                                        <ALink
                                            href="/shop/market?category=laptops"
                                            className="cat-block"
                                            scroll={false}
                                        >
                                            <figure>
                                                <span>
                                                    <img
                                                        src="images/market/cats/3.jpg"
                                                        alt="Category"
                                                    />
                                                </span>
                                            </figure>

                                            <h3 className="cat-block-title">
                                                Laptops
                                            </h3>
                                        </ALink>
                                    </div>

                                    <div className="col-6 col-md-4 col-lg-3">
                                        <ALink
                                            href="/shop/market?category=tablets"
                                            className="cat-block"
                                            scroll={false}
                                        >
                                            <figure>
                                                <span>
                                                    <img
                                                        src="images/market/cats/4.jpg"
                                                        alt="Category"
                                                    />
                                                </span>
                                            </figure>

                                            <h3 className="cat-block-title">
                                                iPads & Tablets
                                            </h3>
                                        </ALink>
                                    </div>

                                    <div className="col-6 col-md-4 col-lg-3">
                                        <ALink
                                            href="/shop/market?category=storage"
                                            className="cat-block"
                                            scroll={false}
                                        >
                                            <figure>
                                                <span>
                                                    <img
                                                        src="images/market/cats/5.jpg"
                                                        alt="Category"
                                                    />
                                                </span>
                                            </figure>

                                            <h3 className="cat-block-title">
                                                Hard Drives & Storage
                                            </h3>
                                        </ALink>
                                    </div>

                                    <div className="col-6 col-md-4 col-lg-3">
                                        <ALink
                                            href="/shop/market?category=printers"
                                            className="cat-block"
                                            scroll={false}
                                        >
                                            <figure>
                                                <span>
                                                    <img
                                                        src="images/market/cats/6.jpg"
                                                        alt="Category"
                                                    />
                                                </span>
                                            </figure>

                                            <h3 className="cat-block-title">
                                                Printers & Supplies
                                            </h3>
                                        </ALink>
                                    </div>

                                    <div className="col-6 col-md-4 col-lg-3">
                                        <ALink
                                            href="/shop/market?category=accessories"
                                            className="cat-block"
                                            scroll={false}
                                        >
                                            <figure>
                                                <span>
                                                    <img
                                                        src="images/market/cats/7.jpg"
                                                        alt="Category"
                                                    />
                                                </span>
                                            </figure>

                                            <h3 className="cat-block-title">
                                                Computer Accessories
                                            </h3>
                                        </ALink>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-2"></div>

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
                                                className="form-control bg-white"
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
                                </div>
                            </div>

                            <ShopListTwo
                                products={products}
                                loading={loading}
                            />

                            {totalCount > perPage ? (
                                <Pagination
                                    perPage={perPage}
                                    total={totalCount}
                                />
                            ) : (
                                ''
                            )}
                        </div>

                        <aside className="col-lg-3 col-xl-5col order-lg-first">
                            <StickyBox
                                className="sticky-market-sidebar"
                                offsetTop={70}
                            >
                                <ShopSidebarThree toggle={toggle} />
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

export default ShopMarket;
