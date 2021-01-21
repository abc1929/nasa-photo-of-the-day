import React from "react";
import styled from "styled-components";
// import theme from "../theme";
import ReactPlayer from "react-player";

const MediaDiv = styled.div`
   img {
      max-height: 50vh;
      border-radius: 10%;
      box-shadow: 0.3rem 0.2rem 0.5rem #111;
      transition: 0.3s;
   }

   img:hover {
      opacity: 0.66;
      transition: 0.3s;
      transition-delay: 0.2s;
      cursor: pointer;
   }
`;

export default function Media(props) {
   const { media_type, url } = props;
   if (media_type === "video") {
      return (
         <MediaDiv>
            <ReactPlayer url={url} controls={true}>
               {" "}
               {url}{" "}
            </ReactPlayer>
         </MediaDiv>
      );
   }
   return (
      <MediaDiv>
         <img
            src={url}
            alt="NASA stuff of the day"
            width="70%"
            onClick={() => window.open(url)}
         />
      </MediaDiv>
   );
}
