import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from "./components/Users/UsersContainer";

import HeaderContainer from "./components/Header/HeaderContainer";
import loginPage from "./components/login/login";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router";
import Preloader from "./components/common/Preloader/preloader";
import {initializeApp} from "./redux/app-reducer";
import {withSuspense} from "./hoc/withSuspense";

/*import LoginPage from "./components/login/login";*/
/*import ProfileContainer from "./components/Profile/ProfileContainer";*/
/*import DialogsContainer from "./components/Dialogs/DialogsContainer";*/
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer')); /*Lazy закгрука - эта компонента подгрузится только когда пользователь непейдет на нее, а не в начале инициации всего приложения*/
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer')); /*Lazy закгрука - эта компонента подгрузится только когда пользователь непейдет на нее, а не в начале инициации всего приложения*/
const LoginPage = React.lazy(() => import('./components/login/login')); /*Lazy закгрука - эта компонента подгрузится только когда пользователь непейдет на нее, а не в начале инициации всего приложения*/


//http://localhost:3000/

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    };

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar friends={this.props.state.sideBar.friends}/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => {
                               return <React.Suspense fallback={<Preloader/>}>
                                   <DialogsContainer
                                       store={this.props.store}
                                       state={this.props.state.dialogsPage}
                                   />
                               </React.Suspense>
                           }}/> {/*тэг Route позволяет отрисовать указанную в параметре компаненту (component={Dialogs} оно же render={ () => <Dialogs />}) по URL указанному в параметре path ( path='/dialogs') */}
                    <Route
                        path='/profile/:userId?' /*синтексис :userId, сообщет роутеру, что тут должен быть какой-то параметр, который мы для нашего понимания кода обозначили как userId. Значек ? означает, что параметр userId является опциональным, его может не быть */
                        render={() => {
                            return <React.Suspense fallback={<Preloader/>}>
                                <ProfileContainer
                                    state={this.props.state.profilePage}
                                    dispatch={this.props.dispatch}
                                    store={this.props.store}
                                />
                            </React.Suspense>
                        }
                        }/>
                    <Route path='/users' render={() => <UsersContainer/>}/>

                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/login'
                           render={withSuspense(LoginPage)}/> {/*withSuspense - это созданный нами hoc-функция, которая содержит в себе весь синтаксис, необходимый для функции Lazy Loading. Можно везде использовать эту функцию вместо React.Suspense */}


                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);