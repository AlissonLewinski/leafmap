import './Footer.css';
import {ReactComponent as RoseIcon} from './assets/flower.svg'
import {ReactComponent as GithubIcon} from './assets/github.svg'
import {ReactComponent as LinkedinIcon} from './assets/linkedin.svg'

function Footer() {
	return (
		<div className="footer">
            <div className="footer-description">
                <RoseIcon className="footer-flower"/>
                <span>Aplicação desenvolvida por Alisson Lewinski</span>
            </div>
            <div className="footer-icons">
                <a href="https://github.com/AlissonLewinski" target="_new">
                    <GithubIcon className="footer-icon"/>
                </a>
                <a href="https://www.linkedin.com/in/alissonlewinski/" target="_new">
                    <LinkedinIcon className="footer-icon"/>
                </a>
            </div>
		</div>
	);
}

export default Footer;