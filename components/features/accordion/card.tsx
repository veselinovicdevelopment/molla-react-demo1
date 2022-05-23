import React, { ReactNode } from 'react';
import useCollapse from 'react-collapsed';

import { safeContent } from '~/utils';

interface CardProps {
    title: string;
    expanded?: boolean;
    adClass?: string;
    type?: string;
    children: ReactNode;
}

const Card = (props: CardProps) => {
    const { title, expanded, adClass = '', type = 'default' } = props;
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
        defaultExpanded: expanded ? true : false,
    });

    return 'default' === type ? (
        <div className={`card ${adClass}`}>
            <div className="card-header" {...getToggleProps()}>
                <h2 className="card-title">
                    <span
                        className={`toggle-button ${
                            isExpanded ? 'expanded' : 'collapsed'
                        }`}
                        dangerouslySetInnerHTML={safeContent(title)}
                        style={{ height: 'auto' }}
                    ></span>
                </h2>
            </div>
            <div {...getCollapseProps()}>
                <div className="card-body">{props.children}</div>
            </div>
        </div>
    ) : (
        <div className={`acc-item ${adClass}`}>
            <h5>
                <span
                    className={`toggle-button ${
                        isExpanded ? 'expanded' : 'collapsed'
                    }`}
                    dangerouslySetInnerHTML={safeContent(title)}
                    {...getToggleProps()}
                    style={{ height: 'auto' }}
                ></span>
            </h5>
            <div {...getCollapseProps()}>
                <div className="collapse-wrap">{props.children}</div>
            </div>
        </div>
    );
};

export default React.memo(Card);
