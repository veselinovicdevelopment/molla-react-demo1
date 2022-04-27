import { useRouter } from 'next/router';
import { MouseEvent } from 'react';

import ALink from '~/components/features/alink';

const MainMenu = () => {
    const router = useRouter();
    const path = router.asPath;
    const query = router.query;

    const showAllDemos = (e: MouseEvent<HTMLAnchorElement>) => {
        const demoItems = document.querySelectorAll('.demo-item.hidden');

        for (let i = 0; i < demoItems.length; i++) {
            demoItems[i].classList.toggle('show');
        }

        document
            .querySelector('.view-all-demos')
            .classList.toggle('disabled-hidden');
        e.preventDefault();
    };

    return (
        <nav className="main-nav">
            <ul className="menu sf-arrows">
                <li
                    className={`megamenu-container ${
                        path === '/' ? 'active' : ''
                    }`}
                    id="menu-home"
                >
                    <ALink href="/" className="sf-with-ul">
                        Home
                    </ALink>

                    <div className="megamenu demo">
                        <div className="menu-col">
                            <div className="menu-title">Choose your demo</div>

                            <div className="demo-list">
                                <div className="demo-item">
                                    <a href={`${process.env.APP_URL}demo-1`}>
                                        <span
                                            className="demo-bg"
                                            style={{
                                                backgroundImage:
                                                    "url( 'images/menu/demos/1.jpg' )",
                                            }}
                                        ></span>
                                        <span className="demo-title">
                                            01 - furniture store
                                        </span>
                                    </a>
                                </div>

                                <div className="demo-item">
                                    <a href={`${process.env.APP_URL}demo-2`}>
                                        <span
                                            className="demo-bg"
                                            style={{
                                                backgroundImage:
                                                    "url( 'images/menu/demos/2.jpg' )",
                                            }}
                                        ></span>
                                        <span className="demo-title">
                                            02 - furniture store
                                        </span>
                                    </a>
                                </div>

                                <div className="demo-item">
                                    <a href={`${process.env.APP_URL}demo-3`}>
                                        <span
                                            className="demo-bg"
                                            style={{
                                                backgroundImage:
                                                    "url( 'images/menu/demos/3.jpg' )",
                                            }}
                                        ></span>
                                        <span className="demo-title">
                                            03 - electronic store
                                        </span>
                                    </a>
                                </div>

                                <div className="demo-item">
                                    <a href={`${process.env.APP_URL}demo-4`}>
                                        <span
                                            className="demo-bg"
                                            style={{
                                                backgroundImage:
                                                    "url( 'images/menu/demos/4.jpg' )",
                                            }}
                                        ></span>
                                        <span className="demo-title">
                                            04 - electronic store
                                        </span>
                                    </a>
                                </div>

                                <div className="demo-item">
                                    <a href={`${process.env.APP_URL}demo-5`}>
                                        <span
                                            className="demo-bg"
                                            style={{
                                                backgroundImage:
                                                    "url( 'images/menu/demos/5.jpg' )",
                                            }}
                                        ></span>
                                        <span className="demo-title">
                                            05 - fashion store
                                        </span>
                                    </a>
                                </div>

                                <div className="demo-item">
                                    <a href={`${process.env.APP_URL}demo-6`}>
                                        <span
                                            className="demo-bg"
                                            style={{
                                                backgroundImage:
                                                    "url( 'images/menu/demos/6.jpg' )",
                                            }}
                                        ></span>
                                        <span className="demo-title">
                                            06 - fashion store
                                        </span>
                                    </a>
                                </div>

                                <div className="demo-item">
                                    <a href={`${process.env.APP_URL}demo-7`}>
                                        <span
                                            className="demo-bg"
                                            style={{
                                                backgroundImage:
                                                    "url( 'images/menu/demos/7.jpg' )",
                                            }}
                                        ></span>
                                        <span className="demo-title">
                                            07 - fashion store
                                        </span>
                                    </a>
                                </div>

                                <div className="demo-item">
                                    <a href={`${process.env.APP_URL}demo-8`}>
                                        <span
                                            className="demo-bg"
                                            style={{
                                                backgroundImage:
                                                    "url( 'images/menu/demos/8.jpg' )",
                                            }}
                                        ></span>
                                        <span className="demo-title">
                                            08 - fashion store
                                        </span>
                                    </a>
                                </div>

                                <div className="demo-item">
                                    <a href={`${process.env.APP_URL}demo-9`}>
                                        <span
                                            className="demo-bg"
                                            style={{
                                                backgroundImage:
                                                    "url( 'images/menu/demos/9.jpg' )",
                                            }}
                                        ></span>
                                        <span className="demo-title">
                                            09 - fashion store
                                        </span>
                                    </a>
                                </div>

                                <div className="demo-item">
                                    <a href={`${process.env.APP_URL}demo-10`}>
                                        <span
                                            className="demo-bg"
                                            style={{
                                                backgroundImage:
                                                    "url( 'images/menu/demos/10.jpg' )",
                                            }}
                                        ></span>
                                        <span className="demo-title">
                                            10 - shoes store
                                        </span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={`${process.env.APP_URL}demo-11`}>
                                        <span
                                            className="demo-bg"
                                            style={{
                                                backgroundImage:
                                                    "url( 'images/menu/demos/11.jpg' )",
                                            }}
                                        ></span>
                                        <span className="demo-title">
                                            11 - furniture simple store
                                        </span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={`${process.env.APP_URL}demo-12`}>
                                        <span
                                            className="demo-bg"
                                            style={{
                                                backgroundImage:
                                                    "url( 'images/menu/demos/12.jpg' )",
                                            }}
                                        ></span>
                                        <span className="demo-title">
                                            12 - fashion simple store
                                        </span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={`${process.env.APP_URL}demo-13`}>
                                        <span
                                            className="demo-bg"
                                            style={{
                                                backgroundImage:
                                                    "url( 'images/menu/demos/13.jpg' )",
                                            }}
                                        ></span>
                                        <span className="demo-title">
                                            13 - market
                                        </span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={`${process.env.APP_URL}demo-14`}>
                                        <span
                                            className="demo-bg"
                                            style={{
                                                backgroundImage:
                                                    "url( 'images/menu/demos/14.jpg' )",
                                            }}
                                        ></span>
                                        <span className="demo-title">
                                            14 - market fullwidth
                                        </span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={`${process.env.APP_URL}demo-15`}>
                                        <span
                                            className="demo-bg"
                                            style={{
                                                backgroundImage:
                                                    "url( 'images/menu/demos/15.jpg' )",
                                            }}
                                        ></span>
                                        <span className="demo-title">
                                            15 - lookbook 1
                                        </span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={`${process.env.APP_URL}demo-16`}>
                                        <span
                                            className="demo-bg"
                                            style={{
                                                backgroundImage:
                                                    "url( 'images/menu/demos/16.jpg' )",
                                            }}
                                        ></span>
                                        <span className="demo-title">
                                            16 - lookbook 2
                                        </span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={`${process.env.APP_URL}demo-17`}>
                                        <span
                                            className="demo-bg"
                                            style={{
                                                backgroundImage:
                                                    "url( 'images/menu/demos/17.jpg' )",
                                            }}
                                        ></span>
                                        <span className="demo-title">
                                            17 - fashion store
                                        </span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={`${process.env.APP_URL}demo-18`}>
                                        <span
                                            className="demo-bg"
                                            style={{
                                                backgroundImage:
                                                    "url( 'images/menu/demos/18.jpg' )",
                                            }}
                                        ></span>
                                        <span className="demo-title">
                                            18 - fashion store (with sidebar)
                                        </span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={`${process.env.APP_URL}demo-19`}>
                                        <span
                                            className="demo-bg"
                                            style={{
                                                backgroundImage:
                                                    "url( 'images/menu/demos/19.jpg' )",
                                            }}
                                        ></span>
                                        <span className="demo-title">
                                            19 - games store
                                        </span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={`${process.env.APP_URL}demo-20`}>
                                        <span
                                            className="demo-bg"
                                            style={{
                                                backgroundImage:
                                                    "url( 'images/menu/demos/20.jpg' )",
                                            }}
                                        ></span>
                                        <span className="demo-title">
                                            20 - book store
                                        </span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={`${process.env.APP_URL}demo-21`}>
                                        <span
                                            className="demo-bg"
                                            style={{
                                                backgroundImage:
                                                    "url( 'images/menu/demos/21.jpg' )",
                                            }}
                                        ></span>
                                        <span className="demo-title">
                                            21 - sport store
                                        </span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={`${process.env.APP_URL}demo-22`}>
                                        <span
                                            className="demo-bg"
                                            style={{
                                                backgroundImage:
                                                    "url( 'images/menu/demos/22.jpg' )",
                                            }}
                                        ></span>
                                        <span className="demo-title">
                                            22 - tools store
                                        </span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={`${process.env.APP_URL}demo-23`}>
                                        <span
                                            className="demo-bg"
                                            style={{
                                                backgroundImage:
                                                    "url( 'images/menu/demos/23.jpg' )",
                                            }}
                                        ></span>
                                        <span className="demo-title">
                                            23 - fashion left navigation store
                                        </span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={`${process.env.APP_URL}demo-24`}>
                                        <span
                                            className="demo-bg"
                                            style={{
                                                backgroundImage:
                                                    "url( 'images/menu/demos/24.jpg' )",
                                            }}
                                        ></span>
                                        <span className="demo-title">
                                            24 - extreme sport store
                                        </span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={`${process.env.APP_URL}demo-25`}>
                                        <span
                                            className="demo-bg"
                                            style={{
                                                backgroundImage:
                                                    "url( 'images/menu/demos/25.jpg' )",
                                            }}
                                        ></span>
                                        <span className="demo-title">
                                            25 - jewelry store
                                        </span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={`${process.env.APP_URL}demo-26`}>
                                        <span
                                            className="demo-bg"
                                            style={{
                                                backgroundImage:
                                                    "url( 'images/menu/demos/26.jpg' )",
                                            }}
                                        ></span>
                                        <span className="demo-title">
                                            26 - market store
                                        </span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={`${process.env.APP_URL}demo-27`}>
                                        <span
                                            className="demo-bg"
                                            style={{
                                                backgroundImage:
                                                    "url( 'images/menu/demos/27.jpg' )",
                                            }}
                                        ></span>
                                        <span className="demo-title">
                                            27 - fashion store
                                        </span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={`${process.env.APP_URL}demo-28`}>
                                        <span
                                            className="demo-bg"
                                            style={{
                                                backgroundImage:
                                                    "url( 'images/menu/demos/28.jpg' )",
                                            }}
                                        ></span>
                                        <span className="demo-title">
                                            28 - food market store
                                        </span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={`${process.env.APP_URL}demo-29`}>
                                        <span
                                            className="demo-bg"
                                            style={{
                                                backgroundImage:
                                                    "url( 'images/menu/demos/29.jpg' )",
                                            }}
                                        ></span>
                                        <span className="demo-title">
                                            29 - t-shirts store
                                        </span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={`${process.env.APP_URL}demo-30`}>
                                        <span
                                            className="demo-bg"
                                            style={{
                                                backgroundImage:
                                                    "url( 'images/menu/demos/30.jpg' )",
                                            }}
                                        ></span>
                                        <span className="demo-title">
                                            30 - headphones store
                                        </span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={`${process.env.APP_URL}demo-31`}>
                                        <span
                                            className="demo-bg"
                                            style={{
                                                backgroundImage:
                                                    "url( 'images/menu/demos/31.jpg' )",
                                            }}
                                        ></span>
                                        <span className="demo-title">
                                            31 - yoga store
                                        </span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={`${process.env.APP_URL}demo-32`}>
                                        <span
                                            className="demo-bg"
                                            style={{
                                                backgroundImage:
                                                    "url( 'images/menu/demos/32.jpg' )",
                                            }}
                                        ></span>
                                        <span className="demo-title">
                                            32 - sunglasses store
                                        </span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={`${process.env.APP_URL}demo-33`}>
                                        <span
                                            className="demo-bg"
                                            style={{
                                                backgroundImage:
                                                    "url( 'images/menu/demos/33.jpg' )",
                                            }}
                                        ></span>
                                        <span className="demo-title">
                                            33 - cosmetics store
                                        </span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={`${process.env.APP_URL}demo-34`}>
                                        <span
                                            className="demo-bg"
                                            style={{
                                                backgroundImage:
                                                    "url( 'images/menu/demos/34.jpg' )",
                                            }}
                                        ></span>
                                        <span className="demo-title">
                                            34 - car parts
                                        </span>
                                    </a>
                                </div>
                            </div>

                            <div className="megamenu-action text-center">
                                <a
                                    href="#"
                                    className="btn btn-outline-primary-2 view-all-demos"
                                    onClick={showAllDemos}
                                >
                                    <span>View All Demos</span>
                                    <i className="icon-long-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className={path.indexOf('/shop') > -1 ? 'active' : ''}>
                    <ALink
                        href="/shop/sidebar/list"
                        className="sf-with-ul"
                        scroll={false}
                    >
                        Shop
                    </ALink>

                    <div className="megamenu megamenu-md">
                        <div className="row no-gutters">
                            <div className="col-md-8">
                                <div className="menu-col">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="menu-title">
                                                Shop with sidebar
                                            </div>
                                            <ul>
                                                <li
                                                    className={
                                                        path.indexOf(
                                                            'shop/sidebar'
                                                        ) > -1 &&
                                                        query.type == 'list'
                                                            ? 'active'
                                                            : ''
                                                    }
                                                >
                                                    <ALink
                                                        href="/shop/sidebar/list"
                                                        scroll={false}
                                                    >
                                                        Shop List
                                                    </ALink>
                                                </li>
                                                <li
                                                    className={
                                                        path.indexOf(
                                                            'shop/sidebar'
                                                        ) > -1 &&
                                                        query.type == '2cols'
                                                            ? 'active'
                                                            : ''
                                                    }
                                                >
                                                    <ALink
                                                        href="/shop/sidebar/2cols"
                                                        scroll={false}
                                                    >
                                                        Shop Grid 2 Columns
                                                    </ALink>
                                                </li>
                                                <li
                                                    className={
                                                        path.indexOf(
                                                            'shop/sidebar'
                                                        ) > -1 &&
                                                        query.type == '3cols'
                                                            ? 'active'
                                                            : ''
                                                    }
                                                >
                                                    <ALink
                                                        href="/shop/sidebar/3cols"
                                                        scroll={false}
                                                    >
                                                        Shop Grid 3 Columns
                                                    </ALink>
                                                </li>
                                                <li
                                                    className={
                                                        path.indexOf(
                                                            'shop/sidebar'
                                                        ) > -1 &&
                                                        query.type == '4cols'
                                                            ? 'active'
                                                            : ''
                                                    }
                                                >
                                                    <ALink
                                                        href="/shop/sidebar/4cols"
                                                        scroll={false}
                                                    >
                                                        Shop Grid 4 Columns
                                                    </ALink>
                                                </li>
                                                <li
                                                    className={
                                                        path.indexOf(
                                                            'shop/market'
                                                        ) > -1
                                                            ? 'active'
                                                            : ''
                                                    }
                                                >
                                                    <ALink href="/shop/market">
                                                        <span>
                                                            Shop Market
                                                            <span className="tip tip-new">
                                                                New
                                                            </span>
                                                        </span>
                                                    </ALink>
                                                </li>
                                            </ul>

                                            <div className="menu-title">
                                                Shop no sidebar
                                            </div>
                                            <ul>
                                                <li
                                                    className={
                                                        path.indexOf(
                                                            'shop/nosidebar'
                                                        ) > -1 &&
                                                        query.type == 'boxed'
                                                            ? 'active'
                                                            : ''
                                                    }
                                                >
                                                    <ALink
                                                        href="/shop/nosidebar/boxed"
                                                        scroll={false}
                                                    >
                                                        <span>
                                                            Shop Boxed No
                                                            Sidebar
                                                            <span className="tip tip-hot">
                                                                Hot
                                                            </span>
                                                        </span>
                                                    </ALink>
                                                </li>
                                                <li
                                                    className={
                                                        path.indexOf(
                                                            'shop/nosidebar'
                                                        ) > -1 &&
                                                        query.type ==
                                                            'fullwidth'
                                                            ? 'active'
                                                            : ''
                                                    }
                                                >
                                                    <ALink
                                                        href="/shop/nosidebar/fullwidth"
                                                        scroll={false}
                                                    >
                                                        Shop Fullwidth No
                                                        Sidebar
                                                    </ALink>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="menu-title">
                                                Product Category
                                            </div>
                                            <ul>
                                                <li
                                                    className={
                                                        path.indexOf(
                                                            'shop/category/boxed'
                                                        ) > -1
                                                            ? 'active'
                                                            : ''
                                                    }
                                                >
                                                    <ALink
                                                        href="/shop/category/boxed"
                                                        scroll={false}
                                                    >
                                                        Product Category Boxed
                                                    </ALink>
                                                </li>
                                                <li
                                                    className={
                                                        path.indexOf(
                                                            'shop/category/fullwidth'
                                                        ) > -1
                                                            ? 'active'
                                                            : ''
                                                    }
                                                >
                                                    <ALink
                                                        href="/shop/category/fullwidth"
                                                        scroll={false}
                                                    >
                                                        <span>
                                                            Product Category
                                                            Fullwidth
                                                            <span className="tip tip-new">
                                                                New
                                                            </span>
                                                        </span>
                                                    </ALink>
                                                </li>
                                            </ul>
                                            <div className="menu-title">
                                                Shop Pages
                                            </div>
                                            <ul>
                                                <li
                                                    className={
                                                        path.indexOf(
                                                            'shop/cart'
                                                        ) > -1
                                                            ? 'active'
                                                            : ''
                                                    }
                                                >
                                                    <ALink href="/shop/cart">
                                                        Cart
                                                    </ALink>
                                                </li>
                                                <li
                                                    className={
                                                        path.indexOf(
                                                            'shop/checkout'
                                                        ) > -1
                                                            ? 'active'
                                                            : ''
                                                    }
                                                >
                                                    <ALink href="/shop/checkout">
                                                        Checkout
                                                    </ALink>
                                                </li>
                                                <li
                                                    className={
                                                        path.indexOf(
                                                            'shop/wishlist'
                                                        ) > -1
                                                            ? 'active'
                                                            : ''
                                                    }
                                                >
                                                    <ALink href="/shop/wishlist">
                                                        Wishlist
                                                    </ALink>
                                                </li>
                                                <li
                                                    className={
                                                        path.indexOf(
                                                            'shop/dashboard'
                                                        ) > -1
                                                            ? 'active'
                                                            : ''
                                                    }
                                                >
                                                    <ALink href="/shop/dashboard">
                                                        My Account
                                                    </ALink>
                                                </li>
                                                <li
                                                    className={
                                                        path.indexOf(
                                                            '#Lookbook'
                                                        ) > -1
                                                            ? 'active'
                                                            : ''
                                                    }
                                                >
                                                    <ALink href="#">
                                                        Lookbook
                                                    </ALink>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="banner banner-overlay">
                                    <ALink
                                        href="/shop/sidebar/list"
                                        className="banner banner-menu"
                                    >
                                        <img
                                            src="images/menu/banner-1.jpg"
                                            alt="Banner"
                                        />

                                        <div className="banner-content banner-content-top">
                                            <div className="banner-title text-white">
                                                Last <br />
                                                Chance
                                                <br />
                                                <span>
                                                    <strong>Sale</strong>
                                                </span>
                                            </div>
                                        </div>
                                    </ALink>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className={path.indexOf('product/') > -1 ? 'active' : ''}>
                    <ALink
                        href="/product/default/dark-yellow-lace-cut-out-swing-dress"
                        className="sf-with-ul"
                    >
                        Product
                    </ALink>

                    <div className="megamenu megamenu-sm">
                        <div className="row no-gutters">
                            <div className="col-md-6">
                                <div className="menu-col">
                                    <div className="menu-title">
                                        Product Details
                                    </div>
                                    <ul>
                                        <li
                                            className={
                                                path.indexOf(
                                                    'product/default'
                                                ) > -1
                                                    ? 'active'
                                                    : ''
                                            }
                                        >
                                            <ALink href="/product/default/dark-yellow-lace-cut-out-swing-dress">
                                                Default
                                            </ALink>
                                        </li>
                                        <li
                                            className={
                                                path.indexOf(
                                                    'product/centered'
                                                ) > -1
                                                    ? 'active'
                                                    : ''
                                            }
                                        >
                                            <ALink href="/product/centered/beige-ring-handle-circle-cross-body-bag">
                                                Centered
                                            </ALink>
                                        </li>
                                        <li
                                            className={
                                                path.indexOf(
                                                    'product/extended'
                                                ) > -1
                                                    ? 'active'
                                                    : ''
                                            }
                                        >
                                            <ALink href="/product/extended/yellow-tie-strap-block-heel-sandals">
                                                <span>
                                                    Extended Info
                                                    <span className="tip tip-new">
                                                        New
                                                    </span>
                                                </span>
                                            </ALink>
                                        </li>
                                        <li
                                            className={
                                                path.indexOf(
                                                    'product/gallery'
                                                ) > -1
                                                    ? 'active'
                                                    : ''
                                            }
                                        >
                                            <ALink href="/product/gallery/beige-metal-hoop-tote-bag">
                                                Gallery
                                            </ALink>
                                        </li>
                                        <li
                                            className={
                                                path.indexOf('product/sticky') >
                                                -1
                                                    ? 'active'
                                                    : ''
                                            }
                                        >
                                            <ALink href="/product/sticky/brown-faux-fur-longline-coat">
                                                Sticky Info
                                            </ALink>
                                        </li>
                                        <li
                                            className={
                                                path.indexOf(
                                                    'product/sidebar'
                                                ) > -1
                                                    ? 'active'
                                                    : ''
                                            }
                                        >
                                            <ALink href="/product/sidebar/beige-v-neck-button-cardigan">
                                                Boxed With Sidebar
                                            </ALink>
                                        </li>
                                        <li
                                            className={
                                                path.indexOf(
                                                    'product/fullwidth'
                                                ) > -1
                                                    ? 'active'
                                                    : ''
                                            }
                                        >
                                            <ALink href="/product/fullwidth/black-faux-leather-chain-trim-sandals">
                                                Full Width
                                            </ALink>
                                        </li>
                                        <li
                                            className={
                                                path.indexOf(
                                                    'product/masonry'
                                                ) > -1
                                                    ? 'active'
                                                    : ''
                                            }
                                        >
                                            <ALink href="/product/masonry/black-denim-dungaree-dress">
                                                Masonry Sticky Info
                                            </ALink>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="banner banner-overlay">
                                    <ALink href="/product/centered/dark-yellow-lace-cut-out-swing-dress">
                                        <img
                                            src="images/menu/banner-2.jpg"
                                            alt="Banner"
                                        />

                                        <div className="banner-content banner-content-bottom">
                                            <div className="banner-title text-white">
                                                New Trends
                                                <br />
                                                <span>
                                                    <strong>
                                                        spring{' '}
                                                        {new Date().getFullYear()}
                                                    </strong>
                                                </span>
                                            </div>
                                        </div>
                                    </ALink>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className={path.indexOf('pages') > -1 ? 'active' : ''}>
                    <ALink href="#" className="sf-with-ul">
                        Pages
                    </ALink>

                    <ul>
                        <li
                            className={
                                path.indexOf('pages/about') > -1 ? 'active' : ''
                            }
                        >
                            <ALink href="/pages/about" className="sf-with-ul">
                                About
                            </ALink>

                            <ul>
                                <li
                                    className={
                                        path.indexOf('pages/about') > -1 &&
                                        path.indexOf('pages/about-2') === -1
                                            ? 'active'
                                            : ''
                                    }
                                >
                                    <ALink href="/pages/about">About 01</ALink>
                                </li>
                                <li
                                    className={
                                        path.indexOf('pages/about-2') > -1
                                            ? 'active'
                                            : ''
                                    }
                                >
                                    <ALink href="/pages/about-2">
                                        About 02
                                    </ALink>
                                </li>
                            </ul>
                        </li>
                        <li
                            className={
                                path.indexOf('pages/contact') > -1
                                    ? 'active'
                                    : ''
                            }
                        >
                            <ALink href="/pages/contact" className="sf-with-ul">
                                Contact
                            </ALink>

                            <ul>
                                <li
                                    className={
                                        path.indexOf('pages/contact') > -1 &&
                                        path.indexOf('pages/contact-2') === -1
                                            ? 'active'
                                            : ''
                                    }
                                >
                                    <ALink href="/pages/contact">
                                        Contact 01
                                    </ALink>
                                </li>
                                <li
                                    className={
                                        path.indexOf('pages/contact-2') > -1
                                            ? 'active'
                                            : ''
                                    }
                                >
                                    <ALink href="/pages/contact-2">
                                        Contact 02
                                    </ALink>
                                </li>
                            </ul>
                        </li>
                        <li
                            className={
                                path.indexOf('pages/login') > -1 ? 'active' : ''
                            }
                        >
                            <ALink href="/pages/login">Login</ALink>
                        </li>
                        <li
                            className={
                                path.indexOf('pages/faq') > -1 ? 'active' : ''
                            }
                        >
                            <ALink href="/pages/faq">FAQs</ALink>
                        </li>
                        <li
                            className={path.indexOf('404') > -1 ? 'active' : ''}
                        >
                            <ALink href="/404">Error 404</ALink>
                        </li>
                        <li
                            className={
                                path.indexOf('pages/coming-soon') > -1
                                    ? 'active'
                                    : ''
                            }
                        >
                            <ALink href="/pages/coming-soon">Coming Soon</ALink>
                        </li>
                    </ul>
                </li>
                <li className={path.indexOf('blog/') > -1 ? 'active' : ''}>
                    <ALink href="/blog/classic" className="sf-with-ul">
                        Blog
                    </ALink>

                    <ul>
                        <li
                            className={
                                path.indexOf('blog/classic') > -1
                                    ? 'active'
                                    : ''
                            }
                        >
                            <ALink href="/blog/classic">Classic</ALink>
                        </li>
                        <li
                            className={
                                path.indexOf('blog/listing') > -1
                                    ? 'active'
                                    : ''
                            }
                        >
                            <ALink href="/blog/listing">Listing</ALink>
                        </li>
                        <li
                            className={
                                path.indexOf('blog/grid') > -1 ? 'active' : ''
                            }
                        >
                            <ALink
                                href="/blog/grid/2cols"
                                className="sf-with-ul"
                            >
                                Grid
                            </ALink>
                            <ul>
                                <li
                                    className={
                                        path.indexOf('blog/grid/2cols') > -1
                                            ? 'active'
                                            : ''
                                    }
                                >
                                    <ALink href="/blog/grid/2cols">
                                        Grid 2 columns
                                    </ALink>
                                </li>
                                <li
                                    className={
                                        path.indexOf('blog/grid/3cols') > -1
                                            ? 'active'
                                            : ''
                                    }
                                >
                                    <ALink href="/blog/grid/3cols">
                                        Grid 3 columns
                                    </ALink>
                                </li>
                                <li
                                    className={
                                        path.indexOf('blog/grid/4cols') > -1
                                            ? 'active'
                                            : ''
                                    }
                                >
                                    <ALink href="/blog/grid/4cols">
                                        Grid 4 columns
                                    </ALink>
                                </li>
                                <li
                                    className={
                                        path.indexOf('blog/grid/sidebar') > -1
                                            ? 'active'
                                            : ''
                                    }
                                >
                                    <ALink href="/blog/grid/sidebar">
                                        Grid sidebar
                                    </ALink>
                                </li>
                            </ul>
                        </li>
                        <li
                            className={
                                path.indexOf('blog/masonry') > -1
                                    ? 'active'
                                    : ''
                            }
                        >
                            <ALink
                                href="/blog/masonry/2cols"
                                className="sf-with-ul"
                            >
                                Masonry
                            </ALink>
                            <ul>
                                <li
                                    className={
                                        path.indexOf('blog/masonry/2cols') > -1
                                            ? 'active'
                                            : ''
                                    }
                                >
                                    <ALink href="/blog/masonry/2cols">
                                        Masonry 2 columns
                                    </ALink>
                                </li>
                                <li
                                    className={
                                        path.indexOf('blog/masonry/3cols') > -1
                                            ? 'active'
                                            : ''
                                    }
                                >
                                    <ALink href="/blog/masonry/3cols">
                                        Masonry 3 columns
                                    </ALink>
                                </li>
                                <li
                                    className={
                                        path.indexOf('blog/masonry/4cols') > -1
                                            ? 'active'
                                            : ''
                                    }
                                >
                                    <ALink href="/blog/masonry/4cols">
                                        Masonry 4 columns
                                    </ALink>
                                </li>
                                <li
                                    className={
                                        path.indexOf('blog/masonry/sidebar') >
                                        -1
                                            ? 'active'
                                            : ''
                                    }
                                >
                                    <ALink href="/blog/masonry/sidebar">
                                        Masonry sidebar
                                    </ALink>
                                </li>
                            </ul>
                        </li>
                        <li
                            className={
                                path.indexOf('blog/mask') > -1 ? 'active' : ''
                            }
                        >
                            <ALink
                                href="/blog/mask/grid"
                                className="sf-with-ul"
                            >
                                Mask
                            </ALink>
                            <ul>
                                <li
                                    className={
                                        path.indexOf('blog/mask/grid') > -1
                                            ? 'active'
                                            : ''
                                    }
                                >
                                    <ALink href="/blog/mask/grid">
                                        Blog Mask Grid
                                    </ALink>
                                </li>
                                <li
                                    className={
                                        path.indexOf('blog/mask/masonry') > -1
                                            ? 'active'
                                            : ''
                                    }
                                >
                                    <ALink href="/blog/mask/masonry">
                                        Blog Mask Masonry
                                    </ALink>
                                </li>
                            </ul>
                        </li>
                        <li
                            className={
                                path.indexOf('blog/single') > -1 ? 'active' : ''
                            }
                        >
                            <ALink
                                href="/blog/single/default/cras-ornare-tristique-elit."
                                className="sf-with-ul"
                            >
                                Single Post
                            </ALink>
                            <ul>
                                <li
                                    className={
                                        path.indexOf('blog/single/default') > -1
                                            ? 'active'
                                            : ''
                                    }
                                >
                                    <ALink href="/blog/single/default/cras-ornare-tristique-elit.">
                                        Default with sidebar
                                    </ALink>
                                </li>
                                <li
                                    className={
                                        path.indexOf('blog/single/fullwidth') >
                                        -1
                                            ? 'active'
                                            : ''
                                    }
                                >
                                    <ALink href="/blog/single/fullwidth/fusce-pellentesque-suscipit.">
                                        Fullwidth no sidebar
                                    </ALink>
                                </li>
                                <li
                                    className={
                                        path.indexOf('blog/single/sidebar') > -1
                                            ? 'active'
                                            : ''
                                    }
                                >
                                    <ALink href="/blog/single/sidebar/utaliquam-sollicitzdvudin-leo">
                                        Fullwidth with sidebar
                                    </ALink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className={path.indexOf('element') > -1 ? 'active' : ''}>
                    <ALink href="/elements" className="sf-with-ul">
                        Elements
                    </ALink>

                    <ul>
                        <li
                            className={
                                path.indexOf('elements/products') > -1
                                    ? 'active'
                                    : ''
                            }
                        >
                            <ALink href="/elements/products">Products</ALink>
                        </li>
                        <li
                            className={
                                path.indexOf('elements/typography') > -1
                                    ? 'active'
                                    : ''
                            }
                        >
                            <ALink href="/elements/typography">
                                Typography
                            </ALink>
                        </li>
                        <li
                            className={
                                path.indexOf('elements/titles') > -1
                                    ? 'active'
                                    : ''
                            }
                        >
                            <ALink href="/elements/titles">Titles</ALink>
                        </li>
                        <li
                            className={
                                path.indexOf('elements/banners') > -1
                                    ? 'active'
                                    : ''
                            }
                        >
                            <ALink href="/elements/banners">Banners</ALink>
                        </li>
                        <li
                            className={
                                path.indexOf('elements/categories') > -1
                                    ? 'active'
                                    : ''
                            }
                        >
                            <ALink href="/elements/categories">
                                Product Category
                            </ALink>
                        </li>
                        <li
                            className={
                                path.indexOf('elements/video-banners') > -1
                                    ? 'active'
                                    : ''
                            }
                        >
                            <ALink href="/elements/video-banners">
                                Video Banners
                            </ALink>
                        </li>
                        <li
                            className={
                                path.indexOf('elements/buttons') > -1
                                    ? 'active'
                                    : ''
                            }
                        >
                            <ALink href="/elements/buttons">Buttons</ALink>
                        </li>
                        <li
                            className={
                                path.indexOf('elements/accordions') > -1
                                    ? 'active'
                                    : ''
                            }
                        >
                            <ALink href="/elements/accordions">
                                Accordions
                            </ALink>
                        </li>
                        <li
                            className={
                                path.indexOf('elements/tabs') > -1
                                    ? 'active'
                                    : ''
                            }
                        >
                            <ALink href="/elements/tabs">Tabs</ALink>
                        </li>
                        <li
                            className={
                                path.indexOf('elements/testimonials') > -1
                                    ? 'active'
                                    : ''
                            }
                        >
                            <ALink href="/elements/testimonials">
                                Testimonials
                            </ALink>
                        </li>
                        <li
                            className={
                                path.indexOf('elements/blog-posts') > -1
                                    ? 'active'
                                    : ''
                            }
                        >
                            <ALink href="/elements/blog-posts">
                                Blog Posts
                            </ALink>
                        </li>
                        <li
                            className={
                                path.indexOf('elements/cta') > -1
                                    ? 'active'
                                    : ''
                            }
                        >
                            <ALink href="/elements/cta">Call to Action</ALink>
                        </li>
                        <li
                            className={
                                path.indexOf('elements/icon-boxes') > -1
                                    ? 'active'
                                    : ''
                            }
                        >
                            <ALink href="/elements/icon-boxes">
                                Icon Boxes
                            </ALink>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default MainMenu;
