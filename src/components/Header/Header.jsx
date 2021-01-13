import React from 'react'
import './../../main.scss'
import {NavLink} from "react-router-dom";

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
                    <li><NavLink to={'/'}>Главная</NavLink></li>
                    <li><NavLink to={'/about'}>О нас</NavLink></li>
                    <li><NavLink to={'/portfolio'}>Портфолио</NavLink></li>
                </ul>
            </div>
            <img className='logoHeader' src='/assets/images/bdlogo.png' />
            <div className='rightMainMenu'>
                <ul>
                    <li><NavLink to={'/price'}>Стоимость</NavLink></li>
                    <li><NavLink to={'/certificate'}>Сертификаты</NavLink></li>
                    <li><NavLink to={'/reviews'}>Отзывы</NavLink></li>
                </ul>
            </div>
        </div>
        <div className='bottomHeader'/>
    </div>
}

export default Header