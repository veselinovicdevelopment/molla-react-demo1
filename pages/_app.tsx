import type { AppContext, AppInitialProps } from 'next/app';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import { useEffect } from 'react';
import { Provider, useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { CookiesProvider } from 'react-cookie';

import Layout from '~/components/layout';
import { wrapper } from '~/store';
import { useApollo } from '~/server/apollo';

import { actions as demoAction } from '../store/demo';

import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import '~/public/scss/style.scss';

const WrappedApp = ({ Component, pageProps }: AppContext & AppInitialProps) => {
    const apolloClient = useApollo(pageProps);
    const store = useStore();
    useEffect(() => {
        if (
            (store.getState() as any).demo.current !=
            process.env.NEXT_PUBLIC_DEMO
        ) {
            store.dispatch(
                demoAction.refreshStore(process.env.NEXT_PUBLIC_DEMO)
            );
        }
    }, []);

    return (
        <ApolloProvider client={apolloClient}>
            <Provider store={store}>
                <CookiesProvider>
                    <PersistGate
                        persistor={(store as any).__persistor}
                        loading={
                            <div className="loading-overlay">
                                <div className="bounce-loader">
                                    <div className="bounce1"></div>
                                    <div className="bounce2"></div>
                                    <div className="bounce3"></div>
                                </div>
                            </div>
                        }
                    >
                        <Head>
                            <meta
                                httpEquiv="X-UA-Compatible"
                                content="IE=edge"
                            />
                            <meta
                                name="keywords"
                                content="Molla React Template"
                            />
                            <meta
                                name="description"
                                content="Molla –  eCommerce React Template is a multi-use React template. It is designed to go well with multi-purpose websites."
                            />
                            <meta name="author" content="d-themes" />
                            <meta
                                name="apple-mobile-web-app-title"
                                content="Molla"
                            />
                            <meta
                                name="application-name"
                                content="Molla React eCommerce Template"
                            />
                            <meta
                                name="msapplication-TileColor"
                                content="#cc9966"
                            />
                            <meta
                                name="msapplication-config"
                                content="images/icons/browserconfig.xml"
                            />
                            <meta name="theme-color" content="#ffffff" />
                            <title>Molla - React eCommerce Template</title>
                            <link
                                rel="apple-touch-icon"
                                sizes="180x180"
                                href="images/icons/apple-touch-icon.png"
                            />
                            <link
                                rel="icon"
                                type="image/png"
                                sizes="32x32"
                                href="images/icons/favicon-32x32.png"
                            />
                            <link
                                rel="icon"
                                type="image/png"
                                sizes="16x16"
                                href="images/icons/favicon-16x16.png"
                            />
                            <link
                                rel="manifest"
                                href="images/icons/site.webmanifest"
                            />
                            <link
                                rel="mask-icon"
                                href="images/icons/safari-pinned-tab.svg"
                                color="#666666"
                            />
                            <link
                                rel="shortcut icon"
                                href="images/icons/favicon.ico"
                            />
                        </Head>

                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </PersistGate>
                </CookiesProvider>
            </Provider>
        </ApolloProvider>
    );
};

WrappedApp.getInitialProps = async ({ Component, ctx }) => {
    let pageProps = {};
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
};

export default wrapper.withRedux(WrappedApp);
