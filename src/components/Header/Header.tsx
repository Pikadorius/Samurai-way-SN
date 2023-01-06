import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {HeaderContainerType} from './HeaderContainer';


const Header = (props: HeaderContainerType) => {

    // const dispatch=useDispatch()
    //
    // useEffect(()=>{
    //     axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials:true}).then((responce)=>{
    //         console.log(responce)
    //         dispatch(setUserData(responce.data.data))
    //     })
    // },[])
    //
    // const auth=useSelector<StateType,InititalStateType>(state=>state.auth)

    return (
        <header className={s.header}>
            <img width={'200px'} src="https://www.logodesign.net/logo/line-art-house-roof-and-buildings-4485ld.png"
                 alt=""/>
            <div className={s.loginBlock}>
                {props.isAuth ?
                    <>{props.login}<button onClick={()=>props.logoutTC()}>Logout</button></>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;