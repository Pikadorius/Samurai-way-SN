import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                    alt=""/>
                <div>Main content</div>
            </div>
            <div className={s.about}>
                <img className={s.avatar} src="https://world.edu/wp-content/uploads/2020/05/Professional-Programmer.jpg"
                     alt=""/>
                <div>About me</div>
            </div>

            <MyPosts/>

        </div>
    );
};

export default Profile;