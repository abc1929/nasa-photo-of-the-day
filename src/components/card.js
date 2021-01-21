import React from "react";
import Media from "./media.js";
import "./components.css";
import styled from "styled-components";
import theme from "../theme";

const CardDiv = styled.div`
   opacity: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   width: 70%;
   max-width: 800px;
   border: 1px solid black;
   margin: 2% 4%;
   font-weight: 300;
   color: ${theme.fontcolor};
   border-radius: 16px;
   background-color: ${theme.cardcolor};
   box-shadow: 1rem 0.6rem 1.2rem #111;

   h3 {
      text-shadow: 2px 2px black;
   }

   p {
      padding: 5%;
      text-shadow: 1.5px 1.5px black;
   }
`;

export default function Card(props) {
   const { date, explanation, media_type, title, url } = props.details;
   return (
      <CardDiv>
         <title>{title}</title>
         <h3> Date: {date} </h3>
         <Media
            style={{ width: "75%" }}
            // hdurl={hdurl}
            media_type={media_type}
            url={url}
         >
            {" "}
         </Media>
         <p> {explanation} </p>
      </CardDiv>
   );
}
