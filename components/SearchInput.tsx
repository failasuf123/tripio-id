'use client'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import Link from 'next/link';
import NextNProgress from "nextjs-progressbar";
import React from 'react';
import axios from 'axios'; // Import axios

import { useAppContext } from '@/Context';

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { setSearch } = useAppContext();

  const handleSearch = (e:any) => {
    e.preventDefault();

    // Update the context with the search query
    setSearch(searchQuery);

    // Fetch data from the API
    if (searchQuery.trim() !== '') {
      const apiUrl = `http://localhost:8000/api/get_tempat_wisata_by_search_nama/${encodeURIComponent(searchQuery)}`;

      axios.get(apiUrl)
        .then(response => {
          // Handle the API response (set data, loading, etc.)
          // Example:
          // setData(response.data);
          // setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          // Handle errors (set loading, show error message, etc.)
          // Example:
          // setLoading(false);
        });
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <NextNProgress color="#26C6DA"/>
      <div className="flex items-center justify-between md:border-2 rounded-full py-2 text-sm">
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Start Your Search.."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          className="hidden md:inline-flex h-6 w-6 bg-cyan-500 text-white cursor-pointer rounded-full p-1 mx-2"
        >
          <MagnifyingGlassIcon />
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
