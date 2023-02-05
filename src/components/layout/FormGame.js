import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../Form/Input";
import Textarea from "../Form/Textarea";
import SelectInput from "../Form/SelectInput";
import Button from '../layout/Button';
import '../layout/FormGame.css';
import FormMessage from "../Form/FormMessage";

import { FaPlaystation, FaXbox, FaSteam } from 'react-icons/fa';
import { SiNintendoswitch } from 'react-icons/si';


function FormGame({ create, dataProject }) {
    const [op, Setop] = useState([]);
    const [project, Setproject] = useState(dataProject || {});
    const hist = useNavigate();
    /*     const { register, handleSubmit, formState: { errors } } = useForm();
     */
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

    const submit = (e) => {
        e.preventDefault()
        console.log(project)
        create(project);
        hist('my_games')
    }

    function handleChange(e) {
        Setproject({ ...project, [e.target.name]: e.target.value });
    }

    function handleOptionChange(e) {
        Setproject({
            ...project, status: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },
        })
    }

    function handleImageChange(e) {
        const files = e.target.files;

        const read = new FileReader();
        read.readAsDataURL(files[0]);
        read.onload = function () {
            Setproject({
                ...project, URL: {
                    Id: e.target.name,
                    url: read.result,
                }
            });
        }
    }

    function handlePlataformChange(e) {
        Setproject({
            ...project, plataforma: {
                nome: e.target.value
            }
        })
    }

    return (
        <div className="content_form">
            <form className='form' onSubmit={submit}>
                <div className="form_input">
                    <div className="dados">
                        <Input type='text' text_label='Nome' name='name' className='name' change={handleChange}
                            value={project.name ? project.name : ''} required='true' />
                        {/* {errors.name&& 
                  <FormMessage txt="Informe o nome do jogo" />
                } */}
                        <Input type='number' text_label='Data de lançamento' name='data' change={handleChange}
                            value={project.data ? project.data : ''} required='true' mask='99/99/9999'/>
                        {/*                 {errors.data_game&& <FormMessage txt="Informe a data de lançamento"/>}
 */}                <SelectInput text_label='Status:'
                            name='status' options={op}
                            change={handleOptionChange}
                            max='5'
                            rows='1.5'
                            cols='30'
                            value={project.status ? project.status.id : ''}
                        />
                        {/* {errors.status_game && <FormMessage txt="Informe o status do progresso" />} */}

                    </div>
                    <div className="checks">
                        <Textarea text_label='Descrição do game' name='description' change={handleChange} required='true' ></Textarea>
                        {/*                     {errors.description_game && <FormMessage txt="Informe a descrição do game" />}
 */}                    <Input type='file' text_label="Capa do game" name='url_capa' accept='image/jpeg, image/png' change={handleImageChange} id="choise_picture"/>
                        <div className="input_check">
                            <Input type='radio' text_label={<FaPlaystation />} id='check' name='plataform' value='Playstation' change={handlePlataformChange} required='true' />
                            <Input type='radio' text_label={<FaXbox />} id='check' name='plataform' change={handlePlataformChange} value='Xbox' required='true' />
                            <Input type='radio' text_label={<SiNintendoswitch />} id='check' name='plataform' change={handlePlataformChange} value='Nintendo switch' required='true' />
                            <Input type='radio' text_label={<FaSteam />} id='check' name='plataform' change={handlePlataformChange} value='Steam' required='true' />
                        </div>
                    </div>
                </div>
                <div className="buttons_form">
                    <Button txt='Salvar' customClass='button_nomargin' buttonClass='button_form' submit='true'/>
                    <Button adress='/home' txt='Cancelar' customClass='button_nomargin' buttonClass='button_form_cancel' />
                </div>
            </form>
        </div>

    )
}

export default FormGame;