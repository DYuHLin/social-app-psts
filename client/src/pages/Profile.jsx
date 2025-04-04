import React from 'react';
import ProfileImg from '../assets/img/5.png'
import UserPosts from './components/User/UserPosts';

const Profile = () => {
    return (
        <section className='home-page'>
            <div className='feed'>
            <div className='filter-feed'>
                <h1>Profile</h1>
            </div>
            <div className='user-profile-info'>
                <div className='profile-card-img'>
                    <img src={ProfileImg} alt='Profile image' className='profile-card-image' />
                </div>
                <div className='profile-card-info'>
                    <h3>Username</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula dolor velit, a condimentum magna dapibus vel. Nulla cursus pretium 
                    lacus a egestas. Nunc sit amet ligula nulla. Maecenas sit amet arcu nec lectus gravida egestas. Integer vel lorem vitae elit porta posuere eu 
                    vitae sapien. Nunc eu ullamcorper est, vel tincidunt tellus.</p>
                    <div className='followers'>
                        <p className='follow-label'>100 Followers</p>
                        <p className='follow-label'>100 Follwing</p>
                    </div>
                    <button className='follow-btn'>Follow</button>
                </div>
            </div>
            <UserPosts />
            </div>
        </section>
    );
}

export default Profile;
