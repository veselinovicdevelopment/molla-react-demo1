import { ReactNode, useEffect } from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { useRouter } from 'next/router';

import 'react-image-lightbox/style.css';
import 'react-toastify/dist/ReactToastify.min.css';

import Header from './partials/header/Header';
import Footer from './partials/footer/Footer';
import VideoModal from './features/modals/VideoModal';
import QuickViewModal from './features/modals/QuickviewModal';
import MobileMenu from './features/MobileMenu';

import { actions } from '../store/demo';
import { isSafariBrowser, isEdgeBrowser } from '~/utils';

interface LayoutProps {
    children: ReactNode;
    hideQuick: () => void;
    hideVideo: () => void;
}

const Layout = ({ children, hideQuick, hideVideo }: LayoutProps) => {
    const router = useRouter();
    let scrollTop: HTMLElement;

    useEffect(() => {
        if (router.pathname.includes('pages/coming-soon')) {
            document.querySelector('header')?.classList.add('d-none');
            document.querySelector('footer')?.classList.add('d-none');
        } else {
            document.querySelector('header')?.classList.remove('d-none');
            document.querySelector('footer')?.classList.remove('d-none');
        }
    }, [router.pathname]);

    useEffect(() => {
        hideQuick();
        hideVideo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        scrollTop = document.querySelector('#scroll-top')!;
        window.addEventListener('scroll', scrollHandler, false);
    }, []);

    const toScrollTop = () => {
        if (isSafariBrowser() || isEdgeBrowser()) {
            let pos = window.pageYOffset;
            let timerId = setInterval(() => {
                if (pos <= 0) clearInterval(timerId);
                window.scrollBy(0, -120);
                pos -= 120;
            }, 1);
        } else {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    };

    const scrollHandler = () => {
        if (window.pageYOffset >= 400) {
            scrollTop.classList.add('show');
        } else {
            scrollTop.classList.remove('show');
        }
    };

    const hideMobileMenu = () => {
        document.querySelector('body')!.classList.remove('mmenu-active');
    };

    return (
        <>
            <div className="page-wrapper">
                <Header />
                {children}
                <Footer />
            </div>
            <div className="mobile-menu-overlay" onClick={hideMobileMenu}></div>
            <button id="scroll-top" title="Back to top" onClick={toScrollTop}>
                <i className="icon-arrow-up"></i>
            </button>
            <MobileMenu />

            <ToastContainer
                autoClose={3000}
                newestOnTop={true}
                className="toast-container"
                position="top-right"
                closeButton={false}
                hideProgressBar={true}
                draggable={false}
            />
            <QuickViewModal />
            <VideoModal />
        </>
    );
};

export default connect(null, { ...actions })(Layout);
