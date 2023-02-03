import {FaPlaystation, FaXbox,FaSteam,FaRegEdit,FaTrashAlt} from 'react-icons/fa';
import {SiNintendoswitch} from 'react-icons/si';
import {Link} from 'react-router-dom';
import Game_picture from '../../imgs/default.jpg';
import style from './Cardproject.module.css';
import { useNavigate } from 'react-router-dom';

function Cardproject({id,status,titulo,data,url,plataform,handleDelete,teste}) {
    const hist = useNavigate();

    const Remove = (e) => {
        e.preventDefault()
        handleDelete(id)
    }

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
                {url !== 'nothing' ? (<img src={url} alt="title_picture" className={style.img_picture}/>) : (<img src={Game_picture} alt="title_picture" className={style.img_picture} />)}
            <div>
                <h2>{titulo}</h2>
                <p>Status: {status}</p>
                <p>Ano de lançamento: {data}</p>
                <p>Platafoma: {icon_plataform}</p>
            </div>
            <div className={style.actions_card}>
                <Link to={`/edit/${id}`}><FaRegEdit/></Link>
                <Link onClick={Remove}><FaTrashAlt/></Link>
            </div>
        </div>
    )
}

export default Cardproject;