import {ActionsType, SidebarType} from "./store";

const initialState: SidebarType = {
    friends: [
        {
            id: 1,
            name: "Anton",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt3jk5t5kR_i3IeLL1UosSLZmblcK4AhE1kQ&usqp=CAU"
        },
        {
            id: 2,
            name: "Nikita",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt3jk5t5kR_i3IeLL1UosSLZmblcK4AhE1kQ&usqp=CAU"
        },
        {
            id: 3,
            name: "Andrew",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt3jk5t5kR_i3IeLL1UosSLZmblcK4AhE1kQ&usqp=CAU"
        },
    ]
}

const sidebarReducer = (state: SidebarType = initialState, action: ActionsType): SidebarType => {
    return state;
}
//редьюсеры эскпортируем по умолчанию
export default sidebarReducer;