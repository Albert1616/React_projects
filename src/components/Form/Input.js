import './Input.css';
import InputMask from 'react-input-mask'

function Input(props){
    return (
        <div className='form_control'>
            <label htmlFor={props.id}>{props.text_label}</label>
            {props.mask ? (<InputMask mask={props.mask}
            id={props.name} 
            name={props.name} 
            onChange={props.change} 
            defaultValue={props.value}
            required = {props.required} 
            />) : (<input 
            type={props.type} 
            id={props.name} 
            name={props.name} 
            onChange={props.change} 
            accept={props.accept}
            defaultValue={props.value}
            max={props.max}
            checked = {props.checked}
            required = {props.required}
            />)}
        </div>
    )
}

export default Input;