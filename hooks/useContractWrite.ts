import { useContractWrite as useContractWr,  usePrepareContractWrite } from 'wagmi'
import { contractConfig } from '../config'
import {ethers} from 'ethers'



interface ContractRead {
  addressOrName?:string
  contractInterface?:any[]
  functionName:string
  args?: any | any[]
  value?:string 
}


const useContractWrite = ({functionName='', args, value='0' }:ContractRead)=>{

    const { config } = usePrepareContractWrite({
        ...contractConfig,
        functionName,
        args,
        onSuccess(data) {
            console.log('Success', data)
          },
        onError(error) {
            console.log('Error', error)
          },
        overrides: {
            gasLimit: 50000,
            value: ethers.utils.parseEther(value as string ?? '0'),
          },
    })
    
    const { data, isLoading, isSuccess, write, isError } = useContractWr({...config,})
    
    return {
        data, isLoading, isSuccess, write, isError  
    }
}


export default useContractWrite