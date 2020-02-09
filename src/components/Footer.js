import React from 'react';
import BtnWhatsapp from './BtnWhatsapp'; 

const Footer = () => {

    return (
        <div className='p-4 bg-gray-200 sm:flex justify-between items-center'>
        <div>
            <h5>Jonas G.</h5>
            <p>
                <a href="https://github.com/jgalmeida93">Github</a>
            </p>
        </div>
        <BtnWhatsapp />
    </div>
    )
}

export default Footer;