import React from "react";
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";


let User = (props) => {


    return (
        <div>
            <div>
                <div>
                    <NavLink to={'/profile' + `/` + props.user.id}>
                        <img src={props.user.photos.small != null ? props.user.photos.small : userPhoto}
                             className={s.profileImage}/>
                    </NavLink>
                </div>
                <div>
                    {props.user.followed

                        ? <button disabled={props.followingInProgress.some(id => id === props.user.id)} onClick={() => {
                            props.unfollow(props.user.id)
                        }}>Unfollow</button>

                        : <button disabled={props.followingInProgress.some(id => id === props.user.id)} onClick={() => {
                            props.follow(props.user.id)
                        }}>Follow</button>
                    }
                </div>
                <div>
                    <div>{props.user.name}</div>
                    <div>{props.user.status}</div>
                    <div>{"props.user.city"}</div>
                    <div>{"props.user.country"}</div>
                </div>
            </div>
        </div>)
}


export default User;