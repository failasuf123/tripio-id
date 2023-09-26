'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Kecamatan, Category } from '@/typings'; // Pastikan path ini sesuai dengan lokasi file typings Anda

export default function AddTempatWisataForm() {
  const [nama, setNama] = useState('');
  const [linkGMap, setLinkGMap] = useState('');
  const [alamat, setAlamat] = useState('');
  const [rating, setRating] = useState('');
  const [deskripsiSingkat, setDeskripsiSingkat] = useState('');
  const [deskripsiLengkap, setDeskripsiLengkap] = useState('');
  const [foto, setFoto] = useState<File | null>(null);
  const [kecamatanList, setKecamatanList] = useState<Kecamatan[]>([]);
  const [selectedKecamatan, setSelectedKecamatan] = useState<Kecamatan | undefined>(undefined);
  const [kategoriList, setKategoriList] = useState<Category[]>([]);
  const [selectedKategori, setSelectedKategori] = useState<Category | undefined>(undefined);

  useEffect(() => {
    fetchKecamatanList();
    fetchKategoriList();
  }, []);

  const fetchKecamatanList = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/get_kecamatan');
      setKecamatanList(response.data);
    } catch (error) {
      console.error('Error fetching kecamatan list:', error);
    }
  };

  const fetchKategoriList = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/get_kategori');
      setKategoriList(response.data);
    } catch (error) {
      console.error('Error fetching kategori list:', error);
    }
  };

  const handleKecamatanChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedKecamatan = kecamatanList.find(kecamatan => kecamatan.nama === event.target.value);
    setSelectedKecamatan(selectedKecamatan);
  };

  const handleKategoriChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedKategori = kategoriList.find(kategori => kategori.nama === event.target.value);
    setSelectedKategori(selectedKategori);
  };
  

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('nama', nama);
    formData.append('link_gmap', linkGMap);
    formData.append('alamat', alamat);
    formData.append('rating', rating);
    formData.append('deskripsi_singkat', deskripsiSingkat);
    formData.append('deskripsi_lengkap', deskripsiLengkap);
    if (foto) {
      formData.append('foto', foto);
    }
    if (selectedKecamatan && selectedKecamatan.id) {
      formData.append('kecamatan', selectedKecamatan.id.toString());
    }
    if (selectedKategori && selectedKategori.id) {
      formData.append('kategori', selectedKategori.id.toString());
    }

    console.log(nama)
    console.log(selectedKecamatan)
    console.log(selectedKategori)
    console.log(alamat)
    console.log(linkGMap)
    console.log(rating)
    console.log(deskripsiSingkat)
    console.log(deskripsiLengkap)
    console.log(foto)
    console.log('ini adalah form data', formData)

    try {
      const response = await axios.post('http://localhost:8000/api/add_tempat_wisata', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Tempat wisata added:', response.data);
      // Reset form fields here if needed
    } catch (error) {
      console.error('Error adding tempat wisata:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen mt-44">
      <div className="w-96 p-8 border rounded">
        <h2 className="text-lg font-semibold mb-4">Add Tempat Wisata</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1">Nama:</label>
            <input className="w-full border rounded py-1 px-2" type="text" value={nama} onChange={e => setNama(e.target.value)} />
          </div>
  
          {/* Kecamatan */}
          <div className="mb-4">
            <label className="block mb-1">Kecamatan:</label>
            <select className="w-full border rounded py-1 px-2" value={selectedKecamatan?.nama || ''} onChange={handleKecamatanChange}>
              <option value="">Pilih Kecamatan</option>
              {kecamatanList.map(kecamatan => (
                <option key={kecamatan.id} value={kecamatan.nama}>
                  {kecamatan.nama}
                </option>
              ))}
            </select>
          </div>
  
          {/* Kategori */}
          <div className="mb-4">
            <label className="block mb-1">Kategori:</label>
            <select className="w-full border rounded py-1 px-2" value={selectedKategori?.nama || ''} onChange={handleKategoriChange}>
              <option value="">Pilih Kategori</option>
              {kategoriList.map(kategori => (
                <option key={kategori.id} value={kategori.nama}>
                  {kategori.nama}
                </option>
              ))}
            </select>
          </div>
  
          {/* Link GMap */}
          <div className="mb-4">
            <label className="block mb-1">Link GMap:</label>
            <input className="w-full border rounded py-1 px-2" type="text" value={linkGMap} onChange={e => setLinkGMap(e.target.value)} />
          </div>
  
          {/* Alamat */}
          <div className="mb-4">
            <label className="block mb-1">Alamat:</label>
            <input className="w-full border rounded py-1 px-2" type="text" value={alamat} onChange={e => setAlamat(e.target.value)} />
          </div>
  
          {/* Rating */}
          <div className="mb-4">
            <label className="block mb-1">Rating:</label>
            <input className="w-full border rounded py-1 px-2" type="number" value={rating} onChange={e => setRating(e.target.value)} />
          </div>
  
          {/* Deskripsi Singkat */}
          <div className="mb-4">
            <label className="block mb-1">Deskripsi Singkat:</label>
            <textarea className="w-full border rounded py-1 px-2" value={deskripsiSingkat} onChange={e => setDeskripsiSingkat(e.target.value)} />
          </div>
  
          {/* Deskripsi Lengkap */}
          <div className="mb-4">
            <label className="block mb-1">Deskripsi Lengkap:</label>
            <textarea className="w-full border rounded py-1 px-2" value={deskripsiLengkap} onChange={e => setDeskripsiLengkap(e.target.value)} />
          </div>
  
          {/* Foto */}
          <div className="mb-4">
            <label className="block mb-1">Foto:</label>
            <input className="w-full border rounded py-1 px-2" type="file" onChange={e => setFoto(e.target.files?.[0] || null)} />
          </div>
  
          {/* Submit Button */}
          <button
            type="submit"
            className="bg-cyan-400 hover:bg-cyan-500 text-white py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
  
}
