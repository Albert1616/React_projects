import Style from './Message.module.css';
import { useState,useEffect } from 'react';

function Message({type,txt}){
    const [visible,Setvisible] = useState(false);

    useEffect(() =>{
        if(!txt){
            Setvisible(false)
            return
        }

        Setvisible(true);

        const timer = setTimeout(() =>{
                Setvisible(false);
            }, 3000)

        return () => clearTimeout(timer);
    },[txt])


    return (<>
            {visible && <div className={`${Style.message} ${Style[type]}`}>
                {txt}
            </div>}
        </>
    )
}

export default Message;