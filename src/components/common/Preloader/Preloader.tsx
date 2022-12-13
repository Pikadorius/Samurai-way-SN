import React from 'react';
import preloader from '../../../assets/gifs/loading.svg'
import s from './Preloader.module.css'

const Preloader = () => {
    return (
            <img alt='loading' src={preloader} className={s.preloader}/>

    );
};

export default Preloader;