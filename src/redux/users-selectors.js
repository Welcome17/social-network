/*селекторы нужны для того, чтобы запрашивать из state какие-то данные. Селекторы позволяют избежать ситуации,
когда в случае изменения структуры или названия веток в state нужно ходить по всему коду и переписывать.
Нужно будт зайти только в селектор и переписать тут. а в остальных местах код менять не нужно */

/*Простые селекторы лучше создавать вот в ручную, как это сделано ниже, а сложные, где много рассчетов,
нужно создавать с помощью библиотеки reselect (для подключения используй npm install reselect) */

/*сложные селекторы, созданные библиотекой reselect, имеют внутреннюю проверку нужно ли им запускаться или нет. Поэтому они экономят производительность */
/*сложные селекторы, используют в качестве входных данных данные простых селекторов */

export const getUsers = (state) => {
    return state.usersPage.users
}

/* getUsersSuperSelector ниже это пример реселектора */
/*
export const getUsersSuperSelector = createSelector = (getUsers, getIsFetching, (users, isFetching) => { //Это сложный селектор созданный библиотекой reselect. Присваеваем переменной создание реселектора, в который первым параметром передаем простой селектор (если сложный селектор зависит от нескольких простых селекторов, то указываем через запятую второй и последующие простые селекторы), а вторым параметром (то что в круглых скобках) будет то, что вернут простые селекторы после их выполнения (т.е. то что вернут простые селекторы, указанные в параметрах до круглых скобок)
    return state.usersPage.users //Тут должно быть сложное вычисление, ради которого мы создаем реселектор
}
*/


export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getIsFetching= (state) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress= (state) => {
    return state.usersPage.followingInProgress
}
