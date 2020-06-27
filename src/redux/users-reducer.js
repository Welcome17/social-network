import sidebarReducer from "./sidebar-reducer";
import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] /*здесь используется массив, чтобы к этому полю можно было применят ьметод массива filter и some */
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.usersPageNumber
            }
        }

        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }

        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId) /*здесь не нужно оформлять это как массив и делать шлубокую копию, т.к. метод фильтрации сам возвращает новый массив*/
            }
        }

        default:
            return state;
    }
}

export const followSuccess = (userID) => {
    return {
        type: FOLLOW, userID
    }
}

export const unFollowSuccess = (userID) => {
    return {
        type: UNFOLLOW, userID
    }
}

export const setUsers = (users) => {
    return ({
        type: SET_USERS, users
    })
}

export const setTotalUsersCount = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT, totalUsersCount
    }
}


export const setPageNumber = (pageNumber) => {
    return {
        type: SET_CURRENT_PAGE, pageNumber /* type: SET_CURRENT_PAGE, usersPageNumber равна записи  type: SET_CURRENT_PAGE, usersPageNumber: usersPageNumber*/
    }
}

export const setCurrentPage = (usersPageNumber) => {
    return ({
        type: SET_CURRENT_PAGE, usersPageNumber
    })
}

export const toggleIsFetching = (isFetching) => {
    return ({
        type: TOGGLE_IS_FETCHING, isFetching
    })
}

export const toggleFollowingInProgress = (isFetching, userId) => {
    return ({
        type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId  /* параметр isFetching нужен, чтобы при клике пользователя на follow/unfollow в самом начале запущенной функции(запрос к серверу) передавать значение true и по нему делать disable самой кноки (чтобы предотвратить повторное нажатие), а при окончании этой функции (после отработки запроса к серверу) передвать обратно false, чтобы теперь актвировать кнопку опять. isFetching используется в dispatch, чтобы выбрать что отправлять в state */
    })
}

export const requestUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));

        let data = await usersAPI.getUsers(page, pageSize);

        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}


export const folowUnfolowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingInProgress(true, userId));
    let data = await apiMethod(userId);

    if (data.resultCode == 0) {/*resultCode === 0 это данные из спецификации к API, это означает, что запрос/ответ сервера прошли успешно. У каждого сервера своя маркирвока таким сообщения*/
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingInProgress(false, userId))

}

export const follow = (userId) => {
    return async (dispatch) => {
        let apiMethod = usersAPI.follow.bind(usersAPI); // Эту переменную можно зарефакторить, просто напрямую передав usersAPI.follow(userId) в параметры folowUnfolowFlow См. сжатый синтаксис ниже в unfollow
        let actionCreator = followSuccess; // Эту переменную можно зарефакторить, просто напрямую передав followSuccess в параметры folowUnfolowFlow. См. сжатый синтаксис ниже в unfollow
        folowUnfolowFlow(dispatch, userId, apiMethod, actionCreator)
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        folowUnfolowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unFollowSuccess) /*более подробно расписанный синтаксис такой же строчки см. в функции follow выше*/
    }
}


export const followBACKUP = (userId) => {
    return async (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId));

        let data = await usersAPI.follow(userId);

        if (data.resultCode == 0) {/*resultCode === 0 это данные из спецификации к API, это означает, что запрос/ответ сервера прошли успешно. У каждого сервера своя маркирвока таким сообщения*/
            dispatch(followSuccess(userId))
        }

        dispatch(toggleFollowingInProgress(false, userId))
    }
}

export const unfollowBACKUP = (userId) => {
    return async (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId));
        let data = await usersAPI.unfollow(userId);

        if (data.resultCode == 0) {/*resultCode === 0 это данные из спецификации к API, это означает, что запрос/ответ сервера прошли успешно. У каждого сервера своя маркирвока таким сообщения*/
            dispatch(unFollowSuccess(userId))
        }

        dispatch(toggleFollowingInProgress(false, userId))
    }
}

export default usersReducer;



