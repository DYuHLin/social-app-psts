import React from 'react';
import Feed from './components/home/Feed';
import Suggestions from './components/home/Suggestions';
import Sidebar from './components/home/Sidebar';

const Home = () => {
    return (
        <section className='home-page'>
            <Sidebar />
            <Feed />
            <Suggestions />
        </section>
    );
}

export default Home;
