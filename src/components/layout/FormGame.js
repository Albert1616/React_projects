import Input from "../Form/Input";
import '../layout/FormGame.css';
import {FaPlaystation, FaXbox,FaSteam} from 'react-icons/fa';
import {SiNintendoswitch} from 'react-icons/si';

function FormGame(){
    return (
        <form className='form'>
            <Input type='text' text_label='Nome' id='name'/>
            <Input type='number' text_label='Data de lançamento' id='data'/>
            <Input type='text' text_label='Descrição do game' id='description'/>
            <div className="input_check">
                <Input type='checkbox' text_label={<FaPlaystation/>} id='check'/>
                <Input type='checkbox' text_label={<FaXbox/>} id='check'/>
                <Input type='checkbox' text_label={<SiNintendoswitch/>} id='check'/>
                <Input type='checkbox' text_label={<FaSteam/>} id='check'/>
            </div>
            
        </form>
        
    )
}

export default FormGame;