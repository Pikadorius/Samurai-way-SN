import React from 'react';
import store, {StoreType} from './redux/redux-store';


// оставил пример как создавать Context
const StoreContext = React.createContext({} as StoreType)


export type ProviderType = {
    store: StoreType
    children: React.ReactNode
}

export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={store}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContext;