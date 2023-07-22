import Head from 'next/head'
import Image from 'next/image'
// import 'path/to/tailwind.css';
import Nav_menu_activity from '@/components/nav_menu_activity';
import Header_activity from '@/components/headerActivity';
import {  MagnifyingGlassIcon,GlobeAsiaAustraliaIcon, MapIcon, RocketLaunchIcon} from '@heroicons/react/24/solid';
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {

} from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import Link from 'next/link';


export default function Activity() {
  return (
    <div className="bg-white">
      <Head>
      <title>Epent</title>
        <link rel="icon" href="/vercel.svg "/>

      </Head>

      <Header_activity />
      <Nav_menu_activity />



      {/* Banner */}

      <div className="flex flex-cols flex-wrap justify-evenly  p-5 pt-1">
        <div className=" w-72 cursor-pointer hover:shadow-md rounded-md mt-5 hover:border-solid border-b-cyan-400 " style={{ height: '400px' }}>
          <div className="relative h-3/5">
            <Image src="/img-labuanbajo.jpg" alt="SVG Image" layout="fill" objectFit="cover" className=" rounded-md" />
          </div>
          <div>
            asdsasd
          </div>
        </div>

        <div className=" w-72 cursor-pointer hover:shadow-md rounded-md mt-5 hover:border-solid border-b-cyan-400 " style={{ height: '400px' }}>
          <div className="relative h-3/5">
            <Image src="/img-bromo.jpg" alt="SVG Image" layout="fill" objectFit="cover" className=" rounded-md" />
          </div>

          <div>
            asdsasd
          </div>
        </div>
        <div className=" w-72 cursor-pointer hover:shadow-md rounded-md mt-5 hover:border-solid border-b-cyan-400 " style={{ height: '400px' }}>
          <div className="relative h-3/5">
            <Image src="/img-borobudur.jpg" alt="SVG Image" layout="fill" objectFit="cover" className=" rounded-md" />
          </div>
          <div>
            asdsasd
          </div>
        </div>

        <div className=" w-72 cursor-pointer hover:shadow-md rounded-md mt-5 hover:border-solid border-b-cyan-400 " style={{ height: '400px' }}>
          <div className="relative h-3/5">
            <Image src="/img-labuanbajo.jpg" alt="SVG Image" layout="fill" objectFit="cover" className=" rounded-md" />
          </div>
          <div>
            asdsasd
          </div>
        </div>

        <div className=" w-72 cursor-pointer hover:shadow-md rounded-md mt-5 hover:border-solid border-b-cyan-400 " style={{ height: '400px' }}>
          <div className="relative h-3/5">
            <Image src="/img-labuanbajo.jpg" alt="SVG Image" layout="fill" objectFit="cover" className=" rounded-md" />
          </div>
          <div>
            asdsasd
          </div>
        </div>

        <div className=" w-72 cursor-pointer hover:shadow-md rounded-md mt-5 hover:border-solid border-b-cyan-400 " style={{ height: '400px' }}>
          <div className="relative h-3/5">
            <Image src="/img-bromo.jpg" alt="SVG Image" layout="fill" objectFit="cover" className=" rounded-md" />
          </div>

          <div>
            asdsasd
          </div>
        </div>
        <div className=" w-72 cursor-pointer hover:shadow-md rounded-md mt-5 hover:border-solid border-b-cyan-400 " style={{ height: '400px' }}>
          <div className="relative h-3/5">
            <Image src="/img-borobudur.jpg" alt="SVG Image" layout="fill" objectFit="cover" className=" rounded-md" />
          </div>
          <div>
            asdsasd
          </div>
        </div>

        <div className=" w-72 cursor-pointer hover:shadow-md rounded-md mt-5 hover:border-solid border-b-cyan-400 " style={{ height: '400px' }}>
          <div className="relative h-3/5">
            <Image src="/img-labuanbajo.jpg" alt="SVG Image" layout="fill" objectFit="cover" className=" rounded-md" />
          </div>
          <div>
            asdsasd
          </div>
        </div>
        
      </div>


   


 
    </div>

  )
}
