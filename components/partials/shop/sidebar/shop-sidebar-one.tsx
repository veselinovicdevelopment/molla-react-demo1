import React, { useState, useEffect, ChangeEvent, MouseEvent } from 'react';
import { useRouter } from 'next/router';
import InputRange from 'react-input-range';
import SlideToggle from 'react-slide-toggle';
import 'react-input-range/lib/css/index.css';

import ALink from '~/components/features/alink';
import { shopData } from '~/utils/data';

interface ShopSidebarProps {
    toggle: boolean;
}

interface Price {
    min: string;
    max: string;
    name?: string;
}

const ShopSidebarOne = (props: ShopSidebarProps) => {
    const { toggle = false } = props;
    const router = useRouter();
    const query = useRouter().query;
    const [priceRange, setRange] = useState<{ min: number; max: number }>({
        min: 0,
        max: 1000,
    });

    useEffect(() => {
        if (query.minPrice && query.maxPrice) {
            setRange({
                min: parseInt(query.minPrice as string),
                max: parseInt(query.maxPrice as string),
            });
        } else {
            setRange({ min: 0, max: 1000 });
        }
    }, [query]);

    const onChangePriceRange = (value: { min: number; max: number }) => {
        setRange(value);
    };

    const containsAttrInUrl = (type: string, value: string) => {
        const currentQueries = query[type]
            ? (query[type] as string).split(',')
            : [];
        return currentQueries && currentQueries.includes(value);
    };

    const getUrlForAttrs = (type: string, value: string) => {
        let currentQueries = query[type]
            ? (query[type] as string).split(',')
            : [];
        currentQueries = containsAttrInUrl(type, value)
            ? currentQueries.filter((item) => item !== value)
            : [...currentQueries, value];

        return {
            pathname: router.pathname,
            query: {
                ...query,
                page: 1,
                [type]: currentQueries.join(','),
            },
        };
    };

    const onAttrClick = (
        e: ChangeEvent<HTMLInputElement>,
        attr: string,
        value: string
    ) => {
        if (getUrlForAttrs(attr, value)) {
            let queryObject = getUrlForAttrs(attr, value).query;
            let url =
                router.pathname.replace('[type]', query.type as string) + '?';
            for (let key in queryObject) {
                if (key !== 'type') {
                    url += key + '=' + queryObject[key] + '&';
                }
            }
            router.push(url);
        }
    };

    return (
        <>
            <aside
                className={`${
                    toggle ? 'sidebar-filter' : 'sidebar'
                } sidebar-shop`}
            >
                <div className={toggle ? 'sidebar-filter-wrapper' : ''}>
                    <div className="widget widget-clean">
                        <label>Filters:</label>
                        <ALink
                            href={{
                                pathname: router.pathname,
                                query: { type: query.type as string },
                            }}
                            className="sidebar-filter-clear"
                            scroll={false}
                        >
                            Clean All
                        </ALink>
                    </div>

                    <SlideToggle collapsed={false}>
                        {({ onToggle, setCollapsibleElement, toggleState }) => (
                            <div className="widget widget-collapsible">
                                <h3 className="widget-title mb-2">
                                    <a
                                        href="#category"
                                        className={`${
                                            toggleState.toLowerCase() ==
                                            'collapsed'
                                                ? 'collapsed'
                                                : ''
                                        }`}
                                        onClick={(e) => {
                                            onToggle(e);
                                            e.preventDefault();
                                        }}
                                    >
                                        Category
                                    </a>
                                </h3>

                                <div ref={setCollapsibleElement}>
                                    <div className="widget-body pt-0">
                                        <div className="filter-items filter-items-count">
                                            {shopData.categories.map(
                                                (item, index) => (
                                                    <div
                                                        className="filter-item"
                                                        key={`cat_${index}`}
                                                    >
                                                        <ALink
                                                            className={`${
                                                                query.category ==
                                                                item.slug
                                                                    ? 'active'
                                                                    : ''
                                                            }`}
                                                            href={{
                                                                pathname:
                                                                    router.pathname,
                                                                query: {
                                                                    type: query.type as string,
                                                                    category:
                                                                        item.slug,
                                                                },
                                                            }}
                                                            scroll={false}
                                                        >
                                                            {item.name}
                                                        </ALink>
                                                        <span className="item-count">
                                                            {item.count}
                                                        </span>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </SlideToggle>

                    <SlideToggle collapsed={false}>
                        {({ onToggle, setCollapsibleElement, toggleState }) => (
                            <div className="widget widget-collapsible">
                                <h3 className="widget-title mb-2">
                                    <a
                                        href="#Size"
                                        className={`${
                                            toggleState.toLowerCase() ==
                                            'collapsed'
                                                ? 'collapsed'
                                                : ''
                                        }`}
                                        onClick={(e) => {
                                            onToggle(e);
                                            e.preventDefault();
                                        }}
                                    >
                                        Size
                                    </a>
                                </h3>
                                <div ref={setCollapsibleElement}>
                                    <div className="widget-body pt-0">
                                        <div className="filter-items">
                                            {shopData.sizes.map(
                                                (item, index) => (
                                                    <div
                                                        className="filter-item"
                                                        key={index}
                                                    >
                                                        <div className="custom-control custom-checkbox">
                                                            <input
                                                                type="checkbox"
                                                                className="custom-control-input"
                                                                id={`size-${
                                                                    index + 1
                                                                }`}
                                                                onChange={(e) =>
                                                                    onAttrClick(
                                                                        e,
                                                                        'size',
                                                                        item.slug
                                                                    )
                                                                }
                                                                checked={
                                                                    containsAttrInUrl(
                                                                        'size',
                                                                        item.slug
                                                                    )
                                                                        ? true
                                                                        : false
                                                                }
                                                            />
                                                            <label
                                                                className="custom-control-label"
                                                                htmlFor={`size-${
                                                                    index + 1
                                                                }`}
                                                            >
                                                                {item.size}
                                                            </label>
                                                        </div>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </SlideToggle>

                    <SlideToggle collapsed={false}>
                        {({ onToggle, setCollapsibleElement, toggleState }) => (
                            <div className="widget widget-collapsible">
                                <h3 className="widget-title mb-2">
                                    <a
                                        href="#colour"
                                        className={`${
                                            toggleState.toLowerCase() ==
                                            'collapsed'
                                                ? 'collapsed'
                                                : ''
                                        }`}
                                        onClick={(e: MouseEvent) => {
                                            onToggle(e);
                                            e.preventDefault();
                                        }}
                                    >
                                        Colour
                                    </a>
                                </h3>
                                <div ref={setCollapsibleElement}>
                                    <div className="widget-body pt-0">
                                        <div className="filter-colors">
                                            {shopData.colors.map(
                                                (item, index) => (
                                                    <ALink
                                                        href={getUrlForAttrs(
                                                            'color',
                                                            item.color_name
                                                        )}
                                                        className={
                                                            containsAttrInUrl(
                                                                'color',
                                                                item.color_name
                                                            )
                                                                ? 'selected'
                                                                : ''
                                                        }
                                                        style={{
                                                            backgroundColor:
                                                                item.color,
                                                        }}
                                                        key={index}
                                                        scroll={false}
                                                    >
                                                        <span className="sr-only">
                                                            Color Name
                                                        </span>
                                                    </ALink>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </SlideToggle>

                    <SlideToggle collapsed={false}>
                        {({ onToggle, setCollapsibleElement, toggleState }) => (
                            <div className="widget widget-collapsible">
                                <h3 className="widget-title mb-2">
                                    <a
                                        href="#brand"
                                        className={`${
                                            toggleState.toLowerCase() ==
                                            'collapsed'
                                                ? 'collapsed'
                                                : ''
                                        }`}
                                        onClick={(e) => {
                                            onToggle(e);
                                            e.preventDefault();
                                        }}
                                    >
                                        Brand
                                    </a>
                                </h3>
                                <div ref={setCollapsibleElement}>
                                    <div className="widget-body pt-0">
                                        <div className="filter-items">
                                            {shopData.brands.map(
                                                (item, index) => (
                                                    <div
                                                        className="filter-item"
                                                        key={index}
                                                    >
                                                        <div className="custom-control custom-checkbox">
                                                            <input
                                                                type="checkbox"
                                                                className="custom-control-input"
                                                                id={`brand-${
                                                                    index + 1
                                                                }`}
                                                                onChange={(e) =>
                                                                    onAttrClick(
                                                                        e,
                                                                        'brand',
                                                                        item.slug
                                                                    )
                                                                }
                                                                checked={
                                                                    containsAttrInUrl(
                                                                        'brand',
                                                                        item.slug
                                                                    )
                                                                        ? true
                                                                        : false
                                                                }
                                                            />
                                                            <label
                                                                className="custom-control-label"
                                                                htmlFor={`brand-${
                                                                    index + 1
                                                                }`}
                                                            >
                                                                {item.brand}
                                                            </label>
                                                        </div>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </SlideToggle>

                    <SlideToggle collapsed={false}>
                        {({ onToggle, setCollapsibleElement, toggleState }) => (
                            <div className="widget widget-collapsible">
                                <h3 className="widget-title mb-2">
                                    <a
                                        href="#price"
                                        className={`${
                                            toggleState.toLowerCase() ==
                                            'collapsed'
                                                ? 'collapsed'
                                                : ''
                                        }`}
                                        onClick={(e) => {
                                            onToggle(e);
                                            e.preventDefault();
                                        }}
                                    >
                                        Price
                                    </a>
                                </h3>

                                <div ref={setCollapsibleElement}>
                                    <div className="widget-body pt-0">
                                        <div className="filter-price">
                                            <div className="filter-price-text d-flex justify-content-between">
                                                <span>
                                                    Price Range:&nbsp;
                                                    <span className="filter-price-range">
                                                        ${priceRange.min} - $
                                                        {priceRange.max}
                                                    </span>
                                                </span>

                                                <ALink
                                                    href={{
                                                        pathname:
                                                            router.pathname,
                                                        query: {
                                                            ...query,
                                                            minPrice:
                                                                priceRange.min,
                                                            maxPrice:
                                                                priceRange.max,
                                                            page: 1,
                                                        },
                                                    }}
                                                    className="pr-2"
                                                    scroll={false}
                                                >
                                                    Filter
                                                </ALink>
                                            </div>

                                            <div className="price-slider">
                                                <InputRange
                                                    formatLabel={(value) =>
                                                        `$${value}`
                                                    }
                                                    maxValue={1000}
                                                    minValue={0}
                                                    step={50}
                                                    value={priceRange}
                                                    onChange={
                                                        onChangePriceRange
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </SlideToggle>
                </div>
            </aside>
        </>
    );
};

export default React.memo(ShopSidebarOne);
