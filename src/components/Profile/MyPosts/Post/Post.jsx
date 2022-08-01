import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIM95bu4OLxh0VJJD8sr4dZ7i000Da_pxXig&usqp=CAU'/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
                <span>dislike</span > {props.disLikesCount}
            </div>
        </div>
    )
}

export default Post;