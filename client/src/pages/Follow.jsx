import React from 'react';
import profileImg from '../../src/assets/img/4.png';

const Follow = () => {
    return (
        <section className='home-page'>
            <div className='feed'>
                <div className='filter-feed'>
                    <h1>Followers</h1> 
                    <h1>/</h1>
                    <h1>Following</h1>
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

export default Follow;
