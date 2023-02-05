import './Textarea.css';

function Textarea(props){
    return (
        <div className='content_text'>
            <label htmlFor="">{props.text_label}</label>
            <textarea 
            id={props.name} 
            name={props.name} 
            maxLength='100' 
            className='text'
            onChange={props.change}
            defaultValue={props.value}
            required={props.required}
            ></textarea>
        </div>
    )
}

export default Textarea;