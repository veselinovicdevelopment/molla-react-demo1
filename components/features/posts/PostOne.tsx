import { connect } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import ALink from '~/components/features/Alink';

import { actions as demoAction } from '~/store/demo';

import { Post } from '~/utils/types';
import { MouseEvent } from 'react';

interface PostProps {
    post: Post;
    adClass?: string;
    isContent?: boolean;
    isAuthor?: boolean;
    showVideo: () => void;
}

const PostOne = (props: PostProps) => {
    const { post, adClass = '', isContent = true, isAuthor = true } = props;
    const openVideoModal = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        props.showVideo();
    };

    const date = new Date(post.date);
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        timeZone: 'UTC',
    };

    return (
        <article className={`entry ${adClass}`}>
            {post.image.length <= 1 ? (
                <figure
                    className={`entry-media ${
                        post.type == 'video' ? 'entry-video' : ''
                    }`}
                    style={{
                        paddingTop: `${
                            (post.image[0].height / post.image[0].width) * 100
                        }%`,
                    }}
                >
                    {post.type !== 'video' ? (
                        <ALink href={`/blog/single/default/${post.slug}`}>
                            <div className="lazy-overlay"></div>

                            <LazyLoadImage
                                alt="Post"
                                src={
                                    process.env.NEXT_PUBLIC_ASSET_URI! +
                                    post.image[0].url
                                }
                                threshold={500}
                                effect="blur"
                                height="auto"
                            />
                        </ALink>
                    ) : (
                        <>
                            <ALink href={`/blog/single/default/${post.slug}`}>
                                <div className="lazy-overlay"></div>

                                <LazyLoadImage
                                    alt="Post"
                                    src={
                                        process.env.NEXT_PUBLIC_ASSET_URI! +
                                        post.image[0].url
                                    }
                                    threshold={500}
                                    effect="blur"
                                    height="auto"
                                />
                            </ALink>
                            <a
                                href="https://www.youtube.com/watch?v=vBPgmASQ1A0"
                                onClick={openVideoModal}
                                className="btn-video btn-iframe"
                            >
                                <i className="icon-play"></i>
                            </a>
                        </>
                    )}
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
                                            process.env.NEXT_PUBLIC_ASSET_URI! +
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
                    {isAuthor ? (
                        <>
                            <span className="entry-author">
                                by{' '}
                                <ALink
                                    href={`/blog/single/default/${post.slug}`}
                                >
                                    {post.author}
                                </ALink>
                            </span>
                            <span className="meta-separator">|</span>
                        </>
                    ) : (
                        ''
                    )}
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
                {isContent ? (
                    <div className="entry-content">
                        <p>{post.content}</p>
                        <ALink
                            href={`/blog/single/default/${post.slug}`}
                            className="read-more"
                        >
                            Continue Reading
                        </ALink>
                    </div>
                ) : (
                    ''
                )}
            </div>
        </article>
    );
};

export default connect(null, { ...demoAction })(PostOne);
