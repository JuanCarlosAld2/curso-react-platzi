import React from "react";
import {TodoIcons} from './'

function DeleteIcon({onDelete,text}) {
    return (
        <TodoIcons
        type='delete'
        color='gray'
        onClick={onDelete}
        text={text}
    />
    )
}

export {DeleteIcon};