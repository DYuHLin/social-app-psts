import React, { useContext } from 'react';
// import LinkPreview from '../Misc/LinkPreview';
import axios from 'axios';
import AppContext from '../../../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Feed = ({posts, loading}) => {
    const {user} = useContext(AppContext)
    const navigate = useNavigate()

    const likePost = (post) => {
        try{
            const like = {post: post, comment: null, liker: user.id,}
            axios.post(`http://localhost:3000/api/likes/likepost`, like, {headers: {'Content-Type': 'application/json'}, withCredentials: true})
        } catch(err){
            console.log(err)
        }
    }

    return (
        <div className='feed'>
            <div className='filter-feed'>
                <span className='active'>All</span>
                <span>Following</span>
            </div>
            { loading && posts.length === 0 ? <p>Loading the posts...</p> : posts.length === 0 ? <p>There are no posts right now</p>:
                posts.map((post, key) => {
                    return(
                    <div className='feed-post' key={key}>
                        <div className='post-info'>
                            <p className='feed-user'>{post.username}</p>
                            <p>{new Date(Number(post.date)).toLocaleString()}</p>
                        </div>
                        <div className='post-content' onClick={() => navigate(`/${post.id}/post`)}>
                            {post.text.trim() != '' ? <p className='feed-content'>{post.text}</p> : ''}
                            {post.link.trim() != '' ? <a href={post.link} className='link-post'>{post.link}</a> : ''}
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
                            <p className='feed-icons'>View Comments </p>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    );
}

export default Feed;