import InnerImageZoom from 'react-inner-image-zoom';
import React, { useState, useEffect, MouseEvent } from 'react';
import LightBox from 'react-image-lightbox';
import { Product } from '~/utils/types';

interface GalleryProps {
    product: Product;
}

const GallerySticky = (props: GalleryProps) => {
    const { product } = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [photoIndex, setPhotoIndex] = useState<number>(0);

    useEffect(() => {
        if (product) {
            setIsOpen(false);
            setPhotoIndex(0);
        }
    }, [product]);

    const moveNextPhoto = () => {
        setPhotoIndex((photoIndex + 1) % product.pictures!.length);
    };

    const movePrevPhoto = () => {
        setPhotoIndex(
            (photoIndex + product.pictures!.length - 1) %
                product.pictures!.length
        );
    };

    const openLightBox = (e: MouseEvent<HTMLElement>, index: number) => {
        setIsOpen(true);
        setPhotoIndex(index);
    };

    const closeLightBox = () => {
        setIsOpen(false);
    };

    if (!product) {
        return <div></div>;
    }

    return (
        <>
            <div className="product-gallery product-gallery-separated">
                {product.new ? (
                    <span className="product-label label-new">New</span>
                ) : (
                    ''
                )}

                {product.sale_price ? (
                    <span className="product-label label-sale">Sale</span>
                ) : (
                    ''
                )}

                {product.top ? (
                    <span className="product-label label-top">Top</span>
                ) : (
                    ''
                )}

                {product.stock == 0 ? (
                    <span className="product-label label-out">
                        Out of Stock
                    </span>
                ) : (
                    ''
                )}
                {product.pictures!.map((item, index) => (
                    <figure
                        className="product-main-image"
                        key={index}
                        style={{ backgroundColor: '#f4f4f4' }}
                    >
                        <div
                            style={{
                                paddingTop: `${
                                    (product.pictures![0].height /
                                        product.pictures![0].width) *
                                    100
                                }%`,
                            }}
                        >
                            <InnerImageZoom
                                src={
                                    process.env.NEXT_PUBLIC_ASSET_URI! +
                                    product.pictures![0].url
                                }
                                zoomSrc={
                                    process.env.NEXT_PUBLIC_ASSET_URI! +
                                    product.pictures![0].url
                                }
                                zoomType="hover"
                                className="zoom-image overflow-hidden"
                                width={product.pictures![0].width}
                                height={product.pictures![0].height}
                            />
                        </div>

                        <button
                            id="btn-product-gallery"
                            className="btn-product-gallery"
                            onClick={(e) => openLightBox(e, index)}
                        >
                            <i className="icon-arrows"></i>
                        </button>
                    </figure>
                ))}
            </div>

            {isOpen ? (
                <LightBox
                    mainSrc={
                        process.env.NEXT_PUBLIC_ASSET_URI! +
                        product.pictures![photoIndex].url
                    }
                    nextSrc={
                        process.env.NEXT_PUBLIC_ASSET_URI! +
                        product.pictures![
                            (photoIndex + 1) % product.pictures!.length
                        ].url
                    }
                    prevSrc={
                        process.env.NEXT_PUBLIC_ASSET_URI! +
                        product.pictures![
                            (photoIndex + product.pictures!.length - 1) %
                                product.pictures!.length
                        ].url
                    }
                    onCloseRequest={closeLightBox}
                    onMovePrevRequest={moveNextPhoto}
                    onMoveNextRequest={movePrevPhoto}
                    reactModalStyle={{
                        overlay: {
                            zIndex: 1041,
                        },
                    }}
                    wrapperClassName="lightbox-modal"
                />
            ) : (
                ''
            )}
        </>
    );
};

export default React.memo(GallerySticky);
