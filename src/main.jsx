import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './components/Layout';

import { makeServer } from './server';

if (import.meta.env.VITE_NODE_ENV === 'development') {
  makeServer({ environment: 'development' });
}

ReactDOM.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
  document.getElementById('root')
);
