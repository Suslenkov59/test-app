import React from 'react'

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
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
                {
                    id: 1,
                    name: 'Настя',
                    icon: <img src='https://wald-jaguar.ru/wp-content/uploads/2021/05/CpXdZMN6AvM.jpg'/>
                },
                {
                    id: 2,
                    name: 'Кирилл',
                    icon: <img src='https://wald-jaguar.ru/wp-content/uploads/2021/05/CpXdZMN6AvM.jpg'/>
                },
                {
                    id: 3,
                    name: 'Ростислав',
                    icon: <img src='https://wald-jaguar.ru/wp-content/uploads/2021/05/CpXdZMN6AvM.jpg'/>
                },
                {
                    id: 4,
                    name: 'Вася',
                    icon: <img src='https://wald-jaguar.ru/wp-content/uploads/2021/05/CpXdZMN6AvM.jpg'/>
                },
                {
                    id: 5,
                    name: 'Никита',
                    icon: <img src='https://wald-jaguar.ru/wp-content/uploads/2021/05/CpXdZMN6AvM.jpg'/>
                },
            ],
            messages: [
                {id: 1, message: 'Привет'},
                {id: 2, message: 'Как дела'},
                {id: 3, message: 'Ростислав'},
                {id: 4, message: 'Свободен в пятницу'},
                {id: 5, message: 'Привет'},
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === 'ADD_POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
                dislikesCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 6, message: body});
            this._callSubscriber(this._state);
        }

    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

    export const sendMessageCreator = () => ({type: SEND_MESSAGE})
    export const updateNewMessageBodyCreator = (body) =>
        ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


        export default store;
        window.store = store;

