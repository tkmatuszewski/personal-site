import React, {useState} from 'react';
import NavigationBtn from './NavigationBtn';
import Menu from './Menu';

function Hamburger () {

    const [showMenu, setShowMenu] = useState(false);

    return (
    <>
        <NavigationBtn showMenu = {showMenu} setShowMenu = {()=>setShowMenu(!showMenu)}/>
        <Menu showMenu = {showMenu} setShowMenu = {setShowMenu}/>
    </>
    )
}

export default Hamburger