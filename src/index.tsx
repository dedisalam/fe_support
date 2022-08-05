import React from 'react';
import Provider from '@hooks/provider';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/scss/bootstrap.scss';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Provider><App /></Provider>);
