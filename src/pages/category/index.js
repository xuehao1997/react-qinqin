import React, { Component } from 'react'
import './index.scss'
// import { Slider } from 'antd-mobile'
import Slider from './Slider'
import axios from 'axios'

export default class Category extends Component {
    constructor (props) {
        super (props);
        this.state = {
            data:null
        }
    }
    //数据请求写在钩子函数中
    componentDidMount () {
        axios ({
            url:'/index.php',
            params:{
                r: 'class/category',
                type: 1
            }
        }).then( res => {
            console.log('res.data.data.data' , res.data.data.data);
            res.data.data.data.map( item => {
                item.title = item.name //子组件添加title属性
                return;
            })
            this.setState({
                data:res.data.data.data//分类页面的数据，是一个数组
            })
        })
    }

    render() {
        return (
            // 将这个div的flex设为1，其父元素是一个弹性盒
            <div className = "container">
                {/* 将请求到的数组传入slider中 */}
                <Slider {...this.state}></Slider>
            </div>
        )
    }
}
