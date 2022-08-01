import axios from 'axios';
import { RegisterForm, LoginForm } from '../../types/auth';

export async function register(values: RegisterForm) {
    try {
        const response = await axios({
            url: 'http://localhost:4000/api/auth/register',
            method: 'POST',
            withCredentials: true,
            data: {
                name: values.userName,
                email: values.email,
                password: values.password
            }
        })
        return response
    } catch (error) {
       return error
    }
}

export async function login(values: LoginForm) {
    try {
        const response = await axios({
            url: 'http://localhost:4000/api/auth/login',
            method: 'POST',
            withCredentials: true,
            data: {
                email: values.email,
                password: values.password
            }
        })
        return response
    } catch (error) {
       return error
    }
}

export async function logout() {
    try {
        const response = await axios({
            url: 'http://localhost:4000/api/auth/logout',
            method: 'PUT',
            withCredentials: true
        })
        return response
    } catch (error) {
       return error
    }
}