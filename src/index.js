import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './pages/App/App.jsx';
import { Provider } from 'react-redux';
import store from './store/store.ts';

// Получаем корневой элемент
const rootElement = document.getElementById('root');

// Создаем корень для рендеринга
const root = ReactDOM.createRoot(rootElement);

// Рендерим приложение с использованием Redux Provider
root.render(
    <Provider store={store}>
        <App className='app' />
    </Provider>
);