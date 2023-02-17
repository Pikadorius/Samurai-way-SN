export type FriendType = {
    id: number
    name: string
    avatar: string
}
export type SidebarType = {
    friends: FriendType[]
}

const initialState: SidebarType = {
    friends: []
}

const sidebarReducer = (state: SidebarType = initialState, action: any): SidebarType => {
    return state;
}
//редьюсеры эскпортируем по умолчанию
export default sidebarReducer;