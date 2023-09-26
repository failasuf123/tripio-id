"use server";
import React from 'react'
import {Location,Category,Kecamatan, TempatWisata} from '@/typings';
import { revalidateTag } from 'next/cache';
export const addWisataToDatabase = async (e: FormData) => {
    const nama = e.get("nama")?.toString();
    const link_gmap = e.get("link_gmap")?.toString();
    const alamat = e.get("alamat")?.toString();
    const rating = parseFloat(e.get("rating") || "0");
    const deskripsi_singkat = e.get("deskripsi_singkat")?.toString();
    const deskripsi_lengkap = e.get("deskripsi_lengkap")?.toString();
    const foto = e.get("foto") as File | null;
    const kecamatan_id = parseInt(e.get("kecamatan") || "0");
    const kategori_id = parseInt(e.get("kategori") || "0");
  
    if (!nama || !link_gmap || !alamat || isNaN(rating) || !deskripsi_singkat || !deskripsi_lengkap || !foto || kecamatan_id === 0 || kategori_id === 0) {
      return;
    }
  
    const newWisata: TempatWisata = {
      kecamatan: { id: kecamatan_id } as Kecamatan, // Menggunakan tipe Kecamatan
      kategori: [{ id: kategori_id }] as Category[], // Menggunakan tipe Category[]
      nama,
      link_gmap,
      alamat,
      rating,
      deskripsi_singkat,
      deskripsi_lengkap,
      foto,
    };
  
    const formData = new FormData();
    formData.append("nama", newWisata.nama);
    formData.append("link_gmap", newWisata.link_gmap);
    formData.append("alamat", newWisata.alamat);
    formData.append("rating", newWisata.rating.toString());
    formData.append("deskripsi_singkat", newWisata.deskripsi_singkat);
    formData.append("deskripsi_lengkap", newWisata.deskripsi_lengkap);
    formData.append("kecamatan", newWisata.kecamatan.id.toString());
    formData.append("kategori", newWisata.kategori[0].id.toString());
    if (newWisata.foto) {
      formData.append("foto", newWisata.foto);
    }
  
    try {
      const response = await fetch("http://127.0.0.1:8000/api/add_tempat_wisata", {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log('Tempat wisata added:', response.data);
      revalidateTag("Wisatas");
    } catch (error) {
      console.error('Error adding tempat wisata:', error);
    }
  };
  