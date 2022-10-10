import { ConnectKitButton } from "connectkit";
import useAuth from "../hooks/useAuth";

const Dashboard = ()=>{
    const {isConnected} = useAuth()
    return (<>

    Dashboard

    <ConnectKitButton />
    
    </>)
}

export default Dashboard