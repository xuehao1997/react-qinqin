import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//引入项目重置文件
import './assets/style/reset.scss';
//配置rem，淘宝方案
import './utils/rem';
import * as serviceWorker from './serviceWorker';
//给BrowserRouter起别名
import { BrowserRouter as Router } from 'react-router-dom'
ReactDOM.render(
    //用BrowserRouter包裹App
    <Router>
        <App />
    </Router>,
document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
