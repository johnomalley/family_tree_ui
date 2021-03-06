import {handleActions} from 'redux-actions'
import {FETCH_FAMILY, PUSH_PATH, POP_PATH} from './actionIds'
import dropRight from 'lodash/dropRight'

const initialState = {}

export default handleActions({
    [FETCH_FAMILY]: (state, {status, result}) => {
        switch (status) {
            case 'complete':
                const {id, name, description, members} = result
                return {
                    ...state,
                    family: {id, name, description},
                    path: [members[0]]
                }
            default:
                return state
        }
    },
    [PUSH_PATH]: (state, {value}) => ({
        ...state,
        path: [...state.path, value]
    }),
    [POP_PATH]: (state) => ({
        ...state,
        path: dropRight(state.path, 1)
    })
}, initialState)
