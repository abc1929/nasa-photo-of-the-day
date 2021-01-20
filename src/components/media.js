import React from "react";

export default function Media(props) {
   const { media_type, url } = props;
   if (media_type === "video") {
      return (
         <div>
            <video src={url}></video>
         </div>
      );
   }
   return (
      <div>
         <img src={url} alt="NASA stuff of the day" width="70%" />
      </div>
   );
}
