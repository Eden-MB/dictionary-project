import React from "react";
import './Synonyms.css';
export default function Synonyms(props) {
   if(props.synonyms) {
    return (
        <div className="synonyms">
            {props.synonyms.map((synonym) =>  <li>{synonym}</li>)}
        </div>
    )
   }else {
    return null;
   }
}