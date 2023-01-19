import {FiYoutube,FiInstagram,FiTwitter,FiFacebook,} from 'react-icons/fi';
import {FaDiscord} from 'react-icons/fa';
import {SiPicpay} from 'react-icons/si';
import {AiOutlineCopyright} from 'react-icons/ai';
import '../pages_css/Footer.css';

function Footer(){
    return (
        <footer>
        <div className='footer'>
            <div className='social'>
                <h3>Siga-nos</h3>
                <div className="social_icons">
                    <FiYoutube className='icon_social'/>
                    <FiInstagram className='icon_social'/>
                    <FiTwitter className='icon_social'/>
                    <FiFacebook className='icon_social'/>
                    <FaDiscord className='icon_social'/>
                </div>
            </div>
            <div className='txt_footer'>
                <h3>Apoie-nos!</h3>
                <p>Faça uma doação para apoiar o nosso trabalho</p>
                <div className='pay_icons'>
                <SiPicpay/>
                </div>
            </div>
        </div>

        <div className='copyright'>
            <p><AiOutlineCopyright className='icon_copy'/>Todos os direitos reservados</p>
        </div>
        </footer>
    )
}

export default Footer;