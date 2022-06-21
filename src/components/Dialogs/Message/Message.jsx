import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {

    let newMessageElement = React.createRef();

    let addMessage =() => {
        let text = newMessageElement.current.value;
        alert(text);
    }
    return <div className={s.dialog}>
        <div>
            <textarea ref={newMessageElement}>{props.message}</textarea>
        </div>
        <div>
            <button onClick= {addMessage}>Ответить</button>
        </div>
    </div>

}

export default Message