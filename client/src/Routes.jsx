import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from './App';
import Register from './pages/Register';
import Login from './pages/Login';

function Routes(){
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<App />}>
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />

        </Route>
    ))

    return <RouterProvider router={router}/>;
}

export default Routes;
