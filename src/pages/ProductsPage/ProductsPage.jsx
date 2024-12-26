import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts, setLoading, setError } from '../../store/productsSlice';
import shopApi from '../../api/mainApi.js'
import ProductList from '../../components/ProductList/ProductList';

function ProductsPage() {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const loading = useSelector((state) => state.products.loading);
    const error = useSelector((state) => state.products.error);

    const getProducts = () => {
        dispatch(setLoading(true))
        shopApi.getData()
            .then((response) => {
                return response;
            })
            .then((data) => {
                dispatch(setProducts(data.items));
            })
            .catch((error) => {
                dispatch(setError(error))
                console.log('Ошибка загрузки данных:', error);
            });
        dispatch(setLoading(false))
    }

    useEffect(() => {
        getProducts();
    }, [dispatch]);


    return (
        <div className='page'>
            {!loading && !error && (<ProductList products={products} />)}

            {!loading && error && (<div>Произошла ошибка! Попробуйте перезагрузить страницу</div>)}
        </div>

    );
};

export default ProductsPage;
