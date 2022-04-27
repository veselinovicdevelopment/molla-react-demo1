import { all } from 'redux-saga/effects';
import { cartSaga } from './cart';
import { wishlistSaga } from './wishlist';
import { compareSaga } from './compare';

export default function* rootSaga () {
    yield all( [
        cartSaga(),
        wishlistSaga(),
        compareSaga(),
    ] );
}