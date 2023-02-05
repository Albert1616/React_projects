import './SelectInput.css';

function SelectInput(props){
    return (
        <div className="form_control">
            <label htmlFor={props.name}>{props.text_label}</label>
            <select required name={props.name} id={props.name} onChange={props.change} defaultValue={props.value || ''}>
                <option value="">Selecione uma opção</option>
                {props.options.map((op) => (
                    <option id={op.id} key={op.id} >{op.name}</option>
                ))}
            </select>
        </div>
    )
}

export default SelectInput;