import React from 'react';


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status /*Берем значние status из глобального state и кладем в локальный state*/
    }

    activateMode = () => {
        this.setState(/*так как мы не передаем локальный state через props, то react не перерисовывает компоненту автоматически про изменении локального state. Поэтому у Классовых компонент есть специалньый метода, который сообщает react об изменении state и react перересовать компоненту. Лучше использовать setState(), чем forceUpdate() */
            {
                editMode: true
            }
        )
        /*this.forceUpdate(); *//*так как мы не передаем локальный state через props, то react не перерисовывает компоненту автоматически про изменении локального state. Поэтому мы этой функцией сообщаем react перересовать компоненту*/
    }

    deActivateMode = () => {
        this.setState(/*так как мы не передаем локальный state через props, то react не перерисовывает компоненту автоматически про изменении локального state. Поэтому у Классовых компонент есть специалньый метода, который сообщает react об изменении state и react перересовать компоненту. Лучше использовать setState(), чем forceUpdate(). Важно: setState является асинхронной функцией, т.е. изменения происходят не моментально, это может быть важно для следующих ниже строчек кода, т.к. реальное изменение произойдет после отработки функции(метода), внутри которой оно запущено  */
            {
                editMode: false
            });
        this.props.updateUserStatus(this.state.status)
    }

    onStatusChange = (event) => {
        this.setState({
            status: event.currentTarget.value
        });
    }

componentDidUpdate(prevProps, prevState, snapshot) {

        if(prevProps.status != this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
}


    render() {
        return (
            <>
                {!this.state.editMode &&
                <div>
                    <span onClick={ this.activateMode }>{this.props.status || "----"}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={ this.deActivateMode } value={this.state.status}></input>
                </div>
                }

            </>
        )

    }

}

export default ProfileStatus;