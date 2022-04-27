import InnerImageZoom from 'react-inner-image-zoom';
import React, { useState, useEffect, MouseEvent } from 'react';
import LightBox from 'react-image-lightbox';
import { Product } from '~/utils/types';

interface GalleryProps {
    product: Product;
    adClass?: string;
}

const GalleryDefault = (props: GalleryProps) => {
    const { product, adClass = 'product-gallery-vertical' } = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [photoIndex, setPhotoIndex] = useState<number>(0);

    useEffect(() => {
        if (product) {
            setIsOpen(false);
            setPhotoIndex(0);
        }
    }, [product]);

    const moveNextPhoto = () => {
        setPhotoIndex((photoIndex + 1) % product.pictures.length);
    };

    const movePrevPhoto = () => {
        setPhotoIndex(
            (photoIndex + product.pictures.length - 1) % product.pictures.length
        );
    };

    const openLightBox = () => {
        let index = parseInt(
            document.querySelector('.product-main-image').getAttribute('index')
        );

        if (!index) {
            index = 0;
        }
        setIsOpen(true);
        setPhotoIndex(index);
    };

    const closeLightBox = () => {
        setIsOpen(false);
    };

    const changeBgImage = (
        e: MouseEvent<HTMLElement>,
        image: string,
        index: number
    ) => {
        let imgs = document.querySelectorAll('.product-main-image img');
        for (let i = 0; i < imgs.length; i++) {
            (imgs[i] as HTMLImageElement).src = image;
        }

        document
            .querySelector('.product-image-gallery .active')
            .classList.remove('active');

        document
            .querySelector('.product-main-image')
            .setAttribute('index', index.toString());
        e.currentTarget.classList.add('active');
    };

    if (!product) {
        return <div></div>;
    }

    return (
        <>
            <div className={`product-gallery ${adClass}`}>
                <div className="row m-0">
                    <figure className="product-main-image">
                        {product.new ? (
                            <span className="product-label label-new">New</span>
                        ) : (
                            ''
                        )}

                        {product.sale_price ? (
                            <span className="product-label label-sale">
                                Sale
                            </span>
                        ) : (
                            ''
                        )}

                        {product.top ? (
                            <span className="product-label label-top">Top</span>
                        ) : (
                            ''
                        )}

                        {!product.stock || product.stock == 0 ? (
                            <span className="product-label label-out">
                                Out of Stock
                            </span>
                        ) : (
                            ''
                        )}

                        <div
                            style={{
                                paddingTop: `${
                                    (product.pictures[0].height /
                                        product.pictures[0].width) *
                                    100
                                }%`,
                            }}
                        >
                            <InnerImageZoom
                                src={
                                    process.env.NEXT_PUBLIC_ASSET_URI +
                                    product.pictures[0].url
                                }
                                zoomSrc={
                                    process.env.NEXT_PUBLIC_ASSET_URI +
                                    product.pictures[0].url
                                }
                                zoomType="hover"
                                className="zoom-image overflow-hidden"
                                width={product.pictures[0].width}
                                height={product.pictures[0].height}
                            />
                        </div>

                        <button
                            id="btn-product-gallery"
                            className="btn-product-gallery"
                            onClick={openLightBox}
                        >
                            <i className="icon-arrows"></i>
                        </button>
                    </figure>

                    <div
                        id="product-zoom-gallery"
                        className="product-image-gallery"
                    >
                        {product.pictures.map((item, index) => (
                            <button
                                className={`product-gallery-item ${
                                    0 === index ? 'active' : ''
                                }`}
                                key={product.id + '-' + index}
                                onClick={(e) =>
                                    changeBgImage(
                                        e,
                                        `${
                                            process.env.NEXT_PUBLIC_ASSET_URI +
                                            item.url
                                        }`,
                                        index
                                    )
                                }
                            >
                                <div className="img-wrapper h-100">
                                    <img
                                        src={
                                            process.env.NEXT_PUBLIC_ASSET_URI +
                                            product.sm_pictures[index].url
                                        }
                                        alt="product back"
                                    />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {isOpen ? (
                <LightBox
                    mainSrc={
                        process.env.NEXT_PUBLIC_ASSET_URI +
                        product.pictures[photoIndex].url
                    }
                    nextSrc={
                        process.env.NEXT_PUBLIC_ASSET_URI +
                        product.pictures[
                            (photoIndex + 1) % product.pictures.length
                        ].url
                    }
                    prevSrc={
                        process.env.NEXT_PUBLIC_ASSET_URI +
                        product.pictures[
                            (photoIndex + product.pictures.length - 1) %
                                product.pictures.length
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
                />
            ) : (
                ''
            )}
        </>
    );
};

export default React.memo(GalleryDefault);
