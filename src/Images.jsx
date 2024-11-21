import React from "react";
import "./Results.css";




export default function Images(props) {
    if(props.displayImage) {
        return (
            <div className="row photoes mb-4 ">
                {props.displayImage.map((image, index) => <div className="col-3  m-3 " key={index} > <a href={image.pageURL} target="_blank"><img src={image.largeImageURL} className="img-fluid" key={image.id} /></a></div>)}
            </div>
        )
    } else {
        return null;
    }
}