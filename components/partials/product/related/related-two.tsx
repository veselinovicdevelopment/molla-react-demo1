import React from 'react';

import ProductEight from '~/components/features/products/product-eight';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Product } from '~/utils/types';

interface RelatedProductsprops {
    products: Product[];
}

const RelatedTwo = (props: RelatedProductsprops) => {
    const { products } = props;

    if (!products) {
        return <div></div>;
    }

    return (
        <Swiper>
            <SwiperSlide>
                <div>
                    {products.map((product, index) => (
                        <SwiperSlide key={index}>
                            <ProductEight product={product} />
                        </SwiperSlide>
                    ))}
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default React.memo(RelatedTwo);
