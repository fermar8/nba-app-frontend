import './../../App.css';
import { FC } from 'react';
import { Link } from "react-router-dom";


const Home:FC = () => {
    return (
        <div>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
        </div>
    )
}

export default Home