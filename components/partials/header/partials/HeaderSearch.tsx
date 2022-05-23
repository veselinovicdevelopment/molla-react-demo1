import React, {
    ChangeEvent,
    FormEvent,
    MouseEvent,
    useEffect,
    useState,
} from 'react';
import { useRouter } from 'next/router';
import { useLazyQuery } from '@apollo/client';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/Alink';

import { GET_PRODUCTS } from '~/server/queries';
import { safeContent } from '~/utils';
import { Product } from '~/utils/types';

interface SearchProduct extends Product {
    minPrice?: number;
    maxPrice?: number;
}

const HeaderSearch = () => {
    const router = useRouter();
    const [cat, setCat] = useState<string>('');
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [products, setProducts] = useState<SearchProduct[]>([]);
    const [searchProducts, { data }] = useLazyQuery(GET_PRODUCTS);
    const result = data && data.products.data;
    const [timer, setTimer] = useState<ReturnType<typeof setTimeout>>();

    useEffect(() => {
        document
            .querySelector('body')!
            .addEventListener('click', closeSearchForm);

        return () => {
            document
                .querySelector('body')!
                .removeEventListener('click', closeSearchForm);
        };
    }, []);

    useEffect(() => {
        if (result && searchTerm.length > 2)
            setProducts(
                result.reduce((acc: Product[], product: Product) => {
                    let max = 0;
                    let min = 999999;
                    product.variants?.map((item) => {
                        if (min > item.price) min = item.price;
                        if (max < item.price) max = item.price;
                    }, []);

                    if (product.variants!.length == 0) {
                        min = product.sale_price
                            ? product.sale_price
                            : product.price;
                        max = product.price;
                    }

                    return [
                        ...acc,
                        {
                            ...product,
                            minPrice: min,
                            maxPrice: max,
                        },
                    ];
                }, [] as Product[])
            );
    }, [result, searchTerm]);

    useEffect(() => {
        if (searchTerm.length > 2) {
            if (timer) clearTimeout(timer);
            let timerId: ReturnType<typeof setTimeout> = setTimeout(() => {
                searchProducts({
                    variables: {
                        searchTerm: searchTerm,
                        category: cat,
                    },
                });
            }, 500);
            setTimer(timerId);
        }
    }, [searchTerm, cat]);

    useEffect(() => {
        document
            .querySelector('.header-search.show-results')
            ?.classList.remove('show-results');
    }, [router.pathname]);

    const matchEmphasize = (name: string) => {
        let regExp = new RegExp(searchTerm, 'i');
        return name.replace(
            regExp,
            (match) => '<strong>' + match + '</strong>'
        );
    };

    const closeSearchForm = () => {
        document
            .querySelector('.header .header-search')
            ?.classList.remove('show');
    };

    const onCatSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setCat(e.target.value);
    };

    const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const showSearchForm = (e: MouseEvent<HTMLFormElement>) => {
        document.querySelector('.header .header-search')?.classList.add('show');
    };

    const onSubmitSearchForm = (e: FormEvent) => {
        e.preventDefault();
        router.push({
            pathname: '/shop/sidebar/list',
            query: {
                searchTerm: searchTerm,
                category: cat,
            },
        });
    };

    const goProductPage = () => {
        setSearchTerm('');
        setProducts([]);
    };

    return (
        <div className="header-search header-search-extended header-search-visible header-search-no-radius d-none d-lg-block">
            <button className="search-toggle">
                <i className="icon-search"></i>
            </button>

            <form
                action="#"
                method="get"
                onSubmit={onSubmitSearchForm}
                onClick={showSearchForm}
            >
                <div className="header-search-wrapper search-wrapper-wide">
                    <label htmlFor="q" className="sr-only">
                        Search
                    </label>
                    <input
                        type="text"
                        onChange={onSearchChange}
                        value={searchTerm}
                        className="form-control"
                        name="q"
                        placeholder="Search product ..."
                        required
                    />
                    <button className="btn btn-primary" type="submit">
                        <i className="icon-search"></i>
                    </button>
                    <div className="live-search-list" onClick={goProductPage}>
                        {products.length > 0 && searchTerm.length > 2 ? (
                            <div className="autocomplete-suggestions">
                                {searchTerm.length > 2 &&
                                    products.map(
                                        (
                                            product: SearchProduct,
                                            index: number
                                        ) => (
                                            <ALink
                                                href={`/product/default/${product.slug}`}
                                                className="autocomplete-suggestion"
                                                key={`search-result-${index}`}
                                            >
                                                <LazyLoadImage
                                                    src={
                                                        process.env
                                                            .NEXT_PUBLIC_ASSET_URI! +
                                                        product.sm_pictures[0]
                                                            .url
                                                    }
                                                    width={40}
                                                    height={40}
                                                    alt="product"
                                                />
                                                <div
                                                    className="search-name"
                                                    dangerouslySetInnerHTML={safeContent(
                                                        matchEmphasize(
                                                            product.name
                                                        )
                                                    )}
                                                ></div>
                                                <span className="search-price">
                                                    {product.stock == 0 ? (
                                                        <div className="product-price mb-0">
                                                            <span className="out-price">
                                                                $
                                                                {product.price.toFixed(
                                                                    2
                                                                )}
                                                            </span>
                                                        </div>
                                                    ) : product.minPrice ==
                                                      product.maxPrice ? (
                                                        <div className="product-price mb-0">
                                                            $
                                                            {product.minPrice!.toFixed(
                                                                2
                                                            )}
                                                        </div>
                                                    ) : product.variants!
                                                          .length == 0 ? (
                                                        <div className="product-price mb-0">
                                                            <span className="new-price">
                                                                $
                                                                {product.minPrice!.toFixed(
                                                                    2
                                                                )}
                                                            </span>
                                                            <span className="old-price">
                                                                $
                                                                {product.maxPrice!.toFixed(
                                                                    2
                                                                )}
                                                            </span>
                                                        </div>
                                                    ) : (
                                                        <div className="product-price mb-0">
                                                            $
                                                            {product.minPrice!.toFixed(
                                                                2
                                                            )}
                                                            &ndash;$
                                                            {product.maxPrice!.toFixed(
                                                                2
                                                            )}
                                                        </div>
                                                    )}
                                                </span>
                                            </ALink>
                                        )
                                    )}
                            </div>
                        ) : (
                            ''
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default HeaderSearch;
