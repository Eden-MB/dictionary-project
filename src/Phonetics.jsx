import React from "react";
import './Results.css';

export default function Phonetics(props) {
    return (
        <div className="phonetics">{props.phonetics.text}</div>
    )
}