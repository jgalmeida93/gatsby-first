import React from 'react';
import img from '../assets/image-hero.png'

const Hero = () => {
    return (
        <div className='flex flex-col items-center sm:flex-row sm:justify-between'>
        <div className='p-8'>
            <h2 className='font-bold text-2xl'>Estudo Gatsby</h2>
            <p className='font-xl'>Aprendendo como funciona a ferramenta</p>
            <p className='text-gray-700'>Gatsby JS</p>

        </div>            
    
        <div>
            <img src={img} alt='imagem hero'  width='600px'/>
        </div>
    </div>
    )
}

export default Hero;