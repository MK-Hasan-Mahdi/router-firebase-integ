import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
// import useFirebase from '../../hooks/useFirebase';

const auth = getAuth(app)

const Home = () => {
    const [user] = useAuthState(auth)
    // const { user } = useFirebase();
    return (
        <div>
            <h1>This is Home</h1>
            <p>Current User: {user ? user.displayName : 'User not using now'}</p>
        </div>
    );
};

export default Home;