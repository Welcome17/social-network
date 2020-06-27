import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

/* Перенес эти параметры для проверки action в файлы reducer
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
*/

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, World', likesCount: 0},
                {id: 2, message: 'It is my first post!', likesCount: 9}
            ],
            newPostText: ''

        },

        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi', sender: 'Dima', profileImage: 'https://cs13.pikabu.ru/avatars/2729/x2729750-428926448.png' },
                {id: 2, message: 'Hi', sender: 'i', profileImage: 'https://cs4.pikabu.ru/post_img/2015/05/03/9/1430665235_1330163848.jpg' },
                {id: 3, message: 'How are you?', sender: 'Dima', profileImage: 'https://cs13.pikabu.ru/avatars/2729/x2729750-428926448.png' },
                {id: 4, message: 'Where have you been?', sender: 'Dima', profileImage: 'https://cs13.pikabu.ru/avatars/2729/x2729750-428926448.png' },
                {id: 5, message: 'Have bee traveling to London', sender: 'i', profileImage: 'https://cs4.pikabu.ru/post_img/2015/05/03/9/1430665235_1330163848.jpg' },
                {id: 6, message: 'It is great! I hope to see you soon', sender: 'Dima', profileImage: 'https://cs13.pikabu.ru/avatars/2729/x2729750-428926448.png' }
            ],
            dialogs: [
                {id: 1, name: 'Dima', profileImage: 'https://cs13.pikabu.ru/avatars/2729/x2729750-428926448.png'},
                {id: 2, name: 'Kostya', profileImage: 'https://d2hhj3gz5jljkm.cloudfront.net/assets2/118/425/852/672/normal/avatar.jpg'},
                {id: 3, name: 'Masha', profileImage: 'https://cs8.pikabu.ru/avatars/2473/x2473353-331445533.png'},
                {id: 4, name: 'Elena', profileImage: 'https://sun9-66.userapi.com/c845217/v845217725/bf87/nanuNw2dUHk.jpg'}
            ],
            newMessageBody: ''
        },

        sideBar: {
            friends: [
                {id: 1, name: 'Dima', profileImage: 'https://cs13.pikabu.ru/avatars/2729/x2729750-428926448.png'},
                {id: 2, name: 'Kostya', profileImage: 'https://d2hhj3gz5jljkm.cloudfront.net/assets2/118/425/852/672/normal/avatar.jpg'},
                {id: 3, name: 'Masha', profileImage: 'https://cs8.pikabu.ru/avatars/2473/x2473353-331445533.png'},
                {id: 4, name: 'Elena', profileImage: 'https://sun9-66.userapi.com/c845217/v845217725/bf87/nanuNw2dUHk.jpg'}
            ]
        }

    },
    _callSubscriber() {
        console.log('state have been changed');
    },
    getState() {
        return this._state;
    },
    subscriber(observer) {
        this._callSubscriber = observer; // observer - это паттерн. ИЗУЧИ БОЛЬШЕ ОБ ЭТОМ!
    },
    _addPost() {
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addMessage() {
        let newMessage = {
            id: 7,
            message: this._state.dialogsPage.newMessage,
            sender: 'i',
            profileImage: 'https://cs4.pikabu.ru/post_img/2015/05/03/9/1430665235_1330163848.jpg'
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessage = 'WORKING';
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessage = newText;
        this._callSubscriber(this._state);
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);

        this._callSubscriber(this._state);
        /* Этот код преобразован в функции reducer для каждого блока. Каждый редусер в обтельном файле
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessageBody = {
                id: 7,
                message: this._state.dialogsPage.newMessageBody,
                sender: 'i',
                profileImage: 'https://cs4.pikabu.ru/post_img/2015/05/03/9/1430665235_1330163848.jpg'
            };
            this._state.dialogsPage.messages.push(newMessageBody);
            this._state.dialogsPage.newMessageBody = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageBody = action.newText;
            this._callSubscriber(this._state);
        }
        */
    }

}




export default store;
window.store = store;
