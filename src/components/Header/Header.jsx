import React, { useEffect } from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { setCurrentPage } from '../../store/pageSlice';
import cartLogo from '../../icons/cart.svg'
import favouriteLogo from '../../icons/fav.svg'

function Header() {
    const dispatch = useDispatch();
    const location = useLocation();
    const currentPage= useSelector((state) => state.page.currentPage);

    const getPageTitle = (path) => {
        switch (path) {
            case '/':
                return 'Товары';
            case '/favourites':
                return 'Избранное';
            case '/cart':
                return 'Корзина';
            default:
                return 'Unknown Page';
        }
    };

    useEffect(() => {
        const title = getPageTitle(location.pathname);
        dispatch(setCurrentPage(title));
        document.title = title;
    }, [location, dispatch]);

    return(
        <div className='header'>
            <h1 className='header_title'>{currentPage}</h1>

            <div className='header_menu'>
                {currentPage !== 'Товары' ? <NavLink to={'/'} className='header_menu_button'>
                    На главную
                </NavLink> : null}

                {currentPage !== 'Корзина' ? <NavLink to={'/cart'} className='header_menu_button'>
                    <img src={cartLogo} alt='cart' className='header_menu_icon'/>
                </NavLink> : null}

                {currentPage !== 'Избранное' ? <NavLink to={'/favourites'} className='header_menu_button'>
                    <img src={favouriteLogo} alt='fav' className='header_menu_icon'/>
                </NavLink> : null}

            </div>
        </div>
    )
}

export default Header