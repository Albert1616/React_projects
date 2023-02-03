import Input from "../Form/Input";
import Textarea from "../Form/Textarea";
import SelectInput from "../Form/SelectInput";
import Button from '../layout/Button';
import '../layout/FormEdit.css';
import Game_picture from '../../imgs/default.jpg';
import { useState, useEffect} from "react";

import { FaPlaystation, FaXbox, FaSteam } from 'react-icons/fa';
import { SiNintendoswitch } from 'react-icons/si';

function FormEdit({ project,handleEditProject }) {

    const [op, Setop] = useState([]);
    const [Newproject,SetNewproject] = useState(project || {});
    let status = project.hasOwnProperty('status') ? project.status.name : 'Não informado';
    

    useEffect(() => {
        fetch("http://localhost:5000/opcoes", {
            method: "GET",
            headers: {
                "content-type": "aplication/json"
            }
        }).then((response) => response.json())
            .then((data) => {
                Setop(data);
            }).catch((err) => console.log(`Algo deu errado: ${err}`));

    }, []);

    let icon_plataform;
    if(project.hasOwnProperty('plataforma')){
        switch(project.plataforma.nome){
            case 'Playstation':
                icon_plataform = <FaPlaystation/>
                break;
            case 'Xbox':
                icon_plataform = <FaXbox/>
                break;
            case 'Nintendo switch':
                icon_plataform = <SiNintendoswitch/>
                break;
            case 'Steam':
                icon_plataform = <FaSteam/>
                break;
        }
    }

    const submit = (e) =>{
        e.preventDefault()
        handleEditProject(Newproject);
        console.log(Newproject)
    }

    function handleChange(e){
        SetNewproject({...Newproject,[e.target.name]: e.target.value});
    }

    function handleOptionChange(e){
        SetNewproject({...Newproject, status:{
            id:e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        },
    })
    }

    function handleImageChange(e){
        const files = e.target.files;

        const read = new FileReader();
        read.readAsDataURL(files[0]);
        read.onload = function(){
            document.querySelector('.img_current').src = read.result;
            SetNewproject({...Newproject,URL:{
                Id: e.target.name,
                url: read.result,
            }});
        }
    }

    function handlePlataformChange(e){
        SetNewproject({...Newproject,plataforma:{
            nome:e.target.value
        }})
    }

    return (
        <div className="form_contentedit">
            <form className='form_edit' disable>
                <div className="img_data">
                    {project.hasOwnProperty('URL') ? (<img src={project.URL.url} alt='capa' className="img_current" />) :
                        (<img src={Game_picture} alt='capa' className="img_current" />)}
                    <Input type='file' text_label='Escolher nova capa' name='Capa' accept='image/jpeg, image/png' className='new_cover' change={handleImageChange} />
                </div>
                <div className="project_current_data">
                    <Input type='text' text_label='Nome' name='name' value={project.name ? project.name : ''} change={handleChange}/>
                    <Input type='number' text_label='Data de lançamento' name='data' value={project.data ? project.data : ''} change={handleChange}/>
                    <Textarea text_label='Descrição do game' name='description' value={project.description} change={handleChange}></Textarea>
                    <SelectInput text_label={`Status atual : ${status}`}
                        name='status' options={op}
                        max='5'
                        rows='2'
                        cols='30' 
                        change={handleOptionChange}/>
                    <p>Plataforma: {icon_plataform}</p>
                    <div className="input_check">
                        <Input type='radio' text_label={<FaPlaystation />} id='check' name='plataform' value='Playstation' change={handlePlataformChange} />
                        <Input type='radio' text_label={<FaXbox />} id='check' name='plataform' value='Xbox' change={handlePlataformChange} />
                        <Input type='radio' text_label={<SiNintendoswitch />} id='check' name='plataform' value='Nintendo switch' change={handlePlataformChange} />
                        <Input type='radio' text_label={<FaSteam />} id='check' name='plataform' value='Steam' change={handlePlataformChange} />
                    </div>
                </div>
            </form>
            <Button txt='Salvar alterações' event={submit}/>
        </div>

    )
}

export default FormEdit;