

interface InputProps {
    className?:string
    disabled?:boolean
    onChange:(e:any)=>void
    value:string
}

const Input =({className, disabled, onChange, value}:InputProps)=>{

    return <input 
    value={value}
    disabled={disabled}
    onChange={onChange}
    className={`p-2 px-3 bg-transparent border ${className}`}
     />
}


export default Input