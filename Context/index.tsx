'use client'
import { createContext, useState, useContext } from "react";

const QuerySearchContext = createContext<any>(undefined);

export function QuerySearchWrapper( { children }: { children: React.ReactNode } ){

    let [search, setSearch] = useState("")
    return(
        <QuerySearchContext.Provider value={{search, setSearch}}>
            {children}
        </QuerySearchContext.Provider>
    )

}

export function useAppContext(){
    return useContext(QuerySearchContext);

}