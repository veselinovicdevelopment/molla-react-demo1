import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

import ALink from '~/components/features/alink';

const Footer = () => {
    const router = useRouter();
    const [isBottomSticky, setIsBottomSticky] = useState<boolean>(false);
    const [containerClass, setContainerClass] = useState<string>('container');

    useEffect(() => {
        handleBottomSticky();
        setContainerClass(
            router.asPath.includes('fullwidth')
                ? 'container-fluid'
                : 'container'
        );
    }, [router.asPath]);

    useEffect(() => {
        window.addEventListener('resize', handleBottomSticky, {
            passive: true,
        });
        return () => {
            window.removeEventListener('resize', handleBottomSticky);
        };
    }, []);

    const handleBottomSticky = () => {
        setIsBottomSticky(
            router.pathname.includes('product/default') &&
                window.innerWidth > 991
        );
    };

    return (
        <footer className="footer footer-2">
            <div className="footer-middle">
                <div className={containerClass}>
                    <div className="row">
                        <div className="col-sm-12 col-lg-6">
                            <div className="widget widget-about">
                                <img
                                    src="images/logo.png"
                                    className="footer-logo"
                                    alt="Footer Logo"
                                    width="105"
                                    height="25"
                                />
                                <p>
                                    Praesent dapibus, neque id cursus ucibus,
                                    tortor neque egestas augue, eu vulputate
                                    magna eros eu erat. Aliquam erat volutpat.
                                    Nam dui mi, tincidunt quis, accumsan
                                    porttitor, facilisis luctus, metus.
                                </p>

                                <div className="widget-about-info">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-4">
                                            <span className="widget-about-title">
                                                Got Question? Call us 24/7
                                            </span>
                                            <ALink href="tel:123456789">
                                                +0123 456 789
                                            </ALink>
                                        </div>
                                        <div className="col-sm-6 col-md-8">
                                            <span className="widget-about-title">
                                                Payment Method
                                            </span>
                                            <figure className="footer-payments">
                                                <img
                                                    src="images/payments.png"
                                                    alt="Payment methods"
                                                    width="272"
                                                    height="20"
                                                />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-4 col-lg-2">
                            <div className="widget">
                                <h4 className="widget-title">Information</h4>

                                <ul className="widget-list">
                                    <li>
                                        <ALink href="/pages/about">
                                            About Molla
                                        </ALink>
                                    </li>
                                    <li>
                                        <ALink href="/pages/about">
                                            How to shop on Molla
                                        </ALink>
                                    </li>
                                    <li>
                                        <ALink href="/pages/faq">FAQ</ALink>
                                    </li>
                                    <li>
                                        <ALink href="/pages/contact">
                                            Contact us
                                        </ALink>
                                    </li>
                                    <li>
                                        <ALink href="/pages/login">
                                            Log in
                                        </ALink>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-4 col-lg-2">
                            <div className="widget">
                                <h4 className="widget-title">
                                    Customer Service
                                </h4>

                                <ul className="widget-list">
                                    <li>
                                        <ALink href="#">Payment Methods</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">
                                            Money-back guarantee!
                                        </ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Returns</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Shipping</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">
                                            Terms and conditions
                                        </ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Privacy Policy</ALink>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-4 col-lg-2">
                            <div className="widget">
                                <h4 className="widget-title">My Account</h4>

                                <ul className="widget-list">
                                    <li>
                                        <ALink href="#">Sign In</ALink>
                                    </li>
                                    <li>
                                        <ALink href="/shop/cart">
                                            View Cart
                                        </ALink>
                                    </li>
                                    <li>
                                        <ALink href="/shop/wishlist">
                                            My Wishlist
                                        </ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Track My Order</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Help</ALink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className={containerClass}>
                    <p className="footer-copyright">
                        Copyright © {new Date().getFullYear()} Molla Store. All
                        Rights Reserved.
                    </p>
                    <ul className="footer-menu">
                        <li>
                            <ALink href="#">Terms Of Use</ALink>
                        </li>
                        <li>
                            <ALink href="#">Privacy Policy</ALink>
                        </li>
                    </ul>

                    <div className="social-icons social-icons-color">
                        <span className="social-label">Social Media</span>

                        <ALink
                            href="#"
                            className="social-icon social-facebook"
                            rel="noopener noreferrer"
                            title="Facebook"
                        >
                            <i className="icon-facebook-f"></i>
                        </ALink>
                        <ALink
                            href="#"
                            className="social-icon social-twitter"
                            rel="noopener noreferrer"
                            title="Twitter"
                        >
                            <i className="icon-twitter"></i>
                        </ALink>
                        <ALink
                            href="#"
                            className="social-icon social-instagram"
                            rel="noopener noreferrer"
                            title="Instagram"
                        >
                            <i className="icon-instagram"></i>
                        </ALink>
                        <ALink
                            href="#"
                            className="social-icon social-youtube"
                            rel="noopener noreferrer"
                            title="Youtube"
                        >
                            <i className="icon-youtube"></i>
                        </ALink>
                        <ALink
                            href="#"
                            className="social-icon social-pinterest"
                            rel="noopener noreferrer"
                            title="Pinterest"
                        >
                            <i className="icon-pinterest"></i>
                        </ALink>
                    </div>
                </div>
            </div>
            {isBottomSticky ? <div className="mb-10"></div> : ''}
        </footer>
    );
};

export default React.memo(Footer);
