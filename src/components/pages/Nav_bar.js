import { Link } from "react-router-dom";
import {AiOutlineUser} from 'react-icons/ai';
import '../pages_css/Nav_bar.css';
import logo from '../../imgs/logo.png';

function Nav_bar(){
    return (
        <div className='Nav'>
            {/* <img src="../imgs/logo.png" alt="Logo" /> */}
            {/* <RiGameLine className="logo"/> */}
            <Link to='/home' className="logo"><img src={logo} alt="logo" /></Link>

            <ul>
                <Link to='my_games' className="item">Meus jogos</Link>
                <Link to='/fav' className="item">Favoritos</Link>
                <Link to='/wish_list' className="item">Lista de desejos</Link>
                <Link to='/contact' className="item">Contato</Link>
            </ul>
            <AiOutlineUser className="user"/>
        </div>
    )
}

export default Nav_bar;