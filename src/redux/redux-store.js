import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import {appReducer} from "./app-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer



});

let store = createStore(reducers, applyMiddleware(thunkMiddleware)); /*applyMiddleware(thunkMiddleware) - добавляет промежуточный уровень при обработке dispatch между store и reducer. После вклчюения этого промежуточного слоя перед попадания в reducer задиспатченная функция попадает в Middleware уровень и проверяет, если в полученом коде только action (объект со свойством type, который будет обрабатывать reducer), то код пересывается дальше в reducer, если же там есть thunk функция, то Middleware уровень запустит функцию, получит в результате action и отправить его по томуже пути повторно, теперь Middleware обнаружит, что это чистый action и перешлет его в reducer */

window.store = store;

export default store;