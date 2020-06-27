import React from 'react';
import DialogItem from "./DialogItems/DialogItem";
import Message from "./Messages/Message";
import {addMessageActionCreator, /*updateNewMessageTextActionCreator*/} from "../../redux/dialogs-reducer";
import Dialogs from './Dialogs';
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const DialogsContainerBackUp = (props) => {

    let dialogElements = props.state.dialogs.map( (d) => <DialogItem id={d.id} name={d.name} profileImage={d.profileImage} /> ); //метод map - это страндартный метод любого массива. Он перебирает все данные массива и изменяет их по заданному шаблону. Метод map принимает значение стрелочной функции с передаваемым в нее параметром. Передававемым параметром является Элемент изменяемого массива. Т.е., обращаесь в передаваемой переменной ты образается к каждому элементу изменяемого массива. В теле функции прописываем что должны получить в результате для каждого 1-го элемента массива.
    let messagesElement = props.state.messages.map (m => <Message id={m.id} message={m.message} sender={m.sender} profileImage={m.profileImage} />  ); //метод map - это страндартный метод любого массива. Он перебирает все данные массива и изменяет их по заданному шаблону. Метод map принимает значение стрелочной функции с передаваемым в нее параметром. Передававемым параметром является Элемент изменяемого массива. Т.е., обращаесь в передаваемой переменной ты образается к каждому элементу изменяемого массива. В теле функции прописываем что должны получить в результате для каждого 1-го элемента массива.

    /*let newMessageElement = React.createRef(); /* Получение данных со строницы. Создаем переменную и присваеваем ей React.createRef(). Приваеваем эту переменную элемену HTML аналогично id='', но следующим синтаксисом ref={newPostElement}. После этого данная переменная будет содержать в себе элемент HTML и можно ображаться к его значению value через синтаксис newPostElement.current.value */

    let sendMessageClick = () => {
            props.store.dispatch(addMessageActionCreator())
        }



    return (
        <Dialogs  sendMessageClick={sendMessageClick} state={props.state}  />


    )
}


let mapStateToProps = (state) => {
    return {
        /*state: state*/
        /*posts: state.profilePage.posts,*/
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessageClick: (newMessageBody) => {
            dispatch(addMessageActionCreator(newMessageBody))
        }

    }
}





export default compose( /*compose позволяет запускать по очереди разные функции, чтобы они выпонлялись по очереди беря в качесвет параметра результат предыдущей функции*/
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)
(Dialogs) /*compose передаст то что указано здесь как параметр фонкции из списка выше*/