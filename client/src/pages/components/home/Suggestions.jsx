import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AppContext from '../../../context/AppContext';

const Suggestions = () => {
    const {user} = useContext(AppContext)
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const follow = (other) => {
        try{
            const fllw = {follower: user.id, following: other}
            axios.post(`http://localhost:3000/api/follow/create`, fllw, {headers: {'Content-Type': 'application/json'}, withCredentials: true})
        } catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        axios.get(`http://localhost:3000/api/auth/allusers`, {headers: {'Content-Type': 'application/json'}})
          .then((res) => {
            setUsers(res.data)
            // setFilteredResults(res.data.filter((post) => decoded.user.followers.some((userId) => userId.user._id === post.user._id)))
            setLoading(false)
          })
          .catch((err) => {
            console.log(err)
            // toast.error('There was an error fetching the posts')
          })
    },[])
    
    return (
        <div className='suggestions'>
            <div className='latest'>
                <h2>Latest Users</h2>
                <div className='users'>
                { loading && users.length == 0 ? '' : users.length == 0 ? <p>There are no users</p> :
                    users.slice(-4, 3).map((sug, key) => {return(
                        <div className='user-card' key={key}>
                        <div className='user-info'>
                            <div className='pic-container'>
                                <img src={sug.image} alt='Profile image' className='profile-img-suggestion' />
                            </div>
                            <p className='follow-name'>{sug.username}</p>
                        </div>
                        <button className='follow-btn' onClick={() => follow(sug.id)}>Follow</button>
                    </div>
                    )})
                }
                </div>
                
            </div>
            <div className='most-followed'>
                <h2>Suggestions</h2>
                <div className='users'>{ loading && users.length == 0 ? '' : users.length == 0 ? <p>There are no users</p> :
                    users.sort((a,b) => a.followers.length - b.followers.length).slice(0, 3).map((sug, key) => {return(
                        <div className='user-card' key={key}>
                        <div className='user-info'>
                            <div className='pic-container'>
                                <img src={sug.image} alt='Profile image' className='profile-img-suggestion' />
                            </div>                     
                            <p className='follow-name'>{sug.username}</p>
                        </div>
                        <button className='follow-btn' onClick={() => follow(sug.id)}>Follow</button>
                    </div>
                    )})
                    }
                </div>      
            </div>
        </div>
    );
}

export default Suggestions;
