import {FaPlaystation, FaXbox,FaSteam} from 'react-icons/fa';
import {SiNintendoswitch} from 'react-icons/si';
import Game_picture from '../../imgs/default.jpg';
import style from './Cardproject.module.css';

function Cardproject({id,status,titulo,data,url,plataform}) {

    let icon_plataform;
    switch(plataform){
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
    return (
        <div className={style.project_card}>
            {url ?(<img src={url} alt="title_picture" className={style.img_picture}/>) : <img src={Game_picture} alt="title_picture" className={style.img_picture} />}
            <div>
                <h3>Titulo: {titulo}</h3>
                <p>Status:{status}</p>
                <p>Ano de lançamento:{data}</p>
                <p>{icon_plataform}</p>
            </div>
        </div>
    )
}

export default Cardproject;