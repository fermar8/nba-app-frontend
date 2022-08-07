import './../../App.css';
import { FC } from 'react';
import { Form as ReactStrapForm, FormGroup, Label, Input, Button } from 'reactstrap';
import { Form, Field } from 'react-final-form';
import { register } from '../../services/authentication/authService';
import { useDispatch } from "react-redux";
import { loginReducer } from '../../features/authentication';


const Register:FC = () => {

    const dispatch = useDispatch();

    const renderTextInput = ({ input, meta }) => (
        <Input {...input} type="text" errormessage={meta.touched && meta.error} />
    )
    
    const renderPasswordInput = ({ input, meta }) => (
        <Input {...input} type="password" errormessage={meta.touched && meta.error} />
    )
    
    const onSubmit = async values => {
        try {
            const response:any = await register(values);
            const actionPayload = response.data.payload
            if (response.status === 200) {
                dispatch(loginReducer(actionPayload))
            }
        } catch (error) {
            console.log(error)
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