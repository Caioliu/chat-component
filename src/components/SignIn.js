import React from 'react';
import firebase from 'firebase/compat/app';
import {auth} from '../firebase.js';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';


function SignIn() {
    function SignInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithRedirect(provider);
};
    
  return (
    <button onClick={SignInWithGoogle}>Sign In With Google</button>
  )
}



export default SignIn