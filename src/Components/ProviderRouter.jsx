import { createContext, useEffect, useState, } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { app } from "../../firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const GoogleProvider = new GoogleAuthProvider()

const ProviderRouter = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password )
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        return signInWithPopup(auth, GoogleProvider);
    }

    const logOut = ()=>{
        return signOut(auth)
    }

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (userr) => {
            setUser(userr)
            setLoading(false)
        });
        return () =>
            unsub()
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        googleLogin,
        logOut,
    }

    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default ProviderRouter;