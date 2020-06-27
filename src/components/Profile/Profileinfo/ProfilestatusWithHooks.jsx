import React, {useEffect, useState} from 'react';


const ProfilestatusWithHooks = (props) => {

    // --- useState(false); --- // useState - это hook, которыйсоздает локальный state (который хранится не в этой еомпоненте, а где-то на стороне react). useState врзващает массв, где первое значение - это то о мы передал параметром при вызове этого хука, а второе значение эо функция, которая устанавливает то первое значение. Если нам нужно изменить значение в этом локальном state, то мы должны использовать способ Destructuring Assigment
    let [editMode, setEditMode] = useState(false); //Этот синтаксис создает переменные, указанные массиве слева, и присваивает им по очереди значения локального state методом Destructuring Assigment, т.е. создадутся переменные editMode и setEditMode и им присвоятся значения, которые вернет useState(true), т.е. в переменную editMode запишем первое значение вернувшегося из useState массива, а setEditMode - привоим второе значение того же массива. В итоге мы получаем данные локального state в отдельных переменных
    let [status, setStatus] = useState(props.status); //Здесь создаем еще 1 локальный state. Так можно создавать бесконечно много локальных state для кажого случая

    useEffect( () => { //useEffect - это hook, т.к. функция, которая выполнится после отрисовки jsx
        setStatus(props.status); //кладем props.status из глобального state  наш локальный state, чтобы дальше работать с ним.
    /*hook нельзя использовать в условиях (if, switch т др) и в циклах (for, whole и др.)*/


    }, [props.status]); // вторым аргументом делаем массив, в котором указываем при изменении чего нужно запускать этот useEffect. В нашем случае если props.status не идентичен props.status который был до этого, то функция запустится. Нам это нужно, чтобы приасинхронном получении данных с сервера компонента поняла, что с сервера уже пришли новые данные и перерисовалась. ВНИМАНИЕ: если оставить массив пустым, то useEffect работает только 1 раз после отрисовки jsx - это плохая практика, лучше понять когда нам реалньо нужна перересовка и от чего это зависит и указать это в массив

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status) // отправляем данные из локального state с наш основной redux state
    }

    const onStatusChange = (event) => {
        setStatus(event.currentTarget.value); //меняем значение status с помощью setStatus. В качесве значения берем текущее значение поля ввода

    }


    return (
        <div>
            { !editMode && //Если editMode НЕ true, то покажет этот блок
                <div>
                    <span onDoubleClick={ activateEditMode }>{props.status || "----"}</span>
                </div>
            }
            {editMode && //Если editMode true, то покажет этот блок
            <div>
                <input autoFocus={true} onBlur={ deactivateEditMode } onChange={onStatusChange} value={status}/>
            </div>
            }

        </div>
    )

}



export default ProfilestatusWithHooks;