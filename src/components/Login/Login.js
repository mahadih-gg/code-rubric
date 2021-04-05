import React, { useContext } from 'react';
import './Login.css'
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import googleLogo from '../../images/google.png'
import { UserContext } from '../../App';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}
const Login = () => {

    const [user, setUser] = useContext(UserContext)

    const handleGoogleLogIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                var user = result.user;
                setUser(user)
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode, errorMessage, email, credential);
            });
    }


    return (
        <div className="container pb-5">
            <h1 className="text-center my-3">Log In</h1>
            <h4 className="text-center mb-5">Let me know who are you? It's only for my self satisfaction.</h4>
            <hr />
            <div className="log-in p-5 w-50 m-auto">
                <div className="mb-3">
                    <button onClick={handleGoogleLogIn} className="btn mb-3 m-auto d-block google"><img src={googleLogo} alt="" /> Login with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;