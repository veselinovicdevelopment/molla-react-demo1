import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

import { GET_PRODUCT } from '~/server/queries';

import Breadcrumb from '~/components/partials/product/Breadcrumb';
import GalleryDefault from '~/components/partials/product/gallery/GalleryDefault';
import DetailOne from '~/components/partials/product/details/DetailOne';
import InfoOne from '~/components/partials/product/info-tabs/InfoOne';
import RelatedProductsOne from '~/components/partials/product/related/RelatedOne';
import { Product } from '~/utils/types';

const ProductDefault = () => {
    const slug = useRouter().query.slug;

    const { data, loading, error } = useQuery(GET_PRODUCT, {
        variables: { slug },
    });
    const product: Product = data && data.product.single;
    const related: Product[] = data && data.product.related;
    const prev: Product = data && data.product.prev;
    const next: Product = data && data.product.next;

    if (!slug || error) {
        return <div></div>;
    }

    return (
        <div className="main">
            <Breadcrumb prev={prev} next={next} current="Default" />
            <div className="page-content">
                <div className="container skeleton-body">
                    <div className="product-details-top">
                        <div
                            className={`row skel-pro-single ${
                                loading ? '' : 'loaded'
                            }`}
                        >
                            <div className="col-md-6">
                                <div className="skel-product-gallery"></div>
                                {!loading ? (
                                    <GalleryDefault product={product} />
                                ) : (
                                    ''
                                )}
                            </div>

                            <div className="col-md-6">
                                <div className="entry-summary row">
                                    <div className="col-md-12">
                                        <div className="entry-summary1 mt-2 mt-md-0"></div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="entry-summary2"></div>
                                    </div>
                                </div>
                                {!loading ? (
                                    <DetailOne product={product} />
                                ) : (
                                    ''
                                )}
                            </div>
                        </div>
                    </div>

                    {loading ? (
                        <div className="skel-pro-tabs"></div>
                    ) : (
                        <InfoOne product={product} />
                    )}

                    <RelatedProductsOne products={related} loading={loading} />
                </div>
            </div>
        </div>
    );
};

export default ProductDefault;
