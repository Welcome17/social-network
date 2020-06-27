import React from 'react';
import s from './../Dialogs.module.css';
import cn from 'classnames'; /*модуль classname загружается командой npm install classnames --save в Терменале. Ниже этоь модель использутся для присваивания 2-х классов одному элементу. код {[s.myMessage]: props.sender == 'i'} определяет, что присвоить элементу класс s.myMessage если props.sender равен 'i' */



const Message = (props) => {
    return (
        <div className={cn (s.message, {[s.myMessage]: props.sender == 'i'})}><img src={props.profileImage}/> { props.message }</div>
    )
}



export default Message;
/*
if (props.sender == 'i') {
    <div className={s.message + ' ' + s.sender}> { props.message }</div>
} else {
    <div className={s.message}> { props.message }</div>
}*/