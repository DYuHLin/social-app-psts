import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AppContext from '../context/AppContext';
import { useParams } from 'react-router-dom';

const Follow = () => {
    const {user} = useContext(AppContext)
    const [followers, setFollowers] = useState([])
    const [following, setFollowing] = useState([])
    const {id} = useParams()
    const [view, setView] = useState(false)

    const follow = (other) => {
        try{
            const fllw = {follower: user.id, following: other}
            axios.post(`http://localhost:3000/api/follow/create`, fllw, {headers: {'Content-Type': 'application/json'}, withCredentials: true})
        } catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
            axios.get(`http://localhost:3000/api/follow/${id}/followers`, {headers: {'Content-Type': 'application/json'}})
              .then((res) => {
                setFollowers(res.data)
              })
              .catch((err) => {
                console.log(err)
              })
        },[id])

        useEffect(() => {
            axios.get(`http://localhost:3000/api/follow/${id}/following`, {headers: {'Content-Type': 'application/json'}})
              .then((res) => {
                setFollowing(res.data)
              })
              .catch((err) => {
                console.log(err)
              })
        },[id])

    return (
        <section className='home-page'>
            <div className='feed'>
                <div className='filter-feed'>
                    <h1>{!view ?'Followers' : 'Following'}</h1> 
                </div>
                <button onClick={() => setView(!view)}>View {!view ? 'Following' : 'Following'}</button>
                {followers.length == 0 && !view ? <p>This user has no followers</p> : followers.length != 0 && !view ? followers.map((flw, key) => {return(
                    <div className='user-search-card' key={key}>
                         <div className='user-info'>
                            <img src={flw.image} alt='Profile image' className='profile-img' />
                            <p className='follow-name'>{flw.username}</p>
                        </div>
                        <button className='follow-btn' onClick={() => follow(flw.id)}>Follow</button>
                    </div>
                )}) : following.length == 0 && view ? <p>This user is not following anyone</p> : following.length != 0 && view ? following.map((flw, key) => {return(
                    <div className='user-search-card' key={key}>
                         <div className='user-info'>
                            <img src={flw.image} alt='Profile image' className='profile-img' />
                            <p className='follow-name'>{flw.username}</p>
                        </div>
                        <button className='follow-btn' onClick={() => follow(flw.id)}>Follow</button>
                    </div>
                )}) : ''
                }
                
            </div>
        </section>
    );
}

export default Follow;
