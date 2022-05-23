import React, { useState, useEffect, MouseEvent } from 'react';
import { connect } from 'react-redux';

import ALink from '~/components/features/Alink';
import Qty from '~/components/features/Qty';
import PageHeader from '~/components/features/PageHeader';

import { actions as cartAction } from '~/store/cart';
import { cartPriceTotal } from '~/utils/index';
import { CartItem } from '~/utils/types';

interface CartProps {
    cartItems: CartItem[];
    updateCart: (items: CartItem[]) => void;
    removeFromCart: (item: CartItem) => void;
}

const Cart = (props: CartProps) => {
    const [cartList, setCartList] = useState<CartItem[]>([]);
    const [shippingCost, setShippingCost] = useState(0);

    useEffect(() => {
        setCartList(props.cartItems);
    }, [props.cartItems]);

    const onChangeShipping = (value: number) => {
        setShippingCost(value);
    };

    const changeQty = (value: number, index: number) => {
        setCartList(
            cartList.map((item, ind) => {
                if (ind == index)
                    return {
                        ...item,
                        qty: value,
                        sum:
                            (item.sale_price ? item.sale_price : item.price) *
                            value,
                    };
                return item;
            })
        );
    };

    const updateCart = (e: MouseEvent<HTMLButtonElement>) => {
        let button = e.currentTarget;
        button
            ?.querySelector('.icon-refresh')
            ?.classList.add('load-more-rotating');

        setTimeout(() => {
            props.updateCart(cartList);
            button
                ?.querySelector('.icon-refresh')
                ?.classList.remove('load-more-rotating');
        }, 400);
    };

    return (
        <div className="main">
            <PageHeader title="Shopping Cart" subTitle="Shop" />
            <nav className="breadcrumb-nav">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <ALink href="/">Home</ALink>
                        </li>
                        <li className="breadcrumb-item">
                            <ALink href="/shop/sidebar/list">Shop</ALink>
                        </li>
                        <li className="breadcrumb-item active">
                            Shopping Cart
                        </li>
                    </ol>
                </div>
            </nav>

            <div className="page-content pb-5">
                <div className="cart">
                    <div className="container">
                        {cartList.length > 0 ? (
                            <div className="row">
                                <div className="col-lg-9">
                                    <table className="table table-cart table-mobile">
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                                <th></th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {cartList.length > 0 ? (
                                                cartList.map(
                                                    (item: CartItem, index) => (
                                                        <tr key={index}>
                                                            <td className="product-col">
                                                                <div className="product">
                                                                    <figure className="product-media">
                                                                        <ALink
                                                                            href={`/product/default/${item.slug}`}
                                                                            className="product-image"
                                                                        >
                                                                            <img
                                                                                src={
                                                                                    process
                                                                                        .env
                                                                                        .NEXT_PUBLIC_ASSET_URI! +
                                                                                    item
                                                                                        .sm_pictures[0]
                                                                                        .url
                                                                                }
                                                                                alt="product"
                                                                            />
                                                                        </ALink>
                                                                    </figure>

                                                                    <h4 className="product-title">
                                                                        <ALink
                                                                            href={`/product/default/${item.slug}`}
                                                                        >
                                                                            {
                                                                                item.name
                                                                            }
                                                                        </ALink>
                                                                    </h4>
                                                                </div>
                                                            </td>

                                                            <td className="price-col">
                                                                $
                                                                {item.sale_price
                                                                    ? item.sale_price.toLocaleString(
                                                                          undefined,
                                                                          {
                                                                              minimumFractionDigits: 2,
                                                                              maximumFractionDigits: 2,
                                                                          }
                                                                      )
                                                                    : item.price.toLocaleString(
                                                                          undefined,
                                                                          {
                                                                              minimumFractionDigits: 2,
                                                                              maximumFractionDigits: 2,
                                                                          }
                                                                      )}
                                                            </td>

                                                            <td className="quantity-col">
                                                                <Qty
                                                                    value={
                                                                        item.qty
                                                                    }
                                                                    changeQty={(
                                                                        current
                                                                    ) =>
                                                                        changeQty(
                                                                            current,
                                                                            index
                                                                        )
                                                                    }
                                                                    adClass="cart-product-quantity"
                                                                ></Qty>
                                                            </td>

                                                            <td className="total-col">
                                                                $
                                                                {item.sum.toLocaleString(
                                                                    undefined,
                                                                    {
                                                                        minimumFractionDigits: 2,
                                                                        maximumFractionDigits: 2,
                                                                    }
                                                                )}
                                                            </td>

                                                            <td className="remove-col">
                                                                <button
                                                                    className="btn-remove"
                                                                    onClick={() =>
                                                                        props.removeFromCart(
                                                                            item
                                                                        )
                                                                    }
                                                                >
                                                                    <i className="icon-close"></i>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    )
                                                )
                                            ) : (
                                                <tr>
                                                    <td>
                                                        <p className="pl-2 pt-1 pb-1">
                                                            {' '}
                                                            No Products in Cart{' '}
                                                        </p>
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>

                                    <div className="cart-bottom">
                                        <div className="cart-discount">
                                            <form action="#">
                                                <div className="input-group">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        required
                                                        placeholder="coupon code"
                                                    />
                                                    <div className="input-group-append">
                                                        <button
                                                            className="btn btn-outline-primary-2"
                                                            type="submit"
                                                        >
                                                            <i className="icon-long-arrow-right"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>

                                        <button
                                            className="btn btn-outline-dark-2"
                                            onClick={updateCart}
                                        >
                                            <span>UPDATE CART</span>
                                            <i className="icon-refresh"></i>
                                        </button>
                                    </div>
                                </div>
                                <aside className="col-lg-3">
                                    <div className="summary summary-cart">
                                        <h3 className="summary-title">
                                            Cart Total
                                        </h3>

                                        <table className="table table-summary">
                                            <tbody>
                                                <tr className="summary-subtotal">
                                                    <td>Subtotal:</td>
                                                    <td>
                                                        $
                                                        {cartPriceTotal(
                                                            props.cartItems
                                                        ).toLocaleString(
                                                            undefined,
                                                            {
                                                                minimumFractionDigits: 2,
                                                                maximumFractionDigits: 2,
                                                            }
                                                        )}
                                                    </td>
                                                </tr>
                                                <tr className="summary-shipping">
                                                    <td>Shipping:</td>
                                                    <td>&nbsp;</td>
                                                </tr>

                                                <tr className="summary-shipping-row">
                                                    <td>
                                                        <div className="custom-control custom-radio">
                                                            <input
                                                                type="radio"
                                                                id="free-shipping"
                                                                name="shipping"
                                                                className="custom-control-input"
                                                                onChange={(e) =>
                                                                    onChangeShipping(
                                                                        0
                                                                    )
                                                                }
                                                                defaultChecked={
                                                                    true
                                                                }
                                                            />
                                                            <label
                                                                className="custom-control-label"
                                                                htmlFor="free-shipping"
                                                            >
                                                                Free Shipping
                                                            </label>
                                                        </div>
                                                    </td>
                                                    <td>$0.00</td>
                                                </tr>

                                                <tr className="summary-shipping-row">
                                                    <td>
                                                        <div className="custom-control custom-radio">
                                                            <input
                                                                type="radio"
                                                                id="standard-shipping"
                                                                name="shipping"
                                                                className="custom-control-input"
                                                                onChange={(e) =>
                                                                    onChangeShipping(
                                                                        10
                                                                    )
                                                                }
                                                            />
                                                            <label
                                                                className="custom-control-label"
                                                                htmlFor="standard-shipping"
                                                            >
                                                                Standard:
                                                            </label>
                                                        </div>
                                                    </td>
                                                    <td>$10.00</td>
                                                </tr>

                                                <tr className="summary-shipping-row">
                                                    <td>
                                                        <div className="custom-control custom-radio">
                                                            <input
                                                                type="radio"
                                                                id="express-shipping"
                                                                name="shipping"
                                                                className="custom-control-input"
                                                                onChange={(e) =>
                                                                    onChangeShipping(
                                                                        20
                                                                    )
                                                                }
                                                            />
                                                            <label
                                                                className="custom-control-label"
                                                                htmlFor="express-shipping"
                                                            >
                                                                Express:
                                                            </label>
                                                        </div>
                                                    </td>
                                                    <td>$20.00</td>
                                                </tr>

                                                <tr className="summary-shipping-estimate">
                                                    <td>
                                                        Estimate for Your
                                                        Country
                                                        <br />{' '}
                                                        <ALink href="/shop/dashboard">
                                                            Change address
                                                        </ALink>
                                                    </td>
                                                    <td>&nbsp;</td>
                                                </tr>

                                                <tr className="summary-total">
                                                    <td>Total:</td>
                                                    <td>
                                                        $
                                                        {(
                                                            cartPriceTotal(
                                                                props.cartItems
                                                            ) + shippingCost
                                                        ).toLocaleString(
                                                            undefined,
                                                            {
                                                                minimumFractionDigits: 2,
                                                                maximumFractionDigits: 2,
                                                            }
                                                        )}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <ALink
                                            className="btn btn-outline-primary-2 btn-order btn-block"
                                            href="/shop/checkout"
                                        >
                                            PROCEED TO CHECKOUT
                                        </ALink>
                                    </div>

                                    <ALink
                                        href="/shop/sidebar/list"
                                        className="btn btn-outline-dark-2 btn-block mb-3"
                                    >
                                        <span>CONTINUE SHOPPING</span>
                                        <i className="icon-refresh"></i>
                                    </ALink>
                                </aside>
                            </div>
                        ) : (
                            <div className="row">
                                <div className="col-12">
                                    <div className="cart-empty-page text-center">
                                        <i
                                            className="cart-empty icon-shopping-cart"
                                            style={{
                                                lineHeight: 1,
                                                fontSize: '15rem',
                                            }}
                                        ></i>
                                        <p className="px-3 py-2 cart-empty mb-3">
                                            No products added to the cart
                                        </p>
                                        <p className="return-to-shop mb-0">
                                            <ALink
                                                href="/shop/sidebar/list"
                                                className="btn btn-primary"
                                            >
                                                RETURN TO SHOP
                                            </ALink>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
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
}

const mapStateToProps = (state: CurrentState) => ({
    cartItems: state.cartlist.data,
});

export default connect(mapStateToProps, { ...cartAction })(Cart);
