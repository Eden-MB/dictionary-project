import React,{useState} from 'react';
import "./DictionaryApp.css"
import axios from 'axios';

export default function DictionaryApp() {
const [keyWord, setKeyWord] = useState("");

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
    console.log(response.data)
}
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="search" placeholder='Type a word...' onChange={SearchedWord}/>
                <button>Search</button>
            </form>
        </div>
    )
}