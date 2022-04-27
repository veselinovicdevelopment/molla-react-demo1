import { Swiper, SwiperSlide } from 'swiper/react';
import Fade from 'react-reveal/Fade';

import ALink from '~/components/features/alink';
import PostFour from '~/components/features/posts/post-four';
import { Post } from '~/utils/types';

interface BlogCollectionProps {
    loading: boolean;
    posts: Post[];
}

const BlogCollection = (props: BlogCollectionProps) => {
    const { loading, posts = [] } = props;

    return (
        <section className="blog-posts">
            <div className="container">
                <h2 className="title text-center">From Our Blog</h2>

                {loading || posts.length == 0 ? (
                    <Swiper
                        className="carousel-with-shadow"
                        slidesPerView={3}
                        spaceBetween={20}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            600: {
                                slidesPerView: 2,
                            },
                            992: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {[0, 1, 2, 3, 4].map((item: number, index: number) => (
                            <SwiperSlide key={index}>
                                <div className="skel-pro"></div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <Swiper
                        className="carousel-with-shadow"
                        slidesPerView={3}
                        spaceBetween={20}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            600: {
                                slidesPerView: 2,
                            },
                            992: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {posts.map((item: Post, index: number) => (
                            <SwiperSlide key={index}>
                                <Fade delay={100} duration={1000}>
                                    <PostFour post={item} />
                                </Fade>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}

                <div className="text-center mb-7 mt-2">
                    <ALink
                        href="/blog/classic"
                        className="btn btn-outline-darker btn-more"
                    >
                        <span>View more articles</span>
                        <i className="icon-long-arrow-right"></i>
                    </ALink>
                </div>
            </div>
        </section>
    );
};

export default BlogCollection;
