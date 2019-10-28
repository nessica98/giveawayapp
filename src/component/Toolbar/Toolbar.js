import React , {useState} from 'react';
import './Toolbar.css'
import LoginModal from '../Modal/LoginModal'
import StatusModal from '../Modal/StatusModal'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const MenuBar =  (key) => {
    if(key) {
        return <li>
            <LoginModal />
        </li>
    }
    else {
        return <div className = "card border-warning">
            <div className = "MenuBar">
            <li style = {{fontSize:'10pt'}}>Name : xxx</li>
            <StatusModal />
        </div>
        </div>
          ; // Show User profile and giveawayMenu
    }
};

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
                <li><button className = "btn btn-link"> Contact </button></li>
                <li>
                     <MenuBar />
                </li>
            </ul>
        </div>
    </nav>
</header>


);
export default toolbar;