import React, { useContext } from "react";
import { Link, useLocation } from 'react-router-dom';
import Cookies from "js-cookie";
import { GlobalContext } from "../Context/GlobalContext";

const Navbar = () => {
  let user = {};
  if(Cookies.get('token')){
    user = JSON.parse(Cookies.get('user'))
  } 
  //const hasCookies = !!Cookies.get(`${Cookies.name} (${email.email})`);
  const { state, handleFunction } = useContext(GlobalContext);
  const {
    popupNavbar, setPopUpNavbar
  } = state;
  const { handleLogout, handlePopUpNavbar, handleSidebar } = handleFunction;
  return (
    <>
      <nav className="fixed bg-white px-2 py-2.5 w-full border-b-4 border-black z-20 top-0 left-0">
        <div className="container mx-auto flex items-center justify-between">
          
        

          <img src="https://media.istockphoto.com/id/1286680331/id/vektor/adopsi-dan-kepedulian-masyarakat.jpg?s=1024x1024&w=is&k=20&c=5vcAFKwg6IjtjvXWE0pGg9Lq1CmfCT3xTq3XSb_qKJ0=" className="md:ml-5 h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-2xl whitespace-nowrap w-full">
            <Link to="/">
              Cari Qerja
            </Link>
          </span>
          <div className="items-center w-full ml-6 md:w-auto mr-5">
            <ul className="flex flex-row space-x-8 text-sm font-medium">
              {Cookies.get('token')  && <Link to="/Dashboard" className="hidden md:block"> <li>Dashboard</li> </Link>}
              <Link to="/" className="hidden md:block"> <li>Beranda</li> </Link>
              <Link to="/FindJob" className="hidden md:block"> <li>Lowongan</li> </Link>
            </ul>
          </div>
          {
            !Cookies.get('token') ? <button className="rounded-md bg-violet-500 text-white border-gray-500 p-1 mr-4">
              <Link to="/Login">
                Login
              </Link>
            </button>
              :
              <div>
                <button type="button" onClick={handlePopUpNavbar} className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                  <span className="sr-only">Open user menu</span>
                  <img className="w-32 md:w-10 h-8 rounded-full" src="https://media.istockphoto.com/id/1018999828/id/vektor/ikon-profil-avatar-default-tempat-penampung-foto-abu-abu.jpg?s=1024x1024&w=is&k=20&c=HfHK9DxGnhAaq_9CSMLeS779VztAT1CrXoFoBAkNn-8=" alt="user photo" />
                </button>
                <div className={`-50 absolute right-2 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 
                ${popupNavbar? "block" : "hidden"}` } id="user-dropdown">
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">{Cookies.get('token') && user.name  }</span>
                    <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{Cookies.get('token') && user.email}</span>
                  </div>
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <Link to="/dashboard/profile" onClick={() => handlePopUpNavbar()} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Profile</Link>
                    </li>
                    <li>
                      <button onClick={handleLogout} className="w-full flex self-start block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</button>
                    </li>
                    <li >
                      <Link to="/" className="block md:hidden w-full flex self-start block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Beranda</Link>
                    </li>
                    <li >
                    <Link to="/dashboard" className="block md:hidden w-full flex self-start block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</Link>
                    </li>
                    <li >
                    <Link to="/FindJob" className="block md:hidden w-full flex self-start block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Lowongan</Link>
                    </li>
                  </ul>
                </div>
              </div>

          }

        </div>
      </nav>
    </>
  );
};

export default Navbar;
