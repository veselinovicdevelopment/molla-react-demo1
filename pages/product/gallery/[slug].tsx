import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

import { GET_PRODUCT } from '~/server/queries';

import Breadcrumb from '~/components/partials/product/Breadcrumb';
import GalleryExtended from '~/components/partials/product/gallery/GalleryExtended';
import DetailThree from '~/components/partials/product/details/DetailThree';
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
            <Breadcrumb prev={prev} next={next} current="Gallery" />
            <div className="page-content">
                <div className="container skeleton-body">
                    <div className="product-details-top">
                        <div
                            className={`skel-pro-single gallery mb-4 ${
                                loading ? '' : 'loaded'
                            }`}
                        >
                            <div className="row">
                                <div className="col-12">
                                    <div className="skel-product-gallery"></div>
                                    {!loading ? (
                                        <GalleryExtended product={product} />
                                    ) : (
                                        ''
                                    )}
                                </div>

                                <div className="col-12">
                                    <div className="entry-summary row mt-5">
                                        <div className="col-md-12">
                                            <div className="entry-summary1"></div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="entry-summary2"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {!loading ? <DetailThree product={product} /> : ''}
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
