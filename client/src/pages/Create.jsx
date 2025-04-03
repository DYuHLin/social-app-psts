import React from 'react';
import Sidebar from './components/home/Sidebar';

const Create = () => {
    return (
        <section className='home-page'>
            <div className='feed'>
                <div className='filter-feed'>
                    <h1>Create Post</h1>
                </div>

                <div className='feed-post'>
                    <form>
                        <textarea placeholder='Write something' rows='8'></textarea>
                        <button className='post-btn'>Post</button>
                    </form>
                </div>
                <div className='filter-feed'>
                    <i className='bx bx-link'/>
                    <i class='bx bx-pencil'/>
                    <i class='bx bx-image' />
                    <i class='bx bxs-videos' />
                </div>
            </div>
        </section>
    );
}

export default Create;
