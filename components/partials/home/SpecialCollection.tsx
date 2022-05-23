import { Tab, Tabs, TabPanel, TabList } from 'react-tabs';
import { A11y, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import ProductTwelve from '~/components/features/products/ProductTwelve';

import { attrFilter } from '~/utils';
import { Product } from '~/utils/types';

interface SpecialCollectionProps {
    loading: boolean;
    products: Product[];
}

const SpecialCollection = (props: SpecialCollectionProps) => {
    const { products = [], loading } = props;

    return (
        <Tabs defaultIndex={0} selectedTabClassName="show">
            <div className="container">
                <TabList className="nav nav-pills nav-border-anim nav-big justify-content-center mb-3">
                    <Tab className="nav-item">
                        <span className="nav-link">Featured</span>
                    </Tab>

                    <Tab className="nav-item">
                        <span className="nav-link">On Sale</span>
                    </Tab>

                    <Tab className="nav-item">
                        <span className="nav-link">Top Rated</span>
                    </Tab>
                </TabList>
            </div>

            <div className="container-fluid">
                <TabPanel>
                    {loading ? (
                        <Swiper
                            modules={[Navigation]}
                            className="carousel-with-shadow"
                            slidesPerView={5}
                            spaceBetween={20}
                            navigation
                            breakpoints={{
                                320: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                1200: {
                                    slidesPerView: 4,
                                },
                                1600: {
                                    slidesPerView: 5,
                                },
                            }}
                        >
                            {[1, 2, 3, 4, 5, 6].map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="skel-pro"></div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <Swiper
                            className="carousel-with-shadow"
                            modules={[Navigation]}
                            slidesPerView={5}
                            spaceBetween={20}
                            navigation
                            breakpoints={{
                                320: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                1200: {
                                    slidesPerView: 4,
                                },
                                1600: {
                                    slidesPerView: 5,
                                },
                            }}
                        >
                            {attrFilter(products, 'featured').map(
                                (item, index) => (
                                    <SwiperSlide key={index}>
                                        <ProductTwelve product={item} />
                                    </SwiperSlide>
                                )
                            )}
                        </Swiper>
                    )}
                </TabPanel>

                <TabPanel>
                    {loading ? (
                        <Swiper
                            className="carousel-with-shadow"
                            modules={[Navigation]}
                            navigation
                            slidesPerView={5}
                            spaceBetween={20}
                            breakpoints={{
                                320: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                1200: {
                                    slidesPerView: 4,
                                },
                                1600: {
                                    slidesPerView: 5,
                                },
                            }}
                        >
                            {[1, 2, 3, 4, 5, 6].map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="skel-pro"></div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <Swiper
                            className="carousel-with-shadow"
                            modules={[Navigation]}
                            navigation
                            slidesPerView={5}
                            spaceBetween={20}
                            breakpoints={{
                                320: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                1200: {
                                    slidesPerView: 4,
                                },
                                1600: {
                                    slidesPerView: 5,
                                },
                            }}
                        >
                            {attrFilter(products, 'sale').map((item, index) => (
                                <SwiperSlide key={index}>
                                    <ProductTwelve product={item} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </TabPanel>

                <TabPanel>
                    {loading ? (
                        <Swiper
                            className="carousel-with-shadow"
                            modules={[Navigation]}
                            navigation
                            slidesPerView={5}
                            spaceBetween={20}
                            breakpoints={{
                                320: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                1200: {
                                    slidesPerView: 4,
                                },
                                1600: {
                                    slidesPerView: 5,
                                },
                            }}
                        >
                            {[1, 2, 3, 4, 5, 6].map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="skel-pro"></div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <Swiper
                            className="carousel-with-shadow"
                            modules={[Navigation]}
                            navigation
                            slidesPerView={5}
                            spaceBetween={20}
                            breakpoints={{
                                320: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                1200: {
                                    slidesPerView: 4,
                                },
                                1600: {
                                    slidesPerView: 5,
                                },
                            }}
                        >
                            {attrFilter(products, 'rated').map(
                                (item, index) => (
                                    <SwiperSlide key={index}>
                                        <ProductTwelve product={item} />
                                    </SwiperSlide>
                                )
                            )}
                        </Swiper>
                    )}
                </TabPanel>
            </div>
        </Tabs>
    );
};

export default SpecialCollection;
