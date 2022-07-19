import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item1}>
                <NavLink to="/profile" className={navData => navData.isActive ? s.active : s.item}>Главная</NavLink>
            </div>
            <div className={s.item1}>
                <NavLink to="/dialogs" className={navData => navData.isActive ? s.active : s.item}>Сообщения</NavLink>
            </div>
            <div className={s.item1}>
                <NavLink to='/news' className={navData => navData.isActive ? s.active : s.item}>Новости</NavLink>
            </div>
            <div className={s.item1}>
                <NavLink to='/music' className={navData => navData.isActive ? s.active : s.item}>Музыка</NavLink>
            </div>
            <div className={s.item1}>
                <NavLink to='/settings' className={navData => navData.isActive ? s.active : s.item}>Настройки</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;