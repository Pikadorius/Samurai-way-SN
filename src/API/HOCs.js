import {Redirect} from 'react-router-dom';

export const withHigherOrderComponent = (Component) => (props) => {
    if (!props.isAuth) return <Redirect to={'/login'}/>
    else return <Component {...props} />
}