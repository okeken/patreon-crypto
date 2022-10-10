


interface Props {
    className?:string
    onClick?:(e:any)=>void
    disabled?:boolean
    children:React.ReactNode
    type?: "button" | "submit" | "reset" | undefined
}
const Button =({className, onClick, children, disabled, type='button'}:Props)=>{
    return <>
    <button 
    type={type}
    disabled={disabled}
    onClick={onClick} className={`border  border-green-300 p-1 rounded-md px-3 ${className}`}>
        {children}
    </button>
    </>
}

export default Button;