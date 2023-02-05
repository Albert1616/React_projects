import '../layout/Button_submit.module.css';

function Button_submit(props) {
    return (
        <div className='button'>
            <button type='submit'>{props.txt}</button>
        </div>
    )
}

export default Button_submit;