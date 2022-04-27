import React from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Product } from '~/utils/types';

interface GalleryProps {
    product: Product;
}

const GalleryExtended = (props: GalleryProps) => {
    const { product } = props;

    if (!product) {
        return <div></div>;
    }

    return (
        <div className="product-lg position-relative">
            {product.new ? (
                <span className="product-label label-new">New</span>
            ) : (
                ''
            )}

            {product.sale_price ? (
                <span className="product-label label-sale">Sale</span>
            ) : (
                ''
            )}

            {product.top ? (
                <span className="product-label label-top">Top</span>
            ) : (
                ''
            )}

            {product.stock == 0 ? (
                <span className="product-label label-out">Out of Stock</span>
            ) : (
                ''
            )}
            <Swiper
                modules={[Navigation]}
                className="product-gallery-carousel"
                navigation
                slidesPerView={3}
                spaceBetween={20}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    576: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 3,
                    },
                }}
            >
                {product.pictures.map((item, index) => (
                    <SwiperSlide key={'gallery-' + index}>
                        <div
                            style={{
                                paddingTop: `${
                                    (product.pictures[0].height /
                                        product.pictures[0].width) *
                                    100
                                }%`,
                            }}
                        >
                            <InnerImageZoom
                                src={
                                    process.env.NEXT_PUBLIC_ASSET_URI +
                                    product.pictures[0].url
                                }
                                zoomSrc={
                                    process.env.NEXT_PUBLIC_ASSET_URI +
                                    product.pictures[0].url
                                }
                                zoomType="hover"
                                className="product-gallery-image"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default React.memo(GalleryExtended);
