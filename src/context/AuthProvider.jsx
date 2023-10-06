import React, { createContext, useEffect, useState } from 'react';
import { Children } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebaseConfig';
import { GoogleAuthProvider } from "firebase/auth";


const auth = getAuth(app);
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , user =>{
            setUser(user)
            setLoading(false)
        })
        return () =>{
            unsubscribe()
        }
    },[])

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const googleLogIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const logIn =(email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut =() =>{
        return signOut(auth)
    }
    

    const authInfo = {
        googleLogIn,
        createUser,
        logIn,
        logOut,
        user,
        loading,
    }


    return (
       <AuthContext.Provider value={authInfo} >
        {children}
       </AuthContext.Provider>
    )
};

export default AuthProvider;