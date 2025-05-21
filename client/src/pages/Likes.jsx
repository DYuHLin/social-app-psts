import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import LikedComments from './components/Misc/LikedComments';

const Likes = () => {
    const {user} = useContext(AppContext)
    const navigate = useNavigate()
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    const likePost = (post) => {
        try{
            const like = {post: post, comment: null, liker: user.id,}
            axios.post(`http://localhost:3000/api/likes/likepost`, like, {headers: {'Content-Type': 'application/json'}, withCredentials: true})
        } catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        axios.get(`http://localhost:3000/api/likes/${user.id}/allposts`, {headers: {'Content-Type': 'application/json'}})
            .then((res) => {
                setPosts(res.data)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
            })
    },[user.id, posts])

    return (
        <section className='home-page'>
            <div className='feed'>
            <div className='filter-feed'>
                <h1>Liked Posts</h1>
            </div>
            {loading && posts.length === 0 ? <p>Loading the likes...</p> : posts.length === 0 ? <p>There are no likes</p>:
                posts.map((post, key) => {
                    return(
                    <div className='feed-post' key={key}>
                        <div className='post-info'>
                            <p className='feed-user'>{post.username}</p>
                            <p>{new Date(Number(post.date)).toLocaleString()}</p>
                            <p>Post</p>
                        </div>
                        <div className='post-content' onClick={() => navigate(`/${post.id}/post`)}>
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
                            <p className='feed-icons'> View Comments</p>
                        </div>
                    </div>
                    )
                })
            }
            <LikedComments />
        </div>
        </section>
    );
}

export default Likes;