import { useState } from "react";
import { createContext } from "react";
 
export const BioContext = createContext()

export const BioProvider = ({children}) => {

    const [menu,setMenu] = useState(false)

    const value = {menu,setMenu}
    return <BioContext.Provider value={value} >{children}</BioContext.Provider>

}