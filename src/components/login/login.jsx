import React from 'react';
import { Field } from "redux-form";
import { reduxForm } from 'redux-form';
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validator";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import formStyle from "../common/FormsControls/FormsControls.module.css"

let maxLength15 = maxLengthCreator(15);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}> {/*handleSubmit это функция, предоставляемая плагином redux-form. Мы поручаем ей делать submit нашей формы. Что делает handleSubmit 1) отключает перезагрузку страницы при отправке формы (e.preventDefault) 2) собирает все данные из формочек в объект 3) отправляет данные на сервер  */}
            <div>
                <Field placeholder={"email"} name={"email"} component={Input} validate={[required]}/> {/*Field - это специальная компонента, предоставляемая плагином redux-form. Тип поля формы задается передачей пропма вот таким форматом component={"input"} */}
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input} type={"password"} validate={[required, maxLength15]}/>
            </div>
            <div className={formStyle.formSummaryError}>
                { props.error} {/*этот props передается диспатчем stopSubmit в auth-reducer */}
            </div>
            <div>
                <Field component={Input} type={"checkbox"} name={"rememberMe"} /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm ({ /* reduxForm - это функция из плагина redux-form, которая создаст контейнерную компоненту для обработки форм.reduxForm()() - имеет 2 вызова. одном указывается только название формы, во вторую передается сама форма в виде параметра */
    //a unique name for the form
    form: 'login' // Здесь указывается уникальное название данной формы, чтобы плаигн мог ее идентифицировать
})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/> {/* Здесь отрисовываем контенерную компоненту, созданную при помощи плагина redux-form*/}
    </div>

}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);