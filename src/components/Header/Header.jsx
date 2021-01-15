import React from 'react'
import './../../main.scss'
import {NavLink} from "react-router-dom";
import Login from '../Login/Login';
import LoginBlock from '../Login/LoginBlock';

const Header = (props) => {
    const [open, setOpen] = React.useState(false)
    return <div className='headerContainer'>
        <div className='topHeader'>
            <LoginBlock open={open} setOpen={setOpen}/>
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
                    <li><NavLink to={'/certificates'}>Сертификаты</NavLink></li>
                    <li><NavLink to={'/reviews'}>Отзывы</NavLink></li>
                </ul>
            </div>
        </div>
        <div className='bottomHeader'/>
    </div>
}

export default Header