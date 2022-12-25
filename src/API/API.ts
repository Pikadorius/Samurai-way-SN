import axios from 'axios';


// use instead of axios => default configuration for API requests
const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': 'abc137fc-ad0c-49be-975b-e12bdb8a93ad'
    },
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
})


export const getUsers = (currentPage: number, pageSize: number) => instance.get(`users?page=${currentPage}&count={${pageSize}`).then(responce => responce.data)

export const followUser = (id: number) => instance.post(`follow/${id}`).then(responce => responce.data)

export const unfollowUser = (id: number) => instance.delete(`follow/${id}`).then(responce => responce.data)

export const authMe = () => instance.get(`auth/me`).then(responce => responce.data)