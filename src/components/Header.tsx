// components/Header.js
import React from 'react';
import ProfileMenu from './ProfileMenu'; // Import the Profile Menu component
import MenuIcon from '../../public/MenuIcon.png'
import Image from 'next/image';
import nexular from '../../public/nexular.png';
const Header = () => {
    return (
        <header className="flex justify-between items-center p-4 ">
            <div className="flex items-center">
                {/* <button className="text-2xl mr-4">☰</button> */}
                <Image src={MenuIcon} alt='menuIcon' className="h-4 w-auto mr-4"/>
                <Image src={nexular} alt='icon' className="h-14 w-auto mr-4"/>

                <div>
                    <p className="text-sm" style={{  fontFamily:'Roboto'}}>
                        Welcome Back! <strong>Nexular Corp</strong>
                    </p>
                </div>
                {/* <nav className="ml-5 flex space-x-4">
                    <a href="/home" className="text-black font-medium">Home</a>
                    <a href="/cash-flow" className="text-black font-medium">Cash Flow</a>
                </nav> */}
            </div>
            <ProfileMenu />
        </header>
    );
};

export default Header;
