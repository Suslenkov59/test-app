import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return <header className={s.header}>
        <a>Telegram beta</a>
        <img src='https://free-png.ru/wp-content/uploads/2021/01/telegram_cvet-d23c11fa-340x334.png' />
    </header>
}

export default Header;