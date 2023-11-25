import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../images/logo.png'
import TempAvatar from '../images/temp_avatar.png'

const NavBar = () => {
  const navLinks = [
    { href: "/home", label: "Home" },
    { href: "/fitness-tracker", label: "Fitness Tracker" },
    { href: "/exercises", label: "Exercises" },
    { href: "/appointment", label: "Appointment" },
    { href: "/profile", label: "Profile" },
  ];

  const location = useLocation();

  return (
    <>
      <div className='fixed top-0 flex items-center w-full'>
        <img src={Logo} alt='logo' className='mt-5 ml-7 w-[200px] col-auto' />
        <nav className='flex flex-row items-center ml-auto'>
          <ul className="mr-2 mt-3 flex flex-row">
            <div className='text-[17px] p-2 align-middle'>
              {navLinks.map((item) => (
                <NavLink
                  to={item.href}
                  key={item.label}
                  className={`leading-normal text-slate-gray mx-10 my-1 align-middle ${location.pathname === item.href ? 'font-bold' : ''
                    }`}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
            {/* This is a temporary avatar */}
            <li><img src={TempAvatar} alt='tempAvatar' className='w-[35px] mx-7 my-1' /></li>
          </ul>
        </nav>
      </div>


    </>
  );
};

export default NavBar;