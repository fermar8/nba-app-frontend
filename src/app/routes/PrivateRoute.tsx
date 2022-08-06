import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component, isLoggedIn, ...rest}) => {
    console.log('isLoggedIn', isLoggedIn);
    let ComponentToRender = component;

    return (
   <Route
    {...rest}
    render={ props => !isLoggedIn ? <Redirect to='/' />
    : <ComponentToRender {...props} /> }
   /> 
)}

export default PrivateRoute;