import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ListItem, ListInfo, LoadMore } from '../style';

class List extends Component {
  render() {
    const { list = [] } = this.props
    return (
      <div>
        {
          list.map((item, index) => {
            return (
              <Link key={index} to={'/detail/' + item.get('id')}>
                <ListItem>
                  <img alt='' className='pic' src={item.get('imgUrl')} />
                  <ListInfo>
                    <h3 className='title'>{item.get('title')}</h3>
                    <p className='desc'>{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            );
          })
        }
        <LoadMore>更多文字</LoadMore>
      </div>
    );
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'articleList']),
})

export default connect(mapState, null)(List)
