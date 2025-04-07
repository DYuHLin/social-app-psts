import React from 'react';

const EditPost = () => {
    return (
        <section className='home-page'>
            <div className='feed'>
                <div className='filter-feed'>
                    <h1>Edit Post</h1>
                </div>

                <div className='feed-post'>
                    <form>
                        <textarea placeholder='Write something' rows='8'></textarea>
                        {/* <input type='text' placeholder='link' className='post-input'/>
                        <input type='text' placeholder='video link' className='post-input'/> */}
                        <button className='post-btn'>Post</button>
                    </form>
                </div>
                <div className='filter-feed'>
                    <i className='bx bx-link post-op'/>
                    <i class='bx bx-pencil post-op'/>
                    <i class='bx bx-image post-op' />
                    <i class='bx bxs-videos post-op' />
                </div>
            </div>
        </section>
    );
}

export default EditPost;
