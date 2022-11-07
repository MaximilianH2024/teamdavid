import React from 'react';
import './App.css';

import {auth} from "./firebase-config";
// import {useSignInWithGoogle} from "react-firebase-hooks/auth/dist/auth";
import {useSignInWithGoogle} from "react-firebase-hooks/auth"

function App() {

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (


    <div className="App">
      <div className="headColor">
        <header id="App-header">Login</header>
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
      </body>
    </div>
  );
}

export default App;