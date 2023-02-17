import React from 'react';
import s from './Music.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {StateType} from '../../bll/redux-store';
import {
    addTrackAC,
    deleteTrackAC,
    InitialStateType,
    setTrackNameAC,
    setTrackPerformerAC
} from './music_reducer';

const Music = () => {
    const dispatch = useDispatch()
    const {tracks,newTrackPerformer,newTrackName} = useSelector<StateType, InitialStateType>(state => state.musicPage)


    return (
        <div className={s.wrapper}>
            <div>{tracks.map(t => {

                const deleteTrack = () => {
                    dispatch(deleteTrackAC(t.id))
                }

                return <div key={t.id}>{t.trackPerformer} - {t.trackName}
                    <button onClick={deleteTrack}>x</button>
                </div>
            })}
            </div>
            <div>Add new track:
                <input value={newTrackPerformer} onChange={(e)=>dispatch(setTrackPerformerAC(e.currentTarget.value))}/>
                <input value={newTrackName} onChange={(e)=>dispatch(setTrackNameAC(e.currentTarget.value))}/>
                <button onClick={()=>dispatch(addTrackAC())}>+</button>
            </div>
        </div>
    );
};

export default Music;