import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import PostOne from '~/components/features/posts/PostOne';

import { Post } from '~/utils/types';

interface RelatedPostsProps {
    loading?: boolean;
    related: Post[];
}

const RelatedPosts = (props: RelatedPostsProps) => {
    const { related = [], loading = false } = props;

    return (
        <div className="related-posts">
            <h3 className="title">Related Posts</h3>
            {!loading && related.length == 0 ? (
                <p className="blogs-info">No related posts were found.</p>
            ) : loading ? (
                <Swiper
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
                    {[1, 2, 3, 4].map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="skel-pro"></div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <Swiper
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
                    {related.map((post: Post, index) => (
                        <SwiperSlide key={index}>
                            <PostOne
                                post={post}
                                isContent={false}
                                isAuthor={false}
                                adClass="entry-grid"
                                key={'related_' + index}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
};

export default React.memo(RelatedPosts);
