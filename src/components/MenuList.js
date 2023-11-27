import React from 'react';
import {BiMenu} from "react-icons/bi";
import MenuListItems from "./MenuListItems";
import menuListData from "../menuListData";
function MenuList(props) {
    const [menuContent,setMenuContent] = React.useState(false)
    function closeModal() {
        setMenuContent(prevState => !prevState)
    }
    return (
        <div className='main-container' >
            <div className='menu-container' onClick={closeModal}>
                  <BiMenu className={menuContent?'menu-container-show':'menu-icon'}/>
            </div>
            <div className={menuContent?'menu-items-container':'menu-container-hide'} onClick={closeModal}>
                {props.listItems.map((menuItem) => {
                        return <MenuListItems
                            onClick={e => e.stopPropagation()}
                            title={menuItem.title}
                            key={menuItem.id}
                            fontSize={props.fontSize}
                            backgroundColor={props.backgroundColor}
                        />
                    })}
            </div>
        </div>
    );
}

export default MenuList;
