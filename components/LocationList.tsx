"use client"
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import {Location} from "@/typings"

// Buat interface untuk tipe data lokasi



function Locationlist() {
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = () => {
    axios.get<Location[]>('http://127.0.0.1:8000/api/get_kota')
      .then(response => {
        // Pisahkan kota yang terkunci dan tidak terkunci
        const unlockedLocations = response.data.filter(location => !location.isLocked);
        const lockedLocations = response.data.filter(location => location.isLocked);

        // Cari kota dengan nama "Indonesia" jika ada
        const indonesiaLocation = unlockedLocations.find(location => location.nama === 'Indonesia');

        // Jika ada kota dengan nama "Indonesia", pindahkan ke bagian depan array unlockedLocations
        if (indonesiaLocation) {
          const updatedUnlockedLocations = unlockedLocations.filter(location => location !== indonesiaLocation);
          updatedUnlockedLocations.unshift(indonesiaLocation);
          setLocations([...updatedUnlockedLocations, ...lockedLocations]);
        } else {
          // Jika tidak ada kota dengan nama "Indonesia", gabungkan unlockedLocations dan lockedLocations seperti sebelumnya
          setLocations([...unlockedLocations, ...lockedLocations]);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  return (
    <div>
      {/* location */}
      <div className="flex flex-row text-gray-500 justify-start gap-8  text-sm my-2 overflow-y-scroll no-scrollbar md:ml-5 mt-10">
        {locations.map(location => (
          <div key={location.id} className={`cursor-pointer flex items-center ${location.isLocked ? 'bg-cyan-500 text-white' : 'hover:text-white hover:bg-cyan-500'} p-3 rounded-full`}>
            <p style={{ maxWidth: '150px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{location.nama} {location.isLocked && <FontAwesomeIcon icon={faLock} className="inline-flex h-3 w-3 bg-none  mb-1" />}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Locationlist;
