import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    focused: false
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    if (action.type === actionTypes.SEARCH_FOCUS) {
        // 不会改变原来的state，通过set方法设置需要改变的属性，并和
        // 原来的state组合，返回新的state
        return state.set('focused', true)
    }
    if (action.type === actionTypes.SEARCH_BLUR) {
        return state.set('focused', false)
    }
    return state

}