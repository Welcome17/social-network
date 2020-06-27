import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';


let initialState = {
    posts: [
        {id: 1, message: 'Hi, World', likesCount: 0},
        {id: 2, message: 'It is my first post!', likesCount: 9}
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: action.newMessageBody,
                likesCount: 0
            };
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, (newPost)]
            };
        }

        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile

            };
        }

        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            }
        }


        default:
            return state;

    }
}


export const addPostActionCreator = (newMessageBody) => { /*Это вспомогательная функция, чтобы не ошибиться при создании передаваемого значения обехкта action для dispatch*/
    return {
        type: ADD_POST,
        newMessageBody

    }
}


export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile

    }
}

export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})


/*
export const profileData = (userId) => (dispatch) => {
    profileAPI.getProfileData(userId)
    /!*axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)*!/
        .then((data) => {
            dispatch(setUserProfile(data));
        });
}*/

/*Это старый код, который был заменен на более современный синтаксис с использованием async и await */
export const getUserProfileBACKUP = (userId) => (dispatch) => {
    /*axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)*/
    profileAPI.getProfile(userId).then((response) => {
        dispatch(setUserProfile(response.data));
    });
}

/*Ниже код с более современным синтексесом для асинхронных запросов*/
export const getUserProfile = (userId) => async (dispatch) => { //async - сообщает, что далее будет асинхронный запрос
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }

}

export default profileReducer;