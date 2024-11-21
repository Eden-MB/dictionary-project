import React, { useState, useEffect } from "react";
import axios from 'axios';
import Result from './Results';
import Images from './Images';
import './Results.css';

export default function DictionaryApp() {
const [keyWord, setKeyWord] = useState("");
const [result, setResult] = useState(null);
const [displayImage, setDisplayImage]= useState(false);



function SearchedWord(event) {
    event.preventDefault();
    setKeyWord(event.target.value);
}

function handleSubmit(event) {
    event.preventDefault();
    const url= `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(url).then(handleResponse);
    const imageApiKey = "25217620-0962b02e40893381d5c0d18e1"
    const imageUrl = `https://pixabay.com/api/?key=${imageApiKey}&q=${keyWord}&page=1&min_width=100`;
    axios.get(imageUrl).then(handleImageResponse);
}
function handleImageResponse(response) {
    setDisplayImage(response.data.hits);

}

function handleResponse(response) {
    setResult(response.data[0]);
}
    return (
      <div className='form'>
        <form className='row' onSubmit={handleSubmit}>
            <input type="search" className='col-11' onChange={SearchedWord} placeholder='Search for a word...'  />
        </form>
        <Result result={result} displayImage={displayImage}  />
        <Images displayImage={displayImage}  />
      </div>
    )
}