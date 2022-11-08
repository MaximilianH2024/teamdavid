import React from 'react';
import './App.css';

import {auth, db} from "./firebase-config";
// import {useSignInWithGoogle} from "react-firebase-hooks/auth/dist/auth";
import {useSignInWithGoogle} from "react-firebase-hooks/auth";
import {collection} from "firebase/firestore";
import {useCollection} from "react-firebase-hooks/firestore";


function CreateUserInfo() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, loading, error] = useCollection(collection(db, "userEmails"));


  return <div>
    {(value) ? <div>
      {value.docs.map((obj) => (
        <div>
          <div>Gmail Address: {obj.data().email}</div>
          <div>Name: {obj.data().name}</div>
        </div>
      ))}





    </div> : <div>Loading...</div>}
  </div>
}


function App() {

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (


    <div className="App">
      <div className="headColor">
        <header id="App-header">L o g i n</header>
      </div>
      <h1 className="HeaderOne">Welcome! </h1>
      <h2 className="HeaderTwo">Please Login or Register an Account</h2>
      <body>
        <div className="Username">
          <form>
            <p id="UsernameText">Username: </p>
            <input type="text" placeholder='Username' id="UsernameInput"></input>
          </form>
        </div>
        <div className="Password">
          <form>
            <p id="PasswordText">Password: </p>
            <input type="text" placeholder='Password' id="PasswordInput" ></input>
          </form>
          {(user)?<div id="loginStatus">Logged in as: {user.user.displayName}</div>:<div id="loginStatus">Currently not logged in</div>}
        </div>
        <div className="LogInFeature">
          <button id="SignInButton"
            onClick={() => signInWithGoogle()}
          >  
            Login
          </button>
          <button id="RegisterButton"
            onClick={() => signInWithGoogle()}
          >  
            Register
          </button>
        </div>
        <div>
          <CreateUserInfo></CreateUserInfo>
        </div>
      </body>
    </div>
  );
}

export default App;