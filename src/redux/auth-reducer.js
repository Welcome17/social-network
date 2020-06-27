import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload


            }

        default:
            return state;
    }
}

export const setAuthUserReducer = (userId, email, login, isAuth) => (
    {
        type: SET_USER_DATA,
        payload: {userId, email, login, isAuth}
    }
)

/*Это старый код, который был заменен на более современный синтаксис с использованием async и await */
export const getAuthUserDataBACKUP = () => {
    return (dispatch) => {
        authAPI.auth().then(data => {
                if (data.resultCode === 0) { /*resultCode === 0 это данные из спецификации к API*/
                    let {id, email, login} = data.data;
                    dispatch(setAuthUserReducer(id, email, login, true)); /*при обработке ответа сервера response.data.data.login  получилась 2 раза data потому, что сервер упаковывкт свой ответ в объект с разделом data, к которому мы обращаемся. При этом BackEnd разрабочик API тоже назвал нужный нам раздел (объект с данными) - data*/
                }
            }
        )
    }
}


/*Ниже код с более современным синтексесом для асинхронных запросов*/
export const getAuthUserData = () => {
    return async (dispatch) => { //async - сообщает, что далее будет асинхронный запрос
        let data = await authAPI.auth(); // await - указывает, что нужно дождаться ответа сервера. По оконсанию запроса результат запроса присвоется переменной data и далее мы будем ее использовать как обычную переменную (без метода .then)

        if (data.resultCode === 0) {/*resultCode === 0 это данные из спецификации к API*/
            let {id, email, login} = data.data;
            dispatch(setAuthUserReducer(id, email, login, true)); /*при обработке ответа сервера response.data.data.login  получилась 2 раза data потому, что сервер упаковывкт свой ответ в объект с разделом data, к которому мы обращаемся. При этом BackEnd разрабочик API тоже назвал нужный нам раздел (объект с данными) - data*/
        }
    }
}


export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);

    if (response.data.resultCode === 0) {/*resultCode === 0 это данные из спецификации к API*/
        dispatch(getAuthUserData()); /*после получения положительного ответа сервера мы запускаем dispatch логинизации в нашем приложение, чтобы пользователю отдавался его профиль и др данные как залогиненного пользователя*/
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error" /*Из специфиувции сервера мы знаем, что если есть ошибка, то сервер вернут массив response.data.messages в ктором будет лежать текст ошибки, поэтому мы проверяем длину этого массива с тестом ошибки, если массив не пустой, то отображаем первую ошибку из массива, если же массив по какой-то причине пустой (но из условия выше мы уже отсекли случай, когда все в порядке), то пишем Some error */
        let action = stopSubmit("login", {_error: message});/*stopSubmit - это функция из библиотеки redux-form, чтобы прекратить передачу данных из формы на сервер. Мы используем это, чтобы получив от сервера ответ, что логин/пароль не совпали с базой данных, то мы прекращаем submit и выдаем ошибку. Мы передаем параметры: первый параметр - login - это название формы, которое мы назначили при создании формы, второй параметр - это поле, в котором показать ошибку и тест ошибки. Можно указать 1 поле, например email / password или общую ошибку указав _error */
        dispatch(action);
    }
}


export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();

    if (response.data.resultCode === 0) {/*resultCode === 0 это данные из спецификации к API*/
        dispatch(setAuthUserReducer(null, null, null, false));/*затираем в нашем state идентификационные данные заменив их на null*/
    }
}


export default authReducer;