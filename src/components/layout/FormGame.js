import { useState,useEffect } from "react";

import Input from "../Form/Input";
import Textarea from "../Form/Textarea";
import SelectInput from "../Form/SelectInput";
import Button from '../layout/Button';
import '../layout/FormGame.css';
import {FaPlaystation, FaXbox,FaSteam} from 'react-icons/fa';
import {SiNintendoswitch} from 'react-icons/si';

function FormGame(){
    const [op,Setop] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/opcoes",{
            method : "GET",
            headers:{
                "content-type": "aplication/json" 
            }
        }).then((response) => response.json())
        .then((data) => {
            Setop(data);
        }).catch((err) => console.log(`Algo deu errado: ${err}`));
        
    },[]);

    return (
        <div className="content_form">
            <form className='form'>
            <div className="dados">
                <Input type='text' text_label='Nome' id='name'/>
                <Input type='number' text_label='Data de lançamento' id='data'/>
                <SelectInput text_label='Status: ' id='status' options={op}/>
                
            </div>
            <div className="checks">
                <Textarea text_label='Descrição do game' id='description'></Textarea>
                <Input type='file' text_label="Capa do game" id='capa' accept='image/jpeg, image/png'/>
                <div className="input_check">
                    <Input type='checkbox' text_label={<FaPlaystation/>} id='check'/>
                    <Input type='checkbox' text_label={<FaXbox/>} id='check'/>
                    <Input type='checkbox' text_label={<SiNintendoswitch/>} id='check'/>
                    <Input type='checkbox' text_label={<FaSteam/>} id='check'/>
                </div>
            </div>
        </form>
            <div className="buttons_form">
                <Button adress='/my_games' txt='Salvar' customClass='button_nomargin' buttonClass='button_form'/>
                <Button adress='/my_games' txt='Cancelar' customClass='button_nomargin' buttonClass='button_form_cancel'/>
            </div>
        </div>
        
    )
}

export default FormGame;