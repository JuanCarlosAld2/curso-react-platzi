import React from "react";
import {TodoIcons} from './TodoIcons'

function CompleteIcon({completed, onComplete,text}) {
    return (
        <TodoIcons
            type='check'
            color={completed ? 'green' : 'gray'}
            onClick={onComplete}
            text={text}
        />
    )
}

export {CompleteIcon};