'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useRouter } from 'next/navigation';
import { MapIcon, MapPinIcon, RocketLaunchIcon, ShareIcon, Squares2X2Icon, StarIcon, ClipboardDocumentIcon,HeartIcon, ChatBubbleLeftEllipsisIcon, BookmarkIcon } from '@heroicons/react/24/solid';
import { FotoTambahanWisata, TempatWisata, Comment, Reply, CommentWithUserData, User } from '@/typings';
import KategoriIcon  from '@/components/TempatWisata/kategoriIcon'
import GalleryModal from '@/components/TempatWisata/imageCoursel';
import HeaderLandingPage from '@/components/headerLandingPage';
import Header from '@/components/header';
import userId from '@/components/header';

import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";

import { faHeart, faWandSparkles, faDungeon
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import jwtDecode from 'jsonwebtoken';
import Cookies from 'js-cookie';
import Data from '@/Shared/Data';





export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [data, setData] = useState<TempatWisata | null>(null);
  const [dataImage, setDataImage] = useState<FotoTambahanWisata | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImageVisible, setModalImageVisible] = useState(false);
  const [pageUrl, setPageUrl] = useState('');
  const [dataComment, setDataComment] = useState<CommentWithUserData[]>([]);
  const [likedComments, setLikedComments] = useState([]);
  const [userId, setUserId] = useState([]);
  const [replies, setReplies] = useState({});
  const [price, setPrice] = useState(Data.priceToDollarIcon)
  // -6.917615285403801, 107.6095306594805L
  const LATITUDE = '-6.917615285403801'
  const LONGITUDE = '107.6095306594805'



  useEffect(() => {
    const token = Cookies.get('access_token'); // Mengambil token dari cookies
    if (token) {
      console.log("ACCESS TOKEN", token);

      const decodedTokenForID = JSON.parse(atob(token.split('.')[1])); // Mendekode payload token
      const userId = decodedTokenForID.user_id;

      console.log('this is USER EMAIL : ');
      console.log('user email is:', userId);
      setUserId(userId);
    }
  }, [userId]);


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

  const dummyDataImage = [
    {
      id: 1,
      foto: '/no-image-available.png',
      tempatWisata: 0,
    },
  ];



  useEffect(() => {
    const fetchCommentData = async () => {
      console.log('FETCH COMMENT DATA DIPANGGIL')

      try {
        if (data) {
          const responseComment = await axios.get(`http://localhost:8000/api/get_comment/${data.id}`);
          const comments = responseComment.data;
  
          // Mengambil daftar ID pengguna dari komentar
          const authorIds = comments.map((comment:any) => comment.author);
          console.log("Mengambil nilai authorIds",authorIds)
  
          // Membuat permintaan API untuk mendapatkan data pengguna berdasarkan ID pengguna
          const userPromises = authorIds.map((authorId:any)=> {
            return axios.get(`http://localhost:8000/api/get_profile_user_by_id_user/${authorId}`);
          });
          console.log("Mengambil data pengguna by id",userPromises)
  
          // Menunggu semua permintaan pengguna selesai
          const userResponses = await Promise.all(userPromises);
  
          // Mengubah respons pengguna menjadi objek yang dapat diakses dengan ID pengguna
          const usersData:any = {};
          if(userResponses.length > 0) {
            userResponses.forEach((userResponse:any) => {
              usersData[userResponse.data[0].user] = userResponse.data;
              console.log('ini user ke -', userResponse.data[0].user, 'dengan nama', userResponse.data[0].name, 'dengan value', userResponse.data)
            });
          }
          
  
          // Menambahkan data pengguna ke komentar
          const commentsWithUserData = comments.map((comment:any) => {
            const userData = usersData[comment.author];
            return {
              ...comment,
              userData,
            };
          });
          console.log("ini user data" , usersData)
          console.log("ini commentWihUserData", commentsWithUserData)
  
          setDataComment(commentsWithUserData);
        }
      } catch (error) {
        console.error('Error fetching comment:', error);
      }
    };
  
    fetchCommentData();

  }, [data?.id]);
  
  console.log('ini data comment :', dataComment)


  
  const toggleLike = (commentId:number) => {
    if (likedComments.includes(commentId)) {
      // Komentar sudah dilike, maka kita akan "unlike" komentar
      setLikedComments(likedComments.filter((id) => id !== commentId));
    } else {
      // Komentar belum dilike, maka kita akan "like" komentar
      setLikedComments([...likedComments, commentId]);
    }
  };


  const handleTulisUlasan = () => {
    // Dapatkan ID tempat dari params
    const placeId = params.id;

    // Arahkan ke /place/[id]/ulasan
    router.push(`/place/${placeId}/ulasan`);
  };

  //Melakukan Fetch untuk data Replies

  const fetchReplies = async (commentId:any) => {
    try {
      const response = await fetch(`http://localhost:8000/api/get_reply/${commentId}`);
      const data = await response.json();
  
      // Update state dengan menyimpan data balasan pada commentId tertentu
      setReplies((prevReplies) => ({
        ...prevReplies,
        [commentId]: data,
      }));
    } catch (error) {
      console.error('Error fetching replies:', error);
    }
  };
  

 
  return (
    <div className="">
      <Header />
      {/* <HeaderLanding Page /> */}

      {data ? (
                <div className="pt-4 px-4 md:px-12">
                  {/* upper */}
                  <div>
                    <div className="h-35 ">
                      {/* upp */}
                      <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row items-center">
                          <div>
                            <h1 className="text-gray-900 text-xl md:text-3xl">{data.nama}</h1>
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
        
                        <div className="items-center text-white">
                          <div className="bg-cyan-500  py-2 px-3 flex flex-row rounded-lg cursor-pointer hover:shadow-cyan-200 shadow-lg  hover: border-solid border-2 active:scale-90 transition duration-150 ">
                            <BookmarkIcon className="text-xs md:text-lg h-5 w-5  items-center" />
                            <p className="hidden text-xs md:block md:text-sm ml-2">Bookmark</p>
                          </div>
                        </div>
                      </div>
                      {/* botton */}
                      <div className="hidden md:flex flex-row text-gray-700 align-center items-center">
                        <div className="flex flex-rows  mt-4 items-center">
                          <StarIcon className="h-5 w-5 text-xs md:text-lg items-center" />
                          <p className=" ml-1 from-neutral-600 text-sm md:text-lg items-center">{data.rating}</p>
                        </div>

                        <div className="flex flex-rows ml-4 mt-4 items-center">
                          {Data.priceToDollarIcon.find(price => price.id === data.harga) ? (
                              <>
                                <p className="text-green-600 text-xl">{Data.priceToDollarIcon.find(price => price.id === data.harga)?.icon}</p>
                                <p className="text-gray-400 text-xl">{Data.priceToDollarIcon.find(price => price.id === data.harga)?.shadow_icon}</p>
                                <p className="text-gray-400 ml-1 text-xs"> (estimasi)</p>
                              </>
                            ) : (
                              <p className="text-gray-400 text-md">$$$$$</p>
                            )}
                        </div>
        
                        <div className="flex flex-rows  mt-4 ml-4 items-center">
                          <MapPinIcon className="h-5 w-5 text-lg items-center" />
                          <p className=" ml-1 line-clamp-1 from-neutral-600 text-xs md:text-sm items-center ">{data.alamat}</p>
                        </div>
        
                        {data.link_gmap ? (
                          <a
                            href={data.link_gmap}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-rows  mt-4 ml-8 items-center bg-gray-500 text-white  py-1 px-2 rounded-full cursor-pointer border border-white hover:bg-white hover:text-gray-700 hover:border-gray-500 active:scale-95 transition duration-150 "
                          >
                            <MapIcon className="h-5 w-5 text-md items-center" />
                            <p className="ml-1 from-neutral-600 text-sm items-center">Maps</p>
                          </a>
                        ) : (
                          <p className="ml-1 from-neutral-600 text-sm items-center">Tautan tidak tersedia</p>
                        )}

                        
                      </div>
                    </div>
                  </div>
        
                  {/* image-upper */}
                  <div className="relative flex flex-row w-300 h-60 md:h-80 mt-5  md:p-1">

                    {data.foto ? (
                    <div
                    className="relative rounded-lg   w-full h-full md:w-1/2 md:h-full col-span-3 md:mr-5 md:rounded-none"
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
        
                <div className=" hidden relative h-full w-1/2 md:flex flex-row flex-wrap overflow-hidden justify-around  ">
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


                    <div className=" absolute bottom-5 right-7  rounded-full bg-white opacity-70 flex flex-row text-black items-center py-2 px-3 hover:bg-black hover:text-white cursor-pointer active:scale-95 transition duration-150" onClick={toggleImageModal}>
                      <div>
                          <Squares2X2Icon className="h-5 w-5 text-lg items-center" />
                      </div>
                      <div>
                          <p> |  Lihat foto</p>
                      </div>
                    </div>
                  </div>
                  {/* image upper end */}

                  <div className="flex flex-row text-gray-700 align-center items-center md:hidden">
                        <div className="flex flex-rows  mt-2 items-center">
                          <StarIcon className="h-5 w-5 text-xs md:text-lg items-center" />
                          <p className=" ml-1 from-neutral-600 text-sm md:text-lg items-center">{data.rating}</p>
                        </div>

                        <div className="flex flex-rows ml-4 mt-2 items-center">
                          {Data.priceToDollarIcon.find(price => price.id === data.harga) ? (
                              <>
                                <p className="text-green-600 text-xl">{Data.priceToDollarIcon.find(price => price.id === data.harga)?.icon}</p>
                                <p className="text-gray-400 text-xl">{Data.priceToDollarIcon.find(price => price.id === data.harga)?.shadow_icon}</p>
                                <p className="text-gray-400 ml-1 text-xs"> (estimasi)</p>
                          </>
                            ) : (
                              <p className="text-gray-400 text-md">$$$$$</p>
                            )}
                        </div>

                      </div>

                      <div className="flex flex-row text-gray-700 align-center items-center md:hidden">
          
                          <div className="flex flex-rows  mt-1 items-center">
                            <MapPinIcon className="h-5 w-5 text-lg items-center" />
                            <p className=" ml-1 from-neutral-600 text-xs md:text-sm items-center">{data.alamat}</p>
                          </div>
          
                          {data.link_gmap ? (
                            <a
                              href={data.link_gmap}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex flex-rows  mt-1 ml-8 items-center bg-gray-500 text-white  py-1 px-2 rounded-full cursor-pointer border border-white hover:bg-white hover:text-gray-700 hover:border-gray-500 active:scale-95 transition duration-150 "
                            >
                              <MapIcon className="h-5 w-5 text-md items-center" />
                              <p className="ml-1 from-neutral-600 text-sm items-center">Maps</p>
                            </a>
                          ) : (
                            <p className="ml-1 from-neutral-600 text-sm items-center">Tautan tidak tersedia</p>
                          )}    
                      </div>
        
                  <div className="mt-3 text-center md:p-5">
                    <h2 className=" text-lg md:text-2xl mb-4 text-black  italic">"{data.deskripsi_singkat}"</h2>
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


                  {/* <div className="relative w-full h-96 rounded-lg">
                    <iframe className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.google.com/maps/embed?pb=!pb=roadmap&1d${LATITUDE}!2d${LONGITUDE}!3d${LATITUDE}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${LATITUDE}!2s${LONGITUDE}!5e0!3m2!1sen!2sus!4v1643800442956!5m2!1sen!2sus`}
                    frameBorder="0" aria-hidden="false">
                    </iframe>
                  </div> */}

                  
                  <div className="flex flex-row mt-5 mb-5">
                    <div>
                      <h2 className="text-2xl mb-2 text-black ">Review</h2>
                    </div>
                    <div>
                      <button  className="flex flex-rows   mb-3 ml-5 items-center bg-gray-500 text-white  py-1 px-2 rounded-full cursor-pointer border border-white hover:bg-white hover:text-gray-700 hover:border-gray-500 active:scale-95 transition duration-150 " onClick={handleTulisUlasan}>
                          <ChatBubbleLeftEllipsisIcon className="h-5 w-5 text-md items-center" />
                          <p className="ml-1 from-neutral-600 text-sm items-center">Tulis Ulasan</p>
                      </button>
                    </div>
                  </div>

                  {dataComment && (
                    <div className="flex flex-col gap-1 mb-10">
                      {dataComment.slice().reverse().map((comment, index) => (
                        <div key={index} className="flex flex-row gap-4 w-full md:w-3/5  p-5 rounded-sm bg-gradient-to-tr from-fuchsia-50 to-cyan-50">
                          {/* div1 */}
                          <div>
                            <div className="relative h-12 w-12 rounded-full ">
                              <img
                                src={`http://localhost:8000${comment.userData[0].foto}` ?? '/no-image-available.png'}
                                alt="Image"
                                style={{
                                  objectFit: 'cover',
                                  width: '100%',
                                  height: '100%',
                                }}
                                className="h-12 w-12 rounded-full"
                              />
                            </div>
                          </div>

                          {/* div2 */}
                          <div className="flex-initial w-4/5">
                            <p className="text-black text-md">{comment.userData[0].name}</p>


                            <p className="text-cyan-800 text-justify text-sm">{comment.content}</p>
                            <div className="flex justify-end mt-2"> {/* Menggunakan flex untuk membuat button berada di ujung */}
                              <button className="text-xs text-cyan-600 hover:underline" onClick={() => fetchReplies(comment.id)}>Reply</button>
                            </div>                        
                          </div>

                          {/* div3 */}
                          <div className="flex flex-col items-center ml-4">
                          {likedComments.includes(comment.id) ? (
                              <HeartIcon className="h-5 w-5 items-center cursor-pointer text-red-400" onClick={() => toggleLike(comment.id)} />
                            ) : (
                              <HeartOutline className="h-5 w-5 items-center cursor-pointer text-red-400" onClick={() => toggleLike(comment.id)} />
                            )}
                            <p className="text-red-400">{comment.liked}</p>
                          </div>

                        </div>
                      ))}
                      <div></div>
          
                    </div>
                    
                  )}



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
