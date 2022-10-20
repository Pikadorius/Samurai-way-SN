import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.pageImg}
                     src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                     alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <img className={s.avatar} src="https://world.edu/wp-content/uploads/2020/05/Professional-Programmer.jpg"
                     alt=""/>
                <div>About me</div>
            </div>
        </div>
    );
};

export default ProfileInfo;