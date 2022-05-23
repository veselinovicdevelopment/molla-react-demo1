import { MouseEvent, useEffect } from 'react';
import { connect } from 'react-redux';
import useCollapse from 'react-collapsed';

import ALink from '~/components/features/Alink';
import MollaAccordion from '~/components/features/accordion/Accordion';
import Card from '~/components/features/accordion/Card';
import PageHeader from '~/components/features/PageHeader';

import { cartPriceTotal } from '~/utils/index';
import { CartItem } from '~/utils/types';

interface CheckoutProps {
    cartlist: CartItem[];
}

const Checkout = (props: CheckoutProps) => {
    const { cartlist } = props;
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    useEffect(() => {
        document.querySelector('body')!.addEventListener('click', clearOpacity);

        return () => {
            document
                .querySelector('body')!
                .removeEventListener('click', clearOpacity);
        };
    }, []);

    const clearOpacity = () => {
        if (
            (
                document.querySelector(
                    '#checkout-discount-input'
                ) as HTMLInputElement
            ).value == ''
        )
            document
                .querySelector('#checkout-discount-form label')!
                .removeAttribute('style');
    };

    const addOpacity = (e: MouseEvent<HTMLInputElement>) => {
        e.currentTarget?.parentNode
            ?.querySelector('label')
            ?.setAttribute('style', 'opacity: 0');
    };

    return (
        <div className="main">
            <PageHeader title="Checkout" subTitle="Shop" />
            <nav className="breadcrumb-nav">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <ALink href="/">Home</ALink>
                        </li>
                        <li className="breadcrumb-item">
                            <ALink href="/shop/sidebar/list">Shop</ALink>
                        </li>
                        <li className="breadcrumb-item active">Checkout</li>
                    </ol>
                </div>
            </nav>

            <div className="page-content">
                <div className="checkout">
                    <div className="container">
                        <div className="checkout-discount">
                            <form action="#" id="checkout-discount-form">
                                <input
                                    type="text"
                                    className="form-control"
                                    required
                                    id="checkout-discount-input"
                                    onClick={addOpacity}
                                />
                                <label
                                    htmlFor="checkout-discount-input"
                                    className="text-truncate"
                                >
                                    Have a coupon?{' '}
                                    <span>Click here to enter your code</span>
                                </label>
                            </form>
                        </div>

                        <form action="#">
                            <div className="row">
                                <div className="col-lg-9">
                                    <h2 className="checkout-title">
                                        Billing Details
                                    </h2>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label>First Name *</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                required
                                            />
                                        </div>

                                        <div className="col-sm-6">
                                            <label>Last Name *</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <label>Company Name (Optional)</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                    />

                                    <label>Country *</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        required
                                    />

                                    <label>Street address *</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="House number and Street name"
                                        required
                                    />
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Appartments, suite, unit etc ..."
                                        required
                                    />

                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label>Town / City *</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                required
                                            />
                                        </div>

                                        <div className="col-sm-6">
                                            <label>State / County *</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label>Postcode / ZIP *</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                required
                                            />
                                        </div>

                                        <div className="col-sm-6">
                                            <label>Phone *</label>
                                            <input
                                                type="tel"
                                                className="form-control"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <label>Email address *</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        required
                                    />

                                    <div className="custom-control custom-checkbox">
                                        <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="checkout-create-acc"
                                        />
                                        <label
                                            className="custom-control-label"
                                            htmlFor="checkout-create-acc"
                                        >
                                            Create an account?
                                        </label>
                                    </div>

                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox mt-0 address-box">
                                            <input
                                                type="checkbox"
                                                className="custom-control-input"
                                                checked={isExpanded}
                                            />
                                            <label
                                                className="custom-control-label"
                                                htmlFor="different-shipping"
                                                {...getToggleProps()}
                                            >
                                                Ship to a different address?
                                            </label>
                                        </div>
                                        <div
                                            className="shipping-info"
                                            {...getCollapseProps()}
                                        >
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>
                                                            First name{' '}
                                                            <abbr
                                                                className="required"
                                                                title="required"
                                                            >
                                                                *
                                                            </abbr>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            required
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>
                                                            Last name{' '}
                                                            <abbr
                                                                className="required"
                                                                title="required"
                                                            >
                                                                *
                                                            </abbr>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label>
                                                    Company name (optional)
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                />
                                            </div>

                                            <div className="select-custom">
                                                <label>
                                                    Country / Region{' '}
                                                    <span className="required">
                                                        *
                                                    </span>
                                                </label>
                                                <select
                                                    name="orderby"
                                                    className="form-control"
                                                >
                                                    <option
                                                        value=""
                                                        defaultValue="selected"
                                                    >
                                                        Vanuatu
                                                    </option>
                                                    <option value="1">
                                                        Brunei
                                                    </option>
                                                    <option value="2">
                                                        Bulgaria
                                                    </option>
                                                    <option value="3">
                                                        Burkina Faso
                                                    </option>
                                                    <option value="4">
                                                        Burundi
                                                    </option>
                                                    <option value="5">
                                                        Cameroon
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="form-group mb-1 pb-2">
                                                <label>
                                                    Street address{' '}
                                                    <abbr
                                                        className="required"
                                                        title="required"
                                                    >
                                                        *
                                                    </abbr>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="House number and street name"
                                                    required
                                                />
                                            </div>

                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Apartment, suite, unit, etc. (optional)"
                                                    required
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label>
                                                    Town / City{' '}
                                                    <abbr
                                                        className="required"
                                                        title="required"
                                                    >
                                                        *
                                                    </abbr>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    required
                                                />
                                            </div>

                                            <div className="select-custom">
                                                <label>
                                                    State / County{' '}
                                                    <abbr
                                                        className="required"
                                                        title="required"
                                                    >
                                                        *
                                                    </abbr>
                                                </label>
                                                <select
                                                    name="orderby"
                                                    className="form-control"
                                                >
                                                    <option
                                                        value=""
                                                        defaultValue="selected"
                                                    >
                                                        NY
                                                    </option>
                                                    <option value="1">
                                                        Brunei
                                                    </option>
                                                    <option value="2">
                                                        Bulgaria
                                                    </option>
                                                    <option value="3">
                                                        Burkina Faso
                                                    </option>
                                                    <option value="4">
                                                        Burundi
                                                    </option>
                                                    <option value="5">
                                                        Cameroon
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="form-group">
                                                <label>
                                                    Postcode / ZIP{' '}
                                                    <abbr
                                                        className="required"
                                                        title="required"
                                                    >
                                                        *
                                                    </abbr>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <label>Order notes (optional)</label>
                                    <textarea
                                        className="form-control"
                                        cols={30}
                                        rows={4}
                                        placeholder="Notes about your order, e.g. special notes for delivery"
                                    ></textarea>
                                </div>

                                <aside className="col-lg-3">
                                    <div className="summary">
                                        <h3 className="summary-title">
                                            Your Order
                                        </h3>

                                        <table className="table table-summary">
                                            <thead>
                                                <tr>
                                                    <th>Product</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {cartlist.map(
                                                    (item: CartItem, index) => (
                                                        <tr key={index}>
                                                            <td>
                                                                {' '}
                                                                <ALink
                                                                    href={`/product/default/${item.slug}`}
                                                                >
                                                                    {item.name}
                                                                </ALink>
                                                            </td>
                                                            <td>
                                                                $
                                                                {item.sum.toLocaleString(
                                                                    undefined,
                                                                    {
                                                                        minimumFractionDigits: 2,
                                                                        maximumFractionDigits: 2,
                                                                    }
                                                                )}
                                                            </td>
                                                        </tr>
                                                    )
                                                )}
                                                <tr className="summary-subtotal">
                                                    <td>Subtotal:</td>
                                                    <td>
                                                        $
                                                        {cartPriceTotal(
                                                            cartlist
                                                        ).toLocaleString(
                                                            undefined,
                                                            {
                                                                minimumFractionDigits: 2,
                                                                maximumFractionDigits: 2,
                                                            }
                                                        )}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Shipping:</td>
                                                    <td>Free Shipping</td>
                                                </tr>
                                                <tr className="summary-total">
                                                    <td>Total:</td>
                                                    <td>
                                                        $
                                                        {cartPriceTotal(
                                                            cartlist
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

                                        <MollaAccordion type="checkout">
                                            <Card
                                                title="Direct bank transfer"
                                                expanded={true}
                                            >
                                                Make your payment directly into
                                                our bank account. Please use
                                                your Order ID as the payment
                                                reference. Your order will not
                                                be shipped until the funds have
                                                cleared in our account.
                                            </Card>

                                            <Card title="Check payments">
                                                Ipsum dolor sit amet,
                                                consectetuer adipiscing elit.
                                                Donec odio. Quisque volutpat
                                                mattis eros. Nullam malesuada
                                                erat ut turpis.
                                            </Card>

                                            <Card title="Cash on delivery">
                                                Quisque volutpat mattis eros.
                                                Lorem ipsum dolor sit amet,
                                                consectetuer adipiscing elit.
                                                Donec odio. Quisque volutpat
                                                mattis eros.
                                            </Card>

                                            <Card title="PayPal">
                                                <small className="float-right paypal-link">
                                                    What is PayPal?
                                                </small>
                                                Nullam malesuada erat ut turpis.
                                                Suspendisse urna nibh, viverra
                                                non, semper suscipit, posuere a,
                                                pede. Donec nec justo eget felis
                                                facilisis fermentum.
                                            </Card>

                                            <Card title="Credit Card (Stripe)">
                                                <img
                                                    src="images/payments-summary.png"
                                                    alt="payments cards"
                                                    className="mb-1"
                                                />
                                                Donec nec justo eget felis
                                                facilisis fermentum.Lorem ipsum
                                                dolor sit amet, consectetuer
                                                adipiscing elit. Donec odio.
                                                Quisque volutpat mattis eros.
                                                Lorem ipsum dolor sit ame.
                                            </Card>
                                        </MollaAccordion>

                                        <button
                                            type="submit"
                                            className="btn btn-outline-primary-2 btn-order btn-block"
                                        >
                                            <span className="btn-text">
                                                Place Order
                                            </span>
                                            <span className="btn-hover-text">
                                                Proceed to Checkout
                                            </span>
                                        </button>
                                    </div>
                                </aside>
                            </div>
                        </form>
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

export const mapStateToProps = (state: CurrentState) => ({
    cartlist: state.cartlist.data,
});

export default connect(mapStateToProps)(Checkout);
