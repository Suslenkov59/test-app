import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <header className={s.profileHeader}>
            <div>
                <ProfileInfo/>
                <MyPosts posts={props.profilePage.posts}
                         newPostText={props.profilePage.newPostText}
                         updateNewPostText={props.updateNewPostText}
                         addPost={props.addPost}/>
            </div>
        </header>
    )
}

export default Profile;