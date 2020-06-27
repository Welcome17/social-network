import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from "react-router-dom";
import store from "./redux/redux-store";
import {Provider} from "react-redux";


let reRenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter basename={process.env.PUBLIC_URL}> {/*"Тэг BrowserRouter позволяет отображать разные компоненты-страницы на отдельной странице (URL). По сути код анализирует какой сейчас URL и отрисовывает нужную компоненту, указанную ниже в тэге Route. basename={process.env.PUBLIC_URL} - сообщает реакту, чтобы он брал базовый url domain из окружения, т.к. при запуске с локального сервера будет работать с localhost:3000, при запуске с github будет брать url от туда */}
            <Provider store={store}> {/*Этот тэг позволяет проводить данные из обезнутой им компоненты в ее дочрние компоненты. Т.е. мы в нее передали store и теперь все дочернии компаненты App имеют доступ к стору через функцию connect. Рекоммендуется передавать данные в Контейнерные обертки Презентационных компонент и дальше передвать в презентационные компаненты через props  */}
                <App state={state}
                     dispatch = {store.dispatch.bind(store)}
                     store={store}
                     /*addPost={store.addPost.bind(store)}
                     updateNewPostText={store.updateNewPostText.bind(store)}
                     updateNewMessageText={store.updateNewMessageText.bind(store)}
                     addMessage={store.addMessage.bind(store)}*/
                />
                {/*<App dialogs={dialogs} messages={messages} posts={posts} />*/}
            </Provider>
        </BrowserRouter>,
        document.getElementById('root'));
};


reRenderEntireTree(store.getState());

/*
store.subscribe( () => {
    let state = store.getState();
    reRenderEntireTree(state);
});
*/


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
