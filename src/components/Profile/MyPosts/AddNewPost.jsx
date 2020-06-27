import React from 'react';
import s from "./MyPosts.module.css";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validator";
import {Textarea} from "../../common/FormsControls/FormsControls";



const AddNewPost = (props) => {

    let newPostElement = React.createRef(); /* Получение данных со строницы. Создаем переменную и присваеваем ей React.createRef(). Приваеваем эту переменную элемену HTML аналогично id='', но следующим синтаксисом ref={newPostElement}. После этого данная переменная будет содержать в себе элемент HTML и можно ображаться к его значению value через синтаксис newPostElement.current.value */

/*    let onAddsPost = () => {
        let text = props.newPostText;
        if (text == '') {
            alert('Enter the message text, please');
        } else {
            /!*props.dispatch(addPostActionCreator())*!/
            /!*props.dispatch({type: 'ADD-POST'})*!/
            props.addPost();
        }
    };*/
/*    let onPostChange = () => {
        let text = newPostElement.current.value;
        /!*props.dispatch(updateNewPostTextActionCreator(text))*!/
        props.onPostChange(text);

    };*/

    let addNewPost = (values) => {
        props.addPost(values.newPostBody);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <NewPostFormRedux onSubmit={addNewPost}/>
        </div>


    )
}

let maxLength300 = maxLengthCreator(300);

const addNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newPostBody"} validate={[required, maxLength300]} placeholder={'enter the post text'}/>
                 </div>

            <div className={s.newPostButton}>
                <button>Add post</button>
            </div>
        </form>
    )
}

const NewPostFormRedux = reduxForm (
    {
        form: "ProfileAddNewPostForm"
    }
)(addNewPostForm)



export default AddNewPost;



