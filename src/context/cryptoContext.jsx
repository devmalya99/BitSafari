import { createContext, useContext } from "react";

const CryptoContext = createContext({
})

export default CryptoContext

export const GetCryptoState=()=>{
    return useContext(CryptoContext)
}
 