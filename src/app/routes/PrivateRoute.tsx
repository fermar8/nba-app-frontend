import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component, authentication, ...rest }) => {
    const ComponentToRender = component;
    const { isLoggedIn, isLoading } = authentication;

    if (isLoading) return <>Loading</>;
    return (
   <Route
    {...rest}
    render={ props => isLoggedIn ? <ComponentToRender {...props} />
    : <Redirect to='/' /> }
   /> 
)}

export default PrivateRoute;