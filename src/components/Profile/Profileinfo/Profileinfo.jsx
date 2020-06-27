import React from 'react';
import s from './Profileinfo.module.css';
import Preloader from "../../common/Preloader/preloader";
import ProfilestatusWithHooks from "./ProfilestatusWithHooks";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    let lookingForAJob = '';
    if (props.profile.lookingForAJob) {
        lookingForAJob = `Looking for a job: ${props.profile.lookingForAJobDescription}`
    }

    return (
        <div>
            <div className={s.ProfileHeader}>
                <img src='https://www.zastavki.com/pictures/1920x1200/2009/Nature_Fields_Green_Horizon_015894_.jpg'/>
            </div>
            <div className={s.infoBlock}>
                <img className={s.profilePhoto} src={props.profile.photos.large}/>
                <div className={s.descriptionBlock}>
                    <div>Name: {props.profile.fullName}</div>
                    <div>About me: {props.profile.aboutMe}</div>
                    <div>{lookingForAJob}  </div>
                </div>
            </div>
            <div>
                <ProfilestatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
            </div>

            <div className={s.socialIconsBlock}>
                <a href={`http://${props.profile.contacts.facebook}`}>
                    <img src='https://www.jrmotors.pl/images/fnowe.png'/>
                </a>
                <a href={`http://${props.profile.contacts.twitter}`}>
                    <img
                        src='https://www.freepngimg.com/thumb/business/60486-business-service-twitter-internet-organization-price-thumb.png'/>
                </a>
                <a href={`http://${props.profile.contacts.instagram}`}>
                    <img src='https://shop.dte.la/user_data/images/icon_ig.png'/>
                </a>
                <a href={`http://${props.profile.contacts.youtube}`}>
                    <img src='https://www.itadroid.net/wp-content/uploads/2014/06/unnamed.png'/>
                </a>
                <a href={`http://${props.profile.contacts.github}`}>
                    <img src='https://static.miraheze.org/fortressblastwiki/2/28/Papirus_icon_github.png'/>
                </a>
                <a href={`http://${props.profile.contacts.website}`}>
                    <img src='https://ihlastan.ru/wp-content/uploads/2019/08/99989898.png'/>
                </a>
                <a href={`http://${props.profile.contacts.mainLink}`}>
                    <img src='https://ihlastan.ru/wp-content/uploads/2019/08/99989898.png'/>
                </a>


            </div>
        </div>

    )
}

export default ProfileInfo;