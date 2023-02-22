import React, {ChangeEvent, useEffect, useState} from 'react';
import {StateType} from '../../../bll/redux-store';
import {setProfile, setStatus, updateStatus} from '../profile_reducer';
import {useDispatch, useSelector} from 'react-redux';

const ProfileStatusFunc = () => {

    const status = useSelector<StateType, string>(state => state.profilePage.profileStatus)
    const authUserId = useSelector<StateType, number>(state => state.auth.id || 27933)
    const dispatch = useDispatch()

    useEffect(()=>{
    },[])

    const [editMode, setEditMode] = useState(false)
    const [newStatus, setNewStatus] = useState(status)

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        dispatch(updateStatus(newStatus))
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewStatus(e.currentTarget.value)
    }

    return (
        <>
            {editMode ? <input onChange={onChangeHandler} autoFocus value={newStatus}
                               onBlur={deactivateEditMode}/>
                : <span onDoubleClick={activateEditMode}>{newStatus || `No status`}</span>}
        </>
    );
};

export default ProfileStatusFunc;