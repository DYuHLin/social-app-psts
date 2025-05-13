import React, { useContext, useEffect, useState } from 'react';
import UserPosts from './components/User/UserPosts';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AppContext from '../context/AppContext';

const Profile = () => {
    const {id} = useParams()
    const {user} = useContext(AppContext)

    const [currentUser, setCurrentUser] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`http://localhost:3000/api/auth/${id}/user`, {headers: {'Content-Type': 'application/json'}})
          .then((res) => {
            setCurrentUser(res.data)
            setLoading(false)
          })
          .catch((err) => {
            console.log(err)
          })
    },[id])

    return (
        <section className='home-page'>
            <div className='feed'>
            <div className='filter-feed'>
                <h1>Profile</h1>
            </div>
            {loading && currentUser.length == 0 ? '' : currentUser.length == 0 ? '' : <div className='user-profile-info'>
                <div className='profile-card-img'>
                    <img src={currentUser[0].image} alt='Profile image' className='profile-card-image' />
                </div>
                <div className='profile-card-info'>
                    <h3>{currentUser[0].username}</h3>
                    <p>{currentUser[0].description == null ? '' : currentUser[0].description}</p>
                    <div className='followers'>
                        <p className='follow-label'>{currentUser[0].length} Followers</p>
                        <p className='follow-label'>{currentUser[0].length} Follwing</p>
                    </div>
                    {currentUser[0].id != user.id ?<button className='follow-profile-btn'>Follow</button> : ''}
                </div>
            </div>}
            <UserPosts />
            </div>
        </section>
    );
}

export default Profile;
