'use client'
import Head from 'next/head'
import Image from 'next/image'
import Header from '@/components/header';
import Nav_menu from '@/components/nav_menu';
import Modal1 from '@/components/modal1';
import Modal2 from '@/components/modal2';
import Nav_menu_activity from '@/components/nav_menu_activity';
import {  MagnifyingGlassIcon,GlobeAsiaAustraliaIcon, MapIcon, RocketLaunchIcon} from '@heroicons/react/24/solid';
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import { faBinoculars

} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@nextui-org/react';


export default function Home() {
  
  const [modalIsVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalIsVisible);
  };

  return (
    <div className="bg-white h-screen">
      <Head>
      <title>Epent</title>
        <link rel="icon" href="/vercel.svg "/>

      </Head>

      <Header />
      <Nav_menu />



      {/* Banner */}

      <div className="h-96 grid grid-cols-3">
        {/* left */}
        <div className="relative h-96 bg-red-400 flex flex-col items-center justify-center">
          <div className="w-full h-full">
            <Image src="/img-bromo.jpg" alt="SVG Image" layout="fill" objectFit="cover" />

            <div className="absolute text-center px-10 top-1/2 bg-cyan-500 bg-opacity-10 mx-5 p-5 rounded-md">
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>

        {/* middle */}
        <div className="relative h-96 bg-red-400 flex flex-col items-center justify-center">
          <div className="w-full h-full">
            <Image src="/img-borobudur.jpg" alt="SVG Image" layout="fill" objectFit="cover" />

            <div className="absolute text-center px-10 top-1/2 bg-cyan-500 bg-opacity-10 mx-5 p-5 rounded-md">
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button onClick={toggleModal} className="bg-opacity-50 bg-black p-2 rounded-lg mt-10 text-cyan-100 border-2 hover:bg-opacity-20 active:bg-opacity-100 hover:px-3">Get Started</button>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="relative h-96 bg-red-400 flex flex-col items-center justify-center">
          <div className="w-full h-full">
            <Image src="/img-labuanbajo.jpg" alt="SVG Image" layout="fill" objectFit="cover" />

            <div className="absolute text-center px-10 top-1/2 bg-cyan-500 bg-opacity-10 mx-5 p-5 rounded-md">
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
              <p><span className="text-gray-700">Login</span> untuk mendapatkan experience yang baru</p>
            </div>

            <div className="text-gray-500 flex flex-row justify-between items-center">
              <div className="mr-5">
                <Link href={'/place'}>
                  <button  className="px-2 py-2 text-cyan-500 border rounded-lg border-cyan-500 hover:scale-105 transition duration-150">Nanti dulu</button>
                </Link>
              </div>
              <div className="ml-5 bg-cyan-500 text-white rounded-lg hover:scale-105 transition duration-150">
                <Link href={'/login'}>
                <button className="px-3 py-2">Login</button>
                </Link>
              </div>
            </div>

            <div onClick={toggleModal} className="absolute bg-red-500 rounded-full top-3 right-4 py-1 px-2 cursor-pointer font-bold hover:scale-90 transition duration-150">
              X
            </div>

          </div>
        </div>
      )
      }


 
    </div>

  )
}
