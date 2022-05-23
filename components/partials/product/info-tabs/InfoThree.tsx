import React, { MouseEvent } from 'react';
import Card from '~/components/features/accordion/Card';
import Accordion from '~/components/features/accordion/Accordion';

import ALink from '~/components/features/Alink';
import { Product } from '~/utils/types';

interface InfoProps {
    product: Product;
}

const InfoThree = (props: InfoProps) => {
    const { product } = props;

    const setRating = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        e.currentTarget.parentNode
            ?.querySelector('.active')
            ?.classList.remove('active');

        e.currentTarget.classList.add('active');
    };

    if (!product) {
        return <div></div>;
    }

    return (
        <Accordion adClass="accordion-plus product-details-accordion pb-2 mb-0">
            <Card title="Description" adClass="card-box card-sm">
                <div className="product-desc-content">
                    <p className="pb-1">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Donec odio. Quisque volutpat mattis eros. Nullam
                        malesuada erat ut turpis. Suspendisse urna viverra non,
                        semper suscipit, posuere a, pede. Donec nec justo eget
                        felis facilisis fermentum. Aliquam porttitor mauris sit
                        amet orci.
                    </p>
                    <ul>
                        <li>
                            Nunc nec porttitor turpis. In eu risus enim. In
                            vitae mollis elit.{' '}
                        </li>
                        <li>Vivamus finibus vel mauris ut vehicula.</li>
                        <li>
                            Nullam a magna porttitor, dictum risus nec, faucibus
                            sapien.
                        </li>
                    </ul>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Donec odio. Quisque volutpat mattis eros. Nullam
                        malesuada erat ut turpis. Suspendisse urna viverra non,
                        semper suscipit, posuere a, pede.
                    </p>
                </div>
            </Card>
            <Card title="Additional information" adClass="card-box card-sm">
                <div className="product-desc-content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Donec odio. Quisque volutpat mattis eros. Nullam
                        malesuada erat ut turpis. Suspendisse urna viverra non,
                        semper suscipit, posuere a, pede. Donec nec justo eget
                        felis facilisis fermentum. Aliquam porttitor mauris sit
                        amet orci.
                    </p>

                    <h3 className="pt-2">Fabric & care</h3>
                    <ul>
                        <li>100% Polyester</li>
                        <li>Do not iron</li>
                        <li>Do not wash</li>
                        <li>Do not bleach</li>
                        <li>Do not tumble dry</li>
                        <li>Professional dry clean only</li>
                    </ul>

                    <h3>Size</h3>
                    <p>S, M, L, XL</p>
                </div>
            </Card>
            <Card
                title="Shipping & Returns"
                expanded={true}
                adClass="card-box card-sm"
            >
                <div className="product-desc-content">
                    <p>
                        We deliver to over 100 countries around the world. For
                        full details of the delivery options we offer, please
                        view our <ALink href="#">Delivery information</ALink>
                        <br />
                        We hope you’ll love every purchase, but if you ever need
                        to return an item you can do so within a month of
                        receipt. For full details of how to make a return,
                        please view our{' '}
                        <ALink href="#">Returns information</ALink>
                    </p>
                </div>
            </Card>
            <Card
                title={`Reviews (${product.review})`}
                adClass="card-box card-sm"
            >
                <div className="reviews">
                    <div className="review">
                        <div className="row no-gutters">
                            <div className="col-auto">
                                <h4>
                                    <ALink href="#">Samanta J.</ALink>
                                </h4>
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div
                                            className="ratings-val"
                                            style={{
                                                width:
                                                    product.ratings * 20 + '%',
                                            }}
                                        ></div>
                                        <span className="tooltip-text">
                                            {product.ratings.toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                                <span className="review-date mb-1">
                                    6 days ago
                                </span>
                            </div>
                            <div className="col">
                                <h4>Good, perfect size</h4>

                                <div className="review-content">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Ducimus cum dolores
                                        assumenda asperiores facilis porro
                                        reprehenderit animi culpa atque
                                        blanditiis commodi perspiciatis
                                        doloremque, possimus, explicabo, autem
                                        fugit beatae quae voluptas!
                                    </p>
                                </div>

                                <div className="review-action">
                                    <ALink href="#">
                                        <i className="icon-thumbs-up"></i>
                                        Helpful (2)
                                    </ALink>
                                    <ALink href="#">
                                        <i className="icon-thumbs-down"></i>
                                        Unhelpful (0)
                                    </ALink>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="review border-0">
                        <div className="row no-gutters">
                            <div className="col-auto">
                                <h4>
                                    <ALink href="#">John Doe</ALink>
                                </h4>
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div
                                            className="ratings-val"
                                            style={{
                                                width:
                                                    product.ratings * 20 + '%',
                                            }}
                                        ></div>
                                        <span className="tooltip-text">
                                            {product.ratings.toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                                <span className="review-date mb-1">
                                    5 days ago
                                </span>
                            </div>
                            <div className="col">
                                <h4>Very good</h4>

                                <div className="review-content">
                                    <p>
                                        Sed, molestias, tempore? Ex dolor esse
                                        iure hic veniam laborum blanditiis
                                        laudantium iste amet. Cum non voluptate
                                        eos enim, ab cumque nam, modi, quas iure
                                        illum repellendus, blanditiis
                                        perspiciatis beatae!
                                    </p>
                                </div>

                                <div className="review-action">
                                    <ALink href="#">
                                        <i className="icon-thumbs-up"></i>
                                        Helpful (0)
                                    </ALink>
                                    <ALink href="#">
                                        <i className="icon-thumbs-down"></i>
                                        Unhelpful (0)
                                    </ALink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="reply">
                    <div className="title-wrapper text-left">
                        <h3 className="title title-simple text-left text-normal">
                            Add a Review
                        </h3>
                        <p>
                            Your email address will not be published. Required
                            fields are marked *
                        </p>
                    </div>
                    <div className="rating-form">
                        <label htmlFor="rating" className="text-dark">
                            Your rating *{' '}
                        </label>
                        <span className="rating-stars selected">
                            {[1, 2, 3, 4, 5].map((num, index) => (
                                <a
                                    className={`star-${num}`}
                                    href="#"
                                    onClick={setRating}
                                    key={'star-' + index}
                                >
                                    {num}
                                </a>
                            ))}
                        </span>

                        <select
                            name="rating"
                            id="rating"
                            style={{ display: 'none' }}
                        >
                            <option value="">Rate…</option>
                            <option value="5">Perfect</option>
                            <option value="4">Good</option>
                            <option value="3">Average</option>
                            <option value="2">Not that bad</option>
                            <option value="1">Very poor</option>
                        </select>
                    </div>
                    <form action="#">
                        <textarea
                            id="reply-message"
                            cols={30}
                            rows={6}
                            className="form-control mb-2"
                            placeholder="Comment *"
                            required
                        ></textarea>
                        <div className="row">
                            <div className="col-md-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="reply-name"
                                    name="reply-name"
                                    placeholder="Name *"
                                    required
                                />
                            </div>
                            <div className="col-md-6">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="reply-email"
                                    name="reply-email"
                                    placeholder="Email *"
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-checkbox mb-2">
                            <input
                                type="checkbox"
                                className="custom-checkbox"
                                id="signin-remember"
                                name="signin-remember"
                            />
                            <label
                                className="form-control-label ml-3"
                                htmlFor="signin-remember"
                            >
                                Save my name, email, and website in this browser
                                for the next time I comment.
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </Card>
        </Accordion>
    );
};

export default React.memo(InfoThree);
