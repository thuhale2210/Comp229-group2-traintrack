import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from '../images/logo.png';

const NavBar = () => {
  const navLinks = [
    { href: '/home', label: 'HOME' },
    { href: '/exercises', label: 'EXERCISES' },
    { href: '/appointment', label: 'APPOINTMENT' },
    { href: '/profile', label: 'PROFILE' },
  ];

  const location = useLocation();

  const isActive = (match, location) => {
    if (!match) {
      return false;
    }
    return location.pathname.startsWith(match.url);
  };

  // Add logic to get the image from localStorage
  const uploadedImage = localStorage.getItem('image');

  return (
    <>
      <div className="fixed top-0 py-2 flex items-center w-full bg-primary-white z-10">
        <Link to="/home">
          <img src={Logo} alt="logo" className="ml-7 w-[200px] col-auto" />
        </Link>
        <nav className="flex flex-row items-center ml-auto">
          <ul className="mr-2 mt-2 flex flex-row">
            <div className="text-sm p-2 align-middle">
              {navLinks.map((item) => (
                <NavLink
                  to={item.href}
                  key={item.label}
                  isActive={(match, location) => isActive(match, location)}
                  className={`leading-normal text-slate-gray mx-8 my-1 align-middle ${location.pathname.startsWith(item.href) ? 'font-bold border-b border-primary-red p-2' : ''
                    }`}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
            <li>
              <img
                src={uploadedImage ? uploadedImage : "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"}
                alt="tempAvatar" 
                className="w-12 mx-7 my-1" />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
