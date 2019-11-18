import React, { Component } from 'react'
import axios from 'axios'
//node中的内置模块
import querystring from 'querystring'
//引入css样式
import './index.scss'

export default class List extends Component {
    constructor(props) {
        super (props);
        this.state = {
            list:[]
        }
    } 

    //钩子函数
    componentDidMount () {
        const { search } = this.props.location;
        console.log('search' , querystring.parse(search.slice(1)));//将？截取
        const { cid } = querystring.parse(search.slice(1));
        axios({
            url:'/index.php',
            params:{
                r: 'class/cyajaxsub',
                page: 1,
                cid,
                px: 't',
                cac_id: ''
            }
        }).then( res => {
            console.log("res.data.data.content" , res.data.data.content);
            this.setState({
                list:res.data.data.content //将列表数组赋值给state中定义的数组
            })
        } )
    }

    //渲染商品列表
    renderList = (list) => {
        console.log('renslgjs' , this.state.list);
        return list.map( item => (
                <li key = {item.id}>
                    <a>
                        <img src = { item.pic }/>
                        <div>

                            <p> { item.d_title } </p>
                        </div>
                    </a>
                </li>
         ))}
    
    render() {
        const {list} = this.state;  //先解构再传参，不传参会出错
        return (
            <div className = "container">
                <ul>
                    {this.renderList(list)}
                </ul>
            </div>
        )
    }
}
