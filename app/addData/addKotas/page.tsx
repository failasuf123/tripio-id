import React, { useState } from 'react'
import {addLocationToDatabase} from '@/actions/serverActions'

function page() {
    // const [isChecked, setIsChecked] = useState(false);

    // const handleCheckboxChange = () => {
    //   setIsChecked(!isChecked);
    // };
  
  return (
    <div>
        <form action={addLocationToDatabase} className="flex flex-col gap-5 max-w-xl mx-auto p-5 ">

            <input name="nama"  className="p-2 border border-gray-300 rounded-md" placeholder="City Name"/>
            <label>Apakah masih terkunci?</label>
            <input type="checkbox" name="isLocked"  className="p-2 border border-gray-300 rounded-md" placeholder="Price"/>
            {/* <input type="checkbox" name="isLocked" checked={isChecked} onChange={handleCheckboxChange} className="p-2 border border-gray-300 rounded-md" placeholder="Price"/> */}
        <button className="bg-cyan-400 p-3 rounded-xl active:blur-sm"> Add Chart</button>
      </form>
      
    </div>
  )
}

export default page


// import React from 'react' 

// const addProductToDatabase = async (e: FormData) => {

//     const product= e.get("product")?.toString();
//     const price = e.get("price")?.toString();

//     if (!product || !price ) return;

//     const newProduct:Product = {
//       product,
//       price,
//     };

//     await fetch("https://64a7db11dca581464b84e60a.mockapi.io/api/v1/products",{
//       method : "POST",
//       body: JSON.stringify(newProduct),
//       headers: {
//         "Content-Type": "application/json"
//       },
//     });

//     revalidateTag("products");

//   };

// export default function page() {
//   return (
//     <div>
      
//     </div>
//   )
// }


