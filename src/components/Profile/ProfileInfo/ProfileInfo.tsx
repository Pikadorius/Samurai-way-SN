import React from 'react';
import s from './ProfileInfo.module.css';
import {FactType} from '../../../redux/profile_reducer';

export type ProfileInfoType = {
    facts: FactType[]
}

const ProfileInfo: React.FC<ProfileInfoType> = ({facts}) => {
    return (
        <div>
            <div>
                <img className={s.pageImg}
                     src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                     alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <img className={s.avatar} src="https://www.shkolazhizni.ru/img/content/i156/156707_or.jpg"
                     alt=""/>
                <div>
                    <ul>
                        {facts.map(f => <li key={f.id}>{f.fact}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;