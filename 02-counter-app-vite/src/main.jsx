import React from 'react';
import ReactDom from 'react-dom/client';
import { FirstApp } from './FirstApp';
import { HelloWorldApp } from './HelloWorldApp';
// import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles.css';

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp name='XanJaca'></FirstApp>
    </React.StrictMode>
)