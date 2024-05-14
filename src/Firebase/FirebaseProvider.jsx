import { createUserWithEmailAndPassword, linkWithCredential, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./FirebaseConfig";
import { GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import axios from "axios";


export const AuthContext = createContext(null)
const FirebaseProvider = ({children}) => {

    const[user, setUser] =useState(null);
    const[loading, setLoading]=useState(true);
    const googleProvider= new GoogleAuthProvider()
    const facebookProvider= new FacebookAuthProvider()

    const createUser=(email, password)=>{
        setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser=(name, photo)=>{
       return updateProfile(auth.currentUser, {
            displayName: name,
             photoURL: photo
          }
        )
    }

    const signIn=(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }

    const googleLogin=()=>{
        return signInWithPopup(auth, googleProvider)
    }


    const facebookLogin=()=>{
        return signInWithPopup(auth, facebookProvider)

    }

    useEffect( ()=>{
      const unSubscribe=  onAuthStateChanged(auth, currentUser=>{

        const userEmail= currentUser?.email || user?.email;

            console.log('user in the auth state change', currentUser);
            setUser(currentUser);
            setLoading(false);

            if(currentUser){
                const loggedUser={
                    email:userEmail
                }
                axios.post('http://localhost:5000/jwt',loggedUser, {WithCredentials:true})
                .then(res=>{
                    console.log('token response',res.data);
                })
            }
        })

        return ()=>{
            unSubscribe();
        }
    },[])









    const allValues={
        user,
        createUser,
        logOut,
        signIn,
        loading,
        googleLogin,
        facebookLogin,
        updateUser
    }
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;