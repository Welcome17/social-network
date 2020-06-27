import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import cn from "classnames";
import Message from "../Dialogs/Messages/Message";

const Navbar = (props) => {
    console.log(props.friends);
        let friendsElement = props.friends.map (f => <div className={s.friendsElement}><div><img src={f.profileImage} className={s.friendsImage}/></div><div className={s.friendsName}>{ f.name }</div></div>  );

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' activeClassName={s.activeLink}>Find friends</NavLink>
            </div>
            <div>
                <h3>Friends</h3>
                <div className={s.friendsContainer}>{ friendsElement }</div>
            </div>

        </nav>
    )
}

export default Navbar;