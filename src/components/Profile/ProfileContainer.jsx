import React from 'react';
import ProfileInfo from './Profileinfo/Profileinfo';
import AddNewPostContainer from "./MyPosts/AddNewPostContainer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import connect from "react-redux/es/connect/connect";
import {getStatus, getUserProfile, updateUserStatus} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorisedUserId;
            if (!userId) {
                this.props.history.push("/login"); /*в пропсах есть "ветка" history, у которой есть функция push(/адрес), запустив который поулчается редирект на указанный адрес*/
            }
        }

        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
        /*profileAPI.getProfileData(userId)
        /!*axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)*!/
            .then((data) => {
                this.props.setUserProfile(data);
            });*/
    }


    render() {


        return (
            <div>
                <ProfileInfo {...this.props}
                             profile={this.props.profile}
                             status={this.props.status}
                             updateUserStatus={this.props.updateUserStatus}/>
                <AddNewPostContainer
                    store={this.props.store}
                />
                <MyPostsContainer posts={this.props.state.posts} store={this.props.store}/>
            </div>
        )

    }

}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);


/*   = (props) => {
   if(!props.isAuth) return <Redirect to={"/login"} />; /!*запись (!this.props.isAuth) равна записи (this.props.isAuth === false) *!/

   return <ProfileContainer {...props} />
}*/


let mapStateToProps = (state) => ({ /* Если функция является объектом, то нужно после стрелки ставить сперва ( скобку, а потом { */
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorisedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

/*
let ContainerComponentWithUrlData = withRouter(AuthRedirectComponent); /!*withRouter сканирует URL компоненты и некоторую другую инфу и передает всю эту инфу в виде props компоненте *!/
*/

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect
)
(ProfileContainer);/*compose передаст то что указано здесь как параметр фyнкции из списка выше, начиная с последней(нижей) и двигаясь наверх выполняя функции одну за одной*/