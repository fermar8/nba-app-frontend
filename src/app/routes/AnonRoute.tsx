import { Route, Redirect } from 'react-router-dom';


const AnonRoute = ({ component, authentication, ...rest }) => {
    const ComponentToRender = component;
    const { isLoggedIn } = authentication;

    return (
   <Route
    {...rest}
    render={
        function(props) {
          if (isLoggedIn) return <Redirect to="/main" />
          else if (!isLoggedIn) return <ComponentToRender {...props} />
        }
      }
   /> 
)}

export default AnonRoute;