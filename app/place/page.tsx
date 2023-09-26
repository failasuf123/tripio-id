'use client'
import React, { Suspense, useEffect, useState } from 'react';
i
import {  MagnifyingGlassIcon,GlobeAsiaAustraliaIcon, MapIcon, RocketLaunchIcon,MapPinIcon, StarIcon} from '@heroicons/react/24/solid';
import axios from 'axios';
import Header from '@/components/header';
import NavList from '@/components/NavList';
import { TempatWisata } from '@/typings';
import Link from 'next/link';
import NextNProgress from "nextjs-progressbar";




export default function ListWisata() {
  const [data, setData] = useState<TempatWisata[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {

    setLoading(true);
    axios.get('http://localhost:8000/api/get_tempat_wisata')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };



  return (
    <div>
      <Header />
      <NavList/>


      <Suspense fallback="Loading Tempat Wisata...">
      <div className="flex flex-cols flex-wrap items-start justify-evenly p-5 pt-1 ">
        {data.map(item => (

        <Link href={`/place/${item.id}`}>
            <div key={item.id} className=" scale-110 w-72 items-start  cursor-pointer hover:shadow-xl rounded-md mt-14 md:mt-5 hover:border-solid border-b-cyan-400 md:scale-100" style={{ height: '400px' }}>
            <div className="relative h-3/5">
                {item.foto ? (
                    <div
                    className="w-full h-full object-cover rounded-md"
                    style={{
                        backgroundImage: `url(http://localhost:8000${item.foto})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                    />
                ) : (
                    <img
                    src="/no-image-available.png"
                    alt="No Image Available"
                    className="h-full w-full rounded-md"
                    />
                )}

                <div className="absolute bottom-3 right-3 bg-black opacity-60 p-2 rounded-full hover:opacity-80 active:opacity-100"
                  onClick={(e) => {
                    e.stopPropagation(); // Menghentikan penyebaran event klik
                    openModal();
                    
                  }}>
                <RocketLaunchIcon
                  className="w-5 h-5 text-cyan-400 cursor-pointer"
                  />
                </div>
            </div>
            <div className="py-2 px-3 font-sans">
              <h2 className="text-black text-lg mb-1 font-medium">{item.nama}</h2>
              <div className=" flex flex-rows justify-start text-gray-500 text-sm font-sans mb-1 items-center">
              <div className="flex flex-row text-black"> 
                <StarIcon className="h-4 w-4" />
                <p className=" ml-1 from-neutral-600">{item.rating}</p>
              </div>
              <div className="flex flex-rows ml-2 ">
                <MapPinIcon className="h-4 w-4" />
                <p className=" ml-1 from-neutral-600">{item.kecamatan}</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm ">{item.deskripsi_singkat}</p>
              <div className="flex flex-row mt-3 items-center">
                <p className="text-green-600 text-lg ">Rp 5.000.000</p>
                <p className="text-gray-400 ml-1 text-xs"> (estimasi)</p>
              </div>
            </div>
          </div>
        </Link>
        
        ))}

              {/* Modal */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4 rounded-md">
            <p className="text-gray-800 mb-2">Anda harus login terlebih dahulu.</p>
            <button className="bg-cyan-400 text-white px-4 py-2 rounded-md" onClick={closeModal}>
              Ok
            </button>
          </div>
        </div>
      )}
        
      </div>
        </Suspense>
      {loading && <NextNProgress color="#26C6DA" />}
    </div>
  )
}
