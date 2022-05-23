import { createWrapper } from 'next-redux-wrapper';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-saga';
import { persistStore } from 'redux-persist';
import { configureStore, Reducer } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';

// Import Reducers
import cartReducer from './cart';
import wishlistReducer from './wishlist';
import compareReducer from './compare';
import demoReducer from './demo';

const sagaMiddleware = createSagaMiddleware();

export const makeStore = () => {
    const store = configureStore({
        reducer: {
            cartlist: cartReducer as Reducer<any>,
            wishlist: wishlistReducer as Reducer<any>,
            comparelist: compareReducer as Reducer<any>,
            demo: demoReducer as Reducer<any>,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: false,
                immutableCheck: false,
                serializableCheck: false,
            }).concat(sagaMiddleware),
        devTools: process.env.NODE_ENV !== 'production',
    });

    (store as any).sagaTask = sagaMiddleware.run(rootSaga);
    (store as any).__persistor = persistStore(store);
    return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });
