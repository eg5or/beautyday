import React from 'react'
import {Button, Header, Image, Input, Modal} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const Login = ({setOpen, open}) => {

    return <div className='loginWindow'>
        <Modal
            size='mini'
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}

        >
            <Modal.Header>Войти</Modal.Header>
            <Modal.Content>
                <div className='loginModalInputs'>
                    <ul>
                        <li><Input icon='user' iconPosition='left' placeholder='Введите логин...'/></li>
                        <li><Input icon='lock' iconPosition='left' placeholder='Введите пароль...'/></li>
                    </ul>
                </div>
            </Modal.Content>
            <Modal.Actions>

                <Button
                    content="Войти"
                    labelPosition='right'
                    icon='checkmark'
                    onClick={() => setOpen(false)}
                    positive
                />
            </Modal.Actions>
        </Modal>
    </div>
}

export default Login