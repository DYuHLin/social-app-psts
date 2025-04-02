import React from 'react';
import profileImg from '../../../assets/img/6.png';

const Suggestions = () => {
    return (
        <div className='suggestions'>
            <div className='latest'>
                <h2>Latest Users</h2>
                <div className='users'>
                    <div className='user-card'>
                        <div className='user-info'>
                            <img src={profileImg} alt='Profile image' className='profile-img' />
                            <p>Username</p>
                        </div>
                        <button>Follow</button>
                    </div>
                    <div className='user-card'>
                        <div className='user-info'>
                            <img src={profileImg} alt='Profile image' className='profile-img' />
                            <p>Username</p>
                        </div>
                        <button>Follow</button>
                    </div>
                    <div className='user-card'>
                        <div className='user-info'>
                            <img src={profileImg} alt='Profile image' className='profile-img' />
                            <p>Username</p>
                        </div>
                        <button>Follow</button>
                    </div>
                </div>
                
            </div>
            <div className='most-followed'>
                <h2>Most Followed</h2>
                <div className='users'>
                    <div className='user-card'>
                            
                    </div>
                </div>      
            </div>
        </div>
    );
}

export default Suggestions;
