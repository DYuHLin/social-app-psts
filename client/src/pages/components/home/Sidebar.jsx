import React from 'react';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <ul className='side-list'>
                <li className='side-item'><i className='bx bx-home'/> <p className='side-text'>Home</p></li>
                <li className='side-item'><i className='bx bx-plus-circle'/> <p className='side-text'>Create</p></li>
                <li className='side-item'><i className='bx bx-user' /> <p className='side-text'>Users</p></li>
                <li className='side-item'><i className='bx bx-bell' /> <p className='side-text'>Notifications</p></li>
                <li className='side-item'><i className='bx bx-like' /> <p className='side-text'>Likes</p></li>
                <li className='side-item'><i className='bx bx-user' /> <p className='side-text'>Profile</p></li>
                <li className='side-item'><i className='bx bx-log-out' /> <p className='side-text'>Logout</p></li>
            </ul>
        </div>
    );
}

export default Sidebar;
