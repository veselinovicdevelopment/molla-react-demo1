import { useQuery } from '@apollo/client';
import { MouseEvent, useEffect, useRef } from 'react';

import ALink from '~/components/features/alink';
import PageHeader from '~/components/features/page-header';
import PostOne from '~/components/features/posts/post-one';

import { GET_POSTS_BY_PAGE } from '~/server/queries';
import { Post } from '~/utils/types';

const BlogMasonry2Cols = () => {
    const { data, loading, error } = useQuery(GET_POSTS_BY_PAGE, {
        variables: { page: 'masonry-2' },
    });
    const ref = useRef();
    const posts: Post[] = data && data.postsByPage.data;

    const getPostCategory = (post: Post) => {
        return post.blog_categories.reduce((acc, cur) => {
            return acc + ' ' + cur.slug;
        }, '');
    };

    if (error) {
        return <div></div>;
    }

    return (
        <div className="main">
            <PageHeader title="Blog Masonry 2 Columns" subTitle="Blog" />
            <nav className="breadcrumb-nav">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <ALink href="/">Home</ALink>
                        </li>
                        <li className="breadcrumb-item">
                            <ALink href="/blog/classic">Blog</ALink>
                        </li>
                        <li className="breadcrumb-item active">
                            Masonry 2 Columns
                        </li>
                    </ol>
                </div>
            </nav>

            <div className="page-content">
                <div
                    className={`container skeleton-body ${
                        loading ? '' : 'loaded'
                    }`}
                >
                    {loading || !posts ? (
                        <div className="row">
                            {[1, 2, 3, 4, 5, 6].map((item) => (
                                <div className="col-sm-6" key={item}>
                                    <div className="skel-grid-post"></div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <>
                            <nav className="blog-nav">
                                <ul className="menu-cat entry-filter justify-content-center">
                                    <li className="active">
                                        <ALink href="/blog/listing">
                                            All Blog Posts
                                            <span>6</span>
                                        </ALink>
                                    </li>
                                    <li>
                                        <ALink href="/blog/listing?category=lifestyle">
                                            Lifestyle
                                            <span>3</span>
                                        </ALink>
                                    </li>
                                    <li>
                                        <ALink href="/blog/listing?category=shopping">
                                            Shopping
                                            <span>1</span>
                                        </ALink>
                                    </li>
                                    <li>
                                        <ALink href="/blog/listing?category=travel">
                                            Travel
                                            <span>2</span>
                                        </ALink>
                                    </li>
                                    <li>
                                        <ALink href="/blog/listing?category=hobbies">
                                            Hobbies
                                            <span>2</span>
                                        </ALink>
                                    </li>
                                    <li>
                                        <ALink href="/blog/listing?category=fashion">
                                            Fashion
                                            <span>1</span>
                                        </ALink>
                                    </li>
                                </ul>
                            </nav>
                            {posts.length == 0 ? (
                                <div className="row">
                                    <p className="blogs-info">
                                        No posts were found matching your
                                        selection.
                                    </p>
                                </div>
                            ) : (
                                <div className="row" ref={ref}>
                                    {posts.map((post, index) => (
                                        <div
                                            className={`col-sm-6 grid-item${getPostCategory(
                                                post
                                            )}`}
                                            key={index}
                                        >
                                            <PostOne
                                                post={post}
                                                adClass="text-center"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogMasonry2Cols;
