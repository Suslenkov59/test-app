import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return <div className={s.header}>
        <a href="/profile" className={s.logo}>Telegram beta</a>
        <img src='https://free-png.ru/wp-content/uploads/2021/01/telegram_cvet-d23c11fa-340x334.png'/>
        <div className={s.header2}>
            <a href="/contact" className={s.active}>Что нибудь потом</a>
            <a href="/settings">Настройки</a>
        </div>
    </div>
}


export default Header;