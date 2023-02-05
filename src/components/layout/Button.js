import {Link} from 'react-router-dom';
import Style from '../layout/Button.module.css';

function Button(props){
    return (
        <div className={`${Style.button} ${Style[props.customClass]}`}>
            {props.submit ?(<button type='submit' className={`${Style.button_component} ${Style[props.buttonClass]}`}>{props.txt}</button>)
            :(<Link to={props.adress} className={`${Style.button_component} ${Style[props.buttonClass]}`} 
            onClick={props.event} onSubmit={props.eventSubmit} 
            type={props.type}>{props.txt}</Link>)}
        </div>
    )
}

export default Button;