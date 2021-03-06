import React, {useState} from 'react';
import Button from '../comps/Button';
import InputwIcon from '../comps/InputwIcon';
import Alert from '../comps/Alert';


import axios from 'axios';
import Router from 'next/router';

import {useAuth} from '../auth'


function clickSignup(){
  if(true){
    Router.push("/signup");
  }
}

// function clickLogin(){
//   if(true){
//     Router.push("/home");
//     // add in useEffect / animations
//   }
// }

export default function Start() {
  const {setUser} = useAuth();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[loading,setLoading] = useState(true);
  const [error, setError] = useState(false);
  const HandleLogin = async (e)=>{

   e.preventDefault();
  
   const userData ={
     email: email,
     password: password
     
   };
   axios
    .post("https://us-central1-campused-15cf0.cloudfunctions.net/api/login", userData)
    .then(async (res) => {
      // console.log(res.data);
      localStorage.clear();
      const FBIdToken = `Bearer ${res.data.token}`
      localStorage.setItem('FBIdToken', FBIdToken);
      axios.defaults.headers.common["Authorization"] = FBIdToken
      setLoading(false);
      const resp = await axios.get("https://us-central1-campused-15cf0.cloudfunctions.net/api/user/")
      // console.log(resp)
      if (resp.data) setUser(resp.data);
      Router.push("/home");
    })

  }

  return  <div className="page">
    <div className="page_start">
      <img className="home_logo"src="/logo_colour.png"/>
      <InputwIcon placeholder="Email address" title="Log in" onChange={(e)=>{
        setEmail(e.target.value);
      }}/>
      <InputwIcon icon="/lock.png" placeholder="Password" type="password" title="" onChange={(e)=>{
        setPassword(e.target.value);
      }}/>
      <p>Don't have an account? Click here to <a href="/signup" onClick={clickSignup}>create an account.</a></p>
      {error == true ? 
      <Alert 
      text="Your email or password does not match."/>
      : null}
      <Button text="Log In" bgcolor="#73BFB8" onClick={HandleLogin} />
    </div>
    </div>
}