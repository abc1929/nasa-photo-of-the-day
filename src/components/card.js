import React from "react";
import Media from "./media.js";
import "./components.css";

export default function Card(props) {
   const { date, explanation, media_type, title, url } = props.details;
   return (
      <div className="card">
         <title>{title}</title>
         <h3> Date: {date} </h3>
         <Media
            className="mediabox"
            // hdurl={hdurl}
            media_type={media_type}
            url={url}
         >
            {" "}
         </Media>
         <p className="textbox"> {explanation} </p>
      </div>
   );
}
