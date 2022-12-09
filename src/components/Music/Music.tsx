import React from 'react';
import s from './Music.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {StateType} from '../../redux/redux-store';
import {
    addTrackAC,
    deleteTrackAC,
    InititalStateType,
    setTrackNameAC,
    setTrackPerformerAC
} from '../../redux/music_reducer';

const Music = () => {
    const dispatch = useDispatch()
    const state = useSelector<StateType, InititalStateType>(state => state.musicPage)


    return (
        <div className={s.wrapper}>
            <div>{state.tracks.map(t => {

                const deleteTrack = () => {
                    dispatch(deleteTrackAC(t.id))
                }

                return <div key={t.id}>{t.trackPerformer} - {t.trackName}
                    <button onClick={deleteTrack}>x</button>
                </div>
            })}
            </div>
            <div>Add new track:
                <input value={state.newTrackPerformer} onChange={(e)=>dispatch(setTrackPerformerAC(e.currentTarget.value))}/>
                <input value={state.newTrackName} onChange={(e)=>dispatch(setTrackNameAC(e.currentTarget.value))}/>
                <button onClick={()=>dispatch(addTrackAC())}>+</button>
            </div>
        </div>
    );
};

export default Music;