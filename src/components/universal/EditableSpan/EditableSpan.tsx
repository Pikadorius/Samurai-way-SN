import React, {ChangeEvent, useState, KeyboardEvent} from 'react';

type EditableSpanType = {
    title: string
    onChange: (newTitle: string) => void
}

const EditableSpan = (props: EditableSpanType) => {
    const [isEditMode, setEditMode]=useState(false)
    const [value, setValue]=useState(props.title)
    const [error, setError]=useState('')

    const onDoubleClickHandler = () => {
        setEditMode(true)
    }

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        error && setError('')
        setValue(e.currentTarget.value)
    }

    const onEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key==='Enter' && value.trim()) {
            props.onChange(value)
           error && setError('')
            setEditMode(false)
        }
        else setError('Error! Enter something!')
    }

    return isEditMode ? <input placeholder={error ? error : 'Your text...'} value={value} onChange={onChangeHandler} onKeyDown={onEnterHandler}/> : <span onDoubleClick={onDoubleClickHandler}>{props.title}</span>
};

export default EditableSpan;