import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";

import {getAuthUserData, logout, setAuthUserReducer} from "../../redux/auth-reducer";
import * as axios from "axios";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component {


    render () {
        return <Header {...this.props} />
    }
}



let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login

})

export default connect(mapStateToProps, {logout} )(HeaderContainer);