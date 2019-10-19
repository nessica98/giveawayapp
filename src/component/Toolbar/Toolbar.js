import React , {useState} from 'react';
import './Toolbar.css'
import LoginModal from '../Modal/LoginModal'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const toolbar = props => (
<header className="toolbar">
    <nav className="toolbar__navigation">
        <div>
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><a href="/">GIVEAWAY</a></div>
        <div className= "spacer" />
        <div className="toolbar_navigation-items">
            <ul>
                <li><button className="btn btn-link">Contact</button></li>
                <li>
                    <LoginModal />
                </li>
            </ul>
        </div>
    </nav>
</header>


);
export default toolbar;