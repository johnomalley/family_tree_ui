import getFamily from '../network/getFamily'
import {FETCH_FAMILY, PUSH_PATH, POP_PATH} from './actionIds'

export const fetchFamily = (id) =>
    (dispatch) => {
        dispatch({type: FETCH_FAMILY, status: 'start'})
        getFamily(id)
            .then((result) =>
                dispatch({type: FETCH_FAMILY, status: 'complete', result})
            )
            .catch((error) =>
                dispatch({type: FETCH_FAMILY, status: 'error', error})
            )
    }

export const showProfile = (member) => ({type: PUSH_PATH, value: member})

export const goBack = () => ({type: POP_PATH})

