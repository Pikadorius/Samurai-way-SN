import React from 'react';
import s from './ProfileInfo.module.css';
import {FactsType} from '../../../redux/state';

const ProfileInfo: React.FC<FactsType> = ({facts}) => {
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
                <div>
                    {facts.map(f=><li key={f.id}>{f.fact}</li>)}
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;