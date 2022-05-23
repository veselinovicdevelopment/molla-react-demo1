import { useRouter } from 'next/router';
import React, {
    useState,
    useEffect,
    FormEvent,
    ChangeEvent,
    ReactNode,
} from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import useCollapse from 'react-collapsed';

import ALink from '~/components/features/Alink';

const MobileMenu = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        router.events.on('routeChangeComplete', hideMobileMenu);
    }, []);

    const hideMobileMenu = () => {
        document.querySelector('body')!.classList.remove('mmenu-active');
    };

    const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm((e.target as HTMLInputElement).value);
    };

    const onSubmitSearchForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push({
            pathname: '/shop/sidebar/list',
            query: {
                searchTerm: searchTerm,
                category: '',
            },
        });
    };

    return (
        <div className="mobile-menu-container mobile-menu-light">
            <div className="mobile-menu-wrapper">
                <span className="mobile-menu-close" onClick={hideMobileMenu}>
                    <i className="icon-close"></i>
                </span>

                <form
                    action="#"
                    method="get"
                    onSubmit={onSubmitSearchForm}
                    className="mobile-search"
                >
                    <label htmlFor="mobile-search" className="sr-only">
                        Search
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={searchTerm}
                        onChange={onSearchChange}
                        name="mobile-search"
                        id="mobile-search"
                        placeholder="Search product ..."
                        required
                    />
                    <button className="btn btn-primary" type="submit">
                        <i className="icon-search"></i>
                    </button>
                </form>

                <Tabs defaultIndex={0} selectedTabClassName="show">
                    <TabList className="nav nav-pills-mobile" role="tablist">
                        <Tab className="nav-item text-center">
                            <span className="nav-link">Menu</span>
                        </Tab>

                        <Tab className="nav-item text-center">
                            <span className="nav-link">Categories</span>
                        </Tab>
                    </TabList>

                    <div className="tab-content">
                        <TabPanel>
                            <nav className="mobile-nav">
                                <ul className="mobile-menu">
                                    <SlideToggle url="/" title="Home">
                                        <li>
                                            <a
                                                href="https://d-themes.com/react/molla/demo-1/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                01 - furniture store
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://d-themes.com/react/molla/demo-2/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                02 - furniture store
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://d-themes.com/react/molla/demo-3/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                03 - electronic store
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://d-themes.com/react/molla/demo-4/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                04 - electronic store
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://d-themes.com/react/molla/demo-5/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                05 - fashion store
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://d-themes.com/react/molla/demo-6/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                06 - fashion store
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://d-themes.com/react/molla/demo-7/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                07 - fashion store
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://d-themes.com/react/molla/demo-8/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                08 - fashion store
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://d-themes.com/react/molla/demo-9/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                09 - fashion store
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://d-themes.com/react/molla/demo-10/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                10 - shoes store
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://d-themes.com/react/molla/demo-11/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                11 - furniture simple store
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://d-themes.com/react/molla/demo-12/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                12 - fashion simple store
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://d-themes.com/react/molla/demo-13/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                13 - market
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://d-themes.com/react/molla/demo-14/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                14 - market fullwidth
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://d-themes.com/react/molla/demo-15/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                15 - lookbook 1
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://d-themes.com/react/molla/demo-16/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                16 - lookbook 2
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://d-themes.com/react/molla/demo-17/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                17 - fashion store
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://d-themes.com/react/molla/demo-18/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                18 - fashion store (with
                                                sidebar)
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://d-themes.com/react/molla/demo-19/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                19 - games store
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://d-themes.com/react/molla/demo-20/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                20 - book store
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://d-themes.com/react/molla/demo-21/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                21 - sport store
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://d-themes.com/react/molla/demo-22/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                22 - tools store
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://d-themes.com/react/molla/demo-23/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                23 - fashion left navigation
                                                store
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://d-themes.com/react/molla/demo-24/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                24 - extreme sport store
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://d-themes.com/react/molla/demo-25/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                25 - jewelry store
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://d-themes.com/react/molla/demo-26/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                26 - market store
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://d-themes.com/react/molla/demo-27/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                27 - fashion store
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://d-themes.com/react/molla/demo-28/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                28 - food market store
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://d-themes.com/react/molla/demo-29/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                29 - t-shirts store
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://d-themes.com/react/molla/demo-30/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                30 - headphones store
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://d-themes.com/react/molla/demo-31/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                31 - yoga store
                                            </a>
                                        </li>
                                    </SlideToggle>
                                    <SlideToggle
                                        url="/shop/sidebar/list"
                                        title="Shop"
                                    >
                                        <li>
                                            <ALink href="/shop/sidebar/list">
                                                Shop List
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="/shop/sidebar/2cols">
                                                Shop Grid 2 Columns
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="/shop/sidebar/3cols">
                                                Shop Grid 3 Columns
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="/shop/sidebar/4cols">
                                                Shop Grid 4 Columns
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="/shop/market">
                                                <span>
                                                    Shop Market
                                                    <span className="tip tip-new">
                                                        New
                                                    </span>
                                                </span>
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="/shop/nosidebar/boxed">
                                                <span>
                                                    Shop Boxed No Sidebar
                                                    <span className="tip tip-hot">
                                                        Hot
                                                    </span>
                                                </span>
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="/shop/nosidebar/fullwidth">
                                                Shop Fullwidth No Sidebar
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="/shop/category/boxed">
                                                Product Category Boxed
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="/shop/category/fullwidth">
                                                <span>
                                                    Product Category Fullwidth
                                                    <span className="tip tip-new">
                                                        New
                                                    </span>
                                                </span>
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="/shop/cart">
                                                Cart
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="/shop/checkout">
                                                Checkout
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="/shop/wishlist">
                                                Wishlist
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="/shop/dashboard">
                                                My Account
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="#">Lookbook</ALink>
                                        </li>
                                    </SlideToggle>
                                    <SlideToggle
                                        url="/product/default/dark-yellow-lace-cut-out-swing-dress"
                                        title="Product"
                                    >
                                        <li>
                                            <ALink href="/product/default/dark-yellow-lace-cut-out-swing-dress">
                                                Default
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="/product/centered/beige-ring-handle-circle-cross-body-bag">
                                                Centered
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="/product/extended/yellow-tie-strap-block-heel-sandals">
                                                <span>
                                                    Extended Info
                                                    <span className="tip tip-new">
                                                        New
                                                    </span>
                                                </span>
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="/product/gallery/beige-metal-hoop-tote-bag">
                                                Gallery
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="/product/sticky/brown-faux-fur-longline-coat">
                                                Sticky Info
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="/product/sidebar/beige-v-neck-button-cardigan">
                                                Boxed With Sidebar
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="/product/fullwidth/black-faux-leather-chain-trim-sandals">
                                                Full Width
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="/product/masonry/black-denim-dungaree-dress">
                                                Masonry Sticky Info
                                            </ALink>
                                        </li>
                                    </SlideToggle>
                                    <SlideToggle url="#" title="Pages">
                                        <SlideToggle
                                            url="/pages/about"
                                            title="About"
                                        >
                                            <li>
                                                <ALink href="/pages/about">
                                                    About 01
                                                </ALink>
                                            </li>
                                            <li>
                                                <ALink href="/pages/about-2">
                                                    About 02
                                                </ALink>
                                            </li>
                                        </SlideToggle>
                                        <SlideToggle
                                            url="/pages/contact"
                                            title="Contact"
                                        >
                                            <li>
                                                <ALink href="/pages/contact">
                                                    Contact 01
                                                </ALink>
                                            </li>
                                            <li>
                                                <ALink href="/pages/contact-2">
                                                    Contact 02
                                                </ALink>
                                            </li>
                                        </SlideToggle>
                                        <li>
                                            <ALink href="/pages/login">
                                                Login
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="/pages/faq">
                                                FAQs
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="/404">Error 404</ALink>
                                        </li>
                                        <li>
                                            <ALink href="/pages/coming-soon">
                                                Coming Soon
                                            </ALink>
                                        </li>
                                    </SlideToggle>
                                    <SlideToggle
                                        url="/blog/classic"
                                        title="Blog"
                                    >
                                        <li>
                                            <ALink href="/blog/classic">
                                                Classic
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="/blog/listing">
                                                Listing
                                            </ALink>
                                        </li>
                                        <SlideToggle url="#" title="Grid">
                                            <li>
                                                <ALink href="/blog/grid/2cols">
                                                    Grid 2 columns
                                                </ALink>
                                            </li>
                                            <li>
                                                <ALink href="/blog/grid/3cols">
                                                    Grid 3 columns
                                                </ALink>
                                            </li>
                                            <li>
                                                <ALink href="/blog/grid/4cols">
                                                    Grid 4 columns
                                                </ALink>
                                            </li>
                                            <li>
                                                <ALink href="/blog/grid/sidebar">
                                                    Grid sidebar
                                                </ALink>
                                            </li>
                                        </SlideToggle>
                                        <SlideToggle title="Masonry" url="#">
                                            <li>
                                                <ALink href="/blog/masonry/2cols">
                                                    Masonry 2 columns
                                                </ALink>
                                            </li>
                                            <li>
                                                <ALink href="/blog/masonry/3cols">
                                                    Masonry 3 columns
                                                </ALink>
                                            </li>
                                            <li>
                                                <ALink href="/blog/masonry/4cols">
                                                    Masonry 4 columns
                                                </ALink>
                                            </li>
                                            <li>
                                                <ALink href="/blog/masonry/sidebar">
                                                    Masonry sidebar
                                                </ALink>
                                            </li>
                                        </SlideToggle>
                                        <SlideToggle url="#" title="Mask">
                                            <li>
                                                <ALink href="/blog/mask/grid">
                                                    Blog Mask Grid
                                                </ALink>
                                            </li>
                                            <li>
                                                <ALink href="/blog/mask/masonry">
                                                    Blog Mask Masonry
                                                </ALink>
                                            </li>
                                        </SlideToggle>
                                        <SlideToggle
                                            url="/blog/single/default/cras-ornare-tristique-elit."
                                            title="Single Post"
                                        >
                                            <li>
                                                <ALink href="/blog/single/default/cras-ornare-tristique-elit.">
                                                    Default with sidebar
                                                </ALink>
                                            </li>
                                            <li>
                                                <ALink href="/blog/single/fullwidth/fusce-pellentesque-suscipit.">
                                                    Fullwidth no sidebar
                                                </ALink>
                                            </li>
                                            <li>
                                                <ALink href="/blog/single/sidebar/utaliquam-sollicitzdvudin-leo">
                                                    Fullwidth with sidebar
                                                </ALink>
                                            </li>
                                        </SlideToggle>
                                    </SlideToggle>
                                    <SlideToggle
                                        url="/elements"
                                        title="Elements"
                                    >
                                        <li>
                                            <ALink href="/elements/products">
                                                Products
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="/elements/typography">
                                                Typography
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="/elements/titles">
                                                Titles
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="/elements/banners">
                                                Banners
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="/elements/categories">
                                                Product Category
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="/elements/video-banners">
                                                Video Banners
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="/elements/buttons">
                                                Buttons
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="/elements/accordions">
                                                Accordions
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="/elements/tabs">
                                                Tabs
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="/elements/testimonials">
                                                Testimonials
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="/elements/blog-posts">
                                                Blog Posts
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="/elements/cta">
                                                Call to Action
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="/elements/icon-boxes">
                                                Icon Boxes
                                            </ALink>
                                        </li>
                                    </SlideToggle>
                                </ul>
                            </nav>
                        </TabPanel>

                        <TabPanel>
                            <nav className="mobile-cats-nav">
                                <ul className="mobile-cats-menu">
                                    <li className="item-cats-lead">
                                        <ALink href="/shop/sidebar/3cols?category=electronics">
                                            Electronics
                                        </ALink>
                                    </li>
                                    <li className="item-cats-lead">
                                        <ALink href="/shop/sidebar/3cols?category=gift-idea">
                                            Gift Ideas
                                        </ALink>
                                    </li>
                                    <li>
                                        <ALink href="/shop/sidebar/3cols?category=beds">
                                            Beds
                                        </ALink>
                                    </li>
                                    <li>
                                        <ALink href="/shop/sidebar/3cols?category=lighting">
                                            Lighting
                                        </ALink>
                                    </li>
                                    <li>
                                        <ALink href="/shop/sidebar/3cols?category=sofas-and-sleeper-sofas">
                                            Sofas & Sleeper sofas
                                        </ALink>
                                    </li>
                                    <li>
                                        <ALink href="/shop/sidebar/3cols?category=storage">
                                            Storage
                                        </ALink>
                                    </li>
                                    <li>
                                        <ALink href="/shop/sidebar/3cols?category=armchairs-and-chaises">
                                            Armchairs & Chaises
                                        </ALink>
                                    </li>
                                    <li>
                                        <ALink href="/shop/sidebar/3cols?category=decoration">
                                            Decoration{' '}
                                        </ALink>
                                    </li>
                                    <li>
                                        <ALink href="/shop/sidebar/3cols?category=kitchen-cabinets">
                                            Kitchen Cabinets
                                        </ALink>
                                    </li>
                                    <li>
                                        <ALink href="/shop/sidebar/3cols?category=coffee-and-tables">
                                            Coffee & Tables
                                        </ALink>
                                    </li>
                                    <li>
                                        <ALink href="/shop/sidebar/3cols?category=furniture">
                                            Outdoor Furniture{' '}
                                        </ALink>
                                    </li>
                                </ul>
                            </nav>
                        </TabPanel>
                    </div>
                </Tabs>

                <div className="social-icons">
                    <ALink href="#" className="social-icon" title="Facebook">
                        <i className="icon-facebook-f"></i>
                    </ALink>
                    <ALink href="#" className="social-icon" title="Twitter">
                        <i className="icon-twitter"></i>
                    </ALink>
                    <ALink href="#" className="social-icon" title="Instagram">
                        <i className="icon-instagram"></i>
                    </ALink>
                    <ALink href="#" className="social-icon" title="Youtube">
                        <i className="icon-youtube"></i>
                    </ALink>
                </div>
            </div>
        </div>
    );
};

interface SlideToggleProps {
    title: string;
    url: string;
    children: ReactNode;
}

const SlideToggle = ({ title, url, children }: SlideToggleProps) => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    return (
        <li className={`${isExpanded ? 'expanded' : 'collapsed'}`}>
            <ALink href={url} className="sf-with-ul">
                {title}
                <span
                    className="mmenu-btn"
                    onClick={(e) => {
                        e.preventDefault();
                    }}
                >
                    <span {...getToggleProps()}></span>
                </span>
            </ALink>
            <ul {...getCollapseProps()}>{children}</ul>
        </li>
    );
};

export default React.memo(MobileMenu);
