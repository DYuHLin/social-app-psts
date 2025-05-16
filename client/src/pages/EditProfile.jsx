import React, { useContext, useState } from 'react';
import ProfileImg from './components/Misc/ProfileImg';
import AppContext from '../context/AppContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
    const {user, defaultImg} = useContext(AppContext)
    const [image, setImage] = useState(defaultImg)
    const [error, setError] = useState('')
    const [username, setUsername] = useState('')
    const [description, setDescription] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate()
    
    const updateUser = (e) => {
        e.preventDefault()
        const upUser = {username, password, description, image}
        try{
            if(confirmPassword !== password){
                setError('These passwords do not match')
            }else{
                axios.post(`http://localhost:3000/api/auth/${user.id}/updateuser`, upUser, {headers: {'Content-Type': 'application/json'}})
                    .then(res => res.data)
                    .then(status => {
                        if(status == 'username'){
                            setError('This username is taken')
                        } else if(status == 'success'){
                            navigate('/gettingstarted')
                            return status      
                        }
                    })
            }    
        } catch(err){
            console.log(err)
        }
    }
    return (
        <section className='home-page'>
            <div className='feed'>
                <div className='filter-feed'>
                    <h1>Edit Profile</h1>
                </div>

                <div className='feed-post'>
                    <form onScroll={updateUser}>
                        <input type='text' placeholder='username' className='post-input' onChange={(e) => setUsername(e.target.value)}/>
                        <input type='password' placeholder='new password' className='post-input' onChange={(e) => setPassword(e.target.value)}/>
                        <input type='password' placeholder='confirm password' className='post-input' onChange={(e) => setConfirmPassword(e.target.value)}/>
                        <textarea placeholder='Write description' rows='8' onChange={(e) => setDescription(e.target.value)}></textarea>
                        <ProfileImg setImage = {setImage} />
                        <button className='post-btn'>Update</button>
                    </form>
                    <p className='error'>{error}</p>
                </div>
            </div>
        </section>
    );
}

export default EditProfile;
