import './../../App.css';
import { FC } from 'react';
import { Link } from "react-router-dom";
import { logout } from '../../services/authentication/authService';
import { useDispatch } from "react-redux";
import { logoutReducer } from '../../features/authentication';
import { deleteCookie } from '../../utils/authentication';

const Private:FC = () => {

    const dispatch = useDispatch();

    const handleLogout = async () => {
        try {
            const response:any = await logout();
            if (response.status === 204) {
                dispatch(logoutReducer())
                await deleteCookie('frontToken');
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <h1>HOLA</h1>
            <h1>Welcome to NBA app</h1>
            <Link onClick={handleLogout} to='/'>LOGOUT</Link>
            <button>Separation</button>
            <Link to='/main'>MAIN</Link>
        </div>
    )
}

export default Private