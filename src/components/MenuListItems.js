import React from "react";

export default function MenuListItems(props) {
    return (
        <div>
            <div className='menu-list-items' id={props.id}>{props.title}</div>
        </div>
    )
}
