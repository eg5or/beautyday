import React from 'react'
import {Button, Dimmer, Header, Image, Input, Loader, Modal} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import {useFormik} from 'formik';

const Login = ({setOpen, open, login}) => {
    // -----------------------------------------------------------------------------------------------------------------
    // Formik
    const formik = useFormik({
        initialValues: {
            login: '',
            password: ''
        }
    });
    const onLogin = () => {
        login(formik.values.login, formik.values.password)
    }
    // -----------------------------------------------------------------------------------------------------------------
    return <div className='loginWindow'>
        <Modal
            size='mini'
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
        >
            <Modal.Header>
                    Войти
            </Modal.Header>
            <Modal.Content>
                <div className='loginModalInputs'>
                    <ul>
                        <li><Input id='login'
                                   value={formik.values.login}
                                   onChange={formik.handleChange}
                                   icon='user'
                                   iconPosition='left'
                                   placeholder='Введите логин...'/></li>
                        <li><Input id='password'
                                   type='password'
                                   value={formik.values.password}
                                   onChange={formik.handleChange}
                                   icon='lock'
                                   iconPosition='left'
                                   placeholder='Введите пароль...'/></li>
                    </ul>
                </div>
                <Dimmer active inverted>
                    <Loader active inline='centered' size='medium'/>
                </Dimmer>
            </Modal.Content>
            <Modal.Actions>
                <Button
                    content="Войти"
                    labelPosition='right'
                    icon='checkmark'
                    onClick={onLogin}
                    positive
                />
            </Modal.Actions>
        </Modal>
    </div>
}

export default Login