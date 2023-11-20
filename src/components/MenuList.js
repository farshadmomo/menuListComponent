import React from 'react';
import {BiMenu} from "react-icons/bi";
import MenuListItems from "./MenuListItems";
import menuListData from "../menuListData";
function MenuList(props) {
    const [menuContent,setMenuContent] = React.useState(false)
    console.log(menuContent)
    return (
        <div className='main-container'>
            <div className='menu-container' onClick={() => setMenuContent(!menuContent)}>
            <BiMenu className={menuContent?'menu-container-show':'menu-icon'}/>
        </div>
            <div className={menuContent?'menu-items-container':'menu-container-hide'}>
                {menuListData.map((menuItem) => {
                        return <MenuListItems
                            title={menuItem.title}
                            key={menuItem.id}
                        />
                    })}
            </div>
        </div>
    );
}

export default MenuList;
