import '../pages_css/Home.css';
import arcade from '../../imgs/arcade.svg';
import Button from '../layout/Button';

function Home(){
    return (
        <section className='home_content'>
            <div className='img_player'>
                <img src={arcade} alt="img_player" />
            </div>
            <div className='txt_home'>
                <h1>Eai, bora aumentar sua lista de conquistas?</h1>
                <h3>Ja derrotou o chefão de hoje? Sim? então adiciona aqui
                e salve seu progresso!</h3>
                <Button adress='/new_game' txt='Adicionar novo game' />
            </div>
        </section>
    )
}

export default Home;