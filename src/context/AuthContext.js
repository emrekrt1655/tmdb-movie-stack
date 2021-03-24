import React, {createContext, useState, useEffect} from 'react'
import firebase from '../firebase/firebase.utils'
export const FireBaseAuthContext = createContext()
function AuthContextProvider(props) { 
    const [currentUser, setCurrentUser] = useState(false);
    useEffect(()=> {
        firebase.firebaseAuth.onAuthStateChanged((user)=> {
            setCurrentUser(user);
        });
    }, []);
    return (
        <FireBaseAuthContext.Provider value={{currentUser}}>
           {props.children} 
        </FireBaseAuthContext.Provider>
    )
}

export default AuthContextProvider
