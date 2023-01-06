import React from 'react';
import {FriendType} from '../../redux/sidebar_reducer';
import {connect} from "react-redux";
import Navbar from "./Navbar";
import {StateType} from "../../redux/redux-store";
import {setProfile, SetProfileStatusTCType, SetProfileTCType, setStatus} from '../../redux/profile_reducer';

/*const Navbar: React.FC<SidebarType> = ({friends}) => {
    return (
        <nav className={s.sidebar}>
            <div className={s.item}>
                <NavLink to={'/profile'} activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/dialogs'} activeClassName={s.activeLink}>Dialogs</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/news'} activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/music'} activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/settings'} activeClassName={s.activeLink}>Settings</NavLink>
            </div>

            <div className={s.friends}>
                <h2>My best friends:</h2>
                <div className={s.friendsList}>
                    {friends.map(f => {
                        return (
                            <div key={f.id} className={s.friend}>
                                <img src={f.avatar} alt={"Friends avatar"}/>
                                {f.name}
                            </div>
                        )
                    })}
                </div>
            </div>
        </nav>
    );
};*/

export type MapStateType = {
    friends: FriendType[]
    isAuth: boolean
}

const mapStateToProps = (state: StateType): MapStateType => {
    return {
        friends: state.sidebar.friends,
        isAuth: state.auth.isAuth
    }
}

type MapDispatchType = {
    setProfile:SetProfileTCType
    setStatus: SetProfileStatusTCType
}
const action:MapDispatchType = {
    setProfile,
    setStatus
}
export type NavbarType = MapDispatchType & MapStateType

export const NavbarContainer = connect(mapStateToProps, action)(Navbar);


export default NavbarContainer;