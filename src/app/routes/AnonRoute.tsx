import { Route, Redirect } from 'react-router-dom';


const AnonRoute = ({ component, isLoggedIn, ...rest}) => {
    let ComponentToRender = component;

    return (
   <Route
    {...rest}
    render={ props => isLoggedIn ? <Redirect to="/private"/>
    : <ComponentToRender {...props} /> }
   /> 
)}

export default AnonRoute;