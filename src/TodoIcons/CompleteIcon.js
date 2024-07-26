import React from "react";
import {TodoIcons} from './'

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