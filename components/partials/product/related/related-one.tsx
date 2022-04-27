import React from 'react';
import ProductSix from '~/components/features/products/product-six';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Product } from '~/utils/types';

interface RelatedProductsprops {
    loading: boolean;
    products: Product[];
}

const RelatedProductsOne = (props: RelatedProductsprops) => {
    const { products } = props;

    return (
        <>
            <h2 className="title text-center mb-4">You May Also Like</h2>

            {props.loading ? (
                <Swiper
                    className="carousel-with-shadow"
                    slidesPerView={4}
                    spaceBetween={20}
                    breakpoints={{
                        768: {
                            slidesPerView: 3,
                        },
                        992: {
                            slidesPerView: 4,
                        },
                        1200: {
                            slidesPerView: 4,
                        },
                        1400: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {[1, 2, 3, 4].map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="skel-pro"></div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <Swiper
                    className="carousel-with-shadow"
                    slidesPerView={4}
                    spaceBetween={20}
                    breakpoints={{
                        768: {
                            slidesPerView: 3,
                        },
                        992: {
                            slidesPerView: 4,
                        },
                        1200: {
                            slidesPerView: 4,
                        },
                        1400: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {products.map((product, index) => (
                        <SwiperSlide key={index}>
                            <ProductSix product={product} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </>
    );
};

export default React.memo(RelatedProductsOne);
