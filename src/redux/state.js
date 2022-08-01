import React from 'react'
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
                    icon: <img src='https://memepedia.ru/wp-content/uploads/2019/12/screenshot_22-1.png'/>
                },
                {
                    id: 2,
                    name: 'Кирилл',
                    icon: <img src='https://memepedia.ru/wp-content/uploads/2018/12/kot-kashlyaet-mem.png'/>
                },
                {
                    id: 3,
                    name: 'Ростислав',
                    icon: <img
                        src='https://img02.rl0.ru/afisha/e1200x600i/daily.afisha.ru/uploads/images/c/8b/c8bb6d6b772b0a4706e7f91223a19809.jpg'/>
                },
                {
                    id: 4,
                    name: 'Вася',
                    icon: <img src='https://www.meme-arsenal.com/memes/e77529bc5454bebb776dbefd127f68f5.jpg'/>
                },
                {
                    id: 5,
                    name: 'Никита',
                    icon: <img src='https://i.pinimg.com/originals/e1/4c/ae/e14cae2f0f44121ab4e3506002ba1a55.jpg'/>
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }

}

export default store;
window.store = store;

