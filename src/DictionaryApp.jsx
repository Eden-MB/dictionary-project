import React,{useState} from 'react';
import "./DictionaryApp.css"
import axios from 'axios';
import Result from './Results';

export default function DictionaryApp() {
const [keyWord, setKeyWord] = useState("");
const [result, setResult] = useState(null);

function SearchedWord(event) {
    event.preventDefault();
    setKeyWord(event.target.value);
}

function handleSubmit(event) {
    event.preventDefault();
    const url= `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(url).then(handleResponse)
}
function handleResponse(response) {
    setResult(response.data[0])
}
    return (
      <div>
        <form className='row' onSubmit={handleSubmit}>
            <input type="search" className='col-9' onChange={SearchedWord} placeholder='Search for a word...'  />
            <button className='col-2' >Search</button>
        </form>
        <Result result={result} />
      </div>
    )
}