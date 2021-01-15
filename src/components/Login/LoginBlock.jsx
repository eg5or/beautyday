import React from 'react'
import Login from './Login';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {login, logout, checkAuth} from '../../redux/authReducer';

class LoginBlock extends React.Component {
    componentDidMount() {
        this.props.checkAuth()
    }

    render() {

        return <div className='loginBlock'>
            <div className='adminLink'>
                <div className='iconAdmin'/>
                <div className='textAdmin'>Админка</div>
            </div>
            <div className='loginLink' onClick={() => {this.props.setOpen(true)}}>
                <div className='iconLogin'/>
                <div className='textLogin'>Войти
                </div>
                <Login login={this.props.login} open={this.props.open} setOpen={this.props.setOpen}/>
            </div>
        </div>
    }
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export default compose(
    withRouter,
    connect(mapStateToProps, {
        login,
        logout,
        checkAuth
    })
)(LoginBlock)