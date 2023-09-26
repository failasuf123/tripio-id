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
