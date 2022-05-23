import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import StickyBox from 'react-sticky-box';

import { GET_PRODUCT } from '~/server/queries';

import Breadcrumb from '~/components/partials/product/Breadcrumb';
import GallerySticky from '~/components/partials/product/gallery/GallerySticky';
import DetailOne from '~/components/partials/product/details/DetailOne';
import InfoThree from '~/components/partials/product/info-tabs/InfoThree';
import RelatedProductsOne from '~/components/partials/product/related/RelatedOne';
import { Product } from '~/utils/types';

const ProductSticky = () => {
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
            <Breadcrumb prev={prev} next={next} current="Sticky Info" />
            <div className="page-content">
                <div className="container skeleton-body">
                    <div className="product-details-top">
                        <div
                            className={`row skel-pro-single sticky ${
                                loading ? '' : 'loaded'
                            }`}
                        >
                            <div className="col-md-6">
                                <div className="skel-product-gallery"></div>
                                {!loading ? (
                                    <GallerySticky product={product} />
                                ) : (
                                    ''
                                )}
                            </div>

                            <div className="col-md-6">
                                <StickyBox
                                    className="sticky-content"
                                    offsetTop={70}
                                >
                                    <div className="entry-summary row">
                                        <div className="col-md-12">
                                            <div className="entry-summary1 mt-2 mt-md-0"></div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="entry-summary2"></div>
                                        </div>
                                    </div>
                                    {!loading ? (
                                        <>
                                            <DetailOne product={product} />
                                            <InfoThree product={product} />
                                        </>
                                    ) : (
                                        ''
                                    )}
                                </StickyBox>
                            </div>
                        </div>
                    </div>

                    <RelatedProductsOne products={related} loading={loading} />
                </div>
            </div>
        </div>
    );
};

export default ProductSticky;
