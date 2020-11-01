// 由redux改为redux-immutable 是为了把state转为immutable类型
import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from '../common/header/store'

const reducer = combineReducers({
    header: headerReducer
})

export default reducer