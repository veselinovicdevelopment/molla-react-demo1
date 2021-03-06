import React from 'react';
import ProductFive from '~/components/features/products/ProductFive';
import { Product } from '~/utils/types';

interface ShopListProps {
    products: Product[];
    loading: boolean;
}

const ShopListThree = (props: ShopListProps) => {
    const { products = [], loading } = props;
    const fakeArray = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div
            className={`products mb-3 skeleton-body skel-shop-products ${
                loading ? '' : 'loaded'
            }`}
        >
            {products.length == 0 && !loading ? (
                <p className="no-results">
                    No products matching your selection.
                </p>
            ) : (
                <div className="row">
                    {loading
                        ? fakeArray.map((item, index) => (
                              <div
                                  className="col-6 col-md-4 col-xl-3 mb-2"
                                  key={index}
                              >
                                  <div className="skel-pro"></div>
                              </div>
                          ))
                        : products.map((product: Product, index: number) => (
                              <div
                                  className="col-6 col-md-4 col-xl-3"
                                  key={index}
                              >
                                  <ProductFive product={product} />
                              </div>
                          ))}
                </div>
            )}
        </div>
    );
};

export default React.memo(ShopListThree);
