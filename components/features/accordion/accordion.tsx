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
        if (
            ref.current.classList.contains('toggle-button') ||
            ref.current.querySelector('.toggle-button')
        ) {
            if (
                ref.current.classList.contains('collapsed') ||
                (ref.current.querySelector('.toggle-button') &&
                    ref.current
                        .querySelector('.toggle-button')
                        .classList.contains('collapsed')) ||
                ref.current.classList.contains('collapsing') ||
                (ref.current.querySelector('.toggle-button') &&
                    ref.current
                        .querySelector('.toggle-button')
                        .classList.contains('collapsing'))
            ) {
                if (ref.current.querySelector('.toggle-button.expanded')) {
                    (
                        ref.current.querySelector(
                            '.toggle-button.expanded'
                        ) as HTMLElement
                    ).click();
                }

                if (ref.current.querySelector('.toggle-button.expanding')) {
                    (
                        ref.current.querySelector(
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
