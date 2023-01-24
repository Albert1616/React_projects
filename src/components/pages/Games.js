import Message from '../layout/Message';
import Container from '../layout/Container';
import style from '../pages_css/Games.module.css';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Cardproject from '../layout/Cardproject';


function Games() {
    const [projects, Setprojects] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/games", {
            method: "GET",
            headers: {
                'Content-type': 'application/json'
            }
        }).then((response) => response.json())
            .then((data) => {
                console.log(data)
                Setprojects(data)
            })
            .catch((err) => console.log(`Ocorreu algum problema: ${err}`))
    }, [])


    const location = useLocation();
    let message = '';

    if (location.state) {
        message = location.state.message;
    }

    return (
        <div>
            <h1>Games</h1>
            {message && <Message type='sucess' txt={message} />}
            <Container className={style.content_games} customClass='games_container'>

                {projects.length &&
                    projects.map((project) => (
                        <Cardproject 
                            titulo={project.name}
                            key={project.id}
                            /* id={project.id}
                            url={project.Url.url}
                            status={project.status.name}
                            plataform={project.nome}
                            data={project.data} */
                        />
                    ))                 
                }
            </Container>
        </div>
    )
}

export default Games;