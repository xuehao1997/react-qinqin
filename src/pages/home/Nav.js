import React from 'react';
import { NavLink } from 'react-router-dom'
import './index.scss'

const Nav = props => {//和HOC是有区别的
    return (
        <div className = 'nav'>
            <NavLink to = "/home/hot" activeClassName = "active"> 正在热映 </NavLink>
            <NavLink to = "/home/comming" activeClassName = "active"> 即将上映 </NavLink>
        </div>

    )
}
export default Nav;