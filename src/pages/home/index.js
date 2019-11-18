import React, { Component } from 'react'
import Nav from './Nav'
import './index.scss'
import { Route } from 'react-router-dom'
//需要引入正在热映和即将上瘾两个组件了
import Hot from './Hot'
import Comming from './Comming'
export default class Home extends Component {
    render() {
        return (
            <div className = "container">
                {/* 二级路由导航 */}
                <Nav/>
                {/* 展示区域 */}
                <Route
                path = "/home/hot"
                component = {Hot}
                >
                </Route>

                <Route
                path = "/home/comming"
                component = {Comming}
                >
                </Route>
            </div>
        )
    }
}
