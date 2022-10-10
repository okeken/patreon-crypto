import { useEffect } from "react";
import useContractRead from "./useContractRead";
import {utils, BigNumber} from 'ethers'



const usePlanPrice = (plan:string| null)=>{
   
    const {data} = useContractRead({functionName:'priceDeet',args:[plan],})
    const price = data ? data?.[1]?.toLocaleString() :0
    if(!plan) return;
 
    return utils.formatEther(price)
}


export default usePlanPrice