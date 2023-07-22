import React from 'react'
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faUmbrellaBeach, faMugHot, faCampground, faPersonHiking, faBinoculars, faRoad, faLock, faWater, faMartiniGlassCitrus,faBurger,
  faBuilding, faMountainSun, faDungeon, faFilm, faPeopleGroup, faTree, faBowlingBall, faLandmark, faTreeCity, faCity,
} from "@fortawesome/free-solid-svg-icons";
import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";
// import { Mail } from "./Mail";
// import { Password } from "./Password";

function nav_menu() {
  
  return (
    <div className="shadow-sm grid grid-rows-2 bg-white py-2 px-5 ">
    {/* location */}
    <div className="flex flex-row text-gray-500 justify-start gap-8  text-sm my-2 overflow-hidden ">
      <div className="cursor-pointer flex items-center  hover:text-white hover:bg-cyan-500 p-3 rounded-full">
        <p>Indonesia</p>
      </div>

      <div className="cursor-pointer flex items-center bg-cyan-500 text-white hover:text-white hover:bg-cyan-500 p-3 rounded-full">
        <p>Jabodetabek</p>
      </div>

      <div className="cursor-pointer flex items-center  hover:text-white hover:bg-cyan-500 p-3 rounded-full">
        <p>Jakarta</p>
      </div>

      <div className="cursor-pointer flex items-center  hover:text-white hover:bg-cyan-500 p-3 rounded-full">
        <p>Bogor</p>
      </div>
      <div className="cursor-pointer flex items-center  hover:text-white hover:bg-cyan-500 p-3 rounded-full">
        <p>Depok</p>
      </div>
      <div className="cursor-pointer flex items-center  hover:text-white hover:bg-cyan-500 p-3 rounded-full">
        <p>Bekasi</p>
      </div>
      <div className="cursor-pointer flex items-center  hover:text-white hover:bg-cyan-500 p-3 rounded-full">
        <p>Purwokerto</p>
      </div>
      <div className="cursor-pointer flex items-center  hover:text-white hover:bg-cyan-500 p-3 rounded-full">
        <p>Bandung</p>
      </div>
      <div className="cursor-pointer flex items-center  hover:text-white hover:bg-cyan-500 p-3 rounded-full">
        <p>Jogja <FontAwesomeIcon icon={faLock} className="inline-flex h-3 w-3 bg-none  mb-1"/></p>
      </div>
      <div className="cursor-pointer flex items-center  hover:text-white hover:bg-cyan-500 p-3 rounded-full">
        <p>Solo <FontAwesomeIcon icon={faLock} className="inline-flex h-3 w-3 bg-none  mb-1"/></p>
      </div>
      <div className="cursor-pointer flex items-center  hover:text-white hover:bg-cyan-500 p-3 rounded-full">
        <p>Bali <FontAwesomeIcon icon={faLock} className="inline-flex h-3 w-3 bg-none  mb-1"/></p>
      </div>


    </div >
    {/* place */}
    <div className="flex flex-row text-gray-500 justify-between text-sm mt-3 px-5 overflow-hidden">

     <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faBuilding} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs invisible md:flex-auto md:visible">Mall</p>
     </div>
     <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faDungeon} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs invisible md:flex-auto md:visible">Taman Hiburan</p>
     </div>
      <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faMugHot} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs invisible md:flex-auto md:visible">CoffeShop</p>
      </div>
      <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faMartiniGlassCitrus} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs invisible md:flex-auto md:visible">Cafe</p>
      </div>
      <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faBurger} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs invisible md:flex-auto md:visible">Restoran</p>
      </div>
      <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faMountainSun} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs invisible md:flex-auto md:visible">Gunung</p>
      </div>
      <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faUmbrellaBeach} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs invisible md:flex-auto md:visible">Pantai</p>
      </div>

     <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faFilm} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs invisible md:flex-auto md:visible">Bioskop</p>
     </div>
     <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faWater} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs invisible md:flex-auto md:visible">Danau</p>
     </div>
      <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faTree} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs invisible md:flex-auto md:visible">Hutan</p>
      </div>
      <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faBinoculars} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs invisible md:flex-auto md:visible">Air Terjun</p>
      </div>
      <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faLandmark} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs invisible md:flex-auto md:visible">Land Mark</p>
      </div>
      <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faTreeCity} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs invisible md:flex-auto md:visible">Taman</p>
      </div>
      <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faCity} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs invisible md:flex-auto md:visible">Vibes Kota</p>
      </div>
    </div>

   </div>
  )
}

export default nav_menu
