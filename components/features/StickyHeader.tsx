import { useEffect, useState, useRef, ReactNode } from 'react';
import { useRouter } from 'next/router';

interface StickyHeaderProps {
    top?: number;
    children: ReactNode;
}

const StickyHeader = (props: StickyHeaderProps) => {
    const { top = 210 } = props;
    const router = useRouter();
    const ref = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState<number | string>('auto');

    useEffect(() => {
        router.events.on('hashChangeComplete', initSticky);
        scrollHandler();
        window.addEventListener('scroll', scrollHandler, {
            passive: true,
        });

        window.addEventListener('resize', resizeHandler, {
            passive: true,
        });

        return () => {
            window.removeEventListener('scroll', scrollHandler);
            window.removeEventListener('resize', resizeHandler);
        };
    }, []);

    const initSticky = () => {
        let stickyContent = ref.current!.children[0] as HTMLElement;
        setHeight(stickyContent.offsetHeight + 'px');
    };

    const scrollHandler = () => {
        let stickyContent = ref.current!.children[0] as HTMLElement;
        if (window.pageYOffset > top) {
            if (!stickyContent.classList.contains('fixed')) {
                stickyContent.classList.add('fixed');
            }
        } else if (stickyContent.classList.contains('fixed')) {
            stickyContent.classList.remove('fixed');
        } else {
            setHeight(stickyContent.offsetHeight + 'px');
        }
    };

    const resizeHandler = () => {
        let stickyContent = ref.current!.children[0] as HTMLElement;
        setHeight(stickyContent.offsetHeight + 'px');
        scrollHandler();
    };

    return (
        <div ref={ref} className="sticky-wrapper" style={{ height: height }}>
            {props.children}
        </div>
    );
};

export default StickyHeader;
