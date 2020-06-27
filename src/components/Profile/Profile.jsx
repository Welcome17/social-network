import React from 'react';
import ProfileInfo from './Profileinfo/Profileinfo';
import AddNewPostContainer from "./MyPosts/AddNewPostContainer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {


    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <AddNewPostContainer
                store={props.store}
            />
            <MyPostsContainer posts={props.state.posts} store={props.store} />
        </div>
    )
}

export default Profile;