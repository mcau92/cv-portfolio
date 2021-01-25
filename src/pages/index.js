import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HeroSection from '../components/HeroSection'
function Home() {

    const [isOpen,setIsOpen]=useState(false);

    const toggle=()=>{
        setIsOpen(!isOpen);
    };


    return (
        <>
        <Sidebar isOpen={isOpen} toogle={toggle}/>
        <Navbar toogle={toggle}/>
        <HeroSection />

        </>
    );
};

export default Home
