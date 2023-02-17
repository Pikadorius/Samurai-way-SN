import {StateType} from "../../bll/redux-store";
import {createSelector} from "reselect";

const getUsersPageInfoSelector = (state: StateType) => {
    return state.usersPage
}

export const getUsersPageInfo = createSelector(getUsersPageInfoSelector, (usersPage) => {
    return usersPage
})