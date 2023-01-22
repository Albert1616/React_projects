import {Link} from 'react-router-dom';
import Style from '../layout/Button.module.css';

function Button(props){
    return (
        <div className={`${Style.button} ${Style[props.customClass]}`}>
            <Link to={props.adress} className={`${Style.button_component} ${Style[props.buttonClass]}`}>{props.txt}</Link>
        </div>
    )
}

export default Button;