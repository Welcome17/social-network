import React, {Component} from "react";
import {Redirect} from "react-router";
import Dialogs from "../components/Dialogs/Dialogs";
import connect from "react-redux/es/connect/connect";


let mapStateToPropsTForRedirect = (state) => ({ /* Если функция является объектом, то нужно после стрелки ставить сперва ( скобку, а потом { */
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            console.log(this.props)
            if (!this.props.isAuth) return <Redirect to={"/login"}/>; /*запись (!this.props.isAuth) равна записи (this.props.isAuth === false) */

            return <Component {...this.props} />
        }
    }



    let ConnectedAuthRedirectComponent = connect(mapStateToPropsTForRedirect)(RedirectComponent);
    return ConnectedAuthRedirectComponent;
}
