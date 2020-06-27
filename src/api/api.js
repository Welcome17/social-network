import * as axios from "axios";


const instance = axios.create({/*метод creat создает отдельный экземпляр axios, к которому мы можем обращаться (вместо глобального axios), указанные ниже свойства этой копии axios будут автоматически включены в мой запрос к серверу*/
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/', /*Эта часть ссылки будет автоматически плюсоваться к вказанному в коде ниже URL (т.е. тому, что я укажу в первом параметре запроса к серверу)*/
    headers: {/*через свойство header можно отправлять различную инфу серверу, в т.ч. свой ключь API, котроый предоставляте серверный разработчик*/
        "API-KEY": "79cb1f0c-0133-4c1b-acbe-fe74f3c6cf30" /*Это ключ для авторизованных запросов к API. Синтаксис запроса см. в спецификации API сервера*/
    }


});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) { /*(currentPage = 1, pageSize = 10) - означает, что если параметр не передан, то по дэфолту будет указанное значение*/
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId} `)  /*в delete запросах оповещение того, что я обращаюсь как авторизованный пользователь с моими куками (withCredentials: true) является вторым параметром */
            .then(response => {
                return response.data;
            });
    },

    follow(userId) {
        return instance.post(`follow/${userId} `)  /*в delete запросах оповещение того, что я обращаюсь как авторизованный пользователь с моими куками (withCredentials: true) является вторым параметром */
            .then(response => {
                return response.data;
            });
    }

}


export const authAPI = {
    auth() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            });

    },

    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe });
    },

    logout() {
        return instance.delete(`auth/login`);
    }


}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/`+ userId);

    },

    getStatus(userId) {
        return instance.get(`profile/status/`+ userId);

    },

    updateStatus(status) {
        return instance.put(`profile/status`, { status: status}); /*Согласно документации API для передачи статуса пользователя нам нужно сделать put запрос на end-point .../status/ и передать в него 1 объект, у когорого есть свойство status, внутри котого текст статуса пользователя. В нашем случае мы передаем в API фукнцию текст статуса через параметр и передаем, как значение свойства status  */
    }

}

