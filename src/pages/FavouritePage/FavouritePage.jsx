import React from 'react';
import { useSelector } from 'react-redux';
import ProductList from "../../components/ProductList/ProductList";

function FavoritePage() {
    const favourites = useSelector((state) => state.favourites.favourites);

    return (
        <div className='page'>
            {favourites.length === 0 ? (
                <p>Нет товаров в избранном</p>
            ) : (
                <ProductList products={favourites}/>
            )}
        </div>
    );
};

export default FavoritePage;
