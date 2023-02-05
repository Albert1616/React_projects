import Message from '../layout/Message';
import Container from '../layout/Container';
import Loader from '../layout/Loader';
import style from '../pages_css/Games.module.css';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Cardproject from '../layout/Cardproject';


function Games() {
    const [projects, Setprojects] = useState([]);
    const [load,Setload] = useState(true);
    const [MessageRemove, SetMessageRemove] = useState('');

    useEffect(() => {
        /* setTimeout(() =>{ */
            fetch("http://localhost:5000/games", {
            method: "GET",
            headers: {
                'Content-type': 'application/json'
            }
        }).then((response) => response.json())
            .then((data) => {
                Setprojects(data)
                Setload(false)
            })
            .catch((err) => console.log(`Ocorreu algum problema: ${err}`))
        },3000)
    /* }, []) */


    const location = useLocation();
    let message = '';

    if (location.state) {
        message = location.state.message;
    }

    function DeleteCard(id){
        fetch(`http://localhost:5000/games/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        }).then((resolve) =>resolve.json())
        .then((data) => {
            Setprojects(projects.filter((project) => project.id !== id))
            SetMessageRemove("Game removido com sucesso!");
            
        })
        .cath((err) => console.log(`Aconteceu algum erro: ${err}`));
    }

    
    return (
        <div>
            <h1>Games</h1>
            {message && <Message type='sucess' txt={message} />}
            
            <Container className={style.content_games} customClass='games_container'>
                {MessageRemove !== ' ' && <Message type='sucess' txt={MessageRemove}/>}
                {projects.length &&
                    projects.map((project) => (
                        <Cardproject 
                            titulo={project.name}
                            key={project.id}
                            url={project.hasOwnProperty('URL') ? project.URL.url : 'nothing'}
                            handleDelete={DeleteCard}
                            id={project.id}
                            status={project.hasOwnProperty('status') ? project.status.name : 'Não informado'}
                            plataform={project.hasOwnProperty('plataforma') ? project.plataforma.nome : 'NaN'}
                            data={project.data}
                        />
                    ))                 
                    }
            </Container>
        </div>
    )
}

export default Games;