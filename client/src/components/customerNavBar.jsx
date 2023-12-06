import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from '../images/logo.png';
import TempAvatar from '../images/temp_avatar.png';

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
                  className={`leading-normal text-slate-gray mx-8 my-1 align-middle ${location.pathname.startsWith(item.href) ? 'font-bold border-primary-gray p-2' : ''
                    }`}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
            {/* This is a temporary avatar */}
            <li>
              <img src={TempAvatar} alt="tempAvatar" className="w-[35px] mx-7 my-1" />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
