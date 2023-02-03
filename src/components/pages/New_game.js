import { useNavigate} from 'react-router-dom';
import '../pages_css/New_game.css';

import FormGame from '../layout/FormGame';

function New_game(){

    const hist = useNavigate();

    function createGame(game){
        
        fetch("http://localhost:5000/games",{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(game),
        }).then((resolve)=>resolve.json())
        .then((data)=>{
            hist('/my_games', {state: {message: "Game adicionado com sucesso!"}});
        }).catch((err)=>console.log(`Ocorreu algum erro ${err}`)); 
    }
    return (
        <div className="newgame">
            <h1>Cadastrar novo game</h1>
            <p>Informe os dados do novo game</p>
            <FormGame create={createGame}/>
        </div>
    )
}

export default New_game;