import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTiktok, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';


const NavBar = () => {
    return (
        <nav className="nav">
            <ul id="social-media">
                <li><a href="https://www.uneatlantico.es/oficina-de-relaciones-internacionales/presentacion" title="Oficina de Relaciones Internacionales" target="_blank">Oficina de Relaciones Internacionales</a></li>
                <li><a href="https://www.facebook.com/UniversidadEuropeadelAtlantico" title='FaceBook' target='_blank'><FontAwesomeIcon icon={faFacebook} /></a></li>
                <li><a href="https://twitter.com/uneatlantico" title='Twitter' target='_blank'><FontAwesomeIcon icon={faTwitter} /></a></li>
                <li><a href="https://www.instagram.com/uneatlantico" title='Instagram' target='_blank'><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a href="https://www.youtube.com/user/uneatlantico" title='YouTube' target='_blank'><FontAwesomeIcon icon={faYoutube} /></a></li>
                <li><a href="https://www.linkedin.com/school/universidad-europea-del-atl%C3%A1ntico/?originalSubdomain=es" title='LinkedIn' target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a></li>
                <li><a href="https://blogs.uneatlantico.es/?_gl=1*1jdk761*_gcl_au*MTY5MjI3MzAwNy4xNzAxNjc0ODg0" title='Blog' target='_blank'><img src="https://www.uneatlantico.es/modules/custom/uea_blocks/img/ico-opiniones.png" alt="Blog Icon" /></a></li>
                <li><a href="https://uneradio.wordpress.com/" title='Radio' target='_blank'><img src="https://www.uneatlantico.es/modules/custom/uea_blocks/img/ico-radio.png" alt="Radio Icon" /></a></li>
                <li><a href="https://vidauniversitaria.uneatlantico.es/?_gl=1*1jdk761*_gcl_au*MTY5MjI3MzAwNy4xNzAxNjc0ODg0" title='Opiniones' target='_blank'><img src="https://www.uneatlantico.es/modules/custom/uea_blocks/img/ico-vida-univ.png" alt="Opinions Icon" /></a></li>
                <li><a href="https://www.tiktok.com/@uneatlantico" title='TikTok' target='_blank'><FontAwesomeIcon icon={faTiktok} /></a></li>
            </ul>
    </nav>
    )
  }
  
  export default NavBar