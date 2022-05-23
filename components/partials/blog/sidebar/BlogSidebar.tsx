import { useRouter } from 'next/router';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/Alink';

interface BlogSidebarProps {
    toggle: boolean;
    categories: {
        slug: string;
        name: string;
        count: number;
    }[];
}

const BlogSidebar = (props: BlogSidebarProps) => {
    const { categories = [], toggle = false } = props;
    const router = useRouter();
    const query = router.query;

    return (
        <div
            className={`sidebar mt-0 ${
                toggle ? 'sidebar-filter px-3 right pt-3' : ''
            }`}
        >
            <div className="widget widget-search">
                <h3 className="widget-title">Search</h3>

                <form action="#" method="get">
                    <div className="header-search-wrapper search-wrapper-wide">
                        <label htmlFor="ws" className="sr-only">
                            Search in blog
                        </label>
                        <input
                            type="search"
                            className="form-control"
                            name="ws"
                            id="ws"
                            placeholder="Search in blog"
                            required
                        />
                        <button type="submit" className="btn">
                            <i className="icon-search"></i>
                            <span className="sr-only">Search</span>
                        </button>
                    </div>
                </form>
            </div>

            <div className="widget widget-cats">
                <h3 className="widget-title">Categories</h3>

                <ul>
                    {router.pathname.includes('single')
                        ? categories.map((category, index) => (
                              <li key={index}>
                                  <ALink
                                      href={{
                                          pathname: '/blog/classic/',
                                          query: { category: category.slug },
                                      }}
                                      className={`${
                                          query.category == category.slug
                                              ? 'active'
                                              : ''
                                      }`}
                                      scroll={false}
                                  >
                                      {category.name}
                                      <span>{category.count}</span>
                                  </ALink>
                              </li>
                          ))
                        : categories.map((category, index) => (
                              <li key={index}>
                                  <ALink
                                      href={{
                                          pathname: router.pathname,
                                          query: { category: category.slug },
                                      }}
                                      className={`${
                                          query.category == category.slug
                                              ? 'active'
                                              : ''
                                      }`}
                                      scroll={false}
                                  >
                                      {category.name}
                                      <span>{category.count}</span>
                                  </ALink>
                              </li>
                          ))}
                </ul>
            </div>

            <div className="widget">
                <h3 className="widget-title">Popular Posts</h3>

                <ul className="posts-list">
                    <li>
                        <figure className="position-relative">
                            <ALink
                                href="/blog/single/default/sed-adipiscing-ornare."
                                className="w-100"
                            >
                                <div className="lazy-overlay"></div>

                                <LazyLoadImage
                                    alt="Post"
                                    src={
                                        process.env.NEXT_PUBLIC_ASSET_URI! +
                                        '/uploads/post_1_b9361c0eac.jpg'
                                    }
                                    threshold={500}
                                    effect="blur"
                                    height="80"
                                />
                            </ALink>
                        </figure>

                        <div>
                            <span>Nov 22, 2018</span>
                            <h4>
                                <ALink href="/blog/single/default/sed-adipiscing-ornare.">
                                    Sed adipiscing ornare..
                                </ALink>
                            </h4>
                        </div>
                    </li>
                    <li>
                        <figure className="position-relative">
                            <ALink
                                href="/blog/single/default/fusce-pellentesque-suscipit."
                                className="w-100"
                            >
                                <div className="lazy-overlay"></div>

                                <LazyLoadImage
                                    alt="Post"
                                    src={
                                        process.env.NEXT_PUBLIC_ASSET_URI! +
                                        '/uploads/post_4_be80872f91.jpg'
                                    }
                                    threshold={500}
                                    effect="blur"
                                    height="80"
                                />
                            </ALink>
                        </figure>

                        <div>
                            <span>Nov 19, 2018</span>
                            <h4>
                                <ALink href="/blog/single/default/fusce-pellentesque-suscipit.">
                                    Fusce pellentesque suscipit.
                                </ALink>
                            </h4>
                        </div>
                    </li>
                    <li>
                        <figure className="position-relative">
                            <ALink
                                href="/blog/single/default/donec-nec-justo-eget-felis-facilisis-fermentum."
                                className="w-100"
                            >
                                <div className="lazy-overlay"></div>

                                <LazyLoadImage
                                    alt="Post"
                                    src={
                                        process.env.NEXT_PUBLIC_ASSET_URI! +
                                        '/uploads/post_5_3c9d9563f6.jpg'
                                    }
                                    threshold={500}
                                    effect="blur"
                                    height="80"
                                />
                            </ALink>
                        </figure>

                        <div>
                            <span>Nov 12, 2018</span>
                            <h4>
                                <ALink href="/blog/single/default/donec-nec-justo-eget-felis-facilisis-fermentum.">
                                    Donec nec justo eget felis facilisis
                                    fermentum.
                                </ALink>
                            </h4>
                        </div>
                    </li>
                    <li>
                        <figure className="position-relative">
                            <ALink
                                href="/blog/single/default/vivamus-vestibulum-ngtulla-necante."
                                className="w-100"
                            >
                                <div className="lazy-overlay"></div>

                                <LazyLoadImage
                                    alt="Post"
                                    src={
                                        process.env.NEXT_PUBLIC_ASSET_URI! +
                                        '/uploads/post_2_a2b4601de7.jpg'
                                    }
                                    threshold={500}
                                    effect="blur"
                                    height="80"
                                />
                            </ALink>
                        </figure>

                        <div>
                            <span>Nov 25, 2018</span>
                            <h4>
                                <ALink href="/blog/single/default/vivamus-vestibulum-ngtulla-necante.">
                                    Vivamus vestibulum ngtulla necante.
                                </ALink>
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="widget widget-banner-sidebar">
                <div className="banner-sidebar-title">ad box 280 x 280</div>

                <div className="banner-sidebar banner-overlay">
                    <ALink href="/shop/sidebar/3cols" className="w-100">
                        <div className="lazy-overlay"></div>
                        <LazyLoadImage
                            alt="banner"
                            src="images/blog/sidebar/banner.jpg"
                            threshold={500}
                            height={277}
                            width="280"
                            effect="opacity"
                        />
                    </ALink>
                    <div className="banner-content text-left">
                        <p className="mb-1">online & in-store</p>
                        <h3 className="banner-subtitle text-uppercase">
                            Spring Sale
                        </h3>
                        <h2 className="banner-title">
                            Up to 60% off
                            <br />
                            from $55
                        </h2>
                        <ALink
                            href="/shop/sidebar/3cols"
                            className="btn btn-outline btn-md btn-outline-white text-uppercase m-0"
                        >
                            Shop Now
                        </ALink>
                    </div>
                </div>
            </div>

            <div className="widget">
                <h3 className="widget-title">Browse Tags</h3>

                <div className="tagcloud">
                    <ALink href="#">fashion</ALink>
                    <ALink href="#">style</ALink>
                    <ALink href="#">women</ALink>
                    <ALink href="#">photography</ALink>
                    <ALink href="#">travel</ALink>
                    <ALink href="#">shopping</ALink>
                    <ALink href="#">hobbies</ALink>
                </div>
            </div>

            <div className="widget widget-text">
                <h3 className="widget-title">About Blog</h3>

                <div className="widget-text-content">
                    <p>
                        Vestibulum volutpat, lacus a ultrices sagittis, mi neque
                        euismod dui, pulvinar nunc sapien ornare nisl.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default React.memo(BlogSidebar);
