'use client'
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
// import 'path/to/tailwind.css';
import Header from '@/components/header';
import {  MagnifyingGlassIcon,GlobeAsiaAustraliaIcon, MapIcon, RocketLaunchIcon,MapPinIcon, StarIcon, ShareIcon, Squares2X2Icon} from '@heroicons/react/24/solid';
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faMound, faPersonHiking,
  faBuilding, faMountainSun, faDungeon, faFilm, faPeopleGroup, faTree, faBowlingBall,faPlaceOfWorship, faFutbol, faPeoplePulling, faPersonWalkingLuggage, faUsersLine, faUsers, faBookOpen, faGifts, faGift, faCloudMoon, faVolcano,
} from "@fortawesome/free-solid-svg-icons";

import { ScubaDiving } from '@mui/icons-material';
import { Modal, Input, Row, Checkbox, Button, Text, useModal} from "@nextui-org/react";
import { useState } from 'react';


export default function page() {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
      setModalVisible(!modalVisible);
  }; 


  return (
    <div className="bg-white">
        <Header />

        <div className="pt-8 px-12">
          {/* upper */}
          <div>
            <div className="h-35 ">
              {/* upp */}
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center">
                  <div>
                    <h1 className="text-gray-900  text-3xl">Taman Nasional Gunung Bromo</h1>
                  </div>
                  <div className="text-gray-600 flex flex-col items-center ml-5 cursor-pointer hover:text-gray-800">
                      <ShareIcon className="h-5 w-5 text-xl items-center" />
                  </div>
                </div>

                <div className="items-center">
                  <div className="bg-cyan-500  py-2 px-3 flex flex-row rounded-lg cursor-pointer hover:shadow-cyan-200 shadow-lg  hover: border-solid border-2 active:scale-90 transition duration-150 ">
                    <RocketLaunchIcon className="h-5 w-5  items-center" />
                    <p className="text-sm ml-2">Add Pengalaman</p>
                  </div>
                </div>
              </div>
              {/* botton */}
              <div className="flex flex-row text-gray-700 align-center items-center">
                <div className="flex flex-rows  mt-4 items-center">
                  <StarIcon className="h-5 w-5 text-lg items-center" />
                  <p className=" ml-1 from-neutral-600 text-lg items-center">4,8</p>
                </div>

                <div className="flex flex-rows  mt-4 ml-4 items-center">
                  <MapPinIcon className="h-5 w-5 text-lg items-center" />
                  <p className=" ml-1 from-neutral-600 text-lg items-center">Malang / Lumajang, Jawa Timur</p>
                </div>

                <div className="flex flex-rows  mt-4 ml-8 items-center bg-gray-500 text-white  py-1 px-2 rounded-full cursor-pointer border border-white hover:bg-white hover:text-gray-700 hover:border-gray-500 active:scale-95 transition duration-150 ">
                  <MapIcon className="h-5 w-5 text-md items-center" />
                  <p className=" ml-1 from-neutral-600 text-sm items-center">Lihat lokasi</p>
                </div>
              </div>
            </div>
          </div>

          {/* image-upper */}
          <div className="relative flex flex-row w-300 h-80 mt-5  p-1">
            <div className=" relative  h-full w-1/2 col-span-3 mr-5">
              <Image src="/img-bromo.jpg" alt="SVG Image" layout="fill" objectFit="cover" className=" rounded-md" />
            </div>

            <div className="relative h-full w-1/2  flex flex-row flex-wrap overflow-hidden justify-around ">
              <div className="relative h-3/6 w-3/6  ">
                <Image src="/img-bromo1.jpg" alt="SVG Image" layout="fill" objectFit="cover" className="h-4/5 w-4/5" />
              </div>
              <div className="relative h-3/6 w-3/6 ">
                <Image src="/img-bromo2.jpg" alt="SVG Image" layout="fill" objectFit="cover" className="h-4/5 w-4/5" />
              </div>
              <div className="relative h-3/6 w-3/6 ">
                <Image src="/img-bromo3.jpg" alt="SVG Image" layout="fill" objectFit="cover" className="h-4/5 w-4/5" />
              </div>
              <div className="relative h-3/6 w-3/6 ">
                <Image src="/img-bromo4.jpg" alt="SVG Image" layout="fill" objectFit="cover" className="h-4/5 w-4/5" />
              </div>
              
            </div>
            <div className="absolute bottom-5 right-7  rounded-full bg-white opacity-70 flex flex-row text-black items-center py-2 px-3 hover:bg-black hover:text-white cursor-pointer">
              <div>
                  <Squares2X2Icon className="h-5 w-5 text-lg items-center" />
              </div>
              <div>
                  <p> |  Lihat foto</p>
              </div>
            </div>
          </div>
          {/* image upper end */}

          <div className="mt-3 p-5">
            <h2 className="text-2xl mb-4 text-black  italic">"Memadukan keindahan terbaik gunung berapi, lembah, savana, dan sunset"</h2>
            <div className=" flex flex-row items-center justify-between text-gray-700 text-sm mt-8 w-3/5">
              <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
                <FontAwesomeIcon icon={faPersonHiking} className="inline-flex h-8 w-8 bg-none  mb-1"/>
                <p className=" text-xs invisible md:flex-auto md:visible">Mendaki</p>
              </div>

              <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
                <FontAwesomeIcon icon={faMountainSun} className="inline-flex h-8 w-8 bg-none  mb-1"/>
                <p className=" text-xs invisible md:flex-auto md:visible">Gunung</p>
              </div>

              <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
                <FontAwesomeIcon icon={faMound} className="inline-flex h-8 w-8 bg-none  mb-1"/>
                <p className=" text-xs invisible md:flex-auto md:visible">Gundukan Pasir</p>
              </div>

              <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
                <FontAwesomeIcon icon={faVolcano} className="inline-flex h-8 w-8 bg-none  mb-1"/>
                <p className=" text-xs invisible md:flex-auto md:visible">Gunung Berapi</p>
              </div>
            </div>

            <p className="text-gray-500 text-md mt-8 text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro ipsum, nulla totam saepe maxime mollitia. Praesentium deleniti deserunt mollitia fugiat aperiam blanditiis, 
            illo sapiente nihil quasi optio beatae dolore, architecto quisquam veritatis eaque? Voluptates?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ratione blanditiis ipsam ab architecto eaque accusantium culpa ipsum placeat saepe, voluptatibus voluptate.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis repudiandae voluptates porro culpa nihil. Ducimus suscipit labore optio corporis, hic deserunt ipsa modi aspernatur voluptates impedit. Reiciendis delectus qui natus? Magni aut corporis quasi blanditiis, asperiores nemo! Dolorum, vitae dolor maxime perferendis libero iure.
            <span className="text-cyan-500 cursor-pointer hover:underline"  data-modal-target="staticModal" data-modal-toggle="staticModal"  onClick={toggleModal}>Selengkapnya ...</span>
            </p>
          </div>
        </div>
        

    {/* modal start */}


            {/* Main modal */}
            {modalVisible && (
                <div
                    id="staticModal"
                    data-modal-backdrop="static"
                    tabIndex={-1}
                    aria-hidden="true"
                    className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-full bg-opacity-75 bg-gray-800 overflow-hidden h-sc"
                >
                    <div className="relative bg-white rounded-lg  shadow-md p-4 mx-5">
                        {/* Modal header */}
                        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 ">
                                Deskripsi
                            </h3>

                        </div>
                        {/* Modal body */}
                        <div className="py-6 px-10 space-y-6 h-96 overflow-scroll">
                            <p className="text-base leading-relaxed text-gray-800 text-justify tracking-wide ">
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sit mollitia tenetur consequatur libero ducimus laudantium labore maiores quae iure. Quas fuga saepe consequuntur deleniti doloribus non rerum quaerat minima id ab aliquid voluptatum aperiam hic alias a sint, maxime maiores asperiores ex omnis sit blanditiis et. Autem nihil eligendi soluta mollitia doloribus cupiditate odit, necessitatibus voluptate consectetur facilis nesciunt molestias, quia vero excepturi ex deleniti distinctio pariatur, placeat corporis. Culpa, expedita maxime sed enim assumenda, reprehenderit porro quam quidem, dolores soluta quo excepturi in deserunt cum quae harum? Molestiae quisquam iure ducimus modi error facere asperiores repellendus accusamus, cupiditate officia laudantium nesciunt illo veniam earum vitae maiores odit, consectetur repellat illum id. Atque suscipit error a porro rem placeat eveniet tempora laborum. Quos praesentium nam quam quaerat facilis neque omnis? Sapiente modi ipsa repudiandae qui maxime a, dicta voluptate eius deserunt tenetur asperiores reiciendis, veritatis, saepe sed necessitatibus ad. Voluptatum nobis ducimus itaque ab, aliquid corporis nemo cupiditate. Eos delectus pariatur minus excepturi! Veniam, necessitatibus. Nihil ad earum enim molestiae delectus praesentium eaque repellendus libero commodi ab eveniet expedita voluptatum, hic autem sequi, et at quibusdam veniam asperiores temporibus, in sunt nostrum. Accusamus eum rerum blanditiis voluptate magni pariatur. Dolor sed asperiores incidunt laudantium unde molestias. Beatae, asperiores voluptatibus? Soluta commodi vitae, laudantium repellendus sunt dolor atque error accusamus optio veniam voluptas repellat velit voluptatum sit earum natus porro corrupti alias doloremque esse obcaecati fugiat! Fuga iste repellat repellendus quae dicta illum autem architecto. Id odio labore quaerat, officiis voluptate deleniti natus sed a repudiandae praesentium corporis laudantium repellat ipsa eaque eligendi quisquam repellendus aperiam nihil accusamus incidunt ex atque veritatis iure. Quas autem deleniti veritatis rerum vel nostrum vero saepe similique ab tempora, aut, fugiat dicta, voluptas perspiciatis reprehenderit provident! Perspiciatis ullam asperiores recusandae minima sint facere fugit, quidem possimus, nesciunt natus doloremque sed omnis. Aut maiores, impedit nam laboriosam inventore, illo pariatur perferendis ipsam consequatur, dolorem ratione sit!
                                With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                            </p>
                            <p className="text-base leading-relaxed text-gray-900 text-justify">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nam recusandae aspernatur doloremque ducimus corporis reiciendis incidunt atque aut mollitia sint earum debitis, necessitatibus libero. Provident labore ipsum repellat? Cum porro officia tempore fugit voluptatibus harum laborum aut in culpa minima sapiente atque, expedita ut inventore voluptatum nulla magni aliquid tenetur dolores itaque nesciunt voluptas nihil. Corrupti error deleniti suscipit voluptas quo veniam amet, sint, corporis quaerat repudiandae, praesentium hic mollitia iure. Animi deleniti aperiam dolore praesentium cumque alias numquam esse assumenda suscipit qui, aut sunt vel sequi beatae doloremque molestias hic culpa corrupti quibusdam voluptas, voluptatem placeat nesciunt!
                    
                                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                            </p>
                        </div>
                        {/* Modal footer */}
                        <div className="flex justify-end items-center p-6 space-x-2 border-t border-gray-200 rounded-b  h-16 ">
                            <button
                                data-modal-hide="staticModal"
                                type="button"
                                className="text-white   bg-red-700 focus:ring-4 focus:outline-none  rounded-lg border border-gray-200 text-md font-medium px-5 py-2.5 hover:text-white active:scale-95 transition duration-150 "
                                onClick={toggleModal}
                            >
                                Tutup
                            </button>
                        </div>
                    </div>
                </div>
            )}
    {/* modal end */}
      
    </div>
  )
}
