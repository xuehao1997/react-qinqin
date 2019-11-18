import React from 'react'
//路由跳转组件
import { NavLink } from 'react-router-dom'
import './index.scss'
const TabBar = () => {
    const navs = [
        {
            id:1,
            iconName:'fas fa-home',
            path:'/home',
            text:'首页'
        },
        {
            id:2,
            iconName:'fas fa-record-vinyl',
            path:'/recommend',
            text:'推荐'
        },
        {
            id:3,
            iconName:'fas fa-code-branch',
            path:'/category',
            text:'分类'
        },
        {
            id:4,
            iconName:'fas fa-shopping-cart',
            path:'/shopcar',
            text:'购物车'
        },
        {
            id:5,
            iconName:'fas fa-golf-ball',
            path:'mine',
            text:'我的'
        }
    ]
    //循环遍历方法
    function renderNav () {
        return navs.map( (item) => (
            <li
                key = {item.id}
            >
            {/*  通过路径来与跳转页面建立联系*/}
                    <NavLink
                    to = {item.path} 
                    activeClassName = "active"
                    >
                        <i className = { item.iconName }></i>
                        <span> { item.text } </span>
                    </NavLink>
                </li>
        ))
    }
    return (//函数式组件直接返回
        <footer>
            <ul>
                { renderNav() }
            </ul>
        </footer>
    )
}
export default TabBar;