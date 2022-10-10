import Header from "./Header"


interface Props {
    children:React.ReactElement
}


const Layout = ({children}:Props)=>{
    return <>
    <Header />
        {children}
    </>

}

export default Layout