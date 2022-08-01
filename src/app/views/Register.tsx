import './../../App.css';
import { FC } from 'react';
import { Form as ReactStrapForm, FormGroup, Label, Input, Button } from 'reactstrap';
import { Form, Field } from 'react-final-form';
import { register } from '../../services/authentication/authService';
import { useDispatch, useSelector } from "react-redux";
import { loginReducer } from '../../features/authentication';
import { RootState } from 'app/store';


const Register:FC = () => {

    const registerLogin = useSelector((state: RootState) => {
        return state.authentication
    })

    const dispatch = useDispatch();

    const renderTextInput = ({ input, meta }) => (
        <Input {...input} type="text" errorMessage={meta.touched && meta.error} />
    )
    
    const renderPasswordInput = ({ input, meta }) => (
        <Input {...input} type="password" errorMessage={meta.touched && meta.error} />
    )
    
    const onSubmit = async values => {
        console.log('firstConsole', registerLogin)
        try {
            const response:any = await register(values);
            console.log('values', values)
            if (response.status === 200) {
                dispatch(loginReducer())
            }
        } catch (error) {
            
        }
    };
    
    const required = value => {
        if(!value || value === '') {
            return 'This field is required';
        }
        return undefined;
    }
    
    return (
    <Form
        onSubmit={onSubmit}
        render={({handleSubmit, invalid}) => (
            <ReactStrapForm onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for='userName'>Nombre</Label>
                    <Field
                        validate={required}
                        placeholder='Inserta tu nombre de usuario'
                        name='userName'
                        component={renderTextInput} />
                </FormGroup>
                <FormGroup>
                    <Label for='email'>Correo electrónico</Label>
                    <Field
                        validate={required}
                        placeholder='Inserta tu correo electrónico'
                        name='email'
                        component={renderTextInput} />
                </FormGroup>
                <FormGroup>
                    <Label for='password'>Contraseña</Label>
                    <Field
                        validate={required}
                        placeholder='Inserta tu contraseña'
                        name='password'
                        component={renderPasswordInput} />
                </FormGroup>
                <Button type="submit" disabled={invalid}>Regístrate</Button>
            </ReactStrapForm>
    )}
    />
    )
}


export default Register;