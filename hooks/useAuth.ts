
import  {useEffect} from "react"
import {useAccount} from "wagmi"
import { useRouter } from "next/router"


const useAuth = ()=>{
    const {isConnected, isConnecting,} = useAccount()
    const {push} = useRouter()

    useEffect(()=>{
        // if(isConnected) {
        //     push('/dashboard')
        // } else {
        //     push('/')
        // }

        

    },[isConnected])

    return {isConnecting, isConnected};

}

export default useAuth;