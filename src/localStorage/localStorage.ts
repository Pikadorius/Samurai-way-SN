import {StateType} from '../bll/redux-store';

export const loadState = () => {
    try {
        const newState = localStorage.getItem('state')
        if (newState===null) {
            return undefined
        }
        return JSON.parse(newState)
    }
    catch (err) {
        return undefined
    }
}

export const saveState = (state: StateType) => {
    try {
        const newState = JSON.stringify(state)
        localStorage.setItem('state', newState)
    }
    catch (err) {

    }
}