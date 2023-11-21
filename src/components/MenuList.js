import React from 'react';
import {BiMenu} from "react-icons/bi";
import MenuListItems from "./MenuListItems";
import menuListData from "../menuListData";
function MenuList() {
    const [menuContent,setMenuContent] = React.useState(false)
    console.log(menuContent)
    function closeModal() {
        setMenuContent(prevState => !prevState)
    }
    return (
        <div className='main-container' >
            <div className='menu-container' onClick={closeModal}>
                  <BiMenu className={menuContent?'menu-container-show':'menu-icon'}/>
            </div>
            <div className={menuContent?'menu-items-container':'menu-container-hide'} onClick={closeModal}>
                {menuListData.map((menuItem) => {
                        return <MenuListItems
                            onClick={e => e.stopPropagation()}
                            title={menuItem.title}
                            key={menuItem.id}
                        />
                    })}
            </div>
        </div>
    );
}

export default MenuList;
