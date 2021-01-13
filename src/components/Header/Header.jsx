import React from 'react'
import './../../main.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Icon} from "semantic-ui-react";

const Header = (props) => {
    return <div className='headerContainer'>
        <div className='topHeader'>
            <div className='loginBlock'>
                <div className='iconLogin'/>
                <div className='textLogin'>Войти</div>
            </div>
        </div>
        <div className='centerHeader'>
            <div className='leftMainMenu'>
                <ul>
                    <li>Главная</li>
                    <li>О нас</li>
                    <li>Галерея</li>
                </ul>
            </div>
            <img className='logoHeader' src='/assets/images/bdlogo.png' />
            <div className='rightMainMenu'>
                <ul>
                    <li>Главная</li>
                    <li>О нас</li>
                    <li>Галерея</li>
                </ul>
            </div>
        </div>
        <div className='bottomHeader'>Нижний блок</div>
    </div>
}

export default Header