import React,{useState} from 'react';
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
    console.log(response.data);
    setResult(response.data[0])
}
    return (
      <div className='form'>
        <form className='row' onSubmit={handleSubmit}>
            <input type="search" className='col-11' onChange={SearchedWord} placeholder='Search for a word...'  />
        </form>
        <Result result={result} />

      </div>
    )
}