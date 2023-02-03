import './Textarea.css';

function Textarea(props){
    return (
        <div className='content_text'>
            <label htmlFor="">{props.text_label}</label>
            <textarea 
            id={props.name} 
            name={props.name} 
            cols={props.cols} rows={props.rows} 
            maxLength='100' 
            className='text'
            onChange={props.change}
            defaultValue={props.value}
            ></textarea>
        </div>
    )
}

export default Textarea;