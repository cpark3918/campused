import React, {useState} from 'react';
import styled from 'styled-components';
import Button from "../Button/index";
import Router from "next/router";
// var photo = require('../../public/photo.png');

const Container = styled.div`
    width:80%;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 30px;

`;

const Image_Box = styled.div`
    // min-width: 185px;
    // min-height: 205px;
    // margin-bottom:5px;
`;


const Item_Image = styled.img`    
    // width: 100%;
    // height: 100%;
    max-width: 400px;
    @media (max-width: 375px){
        max-width: 250px;
        margin-left:10px;
    }
    height: auto;
    border: 2px solid #9A9A9A;
    border-radius: 16px;
    filter: drop-shadow(1px 2px 3px rgba(0, 0, 0, 0.26));
    // box-sizing: border-box;
    // background-size: cover;
    // background-position: center;
    object-fit:cover;
    margin:0;
    padding:0;
    // if imgurl = null, display none
`;

const Item_Title = styled.h4`
    color:#18191F;
    margin:5px 5px 0px 0px;
    word-wrap: break-word;
    text-transform: initial;
    @media (max-width: 375px){
        
        margin-left:10px;
    }
`;

const Item_Price = styled.h6`
    // font-family: 'Montserrat', sans-serif;
    margin:5px 0px;
    color:#474A57;
    @media (max-width: 375px){
        
        margin-left:10px;
    }
`;




const Item = ({title, price, imgurl, postId, onChange}) => {

    return <Container>
        {imgurl ? <Image_Box>
            <Item_Image src={imgurl}/>
        </Image_Box> : null}  
         <Item_Title>
             {title}
         </Item_Title>
         <Item_Price>
             {price}
         </Item_Price>
    </Container>

}

Item.defaultProps = {
   
    title:"UBC Dorm Room 12",
    price:"$100",
    imgurl: null,
    onChange:()=>{}
}


export default Item;