import React from 'react';

const Logout = () => {
    return (
        <section className='home-page'>
            <div className='feed'>
                <div className='filter-feed'>
                    <h1>Logout or Delete Profile</h1>
                </div>

                <div className='feed-post'>
                    <form>
                        <h1 className='comment-title'>Logout</h1>
                        <p>Are you sure you want to logout?</p>
                        <button className='post-btn'>Logout</button>
                    </form>
                    
                    <form>
                        <h1 className='comment-title'>Delete</h1>
                        <p>Are you sure you want to delete your profile?</p>
                        <button className='post-btn'>Delete</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Logout;
