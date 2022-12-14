import React, {Component} from 'react';
import s from './Profile.module.css';
import Profile from "./Profile";
import axios from "axios";



class ProfileContainer extends Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile`).then((response)=>{

        })
    }

    render = () => {
        return (
            <div>
                <Profile {...this.props}/>
            </div>
        );
    };
}

export default ProfileContainer;