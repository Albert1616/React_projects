import './Input.css';

function Input(props){
    return (
        <div className='form_control'>
            <label htmlFor={props.id}>{props.text_label}</label>
            <input 
            type={props.type} 
            id={props.name} 
            name={props.name} 
            onChange={props.change} 
            accept={props.accept}
            value={props.value}
            max={props.max}
            />
        </div>
    )
}

export default Input;