import { useContext } from "react";
import { AuthContext } from "./ProviderRouter";
import { Navigate } from 'react-router-dom'

const PrivetRoute = ({children}) => {
const {user, loading} = useContext(AuthContext );
if(loading){
    return <div
    className=" mx-auto inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
    role="status">
    <span
      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Loading...</span
    >
  </div>
}
if(user){
    return children;
}
    return <Navigate to='/login' state={{from: location}} replace={true}></Navigate>
};

export default PrivetRoute;