import { useState, useEffect, useRef } from "react";
import { useForm } from 'react-hook-form';

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
            <form className='form' disable>
                <div className="dados">
                    <Input type='text' text_label='Nome' name='name' className='name' change={handleChange}
                        value={project.name ? project.name : ''} /* {...register("name_game", {required:true})} */ />
                    {/* {errors.name&& 
                  <FormMessage txt="Informe o nome do jogo" />
                } */}
                    <Input type='number' text_label='Data de lançamento' name='data' change={handleChange}
                        value={project.data ? project.data : ''} /* {...register("data_game", {required:true})} */ />
                    {/*                 {errors.data_game&& <FormMessage txt="Informe a data de lançamento"/>}
 */}                <SelectInput text_label='Status:'
                        name='status' options={op}
                        change={handleOptionChange}
                        max='5'
                        rows='1.5'
                        cols='30'
                        value={project.status ? project.status.id : ''}
                        /* {...register("status_game", { required: true })} */
                    />
                    {/* {errors.status_game && <FormMessage txt="Informe o status do progresso" />} */}

                </div>
                <div className="checks">
                    <Textarea text_label='Descrição do game' name='description' change={handleChange} /* {...register("description_game", { required: true })} */></Textarea>
                    {/*                     {errors.description_game && <FormMessage txt="Informe a descrição do game" />}
 */}                    <Input type='file' text_label="Capa do game" name='url_capa' accept='image/jpeg, image/png' change={handleImageChange} />
                    <div className="input_check">
                        <Input type='radio' text_label={<FaPlaystation />} id='check' name='plataform' value='Playstation' change={handlePlataformChange} />
                        <Input type='radio' text_label={<FaXbox />} id='check' name='plataform' change={handlePlataformChange} value='Xbox' />
                        <Input type='radio' text_label={<SiNintendoswitch />} id='check' name='plataform' change={handlePlataformChange} value='Nintendo switch' />
                        <Input type='radio' text_label={<FaSteam />} id='check' name='plataform' change={handlePlataformChange} value='Steam' />
                    </div>
                </div>
            </form>
            <div className="buttons_form">
                <Button adress='/my_games' txt='Salvar' customClass='button_nomargin' buttonClass='button_form' event={submit} />
                <Button adress='/home' txt='Cancelar' customClass='button_nomargin' buttonClass='button_form_cancel' />
            </div>
        </div>

    )
}

export default FormGame;