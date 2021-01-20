import React, { useState, useEffect } from "react";
import axios from "axios";
import Media from "./media.js";
import "./components.css";

export default function Card(props) {
   const {
      date,
      explanation,
      hdurl,
      media_type,
      service_version,
      title,
      url,
   } = props.details;
   return (
      <div className="card">
         <h1> NASA Photo of the Day </h1>
         <title>{title}</title>
         <h3> Date: {date} </h3>
         <Media
            className="mediabox"
            hdurl={hdurl}
            media_type={media_type}
            url={url}
         >
            {" "}
         </Media>
         <p className="textbox"> {explanation} </p>
      </div>
   );
}
