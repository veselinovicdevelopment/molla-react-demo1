import React, { useState, useEffect, MouseEvent, ChangeEvent } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Modal from 'react-modal';
import { useCookies } from 'react-cookie';

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(51,51,51,0.6)',
        zIndex: '9001',
    },
};

Modal.setAppElement('body');

const NewsletterModal = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [doNotShow, setDoNotShow] = useState<boolean>(false);
    const [cookies, setCookie] = useCookies([
        `hideNewsletter-${process.env.NEXT_PUBLIC_DEMO}`,
    ]);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        cookies[`hideNewsletter-${process.env.NEXT_PUBLIC_DEMO}`] ||
            (timer = setTimeout(() => {
                setOpen(true);
            }, 5000));

        return () => {
            timer && clearTimeout(timer);
        };
    }, []);

    const closeModal = (e: MouseEvent<HTMLElement>) => {
        document
            .getElementById('newsletter-popup-form')
            .classList.remove('ReactModal__Content--after-open');

        if (document.querySelector('.ReactModal__Overlay')) {
            (
                document.querySelector('.ReactModal__Overlay') as HTMLElement
            ).style.opacity = '0';
        }

        setTimeout(() => {
            setOpen(false);
            doNotShow &&
                setCookie(
                    `hideNewsletter-${process.env.NEXT_PUBLIC_DEMO}`,
                    'true'
                );
        }, 350);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDoNotShow(e.target.checked);
    };

    return (
        <Modal
            isOpen={open}
            onRequestClose={closeModal}
            style={customStyles}
            shouldReturnFocusAfterClose={false}
            contentLabel="Newsletter Modal"
            className="container newsletter-popup-container h-auto"
            overlayClassName="d-flex align-items-center justify-content-center"
            id="newsletter-popup-form"
        >
            <div className="modal-content overflow-hidden">
                <div className="row justify-content-center position-relative">
                    <div className="col-12">
                        <div className="row no-gutters bg-white newsletter-popup-content">
                            <div className="col-xl-3-5col col-lg-7 banner-content-wrap">
                                <div className="banner-content text-center">
                                    <img
                                        src="images/popup/newsletter/logo.png"
                                        alt="logo"
                                        className="logo"
                                        width="60"
                                        height="15"
                                    />
                                    <h2 className="banner-title">
                                        get{' '}
                                        <span>
                                            25
                                            <span style={{ fontWeight: '400' }}>
                                                %
                                            </span>
                                        </span>{' '}
                                        off
                                    </h2>
                                    <p>
                                        Subscribe to the Molla eCommerce
                                        newsletter to receive timely updates
                                        from your favorite products.
                                    </p>

                                    <form action="#">
                                        <div className="input-group input-group-round">
                                            <input
                                                type="email"
                                                className="form-control form-control-white"
                                                placeholder="Your Email Address"
                                                aria-label="Email Adress"
                                                required
                                            />
                                            <div className="input-group-append">
                                                <button
                                                    className="btn"
                                                    type="submit"
                                                >
                                                    <span>go</span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>

                                    <div className="custom-control custom-checkbox pl-4 ml-3">
                                        <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="register-policy"
                                            onChange={handleChange}
                                        />
                                        <label
                                            className="custom-control-label"
                                            htmlFor="register-policy"
                                        >
                                            Do not show this popup again
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-2-5col col-lg-5 d-none d-lg-block">
                                <div className="lazy-overlay"></div>
                                <LazyLoadImage
                                    alt="newsletter"
                                    src="images/popup/newsletter/img-1.jpg"
                                    threshold={0}
                                    width={396}
                                    height={420}
                                    effect="blur"
                                    className="newsletter-img"
                                />
                            </div>
                        </div>
                    </div>
                    <button
                        title="Close (Esc)"
                        type="button"
                        className="mfp-close"
                        onClick={closeModal}
                    >
                        <span>×</span>
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default NewsletterModal;
