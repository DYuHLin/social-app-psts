import React from 'react';

const DeletePost = () => {
    return (
        <section className='home-page'>
            <div className='feed'>
                <div className='filter-feed'>
                    <h1>Delete Post</h1>
                </div>

                <div className='feed-post'>
                    <form>
                        <h1 className='comment-title'>Delete</h1>
                        <p>Are you sure you want to delete this post?</p>
                        <button className='post-btn'>Delete</button>
                    </form>
                    
                </div>
            </div>
        </section>
    );
}

export default DeletePost;
