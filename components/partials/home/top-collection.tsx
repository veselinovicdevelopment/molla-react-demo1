import { Tab, Tabs, TabPanel, TabList } from 'react-tabs';

import ProductTwelve from '~/components/features/products/product-twelve';

import { catFilter } from '~/utils';
import { Product } from '~/utils/types';

interface TopCollectionProps {
    loading?: boolean;
    products: Product[];
}

const TopCollection = (props: TopCollectionProps) => {
    const { products = [], loading } = props;

    return (
        <Tabs defaultIndex={0} selectedTabClassName="show">
            <div className="container">
                <div className="heading heading-center mb-3">
                    <h2 className="title">Top Selling Products</h2>
                    <TabList className="nav nav-pills nav-border-anim justify-content-center">
                        <Tab className="nav-item">
                            <span className="nav-link">All</span>
                        </Tab>
                        <Tab className="nav-item">
                            <span className="nav-link">Furniture</span>
                        </Tab>
                        <Tab className="nav-item">
                            <span className="nav-link">Decoration</span>
                        </Tab>
                        <Tab className="nav-item">
                            <span className="nav-link">Lighting</span>
                        </Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <div className="products">
                        <div className="row">
                            {loading || products.length == 0
                                ? [1, 2, 3, 4, 5, 6, 7, 8].map(
                                      (item, index) => (
                                          <div
                                              className="col-6 col-md-4 col-lg-3 col-xl-5col"
                                              key={index}
                                          >
                                              <div className="skel-pro"></div>
                                          </div>
                                      )
                                  )
                                : products.map((item, index) => (
                                      <div
                                          className="col-6 col-md-4 col-lg-3 col-xl-5col"
                                          key={index}
                                      >
                                          <ProductTwelve product={item} />
                                      </div>
                                  ))}
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="products">
                        <div className="row">
                            {loading || products.length == 0
                                ? [1, 2, 3, 4, 5, 6, 7, 8].map(
                                      (item, index) => (
                                          <div
                                              className="col-6 col-md-4 col-lg-3 col-xl-5col"
                                              key={index}
                                          >
                                              <div className="skel-pro"></div>
                                          </div>
                                      )
                                  )
                                : catFilter(products, ['furniture']).map(
                                      (item, index) => (
                                          <div
                                              className="col-6 col-md-4 col-lg-3 col-xl-5col"
                                              key={index}
                                          >
                                              <ProductTwelve product={item} />
                                          </div>
                                      )
                                  )}
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="products">
                        <div className="row">
                            {loading || products.length == 0
                                ? [1, 2, 3, 4, 5, 6, 7, 8].map(
                                      (item, index) => (
                                          <div
                                              className="col-6 col-md-4 col-lg-3 col-xl-5col"
                                              key={index}
                                          >
                                              <div className="skel-pro"></div>
                                          </div>
                                      )
                                  )
                                : catFilter(products, ['decoration']).map(
                                      (item, index) => (
                                          <div
                                              className="col-6 col-md-4 col-lg-3 col-xl-5col"
                                              key={index}
                                          >
                                              <ProductTwelve product={item} />
                                          </div>
                                      )
                                  )}
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="products">
                        <div className="row">
                            {loading || products.length == 0
                                ? [1, 2, 3, 4, 5, 6, 7, 8].map(
                                      (item, index) => (
                                          <div
                                              className="col-6 col-md-4 col-lg-3 col-xl-5col"
                                              key={index}
                                          >
                                              <div className="skel-pro"></div>
                                          </div>
                                      )
                                  )
                                : catFilter(products, ['lighting']).map(
                                      (item, index) => (
                                          <div
                                              className="col-6 col-md-4 col-lg-3 col-xl-5col"
                                              key={index}
                                          >
                                              <ProductTwelve product={item} />
                                          </div>
                                      )
                                  )}
                        </div>
                    </div>
                </TabPanel>
            </div>
        </Tabs>
    );
};

export default TopCollection;
