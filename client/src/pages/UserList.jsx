import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('')

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
        <section className='home-page'>
            <div className='feed'>
                <div className='filter-feed'>
                    <h1>Users</h1> 
                </div>
                <input type='text' placeholder='search users' className='search-input' onChange={((e) => setSearch(e.target.value))}/>
                {loading && users.length == 0 ? <p>Loading users...</p> : users.length == 0 ? <p>There are no users...</p> :
                    users.filter((item) => {return search.toLocaleLowerCase() == '' ? users : item.username.toLocaleLowerCase().includes(search)}).map((user, key) => {return(
                        <div className='user-search-card' key={key}>
                            <div className='user-info'>
                                <img src={user.image} alt='Profile image' className='profile-img' />
                                <p className='follow-name'>{user.username}</p>
                            </div>
                            <button className='follow-btn'>Follow</button>
                        </div>
                    )})
                }
            </div>
        </section>
    );
}

export default UserList;
