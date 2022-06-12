import React, { useState, useContext } from 'react';
import { AuthContext } from './index';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const Auth = useContext(AuthContext);
    const handleForm = e => {
        e.preventDefault();
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(res => {
                if (res.user) Auth.setLoggedIn(true)
            })
            .catch(e => {
                setError(e.message);
            })
    }

    const onLogin = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // Ini memberi Anda Token Akses Google. Anda dapat menggunakannya untuk mengakses Google API.
                var token = credential.accessToken;
                // Info pengguna yang masuk.
                var user = result.user;
                if (result.user) Auth.setLoggedIn(true);
            }).catch((error) => {
                console.log(error)
            });
    }


    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={e => handleForm(e)}>
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    name="email"
                    type="email"
                    placeholder="email"
                />
                <input
                    onChange={e => setPassword(e.target.value)}
                    name="password"
                    value={password}
                    type="password"
                    placeholder="password"
                />
                <hr />
                <button className='googleBtn' type="submit" onClick={onLogin}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                        alt="logo"
                    />
                    Login with Google
                </button>
                <button type='submit'>Login</button>
                <span>{error}</span>
            </form>
        </div>
    )
}

export default Login;