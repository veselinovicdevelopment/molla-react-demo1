import Link from 'next/link';
import { memo } from 'react';

interface AlinkProps {
    href:
        | string
        | {
              pathname: string;
              query?: { [x: string]: string | string[] | number };
          };
    children: React.ReactNode;
    className?: string;
    style?: any;
    onClick?: () => void;
    [x: string]: any;
}

const Alink: React.FC<AlinkProps> = ({
    href,
    style,
    children,
    className,
    onClick,
    ...props
}) => {
    /**
     * On click handler
     *
     * @param {MouseEvent} e
     */
    const onClickHandler = (event: React.MouseEvent<HTMLElement>): void => {
        if (href == '#') {
            event.preventDefault();
        }

        if (typeof onClick == 'function') {
            onClick();
        }
    };

    return (
        <Link href={href} {...props}>
            <a className={className} onClick={onClickHandler} style={style}>
                {children}
            </a>
        </Link>
    );
};

export default memo(Alink);
