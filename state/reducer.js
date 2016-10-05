import {handleActions} from 'redux-actions'
import {FETCH_FAMILY, PUSH_PATH, POP_PATH} from './actionIds'
import dropRight from 'lodash/dropRight'

const initialState = {}

export default handleActions({
    [FETCH_FAMILY]: (state, {status, result}) => {
        switch (status) {
            case 'complete':
                return {
                    ...state,
                    path: [result.members]
                }
            default:
                return state
        }
    },
    [PUSH_PATH]: (state, {top}) => ({
        ...state,
        path: [...state.path, top]
    }),
    [POP_PATH]: (state) => ({
        ...state,
        path: dropRight(state.path, 1)
    })
}, initialState)
