import { NextPage } from 'next';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Swiper, SwiperSlide } from 'swiper/react';

import ALink from '~/components/features/alink';

import { homeData, mainSlider5, mainSlider9 } from '~/utils/data';

const About: NextPage = () => {
    return (
        <div className="main">
            <nav className="breadcrumb-nav border-0 mb-0">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <ALink href="/">Home</ALink>
                        </li>
                        <li className="breadcrumb-item">
                            <ALink href="#">Pages</ALink>
                        </li>
                        <li className="breadcrumb-item active">About us</li>
                    </ol>
                </div>
            </nav>

            <div className="container">
                <div
                    className="page-header page-header-big text-center"
                    style={{
                        backgroundImage: `url(images/about-header-bg.jpg)`,
                    }}
                >
                    <h1 className="page-title text-white">
                        About us<span className="text-white">Who we are</span>
                    </h1>
                </div>
            </div>

            <div className="page-content pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-3 mb-lg-0">
                            <h2 className="title">Our Vision</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit. Phasellus hendrerit.
                                Pellentesque aliquet nibh nec urna. In nisi
                                neque, aliquet vel, dapibus id, mattis vel,
                                nisi. Sed pretium, ligula sollicitudin laoreet
                                viverra, tortor libero sodales leo, eget blandit
                                nunc tortor eu nibh.{' '}
                            </p>
                        </div>

                        <div className="col-lg-6">
                            <h2 className="title">Our Mission</h2>
                            <p>
                                Sed egestas, ante et vulputate volutpat, eros
                                pede semper est, vitae luctus metus libero eu
                                augue. Morbi purus libero, faucibus adipiscing,
                                commodo quis, gravida id, est. Sed lectus.{' '}
                                <br />
                                Praesent elementum hendrerit tortor. Sed semper
                                lorem at felis.{' '}
                            </p>
                        </div>
                    </div>

                    <div className="mb-5"></div>
                </div>

                <div className="bg-light-2 pt-6 pb-5 mb-6 mb-lg-8">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 mb-3 mb-lg-0">
                                <h2 className="title">Who We Are</h2>
                                <p className="lead text-primary mb-3">
                                    Pellentesque odio nisi, euismod pharetra a
                                    ultricies <br />
                                    in diam. Sed arcu. Cras consequat
                                </p>
                                <p className="mb-2">
                                    Sed pretium, ligula sollicitudin laoreet
                                    viverra, tortor libero sodales leo, eget
                                    blandit nunc tortor eu nibh. Suspendisse
                                    potenti. Sed egestas, ante et vulputate
                                    volutpat, uctus metus libero eu augue.{' '}
                                </p>

                                <ALink
                                    href="/blog/classic"
                                    className="btn btn-sm btn-minwidth btn-outline-primary-2"
                                >
                                    <span>VIEW OUR NEWS</span>
                                    <i className="icon-long-arrow-right"></i>
                                </ALink>
                            </div>

                            <div className="col-lg-6 offset-lg-1">
                                <div className="about-images">
                                    <img
                                        src="images/about/img-1.jpg"
                                        alt=""
                                        className="about-img-front"
                                    />
                                    <img
                                        src="images/about/img-2.jpg"
                                        alt=""
                                        className="about-img-back"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="brands-text">
                                <h2 className="title">
                                    The world's premium design brands in one
                                    destination.
                                </h2>
                                <p>
                                    Phasellus hendrerit. Pellentesque aliquet
                                    nibh nec urna. In nisi neque, aliquet vel,
                                    dapibus id, mattis vel, nis
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="brands-display">
                                <div className="row justify-content-center">
                                    {homeData.brands.map((brand, index) => (
                                        <div
                                            className="col-6 col-sm-4"
                                            key={index}
                                        >
                                            <ALink href="#" className="brand">
                                                <img
                                                    src={brand.image}
                                                    alt="Brand Name"
                                                    width={brand.width}
                                                    height={brand.height}
                                                />
                                            </ALink>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="mt-4 mb-6" />

                    <h2 className="title text-center mb-4">Meet Our Team</h2>

                    <Swiper
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
                        <SwiperSlide>
                            <div className="member member-anim text-center">
                                <figure className="member-media">
                                    <div className="lazy-overlay"></div>
                                    <LazyLoadImage
                                        alt="member"
                                        src="images/team/member-1.jpg"
                                        threshold={500}
                                        effect="opacity"
                                        height={500}
                                        width={376}
                                    />

                                    <figcaption className="member-overlay">
                                        <div className="member-overlay-content">
                                            <h3 className="member-title">
                                                Samanta Grey
                                                <span>Founder & CEO</span>
                                            </h3>
                                            <p>
                                                Sed pretium, ligula sollicitudin
                                                viverra, tortor libero sodales
                                                leo, eget blandit nunc.
                                            </p>
                                            <div className="social-icons social-icons-simple">
                                                <ALink
                                                    href="#"
                                                    className="social-icon"
                                                    title="Facebook"
                                                >
                                                    <i className="icon-facebook-f"></i>
                                                </ALink>
                                                <ALink
                                                    href="#"
                                                    className="social-icon"
                                                    title="Twitter"
                                                >
                                                    <i className="icon-twitter"></i>
                                                </ALink>
                                                <ALink
                                                    href="#"
                                                    className="social-icon"
                                                    title="Instagram"
                                                >
                                                    <i className="icon-instagram"></i>
                                                </ALink>
                                            </div>
                                        </div>
                                    </figcaption>
                                </figure>

                                <div className="member-content">
                                    <h3 className="member-title">
                                        Samanta Grey
                                        <span>Founder & CEO</span>
                                    </h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="member member-anim text-center">
                                <figure className="member-media">
                                    <div className="lazy-overlay"></div>
                                    <LazyLoadImage
                                        alt="member"
                                        src="images/team/member-2.jpg"
                                        threshold={500}
                                        effect="opacity"
                                        height={500}
                                        width={376}
                                    />

                                    <figcaption className="member-overlay">
                                        <div className="member-overlay-content">
                                            <h3 className="member-title">
                                                Bruce Sutton
                                                <span>
                                                    Sales & Marketing Manager
                                                </span>
                                            </h3>
                                            <p>
                                                Sed pretium, ligula sollicitudin
                                                viverra, tortor libero sodales
                                                leo, eget blandit nunc.
                                            </p>
                                            <div className="social-icons social-icons-simple">
                                                <ALink
                                                    href="#"
                                                    className="social-icon"
                                                    title="Facebook"
                                                >
                                                    <i className="icon-facebook-f"></i>
                                                </ALink>
                                                <ALink
                                                    href="#"
                                                    className="social-icon"
                                                    title="Twitter"
                                                >
                                                    <i className="icon-twitter"></i>
                                                </ALink>
                                                <ALink
                                                    href="#"
                                                    className="social-icon"
                                                    title="Instagram"
                                                >
                                                    <i className="icon-instagram"></i>
                                                </ALink>
                                            </div>
                                        </div>
                                    </figcaption>
                                </figure>

                                <div className="member-content">
                                    <h3 className="member-title">
                                        Bruce Sutton
                                        <span>Sales & Marketing Manager</span>
                                    </h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="member member-anim text-center">
                                <figure className="member-media">
                                    <div className="lazy-overlay"></div>
                                    <LazyLoadImage
                                        alt="member"
                                        src="images/team/member-3.jpg"
                                        threshold={500}
                                        effect="opacity"
                                        height={500}
                                        width={376}
                                    />

                                    <figcaption className="member-overlay">
                                        <div className="member-overlay-content">
                                            <h3 className="member-title">
                                                Janet Joy
                                                <span>Product Manager</span>
                                            </h3>
                                            <p>
                                                Sed pretium, ligula sollicitudin
                                                viverra, tortor libero sodales
                                                leo, eget blandit nunc.
                                            </p>
                                            <div className="social-icons social-icons-simple">
                                                <ALink
                                                    href="#"
                                                    className="social-icon"
                                                    title="Facebook"
                                                >
                                                    <i className="icon-facebook-f"></i>
                                                </ALink>
                                                <ALink
                                                    href="#"
                                                    className="social-icon"
                                                    title="Twitter"
                                                >
                                                    <i className="icon-twitter"></i>
                                                </ALink>
                                                <ALink
                                                    href="#"
                                                    className="social-icon"
                                                    title="Instagram"
                                                >
                                                    <i className="icon-instagram"></i>
                                                </ALink>
                                            </div>
                                        </div>
                                    </figcaption>
                                </figure>

                                <div className="member-content">
                                    <h3 className="member-title">
                                        Janet Joy
                                        <span>Product Manager</span>
                                    </h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="mb-2"></div>

                <div
                    className="about-testimonials bg-light-2 pt-6 pb-6 position-relative"
                    style={{ marginBottom: '-1px' }}
                >
                    <div className="container">
                        <h2 className="title text-center mb-3">
                            What Customer Say About Us
                        </h2>

                        <Swiper spaceBetween={20} slidesPerView={1}>
                            <SwiperSlide>
                                <blockquote className="testimonial text-center">
                                    <img
                                        src="images/testimonials/user-1.jpg"
                                        alt="user"
                                    />
                                    <p>
                                        “ Lorem ipsum dolor sit amet,
                                        consectetuer adipiscing elit.
                                        Pellentesque aliquet nibh nec urna.{' '}
                                        <br />
                                        In nisi neque, aliquet vel, dapibus id,
                                        mattis vel, nisi. Sed pretium, ligula
                                        sollicitudin laoreet viverra, tortor
                                        libero sodales leo, eget blandit nunc
                                        tortor eu nibh. Nullam mollis. Ut justo.
                                        Suspendisse potenti. ”
                                    </p>
                                    <cite>
                                        Jenson Gregory
                                        <span>Customer</span>
                                    </cite>
                                </blockquote>
                            </SwiperSlide>
                            <SwiperSlide>
                                <blockquote className="testimonial text-center">
                                    <img
                                        src="images/testimonials/user-2.jpg"
                                        alt="user"
                                    />
                                    <p>
                                        “ Impedit, ratione sequi, sunt incidunt
                                        magnam et. Delectus obcaecati optio eius
                                        error libero perferendis nesciunt atque
                                        dolores magni recusandae! Doloremque
                                        quidem error eum quis similique
                                        doloribus natus qui ut ipsum.Velit quos
                                        ipsa exercitationem, vel unde obcaecati
                                        impedit eveniet non. ”
                                    </p>

                                    <cite>
                                        Victoria Ventura
                                        <span>Customer</span>
                                    </cite>
                                </blockquote>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
