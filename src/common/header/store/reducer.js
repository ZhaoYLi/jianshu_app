import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    focused: false,
    list: [],
    currentPage: 1,
    totalPage: ''
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    switch(action.type){
        case actionTypes.SEARCH_FOCUS:
        // 不会改变原来的state，通过set方法设置需要改变的属性，并和
        // 原来的state组合，返回新的state
            return state.set('focused', true)
        case actionTypes.SEARCH_BLUR: 
             return state.set('focused', false)
        case actionTypes.CHANGE_LIST:
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            })
        case actionTypes.CHANGE_PAGE:
            return state.set('currentPage', action.currentPage)
        default:
            return state
    }

}