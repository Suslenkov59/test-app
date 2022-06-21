import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.img}
                    src='https://funart.pro/uploads/posts/2021-07/1626448057_26-funart-pro-p-kot-s-lampoi-zhivotnie-krasivo-foto-41.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                Ниже раздробленная ава + описание
            </div>
        </div>
    )
}
export default ProfileInfo