import React, {useState} from "react";
import axios from 'axios';

const Login = (props) => {
  const [login, setLogin] = useState({
    username: '',
    password: ''
  })
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    })
    console.log(login)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .post('http://localhost:5000/api/login', login)
    .then(res => {
      console.log(res);
      window.localStorage.setItem('token', res.data.payload)
    })
  }


  return (
    <>
    <h1>Welcome to the Bubble App!</h1>
    <form onSubmit={handleSubmit}>
      <h2>User Name</h2>
      <input
      type="text"
      name="username"
      label="username"
      value={login.username}
      onChange={handleChange}
      className="input"
      >
    </input>

    <h2>Password</h2>
      <input
      type="text"
      name="password"
      label="password"
      value={login.password}
      onChange={handleChange}
      className="input"
      >
    </input>
    <button>Login</button>

    </form>
    


   </>

  );
};

export default Login;
