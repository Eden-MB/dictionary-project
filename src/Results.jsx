import React from 'react';

export default function Result(props) {
    console.log(props.result)
    if(props.result) {
        return (
        <div>
            <h3>{props.result.word}</h3>
            {props.result.meanings.map((meaning, index) => { 
                return (
                    <div key={index}>
                         <b><em>
                        {meaning.partOfSpeech}
                        </em></b>
                        <br/>
                        {meaning.definitions[0].definition}
                        <br/><br/>
                        </div>)})}
                    </div>)
            
    } else {
        return null;
    }
}