import React,{useState} from 'react';
import "./DictionaryApp.css"

export default function DictionaryApp() {
const [keyWord, setKeyWord] = useState("");

function SearchedWord(event) {
    event.preventDefault();
    setKeyWord(event.target.value);
}

function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${keyWord}`)
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