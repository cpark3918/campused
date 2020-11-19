import React, {useState} from 'react';
import Header from '../../comps/Header';
import HeaderMenu from '../../comps/HeaderMenu';
import Footer from '../../comps/Footer';
import Category from '../../comps/Category';
import Post from '../../comps/Post';
import Button from '../../comps/Button';
import FilterOpen from '../../comps/FilterOpen';

import Router from 'next/router';

import axios from 'axios';

function createAListing() {
  console.log("clicked");
    Router.push("/create-a-listing");
}

export default function Home() {

  const [post, setPost] = useState("");

  const HandlePost = async ()=>{

    console.log("clicked");

      console.log("");
      var resp = await axios.get("https://us-central1-campused-15cf0.cloudfunctions.net/api/getPost");

      // console.log("Failed");

     console.log(resp.data);
    // Router.push("/home");
  }

  return  <div className="page">
       <Header />
      <HeaderMenu />
      <div className="page_home">
          <div className="page_left">
            <div>
              <Category />
              {/* <Button onClick={HandlePost} /> */}
            </div>

            {process.browser && window.innerWidth > 940 ?<div className="filterdesktop"><FilterOpen /> <div className="addlisting">
            <Button center="center" text="+ Add a Listing" color="#FFF" bgcolor="#3DA5D9" fsize="26px" onClick={createAListing}/>
            </div></div>:null}

            {process.browser && window.innerWidth < 940 ? <div className='mobilecontainer'> <div className='mobileadd'>
            <FilterOpen /><CircleButton icon="/addblack.svg" iconwidth="40px" width="50px" height="50px" onClick={createAListing} /></div> </div> :null}


          </div>
          <div className="page_right">
              <Post />
          </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
}