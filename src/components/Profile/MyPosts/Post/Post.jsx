import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (
        <div className={s.item}>
            <div className={s.profileImage}>
                <img src='https://i04.fotocdn.net/s120/90a06b5661a4730a/gallery_s/2747492836.jpg' />
            </div>
            <div className={s.postText}>
                { props.message }
            </div>

            <div className={s.postLikes}>
                { props.likesCount } likes
            </div>
        </div>

    )
}

export default Post;