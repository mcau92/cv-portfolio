import React,{ useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HeroSection from '../components/HeroSection'

const Home=()=> {

    const [isOpen,setIsOpen]=useState(false);



    return (
        <>
        <Sidebar isOpen={ isOpen } setIsOpen={setIsOpen}/>
        <Navbar isOpen={ isOpen } setIsOpen={setIsOpen}/>
        <HeroSection />
        </>
    );
};

export default Home
