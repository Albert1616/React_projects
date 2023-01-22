import './SelectInput.css';

function SelectInput(props){
    return (
        <div className="form_control">
            <label htmlFor="">{props.text_label}</label>
            <select name={props.name} id={props.name}>
                <option>Selecione uma opção</option>
                {props.options.map((op) => (
                    <option id={op.id}>{op.name}</option>
                ))}
            </select>
        </div>
    )
}

export default SelectInput;