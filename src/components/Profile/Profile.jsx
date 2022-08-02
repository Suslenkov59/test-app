import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <header className={s.profileHeader}>
            <div>
                <ProfileInfo/>
                <MyPostsContainer store={props.store} />
            </div>
        </header>
    )
}

export default Profile;