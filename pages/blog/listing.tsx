import { useLazyQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import StickyBox from 'react-sticky-box';

import ALink from '~/components/features/alink';
import PageHeader from '~/components/features/page-header';
import PostTwo from '~/components/features/posts/post-two';
import BlogSidebar from '~/components/partials/blog/sidebar/blog-sidebar';

import { GET_POSTS_BY_PAGE } from '~/server/queries';
import { scrollToPageContent } from '~/utils';
import { Post } from '~/utils/types';

const BlogListing = () => {
    const router = useRouter();
    const [getPosts, { data, loading, error }] =
        useLazyQuery(GET_POSTS_BY_PAGE);
    const [toggle, setToggle] = useState(false);
    const posts: Post[] = data && data.postsByPage.data;
    const categories = data && data.postsByPage.categories;

    useEffect(() => {
        getPosts({
            variables: {
                page: 'listing',
                category: router.query.category,
            },
        });

        scrollToPageContent();
    }, [router.query]);

    useEffect(() => {
        window.addEventListener('resize', resizeHandle);
        resizeHandle();

        return () => {
            window.removeEventListener('resize', resizeHandle);
        };
    }, []);

    const resizeHandle = () => {
        if (document.querySelector('body').offsetWidth < 992) setToggle(true);
        else setToggle(false);
    };

    const toggleSidebar = () => {
        if (
            document
                .querySelector('body')
                .classList.contains('sidebar-filter-active')
        ) {
            document
                .querySelector('body')
                .classList.remove('sidebar-filter-active');
        } else {
            document
                .querySelector('body')
                .classList.add('sidebar-filter-active');
        }
    };

    const hideSidebar = () => {
        document
            .querySelector('body')
            .classList.remove('sidebar-filter-active');
    };

    if (error) {
        return <div></div>;
    }

    return (
        <div className="main">
            <PageHeader title="Blog Listing" subTitle="Blog" />
            <nav className="breadcrumb-nav">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <ALink href="/">Home</ALink>
                        </li>
                        <li className="breadcrumb-item">
                            <ALink href="/blog/classic">Blog</ALink>
                        </li>
                        <li className="breadcrumb-item active">Listing</li>
                    </ol>
                </div>
            </nav>
            <div className="page-content">
                <div className="container">
                    <div className="row skeleton-body">
                        <div className="col-lg-9">
                            {loading || !posts ? (
                                [1, 2, 3, 4, 5, 6].map((item) => (
                                    <div
                                        className="skel-list-post mb-6"
                                        key={item}
                                    ></div>
                                ))
                            ) : posts.length == 0 ? (
                                <p className="blogs-info">
                                    No posts were found matching your selection.
                                </p>
                            ) : (
                                posts.map((post, index) => (
                                    <PostTwo
                                        post={post}
                                        key={index}
                                        imageSize={5}
                                    ></PostTwo>
                                ))
                            )}
                        </div>
                        <div
                            className={`col-lg-3 skel-shop-sidebar skeleton-body ${
                                !loading ? 'loaded' : ''
                            }`}
                        >
                            <div className="skel-widget"></div>
                            <div className="skel-widget"></div>
                            <div className="skel-widget"></div>
                            <div className="skel-widget"></div>
                            <StickyBox
                                className="sticky-content"
                                offsetTop={70}
                            >
                                <BlogSidebar
                                    categories={categories}
                                    toggle={toggle}
                                />
                                {toggle ? (
                                    <button
                                        className="sidebar-fixed-toggler right"
                                        onClick={toggleSidebar}
                                    >
                                        <i className="icon-cog"></i>
                                    </button>
                                ) : (
                                    ''
                                )}
                                <div
                                    className="sidebar-filter-overlay"
                                    onClick={hideSidebar}
                                ></div>
                            </StickyBox>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogListing;
