import Head from 'next/head'
import Image from 'next/image'
// import 'path/to/tailwind.css';
import Header from '@/components/header';
import Nav_menu from '@/components/nav_menu';
import Nav_menu_activity from '@/components/nav_menu_activity';
import {  MagnifyingGlassIcon,GlobeAsiaAustraliaIcon, MapIcon, RocketLaunchIcon,MapPinIcon, StarIcon} from '@heroicons/react/24/solid';
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import the icons you need
import {

} from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import Link from 'next/link';
import {
  faPersonWalkingLuggage,
} from "@fortawesome/free-solid-svg-icons";


export default function Activity() {
  return (
    <div className="bg-white">
      <Head>
      <title>Epent</title>
        <link rel="icon" href="/vercel.svg "/>

      </Head>

      <Header />
      <Nav_menu />



      {/* Banner */}

      <div className="flex flex-cols flex-wrap justify-evenly  p-5 pt-1 " >
        <div className=" w-72 cursor-pointer hover:shadow-xl rounded-md mt-5 hover:border-solid border-b-cyan-400 " style={{ height: '400px' }}>
          <div className="relative h-3/5">
            <Image src="/img-labuanbajo.jpg" alt="SVG Image" layout="fill" objectFit="cover" className=" rounded-md" />

            <div className="absolute bottom-3 right-3  bg-black opacity-60 p-2 rounded-full hover:opacity-80 active:opacity-100">
              <RocketLaunchIcon className=" w-5 h-5 text-cyan-400"/>
            </div>
          </div>
          <div className="py-2 px-3 font-sans">
            <h2 className= " text-black text-lg mb-1 font-medium">Labuan Bajo</h2>
            <div className=" flex flex-rows justify-between text-gray-500 text-sm font-sans mb-1 items-center">
              <div className="flex flex-rows ">
                <MapPinIcon className="h-4 w-4" />
                <p className=" ml-1 from-neutral-600">labuanbajo,flores</p>
              </div>
              <div className="flex flex-row text-black"> 
                <StarIcon className="h-4 w-4" />
                <p className=" ml-1 from-neutral-600">4,8</p>

              </div>
            </div>
            <p className="text-gray-500 text-sm ">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div className="flex flex-row mt-3 items-center">
              <p className="text-green-600 text-lg ">Rp 5.000.000</p>
              <p className="text-gray-400 ml-1 text-xs"> (estimasi)</p>
            </div>
          </div>
        </div>

        <div className=" w-72 cursor-pointer hover:shadow-xl rounded-md mt-5 hover:border-solid border-b-cyan-400 " style={{ height: '400px' }}>
          <div className="relative h-3/5">
            <Image src="/img-borobudur.jpg" alt="SVG Image" layout="fill" objectFit="cover" className=" rounded-md" />

            <div className="absolute bottom-3 right-3  bg-black opacity-60 p-2 rounded-full hover:opacity-80 active:opacity-100">
              <RocketLaunchIcon className=" w-5 h-5 text-cyan-400"/>
            </div>
          </div>
          <div className="py-2 px-3 font-sans">
            <h2 className= " text-black text-lg mb-1 font-medium">Candi Borobudur</h2>
            <div className=" flex flex-rows justify-start text-gray-500 text-sm font-sans mb-1 items-center">
              <div className="flex flex-row text-black"> 
                <StarIcon className="h-4 w-4" />
                <p className=" ml-1 from-neutral-600">4,4</p>
              </div>
              <div className="flex flex-rows ml-2 ">
                <MapPinIcon className="h-4 w-4" />
                <p className=" ml-1 from-neutral-600">Magelang, Jawa Tengah</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm ">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div className="flex flex-row mt-3 items-center">
              <p className="text-green-600 text-lg ">Rp 500.000</p>
              <p className="text-gray-400 ml-1 text-xs"> (estimasi)</p>
            </div>
          </div>
        </div>

        <div className=" w-72 cursor-pointer hover:shadow-xl rounded-md mt-5 hover:border-solid border-b-cyan-400 " style={{ height: '400px' }}>
          <div className="relative h-3/5">
            <Image src="/img-bromo.jpg" alt="SVG Image" layout="fill" objectFit="cover" className=" rounded-md" />

            <div className="absolute bottom-3 right-3  bg-black opacity-60 p-2 rounded-full hover:opacity-80 active:opacity-100">
              <RocketLaunchIcon className=" w-5 h-5 text-cyan-400"/>
            </div>
          </div>
          <div className="py-2 px-3 font-sans">
            <h2 className= " text-black text-lg mb-1 font-medium">Taman Nasional Gunung Bromo</h2>
            <div className=" flex flex-rows justify-between text-gray-500 text-sm font-sans mb-1 items-center">
              <div className="flex flex-rows  ">
                <MapPinIcon className="h-4 w-4" />
                <p className=" ml-1 from-neutral-600 ">Malang / Lumajang, Jawa Timur</p>
              </div>
              <div className="flex flex-row text-black"> 
                <StarIcon className="h-4 w-4" />
                <p className=" ml-1 from-neutral-600">5,0</p>

              </div>
            </div>
            <p className="text-gray-500 text-sm ">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div className="flex flex-row mt-3 items-center">
              <p className="text-green-600 text-lg ">Rp 1.000.000</p>
              <p className="text-gray-400 ml-1 text-xs"> (estimasi)</p>
            </div>
          </div>
        </div>
        
        <div className=" w-72 cursor-pointer hover:shadow-xl rounded-md mt-5 hover:border-solid border-b-cyan-400 " style={{ height: '400px' }}>
          <div className="relative h-3/5">
            <Image src="/img-kotu-jkt.jpg" alt="SVG Image" layout="fill" objectFit="cover" className=" rounded-md" />

            <div className="absolute bottom-3 right-3  bg-black opacity-60 p-2 rounded-full hover:opacity-80 active:opacity-100">
              <RocketLaunchIcon className=" w-5 h-5 text-cyan-400"/>
            </div>
          </div>
          <div className="py-2 px-3 font-sans">
            <h2 className= " text-black text-lg mb-1 font-medium">Kota Tua Jakarta</h2>
            <div className=" flex flex-rows justify-between text-gray-500 text-sm font-sans mb-1 items-center">
              <div className="flex flex-rows ">
                <MapPinIcon className="h-4 w-4" />
                <p className=" ml-1 from-neutral-600">Jakarta Utara</p>
              </div>
              <div className="flex flex-row text-black"> 
                <StarIcon className="h-4 w-4" />
                <p className=" ml-1 from-neutral-600">4,8</p>

              </div>
            </div>
            <p className="text-gray-500 text-sm ">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div className="flex flex-row mt-3 items-center">
              <p className=" text-green-600 text-lg ">Gratis</p>
              {/* <p className="text-gray-400 ml-1 text-xs"> (estimasi)</p> */}
            </div>
          </div>
        </div>

        <div className=" w-72 cursor-pointer hover:shadow-xl rounded-md mt-5 hover:border-solid border-b-cyan-400 " style={{ height: '400px' }}>
          <div className="relative h-3/5">
            <Image src="/img-bromo.jpg" alt="SVG Image" layout="fill" objectFit="cover" className=" rounded-md" />

            <div className="absolute bottom-3 right-3  bg-black opacity-60 p-2 rounded-full hover:opacity-80 active:opacity-100">
              <RocketLaunchIcon className=" w-5 h-5 text-cyan-400"/>
            </div>
          </div>
          <div className="py-2 px-3 font-sans">
            <h2 className= " text-black text-lg mb-1 font-medium">Taman Nasional Gunung Bromo</h2>
            <div className=" flex flex-rows justify-between text-gray-500 text-sm font-sans mb-1 items-center">
              <div className="flex flex-rows  ">
                <MapPinIcon className="h-4 w-4" />
                <p className=" ml-1 from-neutral-600 ">Malang / Lumajang, Jawa Timur</p>
              </div>
              <div className="flex flex-row text-black"> 
                <StarIcon className="h-4 w-4" />
                <p className=" ml-1 from-neutral-600">5,0</p>

              </div>
            </div>
            <p className="text-gray-500 text-sm ">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div className="flex flex-row mt-3 items-center">
              <p className="text-green-600 text-lg ">Rp 1.000.000</p>
              <p className="text-gray-400 ml-1 text-xs"> (estimasi)</p>
            </div>
          </div>
        </div>
        
        <div className=" w-72 cursor-pointer hover:shadow-xl rounded-md mt-5 hover:border-solid border-b-cyan-400 " style={{ height: '400px' }}>
          <div className="relative h-3/5">
            <Image src="/img-kotu-jkt.jpg" alt="SVG Image" layout="fill" objectFit="cover" className=" rounded-md" />

            <div className="absolute bottom-3 right-3  bg-black opacity-60 p-2 rounded-full hover:opacity-80 active:opacity-100">
              <RocketLaunchIcon className=" w-5 h-5 text-cyan-400"/>
            </div>
          </div>
          <div className="py-2 px-3 font-sans">
            <h2 className= " text-black text-lg mb-1 font-medium">Kota Tua Jakarta</h2>
            <div className=" flex flex-rows justify-between text-gray-500 text-sm font-sans mb-1 items-center">
              <div className="flex flex-rows ">
                <MapPinIcon className="h-4 w-4" />
                <p className=" ml-1 from-neutral-600">Jakarta Utara</p>
              </div>
              <div className="flex flex-row text-black"> 
                <StarIcon className="h-4 w-4" />
                <p className=" ml-1 from-neutral-600">4,8</p>

              </div>
            </div>
            <p className="text-gray-500 text-sm ">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div className="flex flex-row mt-3 items-center">
              <p className=" text-green-600 text-lg ">Gratis</p>
              {/* <p className="text-gray-400 ml-1 text-xs"> (estimasi)</p> */}
            </div>
          </div>
        </div>
        <div className=" w-72 cursor-pointer hover:shadow-xl rounded-md mt-5 hover:border-solid border-b-cyan-400 " style={{ height: '400px' }}>
          <div className="relative h-3/5">
            <Image src="/img-bromo.jpg" alt="SVG Image" layout="fill" objectFit="cover" className=" rounded-md" />

            <div className="absolute bottom-3 right-3  bg-black opacity-60 p-2 rounded-full hover:opacity-80 active:opacity-100">
              <RocketLaunchIcon className=" w-5 h-5 text-cyan-400"/>
            </div>
          </div>
          <div className="py-2 px-3 font-sans">
            <h2 className= " text-black text-lg mb-1 font-medium">Taman Nasional Gunung Bromo</h2>
            <div className=" flex flex-rows justify-between text-gray-500 text-sm font-sans mb-1 items-center">
              <div className="flex flex-rows  ">
                <MapPinIcon className="h-4 w-4" />
                <p className=" ml-1 from-neutral-600 ">Malang / Lumajang, Jawa Timur</p>
              </div>
              <div className="flex flex-row text-black"> 
                <StarIcon className="h-4 w-4" />
                <p className=" ml-1 from-neutral-600">5,0</p>

              </div>
            </div>
            <p className="text-gray-500 text-sm ">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div className="flex flex-row mt-3 items-center">
              <p className="text-green-600 text-lg ">Rp 1.000.000</p>
              <p className="text-gray-400 ml-1 text-xs"> (estimasi)</p>
            </div>
          </div>
        </div>
        
        <div className=" w-72 cursor-pointer hover:shadow-xl rounded-md mt-5 hover:border-solid border-b-cyan-400 " style={{ height: '400px' }}>
          <div className="relative h-3/5">
            <Image src="/img-kotu-jkt.jpg" alt="SVG Image" layout="fill" objectFit="cover" className=" rounded-md" />

            <div className="absolute bottom-3 right-3  bg-black opacity-60 p-2 rounded-full hover:opacity-80 active:opacity-100">
              <RocketLaunchIcon className=" w-5 h-5 text-cyan-400"/>
            </div>
          </div>
          <div className="py-2 px-3 font-sans">
            <h2 className= " text-black text-lg mb-1 font-medium">Kota Tua Jakarta</h2>
            <div className=" flex flex-rows justify-between text-gray-500 text-sm font-sans mb-1 items-center">
              <div className="flex flex-rows ">
                <MapPinIcon className="h-4 w-4" />
                <p className=" ml-1 from-neutral-600">Jakarta Utara</p>
              </div>
              <div className="flex flex-row text-black"> 
                <StarIcon className="h-4 w-4" />
                <p className=" ml-1 from-neutral-600">4,8</p>

              </div>
            </div>
            <p className="text-gray-500 text-sm ">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div className="flex flex-row mt-3 items-center">
              <p className=" text-green-600 text-lg ">Gratis</p>
              {/* <p className="text-gray-400 ml-1 text-xs"> (estimasi)</p> */}
            </div>
          </div>
        </div>
        <div className=" w-72 cursor-pointer hover:shadow-xl rounded-md mt-5 hover:border-solid border-b-cyan-400 " style={{ height: '400px' }}>
          <div className="relative h-3/5">
            <Image src="/img-bromo.jpg" alt="SVG Image" layout="fill" objectFit="cover" className=" rounded-md" />

            <div className="absolute bottom-3 right-3  bg-black opacity-60 p-2 rounded-full hover:opacity-80 active:opacity-100">
              <RocketLaunchIcon className=" w-5 h-5 text-cyan-400"/>
            </div>
          </div>
          <div className="py-2 px-3 font-sans">
            <h2 className= " text-black text-lg mb-1 font-medium">Taman Nasional Gunung Bromo</h2>
            <div className=" flex flex-rows justify-between text-gray-500 text-sm font-sans mb-1 items-center">
              <div className="flex flex-rows  ">
                <MapPinIcon className="h-4 w-4" />
                <p className=" ml-1 from-neutral-600 ">Malang / Lumajang, Jawa Timur</p>
              </div>
              <div className="flex flex-row text-black"> 
                <StarIcon className="h-4 w-4" />
                <p className=" ml-1 from-neutral-600">5,0</p>

              </div>
            </div>
            <p className="text-gray-500 text-sm ">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div className="flex flex-row mt-3 items-center">
              <p className="text-green-600 text-lg ">Rp 1.000.000</p>
              <p className="text-gray-400 ml-1 text-xs"> (estimasi)</p>
            </div>
          </div>
        </div>
        
        <div className=" w-72 cursor-pointer hover:shadow-xl rounded-md mt-5 hover:border-solid border-b-cyan-400 " style={{ height: '400px' }}>
          <div className="relative h-3/5">
            <Image src="/img-kotu-jkt.jpg" alt="SVG Image" layout="fill" objectFit="cover" className=" rounded-md" />

            <div className="absolute bottom-3 right-3  bg-black opacity-60 p-2 rounded-full hover:opacity-80 active:opacity-100">
              <RocketLaunchIcon className=" w-5 h-5 text-cyan-400"/>
            </div>
          </div>
          <div className="py-2 px-3 font-sans">
            <h2 className= " text-black text-lg mb-1 font-medium">Kota Tua Jakarta</h2>
            <div className=" flex flex-rows justify-between text-gray-500 text-sm font-sans mb-1 items-center">
              <div className="flex flex-rows ">
                <MapPinIcon className="h-4 w-4" />
                <p className=" ml-1 from-neutral-600">Jakarta Utara</p>
              </div>
              <div className="flex flex-row text-black"> 
                <StarIcon className="h-4 w-4" />
                <p className=" ml-1 from-neutral-600">4,8</p>

              </div>
            </div>
            <p className="text-gray-500 text-sm ">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div className="flex flex-row mt-3 items-center">
              <p className=" text-green-600 text-lg ">Gratis</p>
              {/* <p className="text-gray-400 ml-1 text-xs"> (estimasi)</p> */}
            </div>
          </div>
        </div>

        <div className=" w-72 cursor-pointer hover:shadow-xl rounded-md mt-5 hover:border-solid border-b-cyan-400 " style={{ height: '400px' }}>
          <div className="relative h-3/5">
            <Image src="/img-bromo.jpg" alt="SVG Image" layout="fill" objectFit="cover" className=" rounded-md" />

            <div className="absolute bottom-3 right-3  bg-black opacity-60 p-2 rounded-full hover:opacity-80 active:opacity-100">
              <RocketLaunchIcon className=" w-5 h-5 text-cyan-400"/>
            </div>
          </div>
          <div className="py-2 px-3 font-sans">
            <h2 className= " text-black text-lg mb-1 font-medium">Taman Nasional Gunung Bromo</h2>
            <div className=" flex flex-rows justify-between text-gray-500 text-sm font-sans mb-1 items-center">
              <div className="flex flex-rows  ">
                <MapPinIcon className="h-4 w-4" />
                <p className=" ml-1 from-neutral-600 ">Malang / Lumajang, Jawa Timur</p>
              </div>
              <div className="flex flex-row text-black"> 
                <StarIcon className="h-4 w-4" />
                <p className=" ml-1 from-neutral-600">5,0</p>

              </div>
            </div>
            <p className="text-gray-500 text-sm ">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div className="flex flex-row mt-3 items-center">
              <p className="text-green-600 text-lg ">Rp 1.000.000</p>
              <p className="text-gray-400 ml-1 text-xs"> (estimasi)</p>
            </div>
          </div>
        </div>
        
        <div className=" w-72 cursor-pointer hover:shadow-xl rounded-md mt-5 hover:border-solid border-b-cyan-400 " style={{ height: '400px' }}>
          <div className="relative h-3/5">
            <Image src="/img-kotu-jkt.jpg" alt="SVG Image" layout="fill" objectFit="cover" className=" rounded-md" />

            <div className="absolute bottom-3 right-3  bg-black opacity-60 p-2 rounded-full hover:opacity-80 active:opacity-100">
              <RocketLaunchIcon className=" w-5 h-5 text-cyan-400"/>
            </div>
          </div>
          <div className="py-2 px-3 font-sans">
            <h2 className= " text-black text-lg mb-1 font-medium">Kota Tua Jakarta</h2>
            <div className=" flex flex-rows justify-between text-gray-500 text-sm font-sans mb-1 items-center">
              <div className="flex flex-rows ">
                <MapPinIcon className="h-4 w-4" />
                <p className=" ml-1 from-neutral-600">Jakarta Utara</p>
              </div>
              <div className="flex flex-row text-black"> 
                <StarIcon className="h-4 w-4" />
                <p className=" ml-1 from-neutral-600">4,8</p>

              </div>
            </div>
            <p className="text-gray-500 text-sm ">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div className="flex flex-row mt-3 items-center">
              <p className=" text-green-600 text-lg ">Gratis</p>
              {/* <p className="text-gray-400 ml-1 text-xs"> (estimasi)</p> */}
            </div>
          </div>
        </div>
      </div>


   


 
    </div>

  )
}
