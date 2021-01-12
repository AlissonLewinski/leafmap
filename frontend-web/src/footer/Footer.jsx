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
                <GithubIcon className="footer-icon"/>
                <LinkedinIcon className="footer-icon"/>
            </div>
		</div>
	);
}

export default Footer;