import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {connect} from "react-redux";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogs-reducer";
import MyPosts from "./MyPosts";

const MyPostsBackUp = (props) => {
    console.log(props);

    let postsElements = props.posts.map ( p => <Post message={p.message} likesCount={p.likesCount}/>); /*метод map - это страндартный метод любого массива. Он перебирает все данные массива и изменяет их по заданному шаблону. Метод map принимает значение стрелочной функции с передаваемым в нее параметром. Передававемым параметром является Элемент изменяемого массива. Т.е., обращаесь в передаваемой переменной ты образается к каждому элементу изменяемого массива. В теле функции прописываем что должны получить в результате для каждого 1-го элемента массива.
*/
    return (

            <div className={s.posts}>
                { postsElements }
            </div>
    )
}


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
