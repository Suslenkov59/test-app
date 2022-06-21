import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://wald-jaguar.ru/wp-content/uploads/2021/05/CpXdZMN6AvM.jpg'/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
                <span>dislike</span > {props.disLikesCount}
            </div>
        </div>
    )
}

export default Post;