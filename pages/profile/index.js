import React, {useState, useEffect} from 'react';
import Header from '../../comps/Header';
import HeaderMenu from '../../comps/HeaderMenu';
import Footer from '../../comps/Footer';
import Button from '../../comps/Button';
import ProfileSlider from '../../comps/ProfileSlider';
import Profile from '../../comps/Profile';
import ProfilePost from '../../comps/ProfilePost';
import Rating from '../../comps/Rating';
import ExpandedMenu from '../../comps/ExpandedMenu';

import Router from 'next/router';
import axios from 'axios';

function createListing(){
  if(true){
    Router.push("/create-a-listing");
  }
}

export default function ProfilePage() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [user, setUser] = useState([]);

  // const handleProfile = async () =>{
  //     console.log("clicked", name, image);

  //     var resp = await axios.get("https://us-central1-campused-15cf0.cloudfunctions.net/api/user/");

  //     console.log(resp.data);

  //     setName(resp.data.name);
  //     setImage(resp.data.imageUrl);
  // }

  useEffect(() => {
    // if []. run once when the row loads, and don't run again
      async function fetchData() {
        var resp = await axios.get("https://us-central1-campused-15cf0.cloudfunctions.net/api/user/");

        // console.log(resp.data);

        // setName(resp.data.name);
        // setImage(resp.data.imageUrl);
        setUser([resp.data]);
        return console.log(resp.data.credentials.email);
      }
      fetchData();
     }, []);

  const [sold, setSold] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [building, setBuilding] = useState("");
  const [desc, setDesc] = useState("");
  const [dormnum, setDormnum] = useState("");
  const [furniture, setFurniture] = useState(false);
  const [leavein, setLeavein] = useState(false);
  const [category, setCategory] = useState("");

  const handleMenu = async (str) =>{
      if (str==="marksold"){
          setSold(true);
      } else if (str === "edit"){
          Router.push("/edit-listing");
          console.log("clicked");

      } else if (str === "delete"){
        setDeleted(true);

        await axios.delete("https://us-central1-campused-15cf0.cloudfunctions.net/api/post/");
      } 
  }

  
console.log(user);
  return  <div className="page">
      <Header />
      <HeaderMenu />
      <div className="profile">
        {user.map((o)=>{
        <Profile name={o.name}
        icon={o.image}
        />})}
        <div className="rating">
          <Rating />
        </div>
        {/* testing out async call: */}
        {/* <Button onClick={handleProfile}/> */}
        <Button onClick={createListing} bgcolor="#3DA5D9" color="#FFF" text="Make a listing" fsize="24px"/>
      </div>
      <ProfileSlider />
      <div className="profile_post">
        <div className="profile_post_list">
          <ProfilePost sold={sold}/>
          <ExpandedMenu onMenuSelect={handleMenu}/>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
}