import React from 'react';
import {addPostActionCreator} from "../../../redux/profile-reducer";
import AddNewPost from "./AddNewPost";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newMessageBody) => {
            dispatch(addPostActionCreator(newMessageBody));
        },
        /*onPostChange: (text) => {
            let action  = updateNewPostTextActionCreator(text);
            dispatch(action);
        }*/

    }
}


const AddNewPostContainer = connect(mapStateToProps,mapDispatchToProps)(AddNewPost);


export default AddNewPostContainer;



