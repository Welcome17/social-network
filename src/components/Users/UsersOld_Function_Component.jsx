import React from "react";
import s from './Users.module.css'
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png'

const UsersOld_Function_Component = (props) => {
console.log(props);

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
            props.setUsers(response.data.items)
        });

       /* props.setUsers(
            [
                {id: 1, followed: true, firstName: 'Edison', lastName: 'Keneman', location: { city: 'London', country: 'United Kingdom' }, status: 'I am happy today', profileImage: 'https://cs13.pikabu.ru/avatars/2729/x2729750-428926448.png' },
                {id: 2, followed: true,firstName: 'Olga', lastName: 'Goldman', location: { city: 'Los Angeles', country: 'United States'}, status: 'Holidays!', profileImage: 'https://cs4.pikabu.ru/post_img/2015/05/03/9/1430665235_1330163848.jpg' },
                {id: 3, followed: true,firstName: 'John', lastName: 'Freeman', location: { city: 'New York', country: 'United States'}, status: 'Look at my new post', profileImage: 'https://cs13.pikabu.ru/avatars/2729/x2729750-428926448.png' },
                {id: 4, followed: false,firstName: 'Bill', lastName: 'Gates', location: { city: 'Miami', country: 'United States'}, status: 'Great day', profileImage: 'https://cs13.pikabu.ru/avatars/2729/x2729750-428926448.png' },
                {id: 5, followed: false,firstName: 'Rachel', lastName: 'Green', location: { city: 'New York', country: 'United States'}, status: 'I have got a new job!', profileImage: 'https://cs4.pikabu.ru/post_img/2015/05/03/9/1430665235_1330163848.jpg' },
                {id: 6, followed: true,firstName: 'Joey', lastName: 'Tribbiani', location: { city: 'New York', country: 'United States'}, status: 'Ho ho!', profileImage: 'https://cs13.pikabu.ru/avatars/2729/x2729750-428926448.png' },
                {id: 7, followed: false,firstName: 'Dima', lastName: 'Ray', location: { city: 'Dallas', country: 'United States'}, status: 'Yes, I have got it',profileImage: 'https://cs13.pikabu.ru/avatars/2729/x2729750-428926448.png'},
                {id: 8, followed: false,firstName: 'Kostya', lastName: 'Red', location: { city: 'London', country: 'United Kingdom'}, status: 'No way!', profileImage: 'https://d2hhj3gz5jljkm.cloudfront.net/assets2/118/425/852/672/normal/avatar.jpg'},
                {id: 9, followed: true,firstName: 'Masha', lastName: 'Long', location: { city: 'New York', country: 'United States'}, status: 'Message me',profileImage: 'https://cs8.pikabu.ru/avatars/2473/x2473353-331445533.png'},
                {id: 10, followed: false,firstName: 'Elena', lastName: 'Brown', location: { city: 'New York', country: 'United States'}, status: 'It is my birthday', profileImage: 'https://sun9-66.userapi.com/c845217/v845217725/bf87/nanuNw2dUHk.jpg'}
            ]
        )*/
    }


    return (<div>
        { props.users.map(u =>
            <div key={u.id} className={s.userBlock}>
                <div>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto  } className={s.profileImage}/>
                    </div>
                    <div>
                        { u.followed
                            ? <button onClick={ () => {props.unFollow(u.id)}}>Unfollow</button>
                            : <button onClick={ () => {props.follow(u.id)}}>Follow</button>
                        }
                    </div>

                </div>
                <div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    <div>{"u.city"}</div>
                    <div>{"u.country"}</div>
                </div>
            </div>)}
    </div>)
}

export default UsersOld_Function_Component;