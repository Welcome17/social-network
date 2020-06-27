import React from "react";
import s from "../../Users/Users.module.css";
import preloader from "./../../../assets/images/preloader.svg"

let Preloader = (props) => {
    return (
        <div className={s.preloader}>
            <img src={preloader}/>
        </div>
    )

}

export default Preloader;