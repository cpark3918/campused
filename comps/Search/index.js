import React, {useState} from 'react';
import styled from 'styled-components';

import searchicon from '../../public/search.svg';

const Main = styled.div`
width: 100%;
-webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

`;

const Container = styled.div`
    background: #F5F5F5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
`;

const SearchBar = styled.input`
    padding: 20px 0px 20px 0px;
    border: 2px solid black;
    border-radius: 16px;
    width: 70%;
    margin: 22px;
    outline: none;
    ::placeholder {
        font-family: 'Assistant', sans-serif;
        text-indent: 20px;
    }
    font-family: 'Assistant', sans-serif;
    ::-webkit-input-placeholder {text-indent:20px!important;}
    :-moz-placeholder { text-indent:20px!important;}
    ::-moz-placeholder {text-indent:20px!important;}
    :-ms-input-placeholder {text-indent:20px!important;}
`;

const Icon = styled.img`
    width: 100%;
    height: 100%;
`;

const IconContainer = styled.div`
    max-width: 70px;
    max-height: 70px;
    position: absolute;
    margin-right: 40px;
`;

const SearchContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    position:relative;
`;

const Search = () =>{
    return <Main>

    <Container>
        <SearchContainer>

        <SearchBar placeholder='Search...'></SearchBar>

        <IconContainer>
            <Icon src={searchicon} />
        </IconContainer>

        </SearchContainer>
        

        </Container>
   
   </Main>
   }

   
   
   export default Search;