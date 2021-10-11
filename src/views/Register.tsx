import './../App.css';
import { FC, useState } from 'react';
import axios from 'axios';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { RegisterForm } from '../types/register/';
axios.defaults.withCredentials = true;

const Register:FC =()=> {

const [ form, setForm ] = useState<RegisterForm>({
    userName: '',
    email: '',
    password: ''
}) 

const handleChange = (event) => {
    const { name, value } = event.target;
    setForm(prevState => ({
        ...prevState,
        [name]: value
    }));
}

    async function register() {
        try {
            const response = await axios({
                url: 'http://localhost:4000/api/auth/register',
                method: 'POST',
                withCredentials: true,
                data: {
                    test: 'testCookie',
                    tost: 'tostCookie',
                    name: 'ferrun',
                    email: 'ferrun@mail.com',
                    password: '123456'
                }
            })
            if (response.status === 200) {
                console.log('response', response)
                return response
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Form>
            <FormGroup>
                <Label for='userName'>Nombre</Label>
                <Input 
                    placeholder='Inserta tu nombre de usuario' 
                    type='text' 
                    value={form.userName} 
                    name='userName'
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup>
                <Label for='email'>Correo electrónico</Label>
                <Input 
                    placeholder='Inserta tu correo electrónico' 
                    type='text' 
                    value={form.email} 
                    name='email'
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup>
                <Label for='password'>Contraseña</Label>
                <Input 
                    placeholder='Inserta tu contraseña' 
                    type='password' 
                    value={form.password} 
                    name='password'
                    onChange={handleChange}
                />
            </FormGroup>
            <Button onClick={register}>Regístrate</Button>
        </Form>
    )
}

export default Register
