import { Route, Redirect } from 'react-router-dom';


const AnonRoute = ({ component, authentication, ...rest }) => {
    const ComponentToRender = component;
    const { isLoggedIn, isLoading } = authentication;

    if (isLoading) return <>Loading</>;

    return (
   <Route
    {...rest}
    render={
        function(props) {
          if (isLoggedIn) return <Redirect to="/private" />
          else if (!isLoggedIn) return <ComponentToRender {...props} />
        }
      }
   /> 
)}

export default AnonRoute;