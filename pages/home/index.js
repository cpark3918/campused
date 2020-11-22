import React, {useState} from 'react';
import Header from '../../comps/Header';
import HeaderMenu from '../../comps/HeaderMenu';
import Footer from '../../comps/Footer';
import Browse_Button from '../../comps/Browse_Button';
import Button from '../../comps/Button';
import Router from 'next/router';
import Menu from '../../comps/Menu';


function clicktoleavein() {
  if (true) {
      Router.push("/home");
  }
}

function clicktofurniture() {
  if (true) {
      Router.push("/furnitre_market");
  }
}


export default function Home() {
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