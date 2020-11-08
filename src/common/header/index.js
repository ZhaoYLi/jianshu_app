import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { actionCreators } from './store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button,
} from "./style";
import { connect } from 'react-redux';

class Header extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      mouseIn: false
    }
  }

  handleMouseEnter = () => {
    this.setState({
      mouseIn: true
    })
  }

  handleMouseLeave = () => {
    this.setState({
      mouseIn: false
    })
  }

  renderSearchContain = () => {
    const { mouseIn } = this.state
    const { list, focused, handlePageChange, currentPage, totalPage } = this.props
    const newList = list.toJS()
    const tagList = []
    for (let i = (currentPage - 1) * 10; i < currentPage * 10; i++) {
      tagList.push(
        <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
      )
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
          <SearchInfoSwitch onClick={() => { handlePageChange(currentPage, totalPage, this.spinIcon) }}>
              <i ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">123</i>
          换一批
          </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {tagList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }

  }

  render() {
    const { focused, handleInputFocus, handleInputBlur, login, logout, list } = this.props;

    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          {login ? (
            <NavItem onClick={logout} className="right">
              退出
            </NavItem>
          ) : (
              <NavItem className="right">登陆</NavItem>
            )}
          <NavItem className="right">
            <i className="iconfont iconbixin"></i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition in={focused} timeout={200} classNames="slide">
              <NavSearch
                className={focused ? "focused" : ""}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <span className={focused ? "focused iconfont zoom iconfangdajing" : "iconfont zoom iconfangdajing"}>&#xe653;</span>
            {this.renderSearchContain()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting">
            <i className="iconfont iconbixin">&#xe625;</i>
              写文章
            </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}
// 写成无状态组件,性能会比较高
// const Header = (props) => {}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    currentPage: state.getIn(['header', 'currentPage']),
    totalPage: state.getIn(['header', 'totalPage'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus: (list) => {
      list.size === 0 && dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },

    handleInputBlur: () => {
      dispatch(actionCreators.searchBlur())
    },

    handlePageChange: (currentPage, totalPage, spin) => {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      // console.log('spin--------', spin, 'translate', originAngle)
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      } else {
        originAngle = 0
      }
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

      if (currentPage < totalPage) {
        dispatch(actionCreators.changePage(currentPage + 1))
      } else {
        dispatch(actionCreators.changePage(1))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
