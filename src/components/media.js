import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Media(props) {
   const { hdurl, media_type, url } = props;
   if (media_type === "video") {
      return (
         <div>
            <video src={url}></video>
         </div>
      );
   }
   return (
      <div>
         <img src={url} alt="Photo of the day" width="70%" />
      </div>
   );
}
