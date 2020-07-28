import  React, {useContext} from 'react';
import {
    Route,
    Redirect,
    RouteProps,
} from 'react-router-dom';
import AuthContext from '../contexts/auth/auth';

interface PrivateRouteProps extends RouteProps {
    component: any;    
}

const PrivateRoute = (props: PrivateRouteProps) => {
    const { component: Component, ...rest } = props;
    const {signed} = useContext(AuthContext);

    return (
        <Route
            {...rest}
            render={(routeProps) =>
                signed ? (
                    <Component {...routeProps} />
                ) : (
                        <Redirect
                            to={{
                                pathname: '/signin',
                                state: { from: routeProps.location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;