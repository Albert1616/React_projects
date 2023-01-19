import '../pages_css/New_game.css';
import FormGame from '../layout/FormGame';

function New_game(){
    return (
        <div className="newgame">
            <h1>Cadastrar novo game</h1>
            <p>Informe os dados do novo game</p>
            <FormGame/>
        </div>
    )
}

export default New_game;