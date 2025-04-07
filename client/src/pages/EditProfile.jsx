import React from 'react';

const EditProfile = () => {
    return (
        <section className='home-page'>
            <div className='feed'>
                <div className='filter-feed'>
                    <h1>Edit Profile</h1>
                </div>

                <div className='feed-post'>
                    <form>
                        <input type='text' placeholder='Display name' className='post-input'/>
                        <textarea placeholder='Write description' rows='8'></textarea>
                        <button className='post-btn'>Update</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default EditProfile;
