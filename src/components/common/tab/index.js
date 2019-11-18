//打造头部
import React, { Component } from 'react'
import './index.scss'
//函数式组件主要展示样式
const Tab = props => {
    return (
        <header>
            {props.tabFlag && <i className = "fas fa-angle-left"></i>}
            <span>浩浩</span>
        </header>
    )
}

export default Tab;