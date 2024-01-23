'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { GlobeAsiaAustraliaIcon, RocketLaunchIcon, UserCircleIcon, Squares2X2Icon, BookOpenIcon, MagnifyingGlassIcon, BookmarkIcon } from '@heroicons/react/24/solid';
import SearchInput from './SearchInput';
import Link from 'next/link';
import jwtDecode from 'jsonwebtoken';
import Cookies from 'js-cookie';
import {useRouter} from 'next/navigation'
import NextNProgress from "nextjs-progressbar";



async function getUserData(id:any) {
  const res = await fetch(`http://localhost:8000/api/get_profile_user_by_id_user/${id}`)

 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [isExperienceModalOpen, setIsExperienceModalOpen] = useState(false); // State for experience modal
  const [logoutPopupVisible, setLogoutPopupVisible] = useState(false); // State for logout popup
  const router = useRouter();
  const [userId, setUserId] = useState([]);

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const token = Cookies.get('access_token'); // Mengambil token dari cookies
    if (token) {
      // console.log("ACCESS TOKEN", token);
      const decodedToken = jwtDecode.decode(token);
      setIsLoggedIn(true);

      const decodedTokenForID = JSON.parse(atob(token.split('.')[1])); // Mendekode payload token
      const userId = decodedTokenForID.user_id;
      setUserId(userId); // Set userId ke dalam state

      // console.log('this is USER EMAIL : ');
      // console.log('user email is:', userId);

      if (decodedToken && typeof decodedToken === 'object' && 'email' in decodedToken) {
        setUserEmail(decodedToken.email);
      }

      // Panggil getUserData di dalam useEffect
      const fetchUserData = async () => {
        try {
          const data = await getUserData(userId);
          setUserData(data);
        } catch (error) {
          console.error('Failed to fetch user data:', error);
        }
      };

      fetchUserData();
    }
  }, [userId]);
  // const data = await getUserData(userId:any)L

  const handleLogout = () => {
    // Hapus token dari cookies dan set status login menjadi false
    router.push('/')
    alert("Logout berhasil")
    Cookies.remove('access_token');
    setIsLoggedIn(false);
    // setLogoutPopupVisible(true); 
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const openExperienceModal = () => {
    if (!isLoggedIn) {
      setIsExperienceModalOpen(true);
    }
  };

  const closeExperienceModal = () => {
    setIsExperienceModalOpen(false);
  };

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query:any) => {
    query.preventDefault();
    // Redirect to the search path
    // window.location.href = `/place/search/${encodeURIComponent(searchQuery)}`;
    console.log('search bar is : ' ,encodeURIComponent(searchQuery))
  };





  return (
    <header className="sticky top-0 z-50 bg-white shadow-md grid grid-cols-3 py-2 px-5">
      
      <Link href="/">
        <div className="mt-1">
          <Image src="/tripio-logo.png" alt="SVG Image" width={66} height={66} className="logo-image" />
        </div>
      </Link>
      <div>
        <form onSubmit={handleSearch}>
          <NextNProgress color="#26C6DA"/>
          {/* <Component {...pageProps} /> */}
          <div className="flex items-center justify-between md:border-2 rounded-full py-2 text-sm">
            <input
              className="flex-grow pl-5 bg-transparent outline-none text-gray-600 placeholder-gray-400"
              type="text"
              placeholder="Start Your Search.."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="hidden md:inline-flex h-6 w-6 bg-cyan-500 text-white cursor-pointer rounded-full p-1 mx-2"
            >
              <MagnifyingGlassIcon />
            </button>
          </div>
        </form>
      </div>
      <div className="hidden md:flex items-center space-x-4 justify-end text-gray-500 px-4 gap-2">
        <Link href="/articlepost">
          <div className="relative flex items-center flex-col align-middle cursor-pointer hover:text-gray-700">
            <BookOpenIcon className="inline-flex h-6 w-6 bg-none mb-1" /> 
            <p className="text-xs">Artikel</p>
            {/* <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-cyan-500"></div> */}
          </div>
        </Link>
        <Link href="/place">
          <div className="relative flex items-center flex-col align-middle cursor-pointer hover:text-gray-700">
            <GlobeAsiaAustraliaIcon className="inline-flex h-6 w-6 bg-none mb-1" /> 
            <p className="text-xs">Tempat</p>
            <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-cyan-500"></div>
          </div>
        </Link>
        {isLoggedIn && (
          <div className="relative flex items-center flex-col align-middle cursor-pointer hover:text-gray-700">
            <GlobeAsiaAustraliaIcon className="inline-flex h-6 w-6 bg-none mb-1" />
            {/* <p className="text-xs">{userEmail}</p> */}
            <p className="text-xs">hi {userEmail}</p>
            {/* <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-cyan-500"></div> */}
          </div>
        )}
        <Link href="/bookmark">
        <div className="flex items-center flex-col align-middle cursor-pointer hover:text-gray-700"  onClick={openExperienceModal}>
          <BookmarkIcon className="inline-flex h-6 w-6 bg-none mb-1"/>
          <p className="text-xs">Bookmark</p>
        </div>
        </Link>
        <div
          className="relative flex items-center flex-row align-middle cursor-pointer border border-gray-500 py-0.5 px-2 rounded-xl hover:text-gray-700 hover:border-gray-700"
          onClick={toggleDropdown}
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <Squares2X2Icon className="inline-flex h-4 w-4 bg-none mb-1" />
          <div>
            <p> | </p>
          </div>
          <UserCircleIcon className="inline-flex h-6 w-6 bg-none mb-1" />
          {isDropdownOpen && (
            <div className="absolute mt-32 mr-8 right-0 transform translate-x-1/2">
              <div className="bg-white border rounded-lg shadow-md text-gray-800 text-md p-3">
                {isLoggedIn ? (
                  <>
                    <Link href="/settings">
                      <div className="block px-4 py-2 rounded-lg hover:bg-cyan-400 hover:text-white">
                        Settings
                      </div>
                    </Link>
                    <div onClick={handleLogout} className="block px-4 py-2 rounded-lg hover:bg-red-500 text-red-500 hover:text-white">
                      Logout
                    </div>
                  </>
                ) : (
                  <>
                    <Link href="/register">
                      <div className="block px-4 py-2 rounded-lg hover:bg-cyan-400 hover:text-white">
                        Signup
                      </div>
                    </Link>
                    <Link href="/login">
                      <div className="block px-4 py-2 rounded-lg hover:bg-cyan-400 hover:text-white">
                        Login
                      </div>
                    </Link>
                  </>
                )}
              </div>
            </div>
          )}
        </div>

        {userData.map((user:any) => (
  <div key={user.id}>
    <p>{user.name}</p>
    <p>{user.jumlah_review}</p>
    {/* Render data pengguna lainnya sesuai kebutuhan */}
  </div>
))}

      </div>


      {/* Logout popup */}
      {logoutPopupVisible && (
        <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-full bg-opacity-75 bg-gray-800 overflow-hidden">
          <div className="relative bg-white rounded-lg shadow-md p-2 mx-5 h-16 flex flex-col justify-evenly items-center">
            <p className="text-gray-500 px-3">
              Anda berhasil logout.
            </p>
            <div onClick={() => setLogoutPopupVisible(false)} className="absolute bg-red-500 rounded-full top-0 left-48 py-1 px-2 cursor-pointer font-bold hover:scale-90 transition duration-150">
              X
            </div>
          </div>
        </div>
      )}

{/* Modal untuk Login */}


{isExperienceModalOpen && (
  <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-full bg-opacity-75 bg-gray-800 overflow-hidden p-5">
    <div className="relative bg-white rounded-lg shadow-md p-2 mx-5 flex flex-col justify-evenly items-center h-96">
      <div className="relative rounded-full">
        <Image src="/loginAsk.svg" alt="SVG Image" height={250} width={250} />
      </div>

      <div className="text-gray-500 px-3">
        <p>
          <span className="text-gray-700">Login</span> untuk membuka fitur ini
        </p>
      </div>

      <div className="text-gray-500 flex flex-row justify-between items-center">
        <div className="mr-5">
          p
            <button onClick={closeExperienceModal} className="px-2 py-2 text-cyan-500 border rounded-lg border-cyan-500 hover:scale-105 transition duration-150">
              Nanti dulu
            </button>
        </div>
        <div className="ml-5 bg-cyan-500 text-white rounded-lg hover:scale-105 transition duration-150">
          <Link href={'/login'}>
            <button className="px-3 py-2">Login</button>
          </Link>
        </div>
      </div>

      <div onClick={closeExperienceModal} className="absolute bg-red-500 text-white rounded-full top-3 right-4 py-1 px-2 cursor-pointer font-bold hover:scale-90 transition duration-150">
        X
      </div>
    </div>
  </div>
)}







    </header>
  );
}

export default Header;




