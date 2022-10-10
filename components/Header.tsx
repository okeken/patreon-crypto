import useContractRead from "../hooks/useContractRead"
import ThemeSwitch from "./ThemeSwitch"
import {ConnectKitButton} from 'connectkit'


const Header = ()=>{
    const {data} = useContractRead({functionName:"CHANNEL_NAME"})

    return <>
    <div className="flex items-center justify-between max-w-6xl p-4 mx-auto">
        <div>
            {data}
        </div>
        <div className="flex">
            <ConnectKitButton />
            <ThemeSwitch />
        </div>
    </div>
    </>
}


export default Header
