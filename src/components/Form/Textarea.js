import './Textarea.css';

function Textarea(props){
    return (
        <div className='content_text'>
            <label htmlFor="">{props.text_label}</label>
            <textarea 
            id={props.name} 
            name={props.name} 
            cols="30" rows="1.5" 
            maxLength='100' 
            className='text'
            onChange={props.change}
            value={props.value}
            ></textarea>
        </div>
    )
}

export default Textarea;