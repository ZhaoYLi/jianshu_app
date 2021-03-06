import {fromJS} from 'immutable'
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
  topicList: [],
	articleList: [],
  recommendList: [],
})

const changeHomeData = (state, action)=>{
  return state.merge({
    topicList: fromJS(action.topicList),
		articleList: fromJS(action.articleList),
		recommendList: fromJS(action.recommendList)
  })
}

export default (state = defaultState, action) =>{
  switch(action.type){
    case actionTypes.CHANGE_HOME_DATA:
      return changeHomeData(state, action)
    default:
      return state
  }
}
