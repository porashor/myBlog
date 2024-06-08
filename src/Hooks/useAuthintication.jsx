import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import app from '../firebase-config'
const useAuthintication = ({email, password}) => {
    const [user, setUser] = useState({});

    function hit(currentUser){
        setUser(currentUser)
    }


    useEffect(()=>{
        onAuthStateChanged(auth, hit);
    },[])
    const auth = getAuth(app);
    async function SignIn(){
        try{
            const user = await createUserWithEmailAndPassword(auth, email, password )
        }catch(err){
            console.log(err)
        }
    }
    async function LogIn(){
        try{
            const user = await signInWithEmailAndPassword(auth, email, password )
        }catch(err){
            console.log(err)
        }
    }
    async function LogOut(){
        signOut(auth)
    }
  return {user, SignIn, LogIn, LogOut}
}

export default useAuthintication
