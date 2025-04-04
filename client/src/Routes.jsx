import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from './App';
import Start from './pages/Start';
import Home from './pages/Home';
import Create from './pages/Create';
import Post from './pages/Post';
import Likes from './pages/Likes';
import UserList from './pages/UserList';

function Routes(){
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<App />}>
        <Route path='/gettingstarted' element={<Start/>} />
        <Route index element={<Home/>} />
        <Route path='/create' element={<Create/>} />
        <Route path='/:id/post' element={<Post/>} />
        <Route path='/likes' element={<Likes/>} />
        <Route path='/users' element={<UserList/>} />

        </Route>
    ))

    return <RouterProvider router={router}/>;
}

export default Routes;
