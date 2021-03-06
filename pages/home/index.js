import React, {useState} from 'react';
import Header from '../../comps/Header';
import HeaderMenu from '../../comps/HeaderMenu';
import Footer from '../../comps/Footer';
import Browse_Button from '../../comps/Browse_Button';
import Button from '../../comps/Button';
import Router from 'next/router';
import jwtDecode from 'jwt-decode';
import Axios from 'axios';
import {useAuth} from '../../auth';

if (process.browser){
  const token = localStorage.FBIdToken

if(token) {
  const decodedToken = jwtDecode(token);
  console.log(decodedToken);
  Axios.defaults.headers["Authorization"] = `${token}`;
}
}


function clicktoleavein() {
  if (true) {
      window.location.replace('/leave-in');
  }
}

function clicktofurniture() {
  if (true) {
    window.location.replace('/furniture-market');
  }
}
function getUserData() {
 Axios.get('https://us-central1-campused-15cf0.cloudfunctions.net/api/user')
 .then(res => {
  //  console.log(res.data)
 })
 .catch(err => console.log(err))
}



export default function Home() {
    const {user} = useAuth();
    console.log("user data", user)
    return  <div className="page">

        <Header />
        <HeaderMenu />
        <div className="home_header">
        <h2>Welcome to campused!</h2>
        </div>
      

         <div className="main_part1">
         
        

           
          <img src="/userpost4.png"></img>
          <div>
          <p>Get your furniture without having to move a single piece! <br/>Student furniture can be left in the campus dorm for the next person to use.</p>
         <Button text="Check it out" onClick={clicktoleavein}/>
          </div>
        </div>
 
        <div className="main_part2">
        <div>
        <p>Tired of searching through several websites for the cheapest deals? <br/>Find the furniture you’re looking for all under $100!</p>       
       <Browse_Button text="Go to Furniture Market"  bgcolor="#73BFB8" onClick={clicktofurniture}/>
        </div>
       <img src="/userpost3.png"></img>
       </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
  }