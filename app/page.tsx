'use client'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react';

import jwtDecode from 'jsonwebtoken';
import Cookies from 'js-cookie';

import HeaderLandingPage from '@/components/headerLandingPage';


export default function Home() {
  
  const [modalIsVisible, setModalVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    const token = Cookies.get('access_token'); // Get token from cookies
    if (token) {
      const decodedToken = jwtDecode.decode(token);
      setIsLoggedIn(true);
    }
  }, []);

  const toggleModal = () => {
    setModalVisible(!modalIsVisible);
  };

  const handleGetStarted = () => {
    if (isLoggedIn) {
      // User is logged in, redirect to '/place'
      window.location.href = '/place';
    } else {
      // User is not logged in, show the modal
      toggleModal();
    }
  };

  return (
    <div className="bg-white h-screen text-white">
      <Head>
      <title>Epent</title>
        <link rel="icon" href="/vercel.svg "/>

      </Head>

      {/* <Header /> */}
      <HeaderLandingPage />
      {/* <NavList/> */}
    {/* <Locationlist  /> */}


      {/* Banner */}

      <div className="flex justify-center items-center mt-2 px-2  md:px-10 md:mt-3">
        <div className=" h-[300px] md:h-[400px] w-full ">
          <div className="relative h-[300px] bg-red-400 flex flex-col items-center cursor-pointer  justify-center rounded-lg md:h-[400px]">
            <div className="w-full h-full">
              <Image src="/wide-one.png" alt="SVG Image" layout="fill" objectFit="cover" className="rounded-lg" />

              <div className=" px-10 absolute inset-0 flex flex-col items-center cursor-pointer  justify-center rounded-md">
                {/* <h1 className="mt-16 text-cyan-200 text-2xl md:mt-24 md:text-4xl">Tripio</h1> */}
                <div className="mt-16">
                  <Image src="/tripio-text.png" alt="SVG Image" width={140} height={88} className="logo-image" />
                </div>
                <p className="text-center  mt-1 text-sm md:mt-4 md:text-lg">Empowering Indonesian Tourism: Tripio's Journey of Discovery"</p>
                <button
                  onClick={handleGetStarted}
                  className="bg-opacity-50 bg-black p-2 rounded-lg mt-5 text-cyan-100 border-2 hover:bg-opacity-20 active:bg-opacity-100 hover:px-3"
                >
                  Get Started
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="px-5 py-2 w-full  mt-5 md:px-10">
        <div>
          <h3 className="text-gray-700 text-2xl text-bold">Siap Menjelajah Kota</h3>
        </div>

        <div className="flex flex-row gap-8 justify-start align-middle  items-center mt-5 md:gap-12 md:flex-nowrap overflow-y-scroll no-scrollbar">

          <div onClick={handleGetStarted} className=" flex flex-col items-center cursor-pointer hover:scale-105 transition duration-200 ">
            <div className=" w-20 h-20 relative md:w-32 md:h-32" >
              <Image src="/img-kotu-jkt.jpg" alt="SVG Image" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <div>
              <p className="text-gray-600 mt-2 text-base md:mt-2 md:text-lg">Jakarta</p>
            </div>
          </div>

          <div onClick={handleGetStarted} className=" flex flex-col items-center cursor-pointer hover:scale-105 transition duration-200  ">
            <div className=" w-20 h-20 relative md:w-32 md:h-32" >
              <Image src="/img-borobudur.jpg" alt="SVG Image" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <div>
              <p className="text-gray-600 mt-2 text-base md:mt-2 md:text-lg">Jogjakarta</p>
            </div>
          </div>
          <div onClick={handleGetStarted} className=" flex flex-col items-center cursor-pointer hover:scale-105 transition duration-200 ">
            <div className=" w-20 h-20 relative md:w-32 md:h-32" >
              <Image src="/img-bromo.jpg" alt="SVG Image" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <div>
              <p className="text-gray-600 mt-2 text-base md:mt-2 md:text-lg">Malang</p>
            </div>
          </div>

          <div onClick={handleGetStarted} className=" flex flex-col items-center cursor-pointer hover:scale-105 transition duration-200 ">
            <div className=" w-20 h-20 relative md:w-32 md:h-32" >
              <Image src="/img-bromo2.jpg" alt="SVG Image" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <div>
              <p className="text-gray-600 mt-2 text-base md:mt-2 md:text-lg">Purwokerto</p>
            </div>
          </div>

          <div onClick={handleGetStarted} className=" flex flex-col items-center cursor-pointer hover:scale-105 transition duration-200 ">
            <div className=" w-20 h-20 relative md:w-32 md:h-32" >
              <Image src="/img-bromo4.jpg" alt="SVG Image" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <div>
              <p className="text-gray-600 mt-2 text-base md:mt-2 md:text-lg">Depok</p>
            </div>
          </div>

          <div onClick={handleGetStarted} className=" flex flex-col items-center cursor-pointer hover:scale-105 transition duration-200 ">
            <div className=" w-20 h-20 relative md:w-32 md:h-32" >
              <Image src="/img-glider-ppl.jpg" alt="SVG Image" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <div>
              <p className="text-gray-600 mt-2 text-base md:mt-2 md:text-lg">Bogor</p>
            </div>
          </div>
          <div onClick={handleGetStarted} className=" flex flex-col items-center cursor-pointer hover:scale-105 transition duration-200 ">
            <div className=" w-20 h-20 relative md:w-32 md:h-32" >
              <Image src="/tall-one.png" alt="SVG Image" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <div>
              <p className="text-gray-600 mt-2 text-base md:mt-2 md:text-lg">Bandung</p>
            </div>
          </div>

          <div onClick={handleGetStarted} className=" flex flex-col items-center cursor-pointer hover:scale-105 transition duration-200 ">
            <div className=" w-20 h-20 relative md:w-32 md:h-32" >
              <Image src="/img-labuanbajo.jpg" alt="SVG Image" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <div>
              <p className="text-gray-600 mt-2 text-base md:mt-2 md:text-lg">Bali</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 py-2 w-full  mt-5 md:px-10">
        <div>
          <h3 className="text-gray-700 text-2xl text-bold">Lakukan Aktivitas </h3>
        </div>

        <div className="flex flex-row gap-8 justify-start align-middle  items-center mt-5 md:gap-12 md:flex-nowrap overflow-y-scroll no-scrollbar">

          <div onClick={handleGetStarted} className=" flex flex-col items-center cursor-pointer hover:scale-105 transition duration-200 ">
            <div className=" w-20 h-20 relative md:w-32 md:h-32" >
              <Image src="/activity/family.png" alt="SVG Image" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <div>
              <p className="text-gray-600 mt-2 text-base md:mt-2 md:text-lg">Keluarga</p>
            </div>
          </div>

          <div onClick={handleGetStarted} className=" flex flex-col items-center cursor-pointer hover:scale-105 transition duration-200  ">
            <div className=" w-20 h-20 relative md:w-32 md:h-32" >
              <Image src="/activity/date.png" alt="SVG Image" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <div>
              <p className="text-gray-600 mt-2 text-base md:mt-2 md:text-lg">Dating</p>
            </div>
          </div>

          <div onClick={handleGetStarted} className=" flex flex-col items-center cursor-pointer hover:scale-105 transition duration-200 ">
            <div className=" w-20 h-20 relative md:w-32 md:h-32" >
              <Image src="/activity/hangout.png" alt="SVG Image" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <div>
              <p className="text-gray-600 mt-2 text-base md:mt-2 md:text-lg">Hangout</p>
            </div>
          </div>

          <div onClick={handleGetStarted} className=" flex flex-col items-center cursor-pointer hover:scale-105 transition duration-200 ">
            <div className=" w-20 h-20 relative md:w-32 md:h-32" >
              <Image src="/activity/meeting.png" alt="SVG Image" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <div>
              <p className="text-gray-600 mt-2 text-base md:mt-2 md:text-lg">Meeting</p>
            </div>
          </div>
          <div onClick={handleGetStarted} className=" flex flex-col items-center cursor-pointer hover:scale-105 transition duration-200 ">
            <div className=" w-20 h-20 relative md:w-32 md:h-32" >
              <Image src="/activity/camp.png" alt="SVG Image" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <div>
              <p className="text-gray-600 mt-2 text-base md:mt-2 md:text-lg">Berkemah</p>
            </div>
          </div>

          <div onClick={handleGetStarted} className=" flex flex-col items-center cursor-pointer hover:scale-105 transition duration-200 ">
            <div className=" w-20 h-20 relative md:w-32 md:h-32" >
              <Image src="/activity/billiard.png" alt="SVG Image" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <div>
              <p className="text-gray-600 mt-2 text-base md:mt-2 md:text-lg">Billiard</p>
            </div>
          </div>
          <div onClick={handleGetStarted} className=" flex flex-col items-center cursor-pointer hover:scale-105 transition duration-200 ">
            <div className=" w-20 h-20 relative md:w-32 md:h-32" >
              <Image src="/activity/hiking.png" alt="SVG Image" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <div>
              <p className="text-gray-600 mt-2 text-base md:mt-2 md:text-lg">Hiking</p>
            </div>
          </div>

          <div onClick={handleGetStarted} className=" flex flex-col items-center cursor-pointer hover:scale-105 transition duration-200 ">
            <div className=" w-20 h-20 relative md:w-32 md:h-32" >
              <Image src="/activity/golf.png" alt="SVG Image" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <div>
              <p className="text-gray-600 mt-2 text-base md:mt-2 md:text-lg">Golf</p>
            </div>
          </div>

          <div onClick={handleGetStarted} className=" flex flex-col items-center cursor-pointer hover:scale-105 transition duration-200 ">
            <div className=" w-20 h-20 relative md:w-32 md:h-32" >
              <Image src="/activity/sport.png" alt="SVG Image" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <div>
              <p className="text-gray-600 mt-2 text-base md:mt-2 md:text-lg">Olahraga</p>
            </div>
          </div>

          <div onClick={handleGetStarted} className=" flex flex-col items-center cursor-pointer hover:scale-105 transition duration-200 ">
            <div className=" w-20 h-20 relative md:w-32 md:h-32" >
              <Image src="/activity/waterpark.png" alt="SVG Image" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <div>
              <p className="text-gray-600 mt-2 text-base md:mt-2 md:text-lg">Berenang</p>
            </div>
          </div>
        </div>


      </div>
      {modalIsVisible &&
      (
        <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-full bg-opacity-75 bg-gray-800 overflow-hidden h-sc">
          <div className="relative bg-white rounded-lg  shadow-md p-2 mx-5 flex flex-col justify-evenly items-center h-96 ">
            <div className="relative rounded-full">
              <Image src="/loginAsk.svg" alt="SVG Image" height={250} width={250}/>
            </div>

            <div className="text-gray-500 px-3">
               <h2>Mohon maaf, Tripio sedang dalam pengembangan</h2>
            </div>

            <div onClick={toggleModal} className="absolute bg-red-500 rounded-full top-3 right-4 py-1 px-2 cursor-pointer font-bold hover:scale-90 transition duration-150">
              X
            </div>

          </div>
        </div>
      )}


 
    </div>

  )
}
