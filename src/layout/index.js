import React, { Component } from 'react'
import Tab from '../components/common/tab'
import TabBar from '../components/common/tabbar';
import Home from '../pages/home';
import Recommend from '../pages/recommend';
import Category from '../pages/category';
import ShopCar from '../pages/shopcar';
import Mine from '../pages/mine'
import List from '../pages/list'
import Detail from '../pages/detail'
import NotFound from '../pages/notfound';


//引入路由
import { Route , Switch , Redirect } from 'react-router-dom';
export default class LayOut extends Component {
    constructor (props) {
        super(props);
        this.state = {
            tabFlag : false
        }
    }

    render() {
        const { tabFlag }  =this.state;
        return (
            <div className = "layout">
                <Tab tabFlag = {tabFlag}></Tab>
                {/* 如果没有Switch的话，所有的路由会全部渲染 */}
                <Switch>
                    {/* exact:表示路径完全匹配 */}
                    <Redirect from = "/" to = "/home" exact></Redirect>
                    <Route path = "/home" component = {Home}></Route>
                    <Route path = "/recommend" component = {Recommend}></Route>
                    <Route path = "/category" component = { Category }></Route>
                    <Route path = "/shopcar" component = { ShopCar }></Route>
                    {/* <Route path = "/mine" component = { Mine }></Route> */}
                    {/* 这种添加路由，路由身上没有路由属性， 可以添加数据 */}
                    <Route path = "/mine" render  = { () => <Mine/> }></Route>
                    {/* 添加一个列表 */}
                    <Route path = "/list/:id" component = { List } ></Route>
                    {/* 添加一个详情页 */}
                    <Route path = "/detail" render = { () => <Detail/>}></Route>
                    <Route component = { NotFound }></Route>
                </Switch>
                <TabBar></TabBar>
            </div>
        )
    }
}
