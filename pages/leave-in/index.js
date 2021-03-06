import React, { useState, useQuery, useEffect } from 'react';
import Header from '../../comps/Header';
import HeaderMenu from '../../comps/HeaderMenu';
import Footer from '../../comps/Footer';
import Category from '../../comps/Category';
import Post from '../../comps/Post';
import Button from '../../comps/Button';
import FilterOpen from '../../comps/FilterOpen';
import CircleButton from '../../comps/CircleButton';
import Item from '../../comps/Item';
import DropdownFurn from '../../comps/DropdownFurn';
import Menu from '../../comps/Menu';


import Router from 'next/router';
import Link from 'next/link';

import axios from 'axios';
// import { info } from 'node-sass';

function createAListing() {
  console.log("clicked");
  Router.push("/create-a-listing");
}

function ProductPage(data) {
  console.log("clicked");
  Router.push(`/Product/:${data.postId}`);
}

export default function Leavein() {

  const [post, setPost] = useState([]);



  useEffect(() => {
    // if []. run once when the row loads, and don't run again
    async function fetchData() {
      const request = await axios.get("https://us-central1-campused-15cf0.cloudfunctions.net/api/getPost");
      console.log(request);
      setPost(request.data);

      return request;

    }
    fetchData();

  }, []);
  //  [post] will update every time there is an update in post
  console.log(post)


  return <div className="page">

    <Header />
    <HeaderMenu leaveintextcolor={"#EA7317"} />
    <div className="page_home">
      <div className="col-4 menu">
        <div>
          <DropdownFurn fontweight={800} font={"'Montserrat', sans-serif"} name1={"Brock Hall"} name2={"Walter Gage"} name3={"Ponnderosa"} name4={"Thunderbird"} />
          {/* <Category name1="Brock Hall" name2="Walter Gage" name3="Ponnderosa" name4="Thunderbird"/> */}
        </div>

        {process.browser && window.innerWidth > 940 ? <div className="filterdesktop"><FilterOpen /> <div className="addlisting">
          <Button text="Run Filter" ></Button>
          <Button center="center" text="+ Add a Listing" color="#FFF" bgcolor="#3DA5D9" fsize="26px" onClick={createAListing} />
        </div></div> : null}

        {process.browser && window.innerWidth < 940 ? <div className='mainmobile'> <div className='mobilecontainer'> <div className='mobileadd'>
          <FilterOpen /><CircleButton icon="/addblack.svg" iconwidth="50px" width="50px" height="50px" onClick={createAListing} /></div> </div> </div> : null}
      </div>


      <div className="col-3 right">
        <div className="Fullstack">
          <div className="post">
            <div className="post_list">
              <h3>Recent Posts</h3>
              {post.map(info => (
                <Link href={{
                  pathname:"/product",
                  query:{postId: info.postId}
                }}>
                <div>
                  {/* <Post imgurl={info.photoUrl} price={info.price} title={info.title}/> */}
                  <Item imgurl={info.imageUrls} price={info.price} title={info.title} onClick={ProductPage} />

                  {/* <div>{info.building}</div>
                <h1>{info.title}</h1>
                <img src={info.photoUrl} alt="uploadedimg" height="150" width="150" />
                <div>{info.price}</div>
                <div>{info.dormRoom}</div> */}
                </div>
                </Link>
              ))}</div>
          </div>

        </div>
      </div>


    </div>

    <div className="footer">
      <Footer />
    </div>
  </div>
}