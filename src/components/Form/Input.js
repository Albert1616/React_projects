import './Input.css';

function Input(props){
    return (
        <div className='form_control'>
            <label htmlFor="">{props.text_label}</label>
            <input type={props.type} id={props.id} onChange={props.change} accept={props.accept}/>
        </div>
    )
}

export default Input;