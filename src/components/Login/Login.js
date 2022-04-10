import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app)

const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth)
    return (
        <div>
            <h2>please login</h2>
            <div style={{ margin: '20px' }}>
                <button onClick={() => signInWithGoogle()}>Google Sign In</button>
            </div>
            <input type="email" name="" id="" placeholder='Your Email' />
            <br />
            <input type="password" name="" id="" placeholder='Password' />
            <br />
            <input type="submit" value="Login" />
        </div>
    );
};

export default Login;