import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileType} from "../ProfileContainer";
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo: React.FC<ProfileType> = (props) => {

    if(!props.profile) {
        return <Preloader/>
    }

  return (
        <div>
            <div>
                <img className={s.pageImg}
                     src={"https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"}
                     alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                    <img className={s.avatar} src={props.profile.photos.small}
                         alt=""/>
                <p>My name is {props.profile.fullName}</p>
                <p>{props.profile.aboutMe}</p>
                <p>Search work: {props.profile.lookingForAJob && props.profile.lookingForAJobDescription}</p>
                <p></p>
                <p></p>

            </div>
        </div>
    );
};

export default ProfileInfo;