import React, { useState } from 'react'
import {addTodoToDatabase} from '@/actions/serverActions'

function page() {
  
  return (
    <div>
        <form action={addTodoToDatabase} className="flex flex-col gap-5 max-w-xl mx-auto p-5 ">
            <input name="nama"  className="p-2 border border-gray-300 rounded-md" placeholder="Nama Todo"/>
            <input name="icon"  className="p-2 border border-gray-300 rounded-md" placeholder="Icon dari Fontawesome"/>
            <button className="bg-cyan-400 p-3 rounded-xl active:blur-sm">Add Chart</button>
      </form>
      
    </div>
  )
}

export default page
