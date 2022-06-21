import React from 'react'

let rerenderEntireTree = () => {
    console.log('State changed');
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Привет props', likesCount: 6, disLikesCount: 2},
            {id: 2, message: 'Создаём сами сайт :)', likesCount: 6, disLikesCount: 2},
            {id: 3, message: 'Ростислав', likesCount: 6, disLikesCount: 2},
            {id: 4, message: 'делать сайты мы не бросим', likesCount: 6, disLikesCount: 2},
            {id: 5, message: 'Продам гараж +7985', likesCount: 6, disLikesCount: 2},
        ],
        newPostText: 'Что у вас нового?'
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Настя',icon: <img src='https://wald-jaguar.ru/wp-content/uploads/2021/05/CpXdZMN6AvM.jpg'/>},
            {id: 2, name: 'Кирилл',icon: <img src='https://wald-jaguar.ru/wp-content/uploads/2021/05/CpXdZMN6AvM.jpg'/>},
            {id: 3, name: 'Ростислав',icon: <img src='https://wald-jaguar.ru/wp-content/uploads/2021/05/CpXdZMN6AvM.jpg'/>},
            {id: 4, name: 'Вася',icon: <img src='https://wald-jaguar.ru/wp-content/uploads/2021/05/CpXdZMN6AvM.jpg'/>},
            {id: 5, name: 'Никита',icon: <img src='https://wald-jaguar.ru/wp-content/uploads/2021/05/CpXdZMN6AvM.jpg'/>},
        ],
        messages: [
            {id: 1, message: 'Привет'},
            {id: 2, message: 'Как дела'},
            {id: 3, message: 'Ростислав'},
            {id: 4, message: 'Свободен в пятницу'},
            {id: 5, message: 'Привет'},
        ]
    },
    sidebar: {}
}

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
        dislikesCount: 0,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;

