import React from 'react';
import sleeping from '../../../images/404.jpg'
const NotFound = () => {
    return (
        <div>
            <h1 className='text-primary'>I am Sleeping Right Now. Error 404</h1>
            <img className='w-100' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;