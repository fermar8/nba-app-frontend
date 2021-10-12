import './../App.css';
import { FC, useState, FormEvent } from 'react';
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

const handleChange = (event: FormEvent<EventTarget>) => {
    console.log('event', event)
    const { name, value } = event.target as HTMLInputElement;
    setForm(prevState => ({
        ...prevState,
        [name]: value
    }));
}

    async function register() {
        const { userName, email, password } = form;
        try {
            const response = await axios({
                url: 'http://localhost:4000/api/auth/register',
                method: 'POST',
                withCredentials: true,
                data: {
                    name: userName,
                    email: email,
                    password: password
                }
            })
            if (response.status === 200) {
                console.log('response', response)
                return response
            } else {
                console.log('response', response)
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
