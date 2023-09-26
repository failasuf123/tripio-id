'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MapIcon, MapPinIcon, RocketLaunchIcon, ShareIcon, Squares2X2Icon, StarIcon, ClipboardDocumentIcon } from '@heroicons/react/24/solid';
import { FotoTambahanWisata, TempatWisata } from '@/typings';
import Header from '@/components/header';
import KategoriIcon  from '@/components/TempatWisata/kategoriIcon'
import GalleryModal from '@/components/TempatWisata/imageCoursel';
import HeaderLandingPage from '@/components/headerLandingPage';


export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [data, setData] = useState<TempatWisata | null>(null);
  const [dataImage, setDataImage] = useState<FotoTambahanWisata | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImageVisible, setModalImageVisible] = useState(false);
  const [pageUrl, setPageUrl] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/get_tempat_wisata');
        const tempatWisata = response.data.find((item: TempatWisata) => item.id === parseInt(params.id));
        const currentUrl = window.location.href;
        setPageUrl(currentUrl);
        setData(tempatWisata);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [params.id]);


  const toggleModal = () => {
      setModalVisible(!modalVisible);
  }; 

  const toggleImageModal = () => {
    setModalImageVisible(!modalImageVisible);
  };
  
  const kategoriTransferData = data?.kategori || [];

  console.log("ini adalah kategori yang di fetch", kategoriTransferData, "dan bentuknya adalah", kategoriTransferData.length)

  //Untuk modal dari gambar
  useEffect(() => {
    const fetchImageData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/get_foto_tambahan_tempat_wisata/${params.id}`);
        setDataImage(response.data);

      } catch (error) {
        console.error('Error fetching image data:', error);
      }
    };

    fetchImageData();
  }, [params.id]);

  console.log("Data Image",dataImage)

  const dummyDataImage = [
    {
      id: 1,
      foto: '/no-image-available.png',
      tempatWisata: 0,
    },
  ];
  

 
  return (
    <div>
      {/* <Header /> */}
      <HeaderLandingPage />

      {data ? (
                <div className="pt-8 px-12">
                  {/* upper */}
                  <div>
                    <div className="h-35 ">
                      {/* upp */}
                      <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row items-center">
                          <div>
                            <h1 className="text-gray-900  text-3xl">{data.nama}</h1>
                          </div>
                          <div
                            className="text-gray-600 text-lg flex flex-col items-center ml-5 cursor-pointer hover:text-gray-800"
                            onClick={() => {
                              navigator.clipboard.writeText(pageUrl);
                              // Tambahkan pemberitahuan bahwa URL telah disalin
                              alert('URL telah disalin ke clipboard.');
                            }}
                          >
                            <ClipboardDocumentIcon className="h-5 w-5 text-xl items-center" />
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
                          <p className=" ml-1 from-neutral-600 text-lg items-center">{data.rating}</p>
                        </div>
        
                        <div className="flex flex-rows  mt-4 ml-4 items-center">
                          <MapPinIcon className="h-5 w-5 text-lg items-center" />
                          <p className=" ml-1 from-neutral-600 text-sm items-center">{data.alamat}</p>
                        </div>
        
                        {data.link_gmap ? (
                          <a
                            href={data.link_gmap}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-rows  mt-4 ml-8 items-center bg-gray-500 text-white  py-1 px-2 rounded-full cursor-pointer border border-white hover:bg-white hover:text-gray-700 hover:border-gray-500 active:scale-95 transition duration-150 "
                          >
                            <MapIcon className="h-5 w-5 text-md items-center" />
                            <p className="ml-1 from-neutral-600 text-sm items-center">Lihat lokasi</p>
                          </a>
                        ) : (
                          <p className="ml-1 from-neutral-600 text-sm items-center">Tautan tidak tersedia</p>
                        )}

                        
                      </div>
                    </div>
                  </div>
        
                  {/* image-upper */}
                  <div className="relative flex flex-row w-300 h-80 mt-5  p-1">

                    {data.foto ? (
                    <div
                    className="relative  h-full w-1/2 col-span-3 mr-5"
                    style={{
                        backgroundImage: `url(http://localhost:8000${data.foto})`,
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
        
                <div className="relative h-full w-1/2 flex flex-row flex-wrap overflow-hidden justify-around">
                  {dataImage?.slice(0, 4).map((image:any) => (
                    <div
                      key={image.id}
                      className="relative h-3/6 w-3/6"
                      onClick={() => {
                        // Open image modal or do any other action
                      }}
                    >
                      <img
                        src={`http://localhost:8000${image.foto}`}
                        alt="Image"
                        style={{
                          objectFit: 'cover',
                          width: '100%',
                          height: '100%',
                        }}
                        className="h-4/5 w-4/5"
                      />
                    </div>
                  ))}

                  {/* Add additional images if dataImage length is less than 4 */}
                  {dataImage && dataImage.length < 4 && (
                    [...Array(4 - (dataImage.length))].map((_, index) => (
                      <div
                        key={index}
                        className="relative h-3/6 w-3/6"
                        onClick={() => {
                          // Open image modal or do any other action
                        }}
                      >
                        <img
                          src="/no-image-available.png"
                          alt="No Image Available"
                          style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%',
                          }}
                          className="h-4/5 w-4/5"
                        />
                      </div>
                    ))
                  )}
                </div>


                    <div className="absolute bottom-5 right-7  rounded-full bg-white opacity-70 flex flex-row text-black items-center py-2 px-3 hover:bg-black hover:text-white cursor-pointer active:scale-95 transition duration-150" onClick={toggleImageModal}>
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
                    <h2 className="text-2xl mb-4 text-black  italic">"{data.deskripsi_singkat}"</h2>
                    <div className=" mt-10">
                      {kategoriTransferData.length > 0 && (
                        <KategoriIcon kategori={kategoriTransferData} />
                      )}
                    </div>
        
                    <p className="text-gray-500 text-md mt-8 text-justify max-h-[12rem] overflow-hidden">
                      {data.deskripsi_lengkap}
                    </p>
                    <span className="text-cyan-500 cursor-pointer hover:underline"  data-modal-target="staticModal" data-modal-toggle="staticModal"  onClick={toggleModal}>Selengkapnya ...</span>
                  </div>
                </div>
  
      ) : (

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        {/* ...content... */}
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* ...svg paths... */}
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>

      )}

{modalImageVisible && (
  <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75 overflow-hidden">
    <div className='max-w-[1000px] h-[580px] w-full m-auto py-16 px-4 relative group'>
      {dataImage?.length === 0 ? (
        <GalleryModal params={dummyDataImage} />
      ) : (
        <GalleryModal params={dataImage} />
      )}
      <button
        data-modal-hide="staticModal"
        type="button"
        className="text-cyan-400 bg-black rounded-full border border-cyan-400 text-md font-medium px-3 py-1.5 hover:text-white hover:border-white active:scale-80 transition duration-150 absolute top-3 right-3"
        onClick={toggleImageModal}
      >
        X
      </button>
    </div>
  </div>
)}







            
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
                              {data?.deskripsi_lengkap}
                               
                            </p>
                            <p className="text-base leading-relaxed text-gray-900 text-justify">
                              {data?.deskripsi_lengkap}
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
    </div>
  );
}
