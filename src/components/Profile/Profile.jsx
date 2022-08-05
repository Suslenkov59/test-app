import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {

    return (
        <header className={s.profileHeader}>
            <div>
                <ProfileInfo/>
                <MyPostsContainer />
            </div>
        </header>
    )
}

export default Profile;