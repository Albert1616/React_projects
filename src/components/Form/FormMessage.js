import { useEffect,useState } from "react";
import './FormMessage.css'

function FormMessage({txt}){
    const [visible,Setvisible] = useState(false)
    useEffect(() =>{
        Setvisible(true);
        const time = setTimeout(() =>{
            Setvisible(false)},2000);
        return () => clearTimeout(time);
    },[txt])
    return (
        <>
            {visible&& <span className="msg_err">{txt}</span>}
        </>
    )
}

export default FormMessage;