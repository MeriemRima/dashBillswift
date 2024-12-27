import React from 'react';
import ProfileMenu from './ProfileMenu'; // Import the Profile Menu component
import MenuIcon from '../../public/MenuIcon.png';
import Image from 'next/image';
import nexular from '../../public/nexular.png';

interface HeaderProps {
  toggleSidebar: () => void; // Type for the toggleSidebar function
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="flex justify-between items-center p-4">
      <div className="flex items-center">
        <Image
          src={MenuIcon}
          alt="menuIcon"
          className="h-4 w-auto mr-4 cursor-pointer"
          onClick={toggleSidebar} // Call toggleSidebar on click
        />
        <Image src={nexular} alt="icon" className="h-14 w-auto mr-4" />
        <div>
          <p className="text-sm" style={{ fontFamily: 'Roboto' }}>
            Welcome Back! <strong>Nexular Corp</strong>
          </p>
        </div>
      </div>
      <ProfileMenu />
    </header>
  );
};

export default Header;
