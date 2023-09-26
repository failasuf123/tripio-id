'use client'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import Link from 'next/link';
import NextNProgress from "nextjs-progressbar";
import React from 'react';
import { Component } from 'react';

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e:any) => {
    e.preventDefault();
    // Redirect to the search path
    window.location.href = `/place/search/${encodeURIComponent(searchQuery)}`;
  };

  return (
    <form onSubmit={handleSearch}>
      <NextNProgress color="#26C6DA"/>
      {/* <Component {...pageProps} /> */}
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
