import React, {Component} from 'react';
import { Spin} from 'antd';
import 'antd/dist/antd.css'

const LoadingComp = BaseComponent => ({loading}) =>{

  class Loading extends Component{
    
    render(){
      console.log('高阶组件里的this.props---------', this.props)
      return (
        loading?<div>
        <Spin size="large" />
        </div>: <BaseComponent {...this.props}>
        </BaseComponent>
      )
    }
  }
  
  return Loading
}

export default LoadingComp