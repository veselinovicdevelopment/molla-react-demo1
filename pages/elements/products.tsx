import { useQuery } from '@apollo/client';
import { Swiper, SwiperSlide } from 'swiper/react';

import ALink from '~/components/features/Alink';
import PageHeader from '~/components/features/PageHeader';
import ElementList from '~/components/partials/elements/ElementList';

import ProductOne from '~/components/features/products/ProductOne';
import ProductTwo from '~/components/features/products/ProductTwo';
import ProductThree from '~/components/features/products/ProductThree';
import ProductFour from '~/components/features/products/ProductFour';
import ProductFive from '~/components/features/products/ProductFive';
import ProductSix from '~/components/features/products/ProductSix';
import ProductSeven from '~/components/features/products/ProductSeven';

import { GET_ELEMENT_PRODUCTS } from '~/server/queries';
import { Product } from '~/utils/types';

const Products = () => {
    const { data, loading, error } = useQuery(GET_ELEMENT_PRODUCTS);
    const products: Product[] = data && data.elementProducts;
    const productGroup1: Product[] = data && data.elementProducts.slice(0, 3);
    const productGroup2: Product[] = data && data.elementProducts.slice(0, 4);
    const productGroup3: Product[] = data && data.elementProducts.slice(0, 5);

    if (error) {
        return <div></div>;
    }

    return (
        <div className="main">
            <PageHeader title="Products" subTitle="Elements" />
            <nav className="breadcrumb-nav">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <ALink href="/">Home</ALink>
                        </li>
                        <li className="breadcrumb-item">
                            <ALink href="/elements">Elements</ALink>
                        </li>
                        <li className="breadcrumb-item active">Products</li>
                    </ol>
                </div>
            </nav>

            <div className="page-content skeleton-body">
                <div className="container">
                    <h2 className="title text-center mb-3">3 Columns Large</h2>

                    <div className="row">
                        {loading
                            ? [1, 2, 3].map((item, index) => (
                                  <div
                                      className="col-6 col-md-4 col-lg-4 mb-2"
                                      key={index}
                                  >
                                      <div className="skel-pro"></div>
                                  </div>
                              ))
                            : productGroup1.map((item, index) => (
                                  <div
                                      className="col-6 col-md-4 col-lg-4"
                                      key={`one_${index}`}
                                  >
                                      <ProductOne product={item} />
                                  </div>
                              ))}
                    </div>

                    <hr className="mt-1 mb-5" />

                    <h2 className="title text-center mb-3">
                        4 Columns Carousel
                    </h2>
                    {loading ? (
                        <Swiper
                            className="carousel-with-shadow"
                            slidesPerView={4}
                            spaceBetween={20}
                            breakpoints={{
                                0: {
                                    slidesPerView: 2,
                                },
                                992: {
                                    slidesPerView: 3,
                                },
                                1200: {
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
                                0: {
                                    slidesPerView: 2,
                                },
                                992: {
                                    slidesPerView: 3,
                                },
                                1200: {
                                    slidesPerView: 4,
                                },
                            }}
                        >
                            {productGroup2.map((product, index) => (
                                <SwiperSlide key={index}>
                                    <ProductTwo product={product} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}

                    <hr className="mt-3 mb-5" />

                    <h2 className="title text-center mb-3">
                        4 Columns Carousel 2
                    </h2>
                    {loading ? (
                        <Swiper
                            className="carousel-with-shadow"
                            slidesPerView={4}
                            spaceBetween={20}
                            breakpoints={{
                                0: {
                                    slidesPerView: 2,
                                },
                                992: {
                                    slidesPerView: 3,
                                },
                                1200: {
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
                                0: {
                                    slidesPerView: 2,
                                },
                                992: {
                                    slidesPerView: 3,
                                },
                                1200: {
                                    slidesPerView: 4,
                                },
                            }}
                        >
                            {productGroup2.map((product, index) => (
                                <SwiperSlide key={index}>
                                    <ProductThree product={product} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}

                    <hr className="mt-3 mb-5" />

                    <h2 className="title text-center mb-3">4 Columns Simple</h2>

                    <div className="row">
                        {loading
                            ? [1, 2, 3, 4].map((item, index) => (
                                  <div
                                      className="col-6 col-md-4 col-lg-3 mb-2"
                                      key={index}
                                  >
                                      <div className="skel-pro"></div>
                                  </div>
                              ))
                            : productGroup2.map((product, index) => (
                                  <div
                                      className="col-6 col-md-4 col-lg-3"
                                      key={index}
                                  >
                                      <ProductFour product={product} />
                                  </div>
                              ))}
                    </div>

                    <hr className="mt-2 mb-5" />
                    <h2 className="title text-center mb-3">5 Columns Simple</h2>
                    {loading ? (
                        <Swiper
                            className="carousel-with-shadow"
                            slidesPerView={5}
                            spaceBetween={20}
                            breakpoints={{
                                0: {
                                    slidesPerView: 2,
                                },
                                480: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                992: {
                                    slidesPerView: 4,
                                },
                                1200: {
                                    slidesPerView: 5,
                                },
                            }}
                        >
                            {[1, 2, 3, 4, 5].map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="skel-pro"></div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <Swiper
                            className="carousel-with-shadow"
                            slidesPerView={5}
                            spaceBetween={20}
                            breakpoints={{
                                0: {
                                    slidesPerView: 2,
                                },
                                480: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                992: {
                                    slidesPerView: 4,
                                },
                                1200: {
                                    slidesPerView: 5,
                                },
                            }}
                        >
                            {productGroup3.map((product, index) => (
                                <SwiperSlide key={index}>
                                    <ProductFive product={product} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                    <hr className="mt-0 mb-5" />
                </div>

                <div className="container-fluid">
                    <h2 className="title text-center mb-3">Fullwidth</h2>

                    <div className="row">
                        {loading
                            ? [1, 2, 3, 4].map((item, index) => (
                                  <div
                                      className="col-6 col-md-4 col-lg-3 col-xl-2 mb-2"
                                      key={index}
                                  >
                                      <div className="skel-pro"></div>
                                  </div>
                              ))
                            : products.map((product, index) => (
                                  <div
                                      className="col-6 col-md-4 col-lg-3 col-xl-2"
                                      key={index}
                                  >
                                      <ProductSix product={product} />
                                  </div>
                              ))}
                    </div>
                </div>

                <div className="container">
                    <hr className="mt-2 mb-5" />
                    <h2 className="title text-center mb-3">
                        4 Columns Without Space
                    </h2>

                    <div className="row no-gutters">
                        {loading
                            ? [1, 2, 3, 4].map((item, index) => (
                                  <div
                                      className="col-sm-6 col-12 col-md-4 col-lg-3 mb-2"
                                      key={index}
                                  >
                                      <div className="skel-pro"></div>
                                  </div>
                              ))
                            : productGroup2.map((product, index) => (
                                  <div
                                      className="col-sm-6 col-12 col-md-4 col-lg-3"
                                      key={index}
                                  >
                                      <ProductSeven product={product} />
                                  </div>
                              ))}
                    </div>
                </div>
            </div>

            <ElementList />
        </div>
    );
};

export default Products;
