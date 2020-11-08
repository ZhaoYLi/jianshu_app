import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { BackTop } from './style';
import { actionCreators } from './store';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style';

class Home extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      showScrollBtn: false
    }
  }

  componentDidMount() {
    this.props.changeHomeData()
    const _this = this
    window.addEventListener('scroll', () => {
      _this.handleShowScroll()
    })
  }

  handleShowScroll = () => {
    if (document.documentElement.scrollTop > 100) {
      this.setState({
        showScrollBtn: true
      })
    } else {
      this.setState({
        showScrollBtn: false
      })
    }
  }

  handleScrollToTop = () => {
    document.documentElement.scrollTop = 0
    this.setState({
      showScrollBtn: false
    })
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleShowScroll)
  }

  render() {
    const { showScrollBtn } = this.state
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {showScrollBtn ? <BackTop onClick={this.handleScrollToTop}>顶部</BackTop> : null}
      </HomeWrapper>
    );
  }
}

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeData())
  }
})


export default connect(null, mapDispatch)(Home)
