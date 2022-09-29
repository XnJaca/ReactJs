import React from 'react';
import ReactDom from 'react-dom/client';
import { FirstApp } from './FirstApp';
import { HelloWorldApp } from './HelloWorldApp';
import {CounterApp} from './components/CounterApp';
// import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles.css';

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={123}></CounterApp>
    </React.StrictMode>
)