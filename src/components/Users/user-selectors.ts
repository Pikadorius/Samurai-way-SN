import {StateType} from "../../bll/redux-store";
import {createSelector} from "reselect";

const getUsers = (state: StateType) => {
    return state.usersPage.users
}
export const usersSelector = createSelector(getUsers, (users) => {
    return users
})

const getPageSize = (state: StateType) => {
    return state.usersPage.pageSize
}
export const pageSizeSelector = createSelector(getPageSize, (pageSize) => {
    return pageSize
})

const getTotalUsersCount = (state: StateType) => {
    return state.usersPage.totalUsersCount
}
export const totalUsersCountSelector = createSelector(getTotalUsersCount, (totalUsersCount) => {
    return totalUsersCount
})

export const getCurrentPage = (state: StateType) => {
    return state.usersPage.currentPage
}
export const currentPageSelector = createSelector(getCurrentPage, (currentPage) => {
    return currentPage
})

export const getIsFetching = (state: StateType) => {
    return state.usersPage.isFetching
}
export const isFetchingSelector = createSelector(getIsFetching, (isFetching) => {
    return isFetching
})

export const getFollowingInProgress = (state: StateType) => {
    return state.usersPage.followingInProgress
}
export const followingInProgressSelector = createSelector(getFollowingInProgress, (followingInProgress) => {
    return followingInProgress
})