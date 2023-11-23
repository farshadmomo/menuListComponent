import React from "react";

export default function MenuListItems(props) {
    return (
            <div className='menu-list-items' style={{fontSize:props.fontSize,backgroundColor:props.backgroundColor}} id={props.id}>{props.title}</div>
    )
}
