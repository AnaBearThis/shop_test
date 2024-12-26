import imagePlaceholder from '../../icons/img_placeholder.svg'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/cartSlice';
import { addToFavourites, removeFromFavourites} from '../../store/favouritesSlice';

function ProductCard(props) {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cart);
    const favorites = useSelector((state) => state.favourites.favourites);

    const isInCart = cartItems.some((item) => item.id === props.product.id);
    const isInFavorites = favorites.some((item) => item.id === props.product.id);

    const currentPage = useSelector((state) => state.page.currentPage);

    const handleAddToCart = () => {
        if (!isInCart) {
            dispatch(addToCart(props.product));
        } else {
            dispatch(removeFromCart(props.product.id));
        }
    };

    const handleAddToFavorites = () => {
        if (!isInFavorites) {
            dispatch(addToFavourites(props.product));
        } else {
            dispatch(removeFromFavourites(props.product.id));
        }
    };

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleRemoveFromFavourites = (id) => {
        dispatch(removeFromFavourites(id));
    };

    return (
        <div className="product-card">
            <div className='product-card_image-container'>
                <img src={props.product.preview_picture || imagePlaceholder} alt={props.product.name}
                     className='product-card_image'/>
            </div>

            <h3 className='product-card_title'>{props.product.name}</h3>

            <div className='product-card_price-container'>
                {props.product.price_discount ? (<p className='product-card_old-price'>{props.product.price} ₽</p>) : null}

                {props.product.price_discount ? (<p className={'product-card_new-price'}>{props.product.price_discount} ₽</p>) : (<p className={'product-card_new-price'}>{props.product.price} ₽</p>)}
            </div>


            {currentPage === 'Товары' && <div>
                {!props.product.available ? (
                    <button className='product-card_button' disabled>Отсутствует</button>
                ) : (
                    <div className='product-card_button-container'>
                        {isInCart ? (
                            <button className='product-card_button' disabled>В корзине</button>
                        ) : (
                            <button className='product-card_button' onClick={() => handleAddToCart()}>В корзину</button>
                        )}
                        {isInFavorites ? (
                            <button className='product-card_button' disabled>В избранном</button>
                        ) : (
                            <button className='product-card_button' onClick={() => handleAddToFavorites()}>В
                                избранное</button>
                        )}
                    </div>
                )}
            </div>}

            {currentPage === 'Корзина' && <div>
                {!props.product.available ? (
                    <button className='product-card_button' disabled>Отсутствует</button>
                ) : (
                    <div className='product-card_button-container'>
                            <button className='product-card_button' onClick={() => handleRemoveFromCart(props.product.id)}>Удалить из корзины</button>
                    </div>
                )}
            </div>}

            {currentPage === 'Избранное' && <div>
                {!props.product.available ? (
                    <button className='product-card_button' disabled>Отсутствует</button>
                ) : (
                    <div className='product-card_button-container'>
                        <button className='product-card_button' onClick={() => handleRemoveFromFavourites(props.product.id)}>Удалить из избранного</button>
                    </div>
                )}
            </div>}


        </div>
    )
}

export default ProductCard