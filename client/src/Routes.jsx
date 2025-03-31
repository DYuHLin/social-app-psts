import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from './App';
import Start from './pages/Start';

function Routes(){
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<App />}>
        <Route path='/gettingstarted' element={<Start/>} />

        </Route>
    ))

    return <RouterProvider router={router}/>;
}

export default Routes;
