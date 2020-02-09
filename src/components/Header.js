import React from 'react';

const Header = ({ children }) => {
    return (
        <div className='p-4 bg-blue-600 sm:flex justify-between items-center'>
            { children }
        </div>
    )
}

export default Header;