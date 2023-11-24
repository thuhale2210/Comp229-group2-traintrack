import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from '../images/logo.png'
import TempAvatar from '../images/temp_avatar.png'

const NavBar = () => {
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#tracker", label: "Fitness Tracker" },
    { href: "#exercises", label: "Exercises" },
    { href: "#appointment", label: "Appointment" },
    { href: "#profile", label: "Profile" },
  ];

  return (
    <>
      <div className='fixed top-0 flex items-center w-full'>
        <img src={Logo} alt='logo' className='mt-3 ml-5 w-[150px] col-auto' />
        <nav className='flex flex-row items-center ml-auto'>
          <ul className="mr-2 mt-3 flex flex-row">
            <div className='text-[15px] align-middle border-b border-gray-300'>
              {navLinks.map((item) => (
                <NavLink key={item.label} to={item.href} className="leading-normal text-slate-gray mx-10 my-1 align-middle">
                  {item.label}
                </NavLink>
              ))}
            </div>
            {/* This is a temporary avatar */}
            <li><img src={TempAvatar} alt='tempAvatar' className='w-[30px] mx-5' /></li>
          </ul>
        </nav>
      </div>


    </>
  );
};

export default NavBar;