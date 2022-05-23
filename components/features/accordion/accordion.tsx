import React, { MouseEvent, ReactNode, useRef } from 'react';

interface AccordionProps {
    children: ReactNode;
    adClass?: string;
    type?: string;
}

const Accordion = (props: AccordionProps) => {
    const { adClass = '', type = 'normal' } = props;
    const ref = useRef<HTMLDivElement>(null);

    const onHandleClick = (e: MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;
        if (
            target.classList.contains('toggle-button') ||
            target.querySelector('.toggle-button')
        ) {
            if (
                target.classList.contains('collapsed') ||
                target.classList.contains('collapsing')
            ) {
                console.log('interesting');
                if (
                    target
                        .closest('.accordion')
                        ?.querySelector('.toggle-button.expanded')
                ) {
                    (
                        target
                            .closest('.accordion')
                            ?.querySelector(
                                '.toggle-button.expanded'
                            ) as HTMLElement
                    ).click();
                }

                if (
                    target
                        .closest('.accordion')
                        ?.querySelector('.toggle-button.expanding')
                ) {
                    (
                        target
                            .closest('.accordion')
                            ?.querySelector(
                                '.toggle-button.expanding'
                            ) as HTMLElement
                    ).click();
                }
            }
        }
    };

    return type === 'normal' ? (
        <div
            className={`accordion  ${adClass}`}
            onClick={onHandleClick}
            ref={ref}
        >
            {props.children}
        </div>
    ) : type === 'checkout' ? (
        <div className="accordion-summary" onClick={onHandleClick} ref={ref}>
            {props.children}
        </div>
    ) : (
        <></>
    );
};

export default Accordion;
