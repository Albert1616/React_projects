import {Link} from 'react-router-dom';
import '../layout/Button.css';

function Button(props){
    return (
        <div className='button'>
            <Link to={props.adress} className='button_component'>{props.txt}</Link>
        </div>
    )
}

export default Button;