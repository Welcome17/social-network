import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getAuthUserData} from "./auth-reducer";


const INITIALIZING_SUCCESS = 'INITIALIZING_SUCCESS';


let initialState = {
    initialized: false
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZING_SUCCESS:
            return {
                ...state,
                initialized: true


            }

        default:
            return state;
    }
}

export const initializedSuccess = () => (
    {
        type: INITIALIZING_SUCCESS
    }
)

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData()); /*Хотя обычно мы не используем для dispatch его promises (мы их используем для axios запросов на сервер, т.к. это асинхронные функции. Но dispatch тоже возвращает promises, к которым мы сможет обратиться по завершению работы dispatch */
    Promise.all([promise]).then(() => {/*Promise.all([promise]) - такой синтаксис позволяет запустить следующий код по завешению несколькоих асинхронных функций (которые мы указываем в массив(в нашем случае тут всего 1-на функция, но можно добавить и другие))*/
        dispatch(initializedSuccess()); /*после завешения получения инициализацийонных данных с сервера мы dispatch в state инфу, что инициализация завершилась */
    });
}
/*

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {/!*resultCode === 0 это данные из спецификации к API*!/
                dispatch(getAuthUserData()); /!*после получения положительного ответа сервера мы запускаем dispatch логинизации в нашем приложение, чтобы пользователю отдавался его профиль и др данные как залогиненного пользователя*!/
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error" /!*Из специфиувции сервера мы знаем, что если есть ошибка, то сервер вернут массив response.data.messages в ктором будет лежать текст ошибки, поэтому мы проверяем длину этого массива с тестом ошибки, если массив не пустой, то отображаем первую ошибку из массива, если же массив по какой-то причине пустой (но из условия выше мы уже отсекли случай, когда все в порядке), то пишем Some error *!/
                let action = stopSubmit("login", {_error: message});/!*stopSubmit - это функция из библиотеки redux-form, чтобы прекратить передачу данных из формы на сервер. Мы используем это, чтобы получив от сервера ответ, что логин/пароль не совпали с базой данных, то мы прекращаем submit и выдаем ошибку. Мы передаем параметры: первый параметр - login - это название формы, которое мы назначили при создании формы, второй параметр - это поле, в котором показать ошибку и тест ошибки. Можно указать 1 поле, например email / password или общую ошибку указав _error *!/
                dispatch(action);
            }
        }
    )
}


export const logout = () => (dispatch) => {
    authAPI.logout().then(response => {
            if (response.data.resultCode === 0) {/!*resultCode === 0 это данные из спецификации к API*!/
                dispatch(setAuthUserReducer(null, null, null, false));/!*затираем в нашем state идентификационные данные заменив их на null*!/
            }
        }
    )
}
*/

