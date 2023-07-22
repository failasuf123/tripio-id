import React from 'react'
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faUmbrellaBeach, faMugHot, faCampground, faPersonHiking, faBinoculars, faRoad, faLock, faWater, faFishFins, faChildren,
  faBuilding, faMountainSun, faDungeon, faFilm, faPeopleGroup, faTree, faBowlingBall,faPlaceOfWorship, faFutbol, faPeoplePulling, faPersonWalkingLuggage, faUsersLine, faUsers, faBookOpen, faGifts, faGift, faCloudMoon,
} from "@fortawesome/free-solid-svg-icons";

import { ScubaDiving } from '@mui/icons-material';

function nav_menu() {
  return (
    <div className="shadow-sm grid grid-rows-2 bg-white py-2 px-2 w-auto sticky ">
    {/* location */}
    <div className="flex flex-row  text-gray-500 justify-start gap-8  text-sm my-2 overflow-hidden ">
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
         <FontAwesomeIcon icon={faGift} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs invisible md:flex-auto md:visible">Gratis</p>
     </div>
     <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faPersonHiking} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs invisible md:flex-auto md:visible">Mendaki</p>
     </div>
      <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faFishFins} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs invisible md:flex-auto md:visible">Snorkeling</p>
      </div>
      <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faPeopleGroup} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs invisible md:flex-auto md:visible">Hangout</p>
      </div>
      <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faFutbol} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs invisible md:flex-auto md:visible">Olahraga</p>
      </div>
      <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faPersonWalkingLuggage} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs invisible md:flex-auto md:visible">Backpacker</p>
      </div>
      <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faPeoplePulling} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs invisible md:flex-auto md:visible">Date</p>
      </div>

     <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faCloudMoon} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs invisible md:flex-auto md:visible">Malam hari</p>
     </div>
     <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faUsersLine} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs invisible md:flex-auto md:visible">Meeting</p>
     </div>
      <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faUsers} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs invisible md:flex-auto md:visible">Keluarga</p>
      </div>
      <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faChildren} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs invisible md:flex-auto md:visible">Anak anak</p>
      </div>
      <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faCampground} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs invisible md:flex-auto md:visible">Camping</p>
      </div>
      <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faPlaceOfWorship} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs invisible md:flex-auto md:visible">Religi</p>
      </div>
      <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faBookOpen} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs invisible md:flex-auto md:visible">Edukasi</p>
      </div>
    </div>

   </div>
  )
}

export default nav_menu
