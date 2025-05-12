import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../../../context/AppContext';

const Comments = ({postId, commentId}) => {
    const navigate = useNavigate()
    const {user} = useContext(AppContext)
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)

    const likePost = (post) => {
        try{
            const like = {post: null, comment: post, liker: user.id,}
            axios.post(`http://localhost:3000/api/likes/likepost`, like, {headers: {'Content-Type': 'application/json'}, withCredentials: true})
        } catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        if(postId != null){
            axios.get(`http://localhost:3000/api/comment/${postId}/allcomments`, {headers: {'Content-Type': 'application/json'}})
          .then((res) => {
            setComments(res.data)
            setLoading(false)
          })
          .catch((err) => {
            console.log(err)
            // toast.error('There was an error fetching the posts')
          })
        } else if(commentId != null) {
            axios.get(`http://localhost:3000/api/comment/${commentId}/allcommentscomments`, {headers: {'Content-Type': 'application/json'}})
          .then((res) => {
            setComments(res.data)
            setLoading(false)
          })
          .catch((err) => {
            console.log(err)
            // toast.error('There was an error fetching the posts')
          })
        }

    }, [postId, commentId, comments])

    return (
        <>
            <h1 className='comment-title'>Comments</h1>
            { loading && comments.length === 0 ? <p>Loading the comments...</p> : comments.length === 0 ? <p>There are no comments right now</p>:
                comments.map((post, key) => {
                    return(
                    <div className='feed-post' key={key}>
                        <div className='post-info'>
                            <p className='feed-user'>{post.username}</p>
                            <p>{new Date(Number(post.date)).toLocaleString()}</p>
                        </div>
                        <div className='post-content' onClick={() => navigate(`/${post.id}/comment`)}>
                            {post.text.trim() != '' ? <p className='feed-content'>{post.text}</p> : ''}
                            {post.link.trim() != '' ? <a href={post.link}>{post.link}</a> : ''}
                            {post.video.trim() != '' ? <div className='vid-container'><video className='video' src={post.video} controls /> </div>: ''}
                            {post.youtube.trim() != '' ? <div className='ytvid' dangerouslySetInnerHTML={{__html: post.youtube}}></div> : ''}
                            {
                                post.images.length != 0 ? 
                                <section className="img-container">
                                    <div className="slider-wrapper">
                                        <div className="slider">
                                            {post.images.map((pic, id) => {
                                                return(
                                                <img id={`slide-${id}`} src={pic.image} alt="posts image" key={id}/>
                                                )
                                            })}
                                        </div>
                                        <div className="slider-nav">
                                            {post.images.map((pic, id) => {
                                                return(
                                                <a href={`#slide-${id}`} key={id}></a>
                                                )
                                            })}
                                        </div>
                                    </div>
                            </section> : ''
                            }
                        </div>
                        <div className='post-actions'>
                            <p className='feed-icons' onClick={() => likePost(post.id)}><i className='bx bx-heart' />{post.likes.length}</p>
                            <p className='feed-icons'><i className='bx bx-comment' /> </p>
                        </div>
                    </div>
                    )
                })
            }
        </>
    );
}

export default Comments;
