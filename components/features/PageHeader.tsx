import React from 'react';

interface PageHederProps {
    title?: string;
    subTitle?: string;
}

const PageHeader = (props: PageHederProps) => {
    const { title, subTitle } = props;

    return (
        <div
            className="page-header text-center"
            style={{ backgroundImage: `url(images/page-header-bg.jpg)` }}
        >
            <div className="container">
                <h1 className="page-title">
                    {title}
                    <span>{subTitle}</span>
                </h1>
            </div>
        </div>
    );
};

export default React.memo(PageHeader);
