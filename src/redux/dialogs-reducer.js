
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
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
    ]

};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:{
            let newMessageBody = {
                id: 7,
                message: action.newMessageBody,
                sender: 'i',
                profileImage: 'https://cs4.pikabu.ru/post_img/2015/05/03/9/1430665235_1330163848.jpg'
            };
            return {
                ...state,
                messages: [...state.messages, (newMessageBody)] /* Такой синтаксис используется впесто push - stateCopy.messages.push(newMessageBody). Т.е.: ...state.messages делает копию массива сообщений, а часть после запятой - (newMessageBody) - добавляет кщк одно сообщение в массив сообщений. Если нужно добавить сообщение в начало массива, то нужно вставить добавляемое сообщение в начало массива, а за ним через запятую копировать остальную часть */
            };
        }


        default: return state;
    }
}

export const addMessageActionCreator = (newMessageBody) => {
    return {
        type: ADD_MESSAGE,
        newMessageBody

    }
}



export default dialogsReducer;