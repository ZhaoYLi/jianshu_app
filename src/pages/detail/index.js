import React, { Component } from 'react';
import LoadingHOC from '../loading'
import { withRouter } from 'react-router-dom'

class Detail extends Component {

  componentDidMount() {

  }

  render() {
    const id = this.props.match.params.id
    console.log('id-----', id)

    return (
      <div>
        Detail Page
        <p>{id}</p>
      </div>

    );
  }
}

export default LoadingHOC(withRouter(Detail))({ loading: false })