import Head from 'next/head'
import Image from 'next/image'
import Header from '@/components/header';
import Nav_menu from '@/components/nav_menu';
import Nav_menu_activity from '@/components/nav_menu_activity';
import {  MagnifyingGlassIcon,GlobeAsiaAustraliaIcon, MapIcon, RocketLaunchIcon} from '@heroicons/react/24/solid';
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import { faBinoculars

} from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import Link from 'next/link';


export default function Home() {
  return (
    <div className="bg-white h-screen">
      <Head>
      <title>Epent</title>
        <link rel="icon" href="/vercel.svg "/>

      </Head>

      <Header />

      {/* Banner */}
      <div className="mt-5 px-10  h-96 ">

          {/* profile */}
          <div className=" p-3 flex flex-row">
              <div className="h-24 w-24 relative ">
                <Image src="/img-family-trvl.png" alt="SVG Image" layout="fill" objectFit="cover"  className="rounded-3xl" />
              </div>

              <div className="ml-5">
                  <div>
                      <h2 className="text-gray-800">Jacques Philippe Laurent</h2>
                  </div>
              </div>

          </div>
          
      </div>



    </div>

  )
}
