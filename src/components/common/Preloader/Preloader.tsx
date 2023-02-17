import React from 'react';
import preloader from '../../../assets/gifs/loading.svg'
import s from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className = {s.container}>
            <img alt='loading' src={preloader} className={s.preloader}/>
        </div>

    );
};

export default Preloader;