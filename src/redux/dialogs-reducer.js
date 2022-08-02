import React from 'react'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;