export interface Location {
    id?: number;
    nama: string;
    isLocked: boolean;
  }

export interface Category {
    id?: number;
    nama: string;
    icon: string;
  }

  // typings.d.ts
export interface Kecamatan {
  id?: number;
  kota: Kota;
  nama: string;
}

export interface TempatWisata {
  id?: number;
  kecamatan: Kecamatan;
  kategori: [];
  nama: string;
  link_gmap?: string | null;
  alamat?: string | null;
  rating?: number | null;
  deskripsi_singkat?: string | null;
  deskripsi_lengkap?: string | null;
  foto?: string | null; // You can use 'string' to represent the file path
  harga: number | null;
  website: string,
  latitude_longitud: string,
}

export interface FotoTambahanWisata {
  length: number;
  id?: number;
  tempatWisata: TempatWisata;
  foto?: string | null; // You can use 'string' to represent the file path
}


export interface PostMetadata {
  title: string;
  date: string;
  subtitle: string;
  slug: string;
}

export interface Comment {
  id: number; // Tambahkan tipe data yang sesuai untuk ID
  tempat_wisata: TempatWisata;
  author: CustomUser;
  content: string;
  liked: number;
  created_at: string;
}

export interface Reply {
  id: number; // Tambahkan tipe data yang sesuai untuk ID
  comment: Comment;
  author: CustomUser;
  content: string;
  liked: number;
  created_at: string;
}

export interface CommentWithUserData extends Comment {
  // userData: User;
  userData: {
    id: number;
    name: string;
    foto: string;
    jumlah_review: number;
    review_disukai: number;
    user: number;
  }
}

export interface User {
  id: number;
  name: string;
  foto: string;
  jumlah_review: number;
  review_disukai: number;
  user: number;

}

