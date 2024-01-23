'use server'
import React, { useState, useEffect, Suspense } from 'react';
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUmbrellaBeach, faMugHot, faCampground, faPersonHiking, faBinoculars, faRoad, faLock, faWater, faFishFins, faChildren, faQuestion,
  faBuilding, faMountainSun, faDungeon, faFilm, faPeopleGroup, faTree, faBowlingBall,faPlaceOfWorship, faFutbol, faPeoplePulling, faPersonWalkingLuggage, faUsersLine, faUsers, faBookOpen, faGifts, faGift, faCloudMoon, faMartiniGlassCitrus, faBurger, faLandmark, faTreeCity, faCity, faIcons,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

// Inisialisasi library Font Awesome
library.add(
  faUmbrellaBeach,
  faMugHot,
  faCampground, faPersonHiking, faBinoculars, faRoad, faLock, faWater, faFishFins, faChildren, faQuestion,faIcons,
  faBuilding, faMountainSun, faDungeon, faFilm, faPeopleGroup, faTree, faBowlingBall,faPlaceOfWorship, faFutbol, faPeoplePulling, faPersonWalkingLuggage, faUsersLine, faUsers, faBookOpen, faGifts, faGift, faCloudMoon, faMartiniGlassCitrus, faBurger, faLandmark, faTreeCity, faCity,
  // Daftar semua ikon lainnya
);
import {Category} from "@/typings"

// Buat interface untuk tipe data kategori


// Fungsi bantuan untuk mendapatkan ikon berdasarkan nama
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
    case "faIcons":
      return ["fas", "icons"];

 
    // Tambahkan case untuk semua ikon lainnya
    default:
      return ["fas", "question"];
  }
}



async function CategoryList() {

const res= await fetch("http://localhost:8000/api/get_kategori",{
    cache : "no-cache",
    next: {
        tags: ["products"],
    }
    })

    const categories: Category[] = await res.json()


  return (
    <div className="flex flex-row gap-12 text-gray-500 justify-between text-sm mt-3 px-5 overflow-y-scroll no-scrollbar md:my-5">
      {categories.map(category => {
        const icon = getIconByName(category.icon); // Mendapatkan ikon berdasarkan nama

        if (!icon) return null; // Jika ikon tidak ditemukan, tidak ditampilkan

        return (
          // <Suspense fallback="Loading...">

          <div key={category.id} className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700">
            <FontAwesomeIcon icon={icon} className="inline-flex h-6 w-6 bg-none mb-1" />
            <p style={{ maxWidth: '150px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} className="text-xs invisible md:flex-auto md:visible">
              {category.nama}
            </p>
          </div>

        );
      })}

    </div>
  );
}

export default CategoryList;
