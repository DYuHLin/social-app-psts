import React from 'react';
import profileImg from '../../src/assets/img/4.png';

const UserList = () => {
    return (
        <section className='home-page'>
            <div className='feed'>
                <div className='filter-feed'>
                    <h1>Users</h1> 
                </div>
                <input type='text' placeholder='search users' className='search-input'/>
                <div className='user-search-card'>
                    <div className='user-info'>
                        <img src={profileImg} alt='Profile image' className='profile-img' />
                        <p className='follow-name'>Username</p>
                    </div>
                    <button className='follow-btn'>Follow</button>
                </div>
                <div className='user-search-card'>
                    <div className='user-info'>
                        <img src={profileImg} alt='Profile image' className='profile-img' />
                        <p className='follow-name'>Username</p>
                    </div>
                    <button className='follow-btn'>Follow</button>
                </div>
                <div className='user-search-card'>
                    <div className='user-info'>
                        <img src={profileImg} alt='Profile image' className='profile-img' />
                        <p className='follow-name'>Username</p>
                    </div>
                    <button className='follow-btn'>Follow</button>
                </div>
                <div className='user-search-card'>
                    <div className='user-info'>
                        <img src={profileImg} alt='Profile image' className='profile-img' />
                        <p className='follow-name'>Username</p>
                    </div>
                    <button className='follow-btn'>Follow</button>
                </div>
            </div>
        </section>
    );
}

export default UserList;
