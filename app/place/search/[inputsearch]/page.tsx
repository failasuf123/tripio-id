'use client'
import Header from '@/components/header';
import NavList from '@/components/NavList';
import { Suspense, useEffect, useState } from 'react';
import axios from 'axios';
import { TempatWisata } from '@/typings';
import {  MagnifyingGlassIcon,GlobeAsiaAustraliaIcon, MapIcon, RocketLaunchIcon,MapPinIcon, StarIcon} from '@heroicons/react/24/solid';
import Link from 'next/link';
import React from 'react';
import { Loading } from '@nextui-org/react';




interface SearchResultsPageProps {
  params: {
    inputsearch: string;
  };
}

const SearchResultsPage: React.FC<SearchResultsPageProps> = ({ params }) => {
  const { inputsearch } = params;

  const [data, setData] = useState<TempatWisata[]>([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/get_tempat_wisata_by_search_nama/${inputsearch}`)
      .then(response => {
        setData(response.data);
        
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <Header />
      <NavList />
      <div className="flex flex-cols flex-wrap items-start justify-evenly p-5 pt-1">
        {data.length !== 0 ? ( // Tampilkan pesan jika data kosong
      data.map(item => (
                
        <Suspense fallback={<Loading />}>
          <Link href={`/place/${item.id}`}>
              <div key={item.id} className="w-72 items-start  cursor-pointer hover:shadow-xl rounded-md mt-5 hover:border-solid border-b-cyan-400" style={{ height: '400px' }}>
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

                  <div className="absolute bottom-3 right-3 bg-black opacity-60 p-2 rounded-full hover:opacity-80 active:opacity-100">
                  <RocketLaunchIcon className="w-5 h-5 text-cyan-400" />
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
          </Suspense>
          
          ))
        ) : (
          <div>
            <h1>No Data</h1>
          </div>
        )}

        {/* <div>
          {fetchedData.posts.map((post) => (
            <div key={post.id}>{post.nama}</div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default SearchResultsPage;

// Gunakan fungsi getServerSideProps untuk mendapatkan nilai params

