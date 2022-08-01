import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component, isLoggedIn, ...rest}) => {
    let ComponentToRender = component;

    return (
   <Route
    {...rest}
    render={ props => isLoggedIn ? <ComponentToRender {...props} />
    : <Redirect to='/' /> }
   /> 
)}

export default PrivateRoute;