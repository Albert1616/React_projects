import { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import FormEdit from "../layout/FormEdit";
import Container from '../layout/Container';
import Message from '../layout/Message';

function EditGame(){

    const {id} = useParams()

    const [project,Setproject] = useState([]);
    const hist = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/games/${id}`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        }).then((reponse) => reponse.json())
        .then((data) => {
            Setproject(data)
        }).catch((err) => console.log(`Aconteceu algum problema: ${err}`));
    },[id])

    function EditProject(project){
         fetch(`http://localhost:5000/games/${id}`,{
            method:'PATCH',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(project)
         }).then((response) => response.json())
         .then((data) => {
            Setproject(data);
            hist('/my_games',{state: {message:'Game atualizado com sucesso!' }})
         }).catch((err) => console.log(`Aconteceu algum erro: ${err}`))
    }

    return (
        <div>
            <Container>
                <FormEdit project={project} handleEditProject={EditProject} />
            </Container>
        </div>
)
}

export default EditGame;