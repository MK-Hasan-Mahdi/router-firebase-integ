import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {
    const { user } = useFirebase();
    return (
        <div>
            <h4>Products</h4>
            <h5>{user ? user.displayName : 'user not using'}</h5>
        </div>
    );
};

export default Products;