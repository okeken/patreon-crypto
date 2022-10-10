import { useContractRead as useContractRd } from 'wagmi'
import { contractConfig } from '../config'



interface ContractRead {
  addressOrName?:string
  contractInterface?:any[]
  functionName:string
  args?: any | any[]
}


const useContractRead = ({functionName='', args }:ContractRead)=>{

    const { data, isError, isLoading } = useContractRd({
        ...contractConfig,
        functionName,
        args
      })


    return {
            data,
            isError,
            isLoading
    }
}


export default useContractRead