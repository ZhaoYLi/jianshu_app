import React, { Component } from 'react';

const myHOC = (title)=> (Comp)=>{

  class Detail extends Component {
    constructor(props) {
      super(props)
      this.state = {
        x: 0,
        y: 0
      }
    }

    handleMove = (event)=>{
      this.setState({
        x: event.clientX,
        y: event.clientY
      })
    }

      render(){
        return (
          <div style={{height: 800, padding: 30, background: 'pink'}} onMouseMove={this.handleMove}>
          <p>xixi i am {title} page</p>
          <Comp {...this.props} mosePosition={this.state}></Comp>
          </div>
        )
      }
    }

    return Detail
  }

  export default myHOC
