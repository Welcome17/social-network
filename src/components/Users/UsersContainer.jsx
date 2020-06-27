import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    follow, unfollow,
    setCurrentPage,
    toggleFollowingInProgress,
    requestUsers
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/preloader";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {

    componentDidMount() { /*это стандартный метод склассовой компоненты, он отрисовывет HTML в браузере. Если мне нужно что-то дополнительно отобразить или сделать запрос к серверу, то нужно делать это здесь. Мой код сработает после отрисовки страницы. Если мой код изменяет данные для отрисовки, то React еще раз перерисует страницу*/
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize); /*Это thunk функция, т.е. dispatch + axios запрос к серверу обернутые в доп функцию, куда передаем нужные для запроса к серверу данные*/
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize); /*Это thunk функция, т.е. dispatch + axios запрос к серверу обернутые в доп функцию, куда передаем нужные для запроса к серверу данные*/
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   users={this.props.users}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    };
}

/*let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress

    }
}*/

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)

    }
}

/*Ниже старая запись dispatch, которая по сутиидентична короткой записи, котроую мы сделали в внутри connect. Разница в том, что мы удалили все дублирующтеся части кода и сделали запись с учетом того, что если создать обхект с запись {name: name}, то это идентично записи {name} - обе эти записи React выполняет идентично, но код короче*/
/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID));
        },
        unFollow: (userID) => {
            dispatch(unFollowAC(userID));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (usersPageNumber) => {
            dispatch(setPageNumber(usersPageNumber));
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount));
        },

        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching));
        }




    }
}*/


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingInProgress,
    getUsers: requestUsers
})
(UsersContainer);