import React, { useContext, useEffect, useState } from 'react';
import CommentWriter from './components/Post/CommentWriter';
import Comments from './components/Post/Comments';
import AppContext from '../context/AppContext';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CommentPage = () => {
    let {id} = useParams()
    const {user} = useContext(AppContext)
    // const navigate = useNavigate()
    const [post, setPost] = useState([])

    const likePost = (post) => {
        try{
            const like = {post: null, comment: post, liker: user.id,}
            axios.post(`http://localhost:3000/api/likes/likepost`, like, {headers: {'Content-Type': 'application/json'}, withCredentials: true})
        } catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        axios.get(`http://localhost:3000/api/comment/${id}/comment`, {headers: {'Content-Type': 'application/json'}})
          .then((res) => {
            setPost(res.data)
          })
          .catch((err) => {
            console.log(err)
          })
    },[id])

    return (
        <section className='home-page'>
            <div className='feed'>
                <div className='filter-feed'>
                    <h1>Comment</h1>
                </div>

                {post.length == 0 ? '' : <div className='feed-post'>
                        <div className='post-info'>
                            <p className='feed-user'>{post[0].username}</p>
                            <p>{new Date(Number(post[0].date)).toLocaleString()}</p>
                        </div>
                        <div className='post-content'>
                            {post[0].text.trim() != '' ? <p className='feed-content'>{post[0].text}</p> : ''}
                            {post[0].link.trim() != '' ? <a href={post[0].link}>{post[0].link}</a> : ''}
                            {post[0].video.trim() != '' ? <div className='vid-container'><video className='video' src={post[0].video} controls /> </div>: ''}
                            {post[0].youtube.trim() != '' ? <div className='ytvid' dangerouslySetInnerHTML={{__html: post[0].youtube}}></div> : ''}
                            {
                                post[0].images.length != 0 ? 
                                <section className="img-container">
                                    <div className="slider-wrapper">
                                        <div className="slider">
                                            {post[0].images.map((pic, id) => {
                                                return(
                                                <img id={`slide-${id}`} src={pic.image} alt="posts image" key={id}/>
                                                )
                                            })}
                                        </div>
                                        <div className="slider-nav">
                                            {post[0].images.map((pic, id) => {
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
                            <p className='feed-icons' onClick={() => likePost(post[0].id)}><i className='bx bx-heart' />{post[0].likes.length}</p>
                            <p className='feed-icons'><i className='bx bx-comment' /> </p>
                        </div>
                    </div>}
            <CommentWriter postId = {id}/>
            <Comments postId = {id}/>
            </div>
        </section>
    );
}

export default CommentPage;
