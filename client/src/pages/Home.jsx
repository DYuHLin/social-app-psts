import React, { useEffect, useState } from 'react';
import Feed from './components/home/Feed';
import Suggestions from './components/home/Suggestions';
import Sidebar from './components/home/Sidebar';
import axios from 'axios';

const Home = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [reloading, setReloading] = useState(false)

    useEffect(() => {
      try{
        axios.get(`http://localhost:3000/api/post/allposts`, {headers: {'Content-Type': 'application/json'}})
          .then((res) => {
            console.log(res.data)
            setPosts(res.data)
            // setFilteredResults(res.data.filter((post) => decoded.user.followers.some((userId) => userId.user._id === post.user._id)))
            setLoading(false)
            setReloading(false)
            return res.data
          })
          .catch((err) => {
            console.log(err)
            // toast.error('There was an error fetching the posts')
          })
      } catch(err){
        console.log(err)
      }
      },[reloading])

    return (
        <section className='home-page'>
            <Sidebar />
            <Feed posts={posts} loading={loading} setReloading={setReloading}/>
            <Suggestions />
        </section>
    );
}

export default Home;
