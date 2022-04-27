import React from 'react';
import { connect } from 'react-redux';

import ALink from '~/components/features/alink';

import { Product } from '~/utils/types';

interface WishlistProps {
    wishlist: Product[];
}

const WishlistMenu = (props: WishlistProps) => {
    const { wishlist } = props;

    return (
        <div className="wishlist">
            <ALink href="/shop/wishlist" title="Wishlist">
                <div className="icon">
                    <i className="icon-heart-o"></i>
                    <span className="wishlist-count badge">
                        {wishlist.length}
                    </span>
                </div>
                <p>Wishlist</p>
            </ALink>
        </div>
    );
};

interface CurrentState {
    wishlist: {
        data: Product[];
    };
}

const mapStateToProps = (state: CurrentState) => {
    return {
        wishlist: state.wishlist.data,
    };
};

export default connect(mapStateToProps, {})(WishlistMenu);
