import { Tabs } from 'antd-mobile';
import React from 'react'
import './index.scss'
import Content from './Content';

export default class Slider extends React.Component {

  renderContent = tab =>{
    console.log('tab' , tab);
    return (
          <div 
          style={{ height: '100%', overflow:'auto' , backgroundColor: '#fff' }}
          >
          { tab.floors.map( (item , index) => 
          <Content key = { index } { ...item } />) 
          }
    </div>)
  }
  
  render() {
    //我们自己的数据要有title
    const {data} = this.props;
    // null        有数据
    return (
        <Tabs 
        tabs={data &&　data || []} 
        renderTabBar={props => <Tabs.DefaultTabBar {...props} page={11} />}
        tabBarPosition = "left"
        tabDirection = "vertical"
        >
          {this.renderContent}
        </Tabs>
    );
  }
}
