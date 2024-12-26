import React from 'react';
import { useSelector } from 'react-redux';
import ProductList from "../../components/ProductList/ProductList";

function CartPage() {
    const { cart } = useSelector((state) => state.cart);

    return (
        <div className='page'>
            {cart.length === 0 ? (
                <p>Корзина пуста</p>
            ) : (
                <ProductList products={cart}/>
            )}
        </div>
    );
};

export default CartPage;
