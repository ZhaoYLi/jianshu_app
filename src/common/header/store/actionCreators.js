import * as actionTypes from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'

const changeList = (data) =>({
    type:actionTypes.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
})

export const searchFocus = () => ({
    type: actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR
})

export const getList = () =>{
    return (dispatch) =>{
        axios.get('/api/headerList.json').then(res=>{
            const data = res.data
            dispatch(changeList(data.data))
        }).catch(()=>{
            console.log('error')
        })
    }
}

export const changePage = (pageNum)=>({
    type: actionTypes.CHANGE_PAGE,
    currentPage: pageNum
})