import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store/store.ts';
import ProductsPage from '../ProductsPage/ProductsPage.jsx';
import FavoritePage from '../FavouritePage/FavouritePage.jsx';
import CartPage from '../CartPage/CartPage.jsx';
import Header from '../../components/Header/Header.jsx'

export function App() {
    return (
        <Provider store={store}>
            <div className='app'>
                <Router>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<ProductsPage/>}/>
                        <Route path="/favourites" element={<FavoritePage/>}/>
                        <Route path="/cart" element={<CartPage/>}/>
                    </Routes>
                </Router>
            </div>

        </Provider>
    );
}

