import React from 'react';
import './styles.css';
import BtnWhatsapp from '../components/BtnWhatsapp';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Helmet from 'react-helmet';


import selo from '../assets/selo-5y.png';
import img from '../assets/image-hero.png';

import { graphql, useStaticQuery } from 'gatsby'




const Index = () => {
    const selos = [1,2,3,4];
    const projetos = [1,2,3,4];
    return (
        <div>
            <Helmet>
                <title>Estudo Gatsby</title>
            </Helmet>
        <Header>
            <Logo />
            <div>
                <BtnWhatsapp/>
            </div>
        </Header>
       <Hero />
       <div className='flex flex-col items-center sm:flex-row justify-around'>
           {
           selos.map(() => {
            return <img src={selo} width='180px' className='my-6' />
        })
           }
       </div>
       <div>
           <h2 className='px-8 py-3 text-2xl font-bold'>Projetos desenvolvidos</h2>
           <div className='flex flex-wrap'>
            {
                projetos.map(() => {
                    return (
                    <div className='max-w-sm'>
                        <div className='m-2 rounded shadow-xl'>
                            <img src={img} alt='Projeto 1' />
                            <div className='px-6 py-4'>
                                <p className='font-bold text-xl mb-3'>Projeto</p>
                                <p>Descrição</p>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
           </div>
       </div>
        <Footer />
        </div>

    )
}

export default Index;