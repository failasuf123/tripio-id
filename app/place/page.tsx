'use client'
import React, { Suspense, useEffect, useState } from 'react';
import { IconProp,library } from '@fortawesome/fontawesome-svg-core';
import { MapPinIcon, StarIcon} from '@heroicons/react/24/solid';
import axios from 'axios';
import Header from '@/components/header';
import { TempatWisata } from '@/typings';
import Link from 'next/link';
import NextNProgress from "nextjs-progressbar";
import DataNavbar from '@/Shared/DataNavbar';
import {
  faUmbrellaBeach, faMugHot, faCampground, faPersonHiking, faBinoculars, faRoad, faLock, faWater, faFishFins, faChildren, faQuestion, faMapLocationDot,
  faBuilding, faMountainSun, faDungeon, faFilm, faPeopleGroup, faTree, faBowlingBall,faPlaceOfWorship, faFutbol, faPeoplePulling, faPersonWalkingLuggage, faUsersLine, faUsers, faBookOpen, faGifts, faGift, faCloudMoon, faMartiniGlassCitrus, faBurger, faLandmark, faTreeCity, faCity,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Data from '@/Shared/Data';
import { QuerySearchWrapper,useAppContext } from '@/Context';



interface PageProps {
  params: {
    place: string[];
  };
}

export default function ListWisata({ params }: PageProps) {
  const [data, setData] = useState<TempatWisata[]>([]);
  const [loading, setLoading] = useState(true);
  const [spinner, setSpinner] = useState<boolean>(false);

  //Context
  const {search, setSearch} = useAppContext();

  //Navbar Data kota dan kategori
  const [CityList, setCityList] = useState(DataNavbar.CityList);
  const [CategoryList, setCategoryList] = useState(DataNavbar.IconPropsCategory);
  
  //Navbar data dan atau kategori yang di pilih
  const [selectedCity,setSelectedCity] = useState<string | undefined>("Jakarta");
  const [selectedCategory, setSelectedCategory] = useState<string | undefined |null>()

  //Data Harga 
  const [price, setPrice] = useState(Data.priceToDollarIcon)

  // const { query } = useSearch();

  useEffect(() => {
    if(selectedCity == "Jakarta"){
      const apiUrl = 'http://localhost:8000/api/get_tempat_wisata';
      axios.get(apiUrl)
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });

    }
  }, [selectedCity]);

  useEffect(() => {

    console.log("Search value changed:", search);

    if (search) {
      setLoading(true);
      setData([])
      setSpinner(true)

      const apiUrl = `http://localhost:8000/api/get_tempat_wisata_by_search_nama/${search}`;

      console.log("API URL:", apiUrl);

      axios.get(apiUrl)
      .then(response => {
        console.log("API Response:", response.data);
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });

    }
  }, [search]);

  
  const clickCityGetAPI=(city:string|null|undefined)=>{

      let targetCategory:string|null|undefined = ""

      if(selectedCity !== city){
        targetCategory = null
      }
      else{
        targetCategory = selectedCategory
      }

      console.log("Price :",price)

    
      setLoading(true);
      setData([])
      setSpinner(true)
      let apiUrl = '';

      if(city == 'Jakarta'){
        apiUrl = 'http://localhost:8000/api/get_tempat_wisata';
        console.log('http://localhost:8000/api/get_tempat_wisata')

      }
      else if((selectedCity === null ) && targetCategory ===null){
         apiUrl = 'http://localhost:8000/api/get_tempat_wisata';
         console.log('http://localhost:8000/api/get_tempat_wisata')
      }

      else if(selectedCity !== null && targetCategory ===null){
        apiUrl = `http://localhost:8000/api/get_tempat_wisata_by_kota/${city}`;
        console.log(`http://localhost:8000/api/get_tempat_wisata_by_kota/${city}`)
      }
      else if(selectedCity === null && targetCategory !== null){
        apiUrl = `http://localhost:8000/api/get_tempat_wisata_by_kategori/${targetCategory}`;
        console.log( `http://localhost:8000/api/get_tempat_wisata_by_kategori/${targetCategory}`)

      }
      else if(selectedCity && targetCategory){
        apiUrl = `http://localhost:8000/api/get_tempat_wisata_by_kategori_kota/${city}/${targetCategory}`;
        console.log( `http://localhost:8000/api/get_tempat_wisata_by_kategori_kota/${city}/${targetCategory}`)
      }
  
      axios.get(apiUrl)
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });

      console.log(`Just Clicked City, ${city} City and ${targetCategory} Category`)
  
  }

  const clickCategoryGetAPI=(category:string|null|undefined) => {
    setLoading(true);
    setData([])
    setSpinner(true)

    
    let apiUrl = 'http://localhost:8000/api/get_tempat_wisata';
    if((selectedCity === null || selectedCity == 'Jakarta') && category ===null){
       apiUrl = 'http://localhost:8000/api/get_tempat_wisata';
       console.log('http://localhost:8000/api/get_tempat_wisata')
    }
    else if(selectedCity !== null && category ===null){
      apiUrl = `http://localhost:8000/api/get_tempat_wisata_by_kota/${selectedCity}`;
      console.log(`http://localhost:8000/api/get_tempat_wisata_by_kota/${selectedCity}`)

    }
    else if((selectedCity === null || selectedCity == 'Jakarta') && category !== null){
      apiUrl = `http://localhost:8000/api/get_tempat_wisata_by_kategori/${category}`;
      console.log(`http://localhost:8000/api/get_tempat_wisata_by_kategori/${category}`)

    }
    else if(selectedCity !== null && category !== null){
      apiUrl = `http://localhost:8000/api/get_tempat_wisata_by_kategori_kota/${category}/${selectedCity}`;
      console.log(`http://localhost:8000/api/et_tempat_wisata_by_kategori_kota/${category}/${selectedCity}`)

    }

    axios.get(apiUrl)
    .then(response => {
      // setTimeout(() => { 
        setData(response.data);
        setLoading(false);
        
    //   }, 2000);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      setLoading(false);
    });
    

    console.log(`Just Clicked Category, ${selectedCity} City and ${category} Category`)

  }

  const handleCityClick = (nama: string) => {
      setSelectedCity(nama);
      setSelectedCategory(null)
      clickCityGetAPI(nama)

    };
  
  const handleCategoryClick = (nama:string) => {
      setSelectedCategory(nama);
      clickCategoryGetAPI(nama)
  }

  const handleShiftLeft = () => {
      setCityList((prevCityList) => {
        const shiftedCityList = [...prevCityList];
        const firstCity = shiftedCityList.shift();
        if (firstCity) {
          shiftedCityList.push(firstCity);
        }
        return shiftedCityList;
      });
    };
    
    const handleShiftRight = () => {
      setCityList((prevCityList) => {
        const shiftedCityList = [...prevCityList];
        const lastCity = shiftedCityList.pop();
        if (lastCity) {
          shiftedCityList.unshift(lastCity);
        }
        return shiftedCityList;
      });
    };

    

  return (
    <div>
      <Header />

      <div className="flex flex-row text-gray-500 justify-between gap-6 md:gap-8 text-sm overflow-y-scroll no-scrollbar ml-4 md:ml-5 mt-5">
        {/* Tombol untuk menggeser ke kiri */}
        <button onClick={handleShiftLeft} className="hidden  md:block md:ml-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:text-white hover:bg-cyan-500 rounded-full">
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </button>

        {/* Daftar kota yang bergeser */}
        <div className="flex gap-8 overflow-x-auto no-scrollbar">
          {CityList.map((location) => (
            <div
              className={`cursor-pointer flex items-center p-3 rounded-full 
              ${location.is_locked ? ' cursor-default' : 'hover:text-white hover:bg-cyan-500'} 
              ${selectedCity === location.nama && !location.is_locked? 'bg-cyan-500 text-white border-[1px]' : null}`}
              onClick={() => handleCityClick(location.nama)}
              key={location.id}
            >
              <p style={{ maxWidth: '150px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {location.nama} {location.is_locked === true && <FontAwesomeIcon icon={faLock} className="inline-flex h-3 w-3 bg-none " />}
              </p>
            </div>
          ))}
        </div>

        {/* Tombol untuk menggeser ke kanan */}
        <button onClick={handleShiftRight} className="hidden  md:block md:mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:bg-cyan-500 rounded-full hover:text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </button>
      </div>

      <div className="flex flex-row gap-8 md:gap-12 text-gray-500 justify-between text-sm mt-3 px-5 overflow-y-scroll no-scrollbar md:mt-5 md:mb-3">
            {CategoryList.map(category => {
                const icon = getIconByName(category.icon); 

                if (!icon) return null; 

                return (
                    <div key={category.id} className={`flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer  hover:text-gray-700 ${selectedCategory == category.nama
                    ?'text-gray-700  border-gray-700 border-b-2 border-dashed ':null}`}
                     onClick={() => handleCategoryClick(category.nama)}>
                        <FontAwesomeIcon icon={icon} className="inline-flex h-6 w-6 bg-none mb-1" />
                        <p style={{ maxWidth: '150px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} className="text-xs  md:flex-auto md:visible">
                            {category.nama}
                        </p>
                    </div>
                );
            })}

      </div>
      

      <Suspense fallback="Loading Tempat Wisata...">
      {loading && <NextNProgress color="#26C6DA" />}

      {(!data|| data.length < 1) && (
        <div className="flex flex-col items-center mt-32">
          <FontAwesomeIcon icon={faMapLocationDot} className=" animate-bounce inline-flex h-14 w-14 bg-none mb-1" />
          <p className="text-gray-500 text-lg mt-3">Ups! Belum ada tempat wisata di sini.</p>
        </div>
      )}

    {data.length > 0 && (
      <div className="flex flex-cols flex-wrap items-start justify-evenly p-5 pt-1 w-full">
        {data.map(item => (

        <Link href={`/place/${item.id}`}>
          
            <div key={item.id} className="w-full items-start mr-16  cursor-pointer  hover:shadow-xl rounded-md mt-5 md:w-72 md:mx-0 hover:border-solid border-b-cyan-400" style={{ height: '400px' }}>
            <div className="relative h-3/5 w-full">
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


            </div>
            <div className="py-2 px-3 font-sans">
              <h2 className="text-black text-lg mb-1 font-medium">{item.nama}</h2>
              <div className=" flex flex-rows justify-start text-gray-500 text-sm font-sans mb-1 items-center">
              <div className="flex flex-row text-black"> 
                <StarIcon className="h-4 w-4" />
                <p className=" ml-1 from-neutral-600">{item.rating}</p>
              </div>
              <div className="flex flex-rows ml-2 ">
                <MapPinIcon className="h-4 w-4 text-sm" />
                <p className=" ml-1 from-neutral-600 line-clamp-1 text-xs">{item.alamat}</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm line-clamp-3 ">{item.deskripsi_singkat}</p>
              <div className="flex flex-row mt-1 items-center">
                {Data.priceToDollarIcon.find(price => price.id === item.harga) ? (
                  <>
                    <p className="text-green-600 text-lg">{Data.priceToDollarIcon.find(price => price.id === item.harga)?.icon}</p>
                    <p className="text-gray-400 text-lg">{Data.priceToDollarIcon.find(price => price.id === item.harga)?.shadow_icon}</p>
                    <p className="text-gray-400 ml-1 text-xs"> (estimasi)</p>
                  </>
                ) : (
                  <p className="text-gray-400 text-lg">$$$$$ <span className="ml-1 text-xs"> (no data)</span></p>
                  // <p className="text-gray-400 ml-1 text-xs"> (estimasi)</p>
                  )}
              </div>
            </div>
          </div>
        </Link>
        
        ))}
        
      </div>
      )}

        </Suspense>
      {loading && <NextNProgress color="#26C6DA" />}
    </div>
  )
}


library.add(
  faUmbrellaBeach,
  faMugHot,
  faCampground, faPersonHiking, faBinoculars, faRoad, faLock, faWater, faFishFins, faChildren, faQuestion,
  faBuilding, faMountainSun, faDungeon, faFilm, faPeopleGroup, faTree, faBowlingBall,faPlaceOfWorship, faFutbol, faPeoplePulling, faPersonWalkingLuggage, faUsersLine, faUsers, faBookOpen, faGifts, faGift, faCloudMoon, faMartiniGlassCitrus, faBurger, faLandmark, faTreeCity, faCity,
  // Daftar semua ikon lainnya
);

function getIconByName(name: string): IconProp {
  switch (name) {
    case "faBuilding":
      return ["fas", "building"];
    case "faDungeon":
      return ["fas", "dungeon"];
    case "faMugHot":
      return ["fas", "mug-hot"];
    case "faMartiniGlassCitrus":
      return ["fas", "martini-glass-citrus"];
    case "faBurger":
      return ["fas", "burger"];
    case "faMountainSun":
      return ["fas", "mountain-sun"];
    case "faUmbrellaBeach":
      return ["fas", "umbrella-beach"];
    case "faFilm":
      return ["fas", "film"];
    case "faWater":
      return ["fas", "water"];
    case "faTree":
      return ["fas", "tree"];
    case "faBinoculars":
      return ["fas", "binoculars"];
    case "faLandmark":
      return ["fas", "landmark"];
    case "faTreeCity":
      return ["fas", "tree-city"];
    case "faCity":
      return ["fas", "city"];
    case "faGift":
      return ["fas", "gift"];
    case "faPersonHiking":
      return ["fas", "person-hiking"];
    case "faFishFins":
      return ["fas", "fish-fins"];
    case "faPeopleGroup":
      return ["fas", "people-group"];
    case "faFutbol":
      return ["fas", "futbol"];
    case "faPersonWalkingLuggage":
      return ["fas", "person-walking-luggage"];
    case "faPeoplePulling":
      return ["fas", "people-pulling"];
    case "faCloudMoon":
      return ["fas", "cloud-moon"];
    case "faUsersLine":
      return ["fas", "users-line"];
    case "faUsers":
      return ["fas", "users"];
    case "faChildren":
      return ["fas", "children"];
    case "faCampground":
      return ["fas", "campground"];
    case "faPlaceOfWorship":
      return ["fas", "place-of-worship"];
    case "faBookOpen":
      return ["fas", "book-open"];

 
    // Tambahkan case untuk semua ikon lainnya
    default:
      return ["fas", "question"];
  }
}
