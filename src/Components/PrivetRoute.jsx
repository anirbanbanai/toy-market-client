import { useContext } from "react";
import { AuthContext } from "./ProviderRouter";
import { Navigate } from 'react-router-dom'

const PrivetRoute = ({children}) => {
const {user, loading} = useContext(AuthContext );
if(loading){
    return <h2>Loading</h2>
}
if(user){
    return children;
}
    return <Navigate to='/login' state={{from: location}} replace={true}></Navigate>
};

export default PrivetRoute;