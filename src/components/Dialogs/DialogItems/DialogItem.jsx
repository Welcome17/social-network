import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Message from "../Messages/Message";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id

    return (
        <div className={s.dialog}>
            <div>
                <img src={props.profileImage} />
            </div>
            <div>
                <NavLink to={path}> { props.name }</NavLink>
            </div>
        </div>

    )
}

export default DialogItem;