import React from 'react';
import "./Results.css";
import Synonyms from './Synonyms';
import Phonetics from './Phonetics';

export default function Result(props) { 
    if(props.result) {
        return (
        <div> 
        <div className='name'> <h3>{props.result.word} <span className='check'></span> </h3>
        <Phonetics phonetics={props.result.phonetics[0]} /></div>
        <div className='results'>
            {props.result.meanings.map((meaning, index) => { 
                return (
                    <div key={index}>
                         <em>
                        <div className='speech'>{meaning.partOfSpeech}</div>
                        </em>
                        <div className='definition mb-2'>{meaning.definitions[0].definition}</div>
                        <div className='example'>{meaning.definitions[0].example}</div>
                         <Synonyms synonyms={meaning.synonyms}/>
                        </div>)})}
                    </div>
                    </div>)
            
    } else {
        return null;
    }
}