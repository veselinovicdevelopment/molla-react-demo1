import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

import ProductNine from '~/components/features/products/ProductNine';
import ProductEleven from '~/components/features/products/ProductEleven';
import { Product } from '~/utils/types';

interface ShopListProps {
    loading?: boolean;
    products: Product[];
    perPage: number;
}

const ShopListOne = (props: ShopListProps) => {
    const { loading, products = [], perPage } = props;
    const router = useRouter();
    const [fakeArray, setFakeArray] = useState<number[]>([]);
    const [gridClass, setGridClass] = useState('col-6');
    const type = router.query.type;

    useEffect(() => {
        let temp = [] as number[];
        for (let i = 0; i < perPage; i++) {
            temp.push(i);
        }
        setFakeArray(temp);
    }, [perPage]);

    useEffect(() => {
        if (type === 'list' || type === '2cols') setGridClass('col-6');
        if (type === '3cols') setGridClass('col-6 col-md-4 col-lg-4');
        if (type === '4cols') setGridClass('col-6 col-md-4 col-lg-4 col-xl-3');
    }, [type]);

    return (
        <div className="products mb-3">
            {products.length == 0 && !loading ? (
                <p className="no-results">
                    No products matching your selection.
                </p>
            ) : (
                <>
                    {type == 'list' ? (
                        loading ? (
                            fakeArray.map((item, index) => (
                                <div
                                    className="skel-pro skel-pro-list"
                                    key={index}
                                ></div>
                            ))
                        ) : (
                            products.map((product: Product, index: number) => (
                                <ProductNine product={product} key={index} />
                            ))
                        )
                    ) : (
                        <div className="row">
                            {loading
                                ? fakeArray.map((item, index: number) => (
                                      <div className={gridClass} key={index}>
                                          <div className="skel-pro"></div>
                                      </div>
                                  ))
                                : products.map(
                                      (product: Product, index: number) => (
                                          <div
                                              className={gridClass}
                                              key={index}
                                          >
                                              <ProductEleven
                                                  product={product}
                                              />
                                          </div>
                                      )
                                  )}
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default React.memo(ShopListOne);
