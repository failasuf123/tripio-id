import { FotoTambahanWisata } from '@/typings';
import { revalidateTag } from 'next/cache';
import { headers } from 'next/dist/client/components/headers';
import Image from 'next/image'
// import AddProductButton from '@/components/addProductButton';
// import { addProductToDatabase } from '@/actions/serverActions';


export default async function Home() {

  const res= await fetch("https://64a7db11dca581464b84e60a.mockapi.io/api/v1/products",{
    cache : "no-cache",
    next: {
      tags: ["products"],
    }
  })

  const products: FotoTambahanWisata[] = await res.json()

  return (
    <main className="">
      <p className="text-center">Hello guys</p>
 



      <h1 className="text-center">LIST PRODUCT</h1>
      <div className="flex flex-wrap gap-5 p-5  items-center">
        {
          products.map(
            (product) => (
                <div className="relative h-3/5">
                {product.foto ? (
                    <div
                    className="w-full h-full object-cover rounded-md"
                    style={{
                        backgroundImage: `url(http://localhost:8000${product.foto})`,
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
                </div>
            </div>
            )
          )
        }
      </div>

    

    </main>
  )
}
