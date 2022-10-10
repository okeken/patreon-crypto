
import { ConnectKitButton } from "connectkit";
import  Input  from "../components/Input";
import Image from "next/image";
import { useState, useEffect } from "react";
import Button from "../components/Button";
import { blurUrl } from "../config";

import useAuth from "../hooks/useAuth";
import useContractRead from "../hooks/useContractRead";
import useContractWrite from "../hooks/useContractWrite";
import usePlanPrice from "../hooks/usePlanPrice";


const HomeView = ()=>{

  const {isConnecting, isConnected} = useAuth()
  const {data:channelName} = useContractRead({functionName:'CHANNEL_NAME'})
  const [plan, setPlan] = useState<null | string >(null)
  const [userName, setUserName] = useState('')
  const [message, setMessage]= useState('')
  
  const price = usePlanPrice(plan)
  const {write, isLoading, isError, isSuccess, data } = useContractWrite({functionName:'subscribe', value:price as string, args:[plan, userName]})
  const hash = data?.hash;

 


const handleChange=(input:any, type?:string)=>{

  if(type ==='input'){
    setUserName(input.target.value)
    return;
  }
  setPlan(input)
}


  

  
    return <>
   <div className='flex flex-col items-center mx-2'>
 



<div>

<div className='grid justify-between w-11/12 grid-cols-1 mx-auto lg:grid-cols-2'>
  <div className='flex-1'>
    <Image 
     placeholder="blur"
     blurDataURL={blurUrl}
     alt="channel_image" 
    src='/tec.jpg' width={700} height={500}  />

  </div>
  <div className='flex justify-center flex-1 '>
    <div  className=''>
      <div>

        <h1 className="mb-8 text-2xl ">Welcome to {channelName} Channel  </h1>

<div>

 

<div className="mb-5">
  <label>What's Your Name</label>
  
  <Input 
  disabled={isLoading}
  value={userName}
  className='block mt-1 '
   onChange={(e:any)=> handleChange(e, 'input') }/>
</div>
<div className="mb-5 ">
                <label className="block mb-2 ">
                  {" "}
                  What Plan Will You like to Subscribe to?{" "}
                </label>
                <div className="flex flex-wrap items-center mt-2 [&>div]:my-2 justify-start ">
                  <div className="mr-1">
                    <input
                      id="planPrice-basic"
                      type="radio"
                      className="form-radio"
                      disabled={isLoading}
                    
                      onChange={()=>handleChange('0')}
                    />
                    <label
                      htmlFor="planPrice-basic"
                      className="inline-flex items-center"
                    >
                      <span className="">Basic</span>
                    </label>
                  </div>
                  <div className="md:mr-1 md:my-0">
                    <input
                      id="planPlan-standard"
                      type="radio"
                      className="form-radio"
                      disabled={isLoading}
                   
                      onChange={()=>handleChange('1')}
                    />
                    <label
                      htmlFor="planPlan-standard"
                      className="inline-flex items-center"
                    >
                      <span className="">Standard</span>
                    </label>
                  </div>

                  <div className="md:mr-1 md:my-0">
                    <input
                      id="planPrice-premium"
                      type="radio"
                      className="form-radio"
                      disabled={isLoading}
                     
                      onChange={()=>handleChange('2')}
                    />
                    <label
                      htmlFor="planPrice-premium"
                      className="inline-flex items-center"
                    >
                      <span className="">Premium</span>
                    </label>
                  </div>
                </div>
              </div>
         

  
</div>




{isConnecting ? <p>connecting</p>: ''}
  
    {isConnected ?plan ?  <Button
    disabled={isLoading}
    onClick={()=>{
     
      write?.()
    }}
     type='button'>
     {isLoading ? 'Sending.. ': `Pay ${price }  matic`}
 </Button> : <Button disabled>Pick  a Plan
    </Button>
     :  <ConnectKitButton />
    
   
    }

{
            data?.hash ?(
              <div>
                <a 
                className="inline-flex items-center p-2 mt-4 border rounded-md"
                target='_blank'
                href={`https://mumbai.polygonscan.com/tx/${data?.hash}`}>
                  
                

                Transaction submitted
                <svg 
                className="text-2xl rotate-45"
                stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11 8.414V18h2V8.414l4.293 4.293 1.414-1.414L12 4.586l-6.707 6.707 1.414 1.414z" /></svg>
                </a>
                </div>
            ):""
          }

      </div>

    </div>
  </div>
</div>
  </div>


    

      </div>
    </>
}

export default HomeView