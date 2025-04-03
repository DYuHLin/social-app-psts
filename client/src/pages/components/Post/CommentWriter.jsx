import React from 'react';

const CommentWriter = () => {
    return (
        <form className='comment-form'>
            <textarea placeholder='Write something' rows='5'></textarea>
            <button className='post-btn'>Comment</button>
        </form>
    );
}

export default CommentWriter;
