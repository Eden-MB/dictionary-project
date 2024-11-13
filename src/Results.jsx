import React from 'react';
import "./Results.css";
import Synonyms from './Synonyms';

export default function Result(props) {
    console.log(props.result)
    if(props.result) {
        return (
        <div className='results'>
            <h3>{props.result.word}</h3>
            {props.result.meanings.map((meaning, index) => { 
                return (
                    <div key={index}>
                         <b><em>
                        {meaning.partOfSpeech}
                        </em></b>
                        <br/>
                        <strong>Definition:</strong>{meaning.definitions[0].definition}
                        <br/><br/>
                        <Synonyms synonyms={meaning.synonyms}/>

                        </div>)})}
                    </div>)
            
    } else {
        return null;
    }
}