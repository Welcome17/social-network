import React from "react";
import s from "./FormsControls.module.css";

export const Textarea = ({input, meta, ...props}) => { /*Смотри Rest оператор. По сути мы создаем новый объъект из того объекта, который к нам приходит параметром (props), с помощью копирования его частей: мы полностью копируем свойста input и meta, а всё оставшееся кладем в props*/
/*Т.к. мы использует плагин redux-forms, то авторы продумали, чтобы в props приходили некоторые доп данные в раздел meta. Там есть error, который true если заданная нами валидация сообщила об ошибках. Также там есть touched возвращающий true, если пользователь активировал форму*/
    const hasError = meta.touched && meta.error;
    return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
        <div>
            <textarea {...input} {...props}/>
        </div>
        {meta.touched && meta.error && <span>Error</span>}
    </div>
)
}

export const Input = ({input, meta, ...props}) => { /*Смотри Rest оператор. По сути мы создаем новый объъект из того объекта, который к нам приходит параметром (props), с помощью копирования его частей: мы полностью копируем свойста input и meta, а всё оставшееся кладем в props*/
    /*Т.к. мы использует плагин redux-forms, то авторы продумали, чтобы в props приходили некоторые доп данные в раздел meta. Там есть error, который true если заданная нами валидация сообщила об ошибках. Также там есть touched возвращающий true, если пользователь активировал форму*/
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                <input {...input} {...props}/>
            </div>
            {meta.touched && meta.error && <span>"Some error"</span>}
        </div>
    )
}