import { connect } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import ALink from '~/components/features/alink';

import { actions as demoAction } from '~/store/demo';

import { Post } from '~/utils/types';

interface PostProps {
    post: Post;
    adClass?: string;
}

const PostThree = (props: PostProps) => {
    const { post, adClass = '' } = props;

    const date = new Date(post.date);
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        timeZone: 'UTC',
    };

    return (
        <article className={`entry entry-mask ${adClass}`}>
            {post.image.length <= 1 ? (
                <figure
                    className="entry-media"
                    style={{
                        paddingTop: `${
                            (post.image[0].height / post.image[0].width) * 100
                        }%`,
                    }}
                >
                    <ALink href={`/blog/single/default/${post.slug}`}>
                        <div className="lazy-overlay"></div>

                        <LazyLoadImage
                            alt="Post"
                            src={
                                process.env.NEXT_PUBLIC_ASSET_URI +
                                post.image[0].url
                            }
                            threshold={500}
                            effect="blur"
                            height="auto"
                        />
                    </ALink>
                </figure>
            ) : (
                <figure
                    className="entry-media"
                    style={{
                        paddingTop: `${
                            (post.image[0].height / post.image[0].width) * 100
                        }%`,
                    }}
                >
                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={1}
                        spaceBetween={0}
                        navigation
                    >
                        {post.image.map((item, index) => (
                            <SwiperSlide key={index}>
                                <ALink
                                    href={`/blog/single/default/${post.slug}`}
                                >
                                    <div className="lazy-overlay"></div>

                                    <LazyLoadImage
                                        alt="Post"
                                        src={`${
                                            process.env.NEXT_PUBLIC_ASSET_URI +
                                            item.url
                                        }`}
                                        threshold={500}
                                        effect="blur"
                                    />
                                </ALink>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </figure>
            )}
            <div className="entry-body">
                <div className="entry-meta">
                    <ALink href={`/blog/single/default/${post.slug}`}>
                        {date.toLocaleDateString('en-US', options)}
                    </ALink>
                    <span className="meta-separator">|</span>
                    <ALink href={`/blog/single/default/${post.slug}`}>
                        {post.comments} Comments
                    </ALink>
                </div>

                <h2 className="entry-title">
                    <ALink href={`/blog/single/default/${post.slug}`}>
                        {post.title}
                    </ALink>
                </h2>

                <div className="entry-cats">
                    in&nbsp;
                    {post.blog_categories.map((cat, index) => (
                        <span key={index}>
                            <ALink
                                href={{
                                    pathname: '/blog/classic',
                                    query: { category: cat.slug },
                                }}
                            >
                                {cat.name}
                            </ALink>
                            {index < post.blog_categories.length - 1
                                ? ', '
                                : ''}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
};

export default connect(null, { ...demoAction })(PostThree);
