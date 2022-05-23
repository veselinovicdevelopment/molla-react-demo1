import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import useCollapse from 'react-collapsed';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';

import ALink from '~/components/features/Alink';
import Qty from '~/components/features/Qty';

import { actions as wishlistAction } from '~/store/wishlist';
import { actions as cartAction } from '~/store/cart';

import { canAddToCart, isInWishlist } from '~/utils';
import { CartItem, Product } from '~/utils/types';

interface Variant {
    color: string | null;
    colorName: string | null;
    price: number | null;
    size?: string;
    disabled?: boolean;
}

interface DetailProps {
    wishlist: Product[];
    cartlist: CartItem[];
    product: Product;
    addToCart: (product: Product, qty?: number) => void;
    addToWishlist: (product: Product) => void;
}

const DetailThree = (props: DetailProps) => {
    const router = useRouter();
    const { product } = props;
    const [qty, setQty] = useState(1);
    const [colorArray, setColorArray] = useState<Variant[]>([]);
    const [sizeArray, setSizeArray] = useState<Variant[]>([]);
    const [variationGroup, setVariationGroup] = useState<Variant[]>([]);
    const [selectedVariant, setSelectedVariant] = useState<Variant>({
        color: null,
        colorName: null,
        price: null,
        size: '',
    });
    const [showClear, setShowClear] = useState<boolean>(false);
    const [showVariationPrice, setShowVariationPrice] =
        useState<boolean>(false);
    const [maxPrice, setMaxPrice] = useState<number>(0);
    const [minPrice, setMinPrice] = useState<number>(99999);
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    useEffect(() => {
        let min = 99999;
        let max = 0;

        setVariationGroup(
            product.variants!.reduce((acc: Variant[], cur) => {
                cur.size.map((item) => {
                    acc.push({
                        color: cur.color,
                        colorName: cur.color_name,
                        size: item.name,
                        price: cur.price,
                    });
                });
                if (min > cur.price) min = cur.price;
                if (max < cur.price) max = cur.price;
                return acc;
            }, [])
        );

        if (product.variants!.length == 0) {
            min = product.sale_price ? product.sale_price : product.price;
            max = product.price;
        }

        setMinPrice(min);
        setMaxPrice(max);
    }, [product]);

    useEffect(() => {
        setSelectedVariant({
            color: null,
            colorName: null,
            price: null,
            size: '',
        });
        setQty(1);
    }, [router.query.slug]);

    useEffect(() => {
        refreshSelectableGroup();
    }, [variationGroup, selectedVariant]);

    useEffect(() => {
        setShowClear(
            selectedVariant.color || selectedVariant.size != '' ? true : false
        );
        setShowVariationPrice(
            selectedVariant.color && selectedVariant.size != '' ? true : false
        );
        let toggle = document.querySelector(
            '.product-details-top .variation-toggle'
        ) as HTMLElement;

        if (toggle) {
            if (
                selectedVariant.color &&
                selectedVariant.size != '' &&
                toggle.classList.contains('collapsed')
            ) {
                toggle.click();
            }

            if (
                !(selectedVariant.color && selectedVariant.size != '') &&
                !toggle.classList.contains('collapsed')
            ) {
                toggle.click();
            }
        }
    }, [selectedVariant]);

    const onWishlistClick = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (!isInWishlist(props.wishlist, product)) {
            props.addToWishlist(product);
        } else {
            router.push('/pages/wishlist');
        }
    };

    const refreshSelectableGroup = () => {
        let tempArray = [...variationGroup] as Variant[];
        if (selectedVariant.color) {
            tempArray = variationGroup.reduce((acc: Variant[], cur) => {
                if (selectedVariant.color !== cur.color) {
                    return acc;
                }
                return [...acc, cur];
            }, []);
        }

        setSizeArray(
            tempArray.reduce((acc: Variant[], cur: Variant) => {
                if (acc.findIndex((item) => item.size == cur.size) !== -1)
                    return acc;
                return [...acc, cur];
            }, [])
        );

        tempArray = [...variationGroup];
        if (selectedVariant.size) {
            tempArray = variationGroup.reduce((acc: Variant[], cur) => {
                if (selectedVariant.size !== cur.size) {
                    return acc;
                }
                return [...acc, cur];
            }, []);
        }

        setColorArray(
            product.variants!.reduce((acc: Variant[], cur) => {
                if (
                    tempArray.findIndex(
                        (item: Variant) => item.color == cur.color
                    ) == -1
                ) {
                    return [
                        ...acc,
                        {
                            color: cur.color,
                            colorName: cur.color_name,
                            price: cur.price,
                            disabled: true,
                        },
                    ];
                }
                return [
                    ...acc,
                    {
                        color: cur.color,
                        colorName: cur.color_name,
                        price: cur.price,
                        disabled: false,
                    },
                ];
            }, [])
        );
    };

    const selectColor = (e: MouseEvent<HTMLAnchorElement>, item: Variant) => {
        e.preventDefault();
        if (item.color == selectedVariant.color) {
            setSelectedVariant({
                ...selectedVariant,
                color: null,
                colorName: null,
                price: item.price,
            });
        } else {
            setSelectedVariant({
                ...selectedVariant,
                color: item.color,
                colorName: item.colorName,
                price: item.price,
            });
        }
    };

    const selectSize = (e: ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value == '') {
            setSelectedVariant({ ...selectedVariant, size: '' });
        } else {
            setSelectedVariant({ ...selectedVariant, size: e.target.value });
        }
    };

    const onChangeQty = (current: number) => {
        setQty(current);
    };

    const clearSelection = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setSelectedVariant({
            ...selectedVariant,
            color: null,
            colorName: null,
            size: '',
        });
        refreshSelectableGroup();
    };

    const onCartClick = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (e.currentTarget.classList.contains('btn-disabled')) return;

        let newProduct = { ...product };
        if (product.variants!.length > 0) {
            newProduct = {
                ...product,
                name:
                    product.name +
                    ' - ' +
                    selectedVariant.colorName +
                    ', ' +
                    selectedVariant.size,
                price: selectedVariant.price!,
            };
        }
        props.addToCart(newProduct, qty);
    };

    if (!product) {
        return <div></div>;
    }

    return (
        <div className="product-details product-details-centered product-details-separator">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="product-title">{product.name}</h1>

                        <div className="ratings-container">
                            <div className="ratings">
                                <div
                                    className="ratings-val"
                                    style={{
                                        width: product.ratings * 20 + '%',
                                    }}
                                ></div>
                                <span className="tooltip-text">
                                    {product.ratings.toFixed(2)}
                                </span>
                            </div>
                            <span className="ratings-text">
                                ( {product.review} Reviews )
                            </span>
                        </div>

                        {!product.stock || product.stock == 0 ? (
                            <div className="product-price">
                                <span className="out-price">
                                    ${product.price.toFixed(2)}
                                </span>
                            </div>
                        ) : minPrice == maxPrice ? (
                            <div className="product-price">
                                ${minPrice.toFixed(2)}
                            </div>
                        ) : product.variants!.length == 0 ? (
                            <div className="product-price">
                                <span className="new-price">
                                    ${minPrice.toFixed(2)}
                                </span>
                                <span className="old-price">
                                    ${maxPrice.toFixed(2)}
                                </span>
                            </div>
                        ) : (
                            <div className="product-price">
                                ${minPrice.toFixed(2)}&ndash;$
                                {maxPrice.toFixed(2)}
                            </div>
                        )}

                        <div className="product-content">
                            <p>{product.short_desc}</p>
                        </div>

                        {product.variants!.length > 0 ? (
                            <>
                                <div className="details-filter-row details-row-size">
                                    <label>Color:</label>

                                    <div className="product-nav product-nav-dots">
                                        {colorArray.map((item, index) => (
                                            <a
                                                href="#"
                                                className={`${
                                                    (item.color ==
                                                    selectedVariant.color
                                                        ? 'active '
                                                        : '') +
                                                    (item.disabled
                                                        ? 'disabled'
                                                        : '')
                                                }`}
                                                style={{
                                                    backgroundColor:
                                                        item.color!,
                                                }}
                                                key={index}
                                                onClick={(e) =>
                                                    selectColor(e, item)
                                                }
                                            ></a>
                                        ))}
                                    </div>
                                </div>

                                <div className="details-filter-row details-row-size">
                                    <label htmlFor="size">Size:</label>
                                    <div className="select-custom">
                                        <select
                                            name="size"
                                            className="form-control"
                                            value={selectedVariant.size}
                                            onChange={selectSize}
                                        >
                                            <option value="">
                                                Select a size
                                            </option>
                                            {sizeArray.map((item, index) => (
                                                <option
                                                    value={item.size}
                                                    key={index}
                                                >
                                                    {item.size}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <ALink href="#" className="size-guide mr-4">
                                        <i className="icon-th-list"></i>size
                                        guide
                                    </ALink>
                                    {showClear ? (
                                        <a href="#" onClick={clearSelection}>
                                            clear
                                        </a>
                                    ) : (
                                        ''
                                    )}
                                </div>
                                <button
                                    className={`d-none variation-toggle ${
                                        isExpanded ? 'expanded' : 'collapsed'
                                    }`}
                                    {...getToggleProps()}
                                ></button>
                                <div {...getCollapseProps()}>
                                    <div className="product-price">
                                        $
                                        {selectedVariant.price
                                            ? selectedVariant.price.toFixed(2)
                                            : 0}
                                    </div>
                                </div>
                            </>
                        ) : (
                            ''
                        )}
                    </div>
                    <div className="col-md-6">
                        <div className="product-details-action mb-1">
                            <div className="details-action-col">
                                <Qty
                                    changeQty={onChangeQty}
                                    max={product.stock}
                                    adClass=" mr-2 mr-sm-3"
                                ></Qty>
                                <a
                                    href="#"
                                    className={`btn-product btn-cart ml-sm-2 ${
                                        !canAddToCart(
                                            props.cartlist,
                                            product,
                                            qty
                                        ) ||
                                        (product.variants!.length > 0 &&
                                            !showVariationPrice)
                                            ? 'btn-disabled'
                                            : ''
                                    }`}
                                    onClick={onCartClick}
                                >
                                    <span>add to cart</span>
                                </a>
                            </div>
                            <div className="details-action-wrapper">
                                {isInWishlist(props.wishlist, product) ? (
                                    <ALink
                                        href="/shop/wishlist"
                                        className="btn-product btn-wishlist added-to-wishlist"
                                    >
                                        <span>Go to Wishlist</span>
                                    </ALink>
                                ) : (
                                    <a
                                        href="#"
                                        className="btn-product btn-wishlist"
                                        onClick={onWishlistClick}
                                    >
                                        <span>Add to Wishlist</span>
                                    </a>
                                )}
                            </div>
                        </div>

                        <div className="product-details-footer details-footer-col">
                            <div className="product-cat">
                                <span>Category:</span>
                                {product.category.map((cat, index) => (
                                    <span key={index}>
                                        <ALink
                                            href={{
                                                pathname: '/shop/sidebar/list',
                                                query: { category: cat.slug },
                                            }}
                                        >
                                            {cat.name}
                                        </ALink>
                                        {index < product.category.length - 1
                                            ? ','
                                            : ''}
                                    </span>
                                ))}
                            </div>

                            <div className="social-icons social-icons-sm">
                                <span className="social-label">Share:</span>
                                <ALink
                                    href="#"
                                    className="social-icon"
                                    title="Facebook"
                                >
                                    <i className="icon-facebook-f"></i>
                                </ALink>
                                <ALink
                                    href="#"
                                    className="social-icon"
                                    title="Twitter"
                                >
                                    <i className="icon-twitter"></i>
                                </ALink>
                                <ALink
                                    href="#"
                                    className="social-icon"
                                    title="Instagram"
                                >
                                    <i className="icon-instagram"></i>
                                </ALink>
                                <ALink
                                    href="#"
                                    className="social-icon"
                                    title="Pinterest"
                                >
                                    <i className="icon-pinterest"></i>
                                </ALink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface CurrentState {
    cartlist: {
        data: CartItem[];
    };
    wishlist: {
        data: Product[];
    };
}

const mapStateToProps = (state: CurrentState) => {
    return {
        cartlist: state.cartlist.data,
        wishlist: state.wishlist.data,
    };
};

export default connect(mapStateToProps, { ...wishlistAction, ...cartAction })(
    DetailThree
);
