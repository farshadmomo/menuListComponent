import React from "react";

export default function MenuListItems(props) {
    function handleSelect() {
        console.log(props.title)
    }
    return (
            <div className='menu-list-items'
                 style={{fontSize:props.fontSize,backgroundColor:props.backgroundColor}}
                 id={props.id}
                 onClick={handleSelect}
            >
                {props.title}
            </div>
    )
}
