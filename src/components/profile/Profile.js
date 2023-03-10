import React from 'react'
import './Profile.css'
import Posts from './posts/Posts'
import ProfileInfo from './profileInfo/ProfileInfo.js'

function Profile(props) {
    return (     
    <div className='profile'>
      <ProfileInfo/>
      <Posts postsItems={props.profilePage.postsItems}onPostChange={props.onPostChange} newPostText={props.newPostText} addPost={props.addPost}/>
    </div>   
    )
  }
export default Profile