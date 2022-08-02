const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Привет props', likesCount: 6, disLikesCount: 2},
        {id: 2, message: 'Создаём сами сайт :)', likesCount: 6, disLikesCount: 2},
        {id: 3, message: 'Ростислав', likesCount: 6, disLikesCount: 2},
        {id: 4, message: 'делать сайты мы не бросим', likesCount: 6, disLikesCount: 2},
        {id: 5, message: 'Продам гараж +7985', likesCount: 6, disLikesCount: 2},
    ],
    newPostText: 'Что у вас нового?'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;