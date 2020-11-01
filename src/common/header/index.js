import React, { Component } from "react";
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

// 写成无状态组件,性能会比较高
const Header = (props) => {
  const { focused, handleInputFocus, handleInputBlur, list, login, logout } = props;

  return (
    <HeaderWrapper>
      <Logo />
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
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          <span className={focused ? "focused iconfont zoom iconfangdajing" : "iconfont zoom iconfangdajing"}>&#xe653;</span>
          {
            //this.getListArea()
          }
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

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus: () => {
      dispatch(actionCreators.searchFocus())
    },

    handleInputBlur: () => {
      dispatch(actionCreators.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
