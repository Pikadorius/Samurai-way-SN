import axios from 'axios';


// use instead of axios => default configuration for API requests
const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': 'abc137fc-ad0c-49be-975b-e12bdb8a93ad'
    },
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
})

export const usersAPI = {
    getUsers: (currentPage: number, pageSize: number) => instance.get(`users?page=${currentPage}&count={${pageSize}`).then(responce => responce.data),
    followUser: (id: number) => instance.post(`follow/${id}`).then(responce => responce.data),
    unfollowUser: (id: number) => instance.delete(`follow/${id}`).then(responce => responce.data),
    getUserProfile: (userId: string) => instance.get(`profile/${userId}`).then(response => response.data)
}

export const authAPI = {
    authMe: () => instance.get(`auth/me`).then(responce => responce.data)
}

export const profileAPI = {
    updateMyStatus: (status: string) => instance.put(`profile/status`, {status}).then(response => {
        debugger
        return response.data
    }),
    getUsersStatus: (userId: number) => instance.get(`/profile/status/${userId}`).then(response => {
        debugger
        return response.data
    })
}
