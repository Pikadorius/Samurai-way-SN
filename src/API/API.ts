import axios from 'axios';

type AuthMeResponseDataType = {
    id: number
    login: string
    email: string
}

type ResponseType<D={}> = {
    data: D
    messages: string[]
    fieldsErrors: string[]
    resultCode: number
}
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
}

export type LoginFormType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: boolean
}

export const authAPI = {
    authMe: () => instance.get<ResponseType<AuthMeResponseDataType>>(`auth/me`).then(responce => responce.data),
    login: (loginData: LoginFormType)=>instance.post<ResponseType<{item:number}>>(`auth/login`, loginData),
    logout: ()=>instance.delete('auth/login')
}

export const profileAPI = {
    getUserProfile: (userId: string) => instance.get(`profile/${userId}`).then(response => response.data),

    updateMyStatus: (status: string) => instance.put(`profile/status`, {status}).then(response => {
        debugger
        return response.data
    }),
    getUsersStatus: (userId: number) => instance.get(`/profile/status/${userId}`).then(response => {
        debugger
        return response.data
    })
}
