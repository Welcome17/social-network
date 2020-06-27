import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItems/DialogItem";
import Message from "./Messages/Message";

import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validator";


const Dialogs = (props) => {

    /*let state = props.dialogsPage;*/

    let dialogElements = props.dialogsPage.dialogs.map((d) => <DialogItem id={d.id} name={d.name}
                                                                          profileImage={d.profileImage}/>); //метод map - это страндартный метод любого массива. Он перебирает все данные массива и изменяет их по заданному шаблону. Метод map принимает значение стрелочной функции с передаваемым в нее параметром. Передававемым параметром является Элемент изменяемого массива. Т.е., обращаесь в передаваемой переменной ты образается к каждому элементу изменяемого массива. В теле функции прописываем что должны получить в результате для каждого 1-го элемента массива.
    let messagesElement = props.dialogsPage.messages.map(m => <Message id={m.id} message={m.message} sender={m.sender}
                                                                       profileImage={m.profileImage}/>); //метод map - это страндартный метод любого массива. Он перебирает все данные массива и изменяет их по заданному шаблону. Метод map принимает значение стрелочной функции с передаваемым в нее параметром. Передававемым параметром является Элемент изменяемого массива. Т.е., обращаесь в передаваемой переменной ты образается к каждому элементу изменяемого массива. В теле функции прописываем что должны получить в результате для каждого 1-го элемента массива.

    /*let newMessageElement = React.createRef(); /* Получение данных со строницы. Создаем переменную и присваеваем ей React.createRef(). Приваеваем эту переменную элемену HTML аналогично id='', но следующим синтаксисом ref={newPostElement}. После этого данная переменная будет содержать в себе элемент HTML и можно ображаться к его значению value через синтаксис newPostElement.current.value */

  /*  let onSendMessageClick = () => {
        /!*let text = newMessageElement.current.value;*!/ /!*Заменил эту строку образением в props.state.newMessageBody, чтобы избежть использование ссылок на элемент через React.createRef() - ef={newMessageElement} *!/
        let text = props.state.newMessageBody;
        if (text == '') {
            alert('Enter the message text, please');

        } else {
            props.sendMessageClick()
        }
        /!*props.addMessage();*!/
    }*/

    /*let onMessageChange = (eventObject) => {
        /!*let text = newMessageElement.current.value;*!/ /!*Заменил эту строку образением в event.target.value, чтобы избежть использование ссылок на элемент через React.createRef() - ef={newMessageElement} *!/
        let text = eventObject.target.value; /!* при срабатывании onChange в элементе textarea в вызываемую функцию передается кто вызвал эту функцию в переменную eventObject, поэтому можно обратиться textarea через метод target и взять у нее value*!/
        /!*props.updateNewMessageText(text);*!/
        /!*props.dispatch(updateNewMessageTextActionCreator(text))*!/
        props.updateNewMessageText(text);
    }*/

    let addNewMessage = (values) => {
        props.sendMessageClick(values.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>

        </div>
    )
}


let maxLength300 = maxLengthCreator(300);

const AddMessageForm = (props) => {
    return (
        <form className={s.messageContainer} onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newMessageBody"} placeholder={"enter your message"} validate={[required, maxLength300]}/>
            </div>

            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm(
    {
    form:"dialogAddMessageForm"
    }

)(AddMessageForm)

export default Dialogs;