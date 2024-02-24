"use server";
import React from 'react'
import {Location,Category, TempatWisata} from '@/typings';
import { revalidateTag } from 'next/cache';

export const userLikeReview = async (e:FormData) => {
  const id = e.get("comment")?.toString();
  const author = e.get("userName")?.toString();

}



export const addLocationToDatabase = async (e:FormData) => {
    const nama = e.get("nama")?.toString();
    const isLocked = e.get("isLocked") === "on";

    if (!nama) return;
    
    const newLocation:Location = {
        nama,
        isLocked,
    };

    await fetch("http://127.0.0.1:8000/api/add_kota",{
        method : "POST",
        body: JSON.stringify(newLocation),
        headers: {
          "Content-Type": "application/json"
        },
      });
      revalidateTag("locations");
}

// Menambahkan Todo
export const addTodoToDatabase = async (e:FormData) => {
    const nama = e.get("nama")?.toString();
    const icon = e.get("icon")?.toString();

    if (!nama || !icon) return;
    
    const newLocation:Category = {
        nama,
        icon,
    };

    await fetch("http://127.0.0.1:8000/api/add_kategori",{
        method : "POST",
        body: JSON.stringify(newLocation),
        headers: {
          "Content-Type": "application/json"
        },
      });
      revalidateTag("todos");
}

// Menambahkan Todo
export const addWisataToDatabase = async (e:FormData) => {
    const nama = e.get("nama")?.toString();
    const icon = e.get("icon")?.toString();

    if (!nama || !icon) return;
    
    const newLocation:Category = {
        nama,
        icon,
    };

    await fetch("http://127.0.0.1:8000/api/add_kategori",{
        method : "POST",
        body: JSON.stringify(newLocation),
        headers: {
          "Content-Type": "application/json"
        },
      });
      revalidateTag("Wisatas");
}


