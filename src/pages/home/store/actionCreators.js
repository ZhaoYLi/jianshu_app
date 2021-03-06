import axios from 'axios'
import * as actionTypes from './actionTypes'
import {fromJS} from 'immutable'

const changeHomeData = (result)=>(
  {
    type: actionTypes.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
  }
)

export const getHomeData = ()=>{
  return (dispatch) => {
		axios.get('/api/home.json').then((res) => {
      const result = res.data.data;
			dispatch(changeHomeData(result));
		});
	}
}