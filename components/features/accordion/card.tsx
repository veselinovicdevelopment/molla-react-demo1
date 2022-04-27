import React, { ReactNode } from 'react';
import SlideToggle from 'react-slide-toggle';

import { safeContent } from '~/utils';

interface CardProps {
    title?: string;
    expanded?: boolean;
    adClass?: string;
    type?: string;
    children: ReactNode;
}

const Card = (props: CardProps) => {
    const { title, expanded, adClass = '', type = 'default' } = props;

    return 'default' === type ? (
        <SlideToggle collapsed={expanded ? false : true}>
            {({ onToggle, setCollapsibleElement, toggleState }) => (
                <div className={`card ${adClass}`}>
                    <div className="card-header" onClick={onToggle}>
                        <h2 className="card-title">
                            <span
                                className={`toggle-button ${toggleState.toLowerCase()}`}
                                dangerouslySetInnerHTML={safeContent(title)}
                                style={{ height: 'auto' }}
                            ></span>
                        </h2>
                    </div>
                    <div ref={setCollapsibleElement}>
                        <div className="card-body">{props.children}</div>
                    </div>
                </div>
            )}
        </SlideToggle>
    ) : (
        <SlideToggle collapsed={expanded ? false : true}>
            {({ onToggle, setCollapsibleElement, toggleState }) => (
                <div className={`acc-item ${adClass}`}>
                    <h5>
                        <span
                            className={`toggle-button ${toggleState.toLowerCase()}`}
                            dangerouslySetInnerHTML={safeContent(title)}
                            onClick={onToggle}
                            style={{ height: 'auto' }}
                        ></span>
                    </h5>
                    <div ref={setCollapsibleElement}>
                        <div className="collapse-wrap">{props.children}</div>
                    </div>
                </div>
            )}
        </SlideToggle>
    );
};

export default React.memo(Card);
