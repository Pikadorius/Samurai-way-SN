import React from 'react';
import s from './Profile.module.css';

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
            <div className={s.posts}>
                <h3>Posts</h3>
                <div className={s.item}>
                    New post
                </div>
                <div className={s.item}>
                    Post 1
                </div>
                <div className={s.item}>
                    Post 2
                </div>
            </div>
        </div>
    );
};

export default Profile;