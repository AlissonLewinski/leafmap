import './UserDropdown.css';
import {ReactComponent as DownArrow} from './assets/down-arrow.svg'
import {ReactComponent as Cog} from './assets/cog.svg'
import userImgUrl from './assets/marshall.jpeg'
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

function UserDropdown() {

    useEffect(() => {
        const userImg = document.querySelector('.user-dropdown-info-img')
        userImg.style['background-image'] = `url(${userImgUrl})`
    }, [])

    const [isDropdownActive, setDropdownActive] = useState(false)

	return (
        <div className="user-dropdown" onClick={() => setDropdownActive(!isDropdownActive)}>
            <div className="user-dropdown-info">
                <div className="user-dropdown-info-img"/>

                <span className="user-dropdown-info-name">
                    Marshall
                </span>
            </div>
            <DownArrow className={`user-dropdown-button-icon ${isDropdownActive ? 'user-dropdown-button-icon-upside-down' : ''}`} />

            <div className={`user-dropdown-options ${isDropdownActive ? '' : 'user-dropdown-options-hidden'}`}>

                <Link to="/admin" className="user-dropdown-link">
                    <div className="user-dropdown-options-item">
                        <Cog className="user-dropdown-options-item-icon"/>
                        <div className="user-dropdown-options-item-name">
                            Administração
                        </div>
                    </div>
                </Link>
                <Link to="/admin" className="user-dropdown-link">
                    <div className="user-dropdown-options-item">
                        <Cog className="user-dropdown-options-item-icon"/>
                        <div className="user-dropdown-options-item-name">
                            Conta
                        </div>
                    </div>
                </Link>
                <Link to="/admin" className="user-dropdown-link">
                    <div className="user-dropdown-options-item">
                        <Cog className="user-dropdown-options-item-icon"/>
                        <div className="user-dropdown-options-item-name">
                            Sair
                        </div>
                    </div>
                </Link>
            </div>
        </div>   
	)
}

export default UserDropdown;
