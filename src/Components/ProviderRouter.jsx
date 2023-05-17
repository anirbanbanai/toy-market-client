import { createContext, } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { app } from "../../firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const GoogleProvider = new GoogleAuthProvider()

const ProviderRouter = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = ()=>{
         return signInWithPopup(auth, GoogleProvider);
    }

    const authInfo = {
        createUser,
        loginUser,
        googleLogin,
    }

    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default ProviderRouter;