import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/card.js";
import { APIKEY } from "./private/apikey";
import "./App.css";

export default function App() {
   const [details, setDetails] = useState([]);

   useEffect((e) => {
      axios
         // https://api.nasa.gov/planetary/apod?api_key=
         .get("https://api.nasa.gov/planetary/apod?api_key=" + APIKEY)
         .then((res) => {
            setDetails(res.data);
            console.log(res);
         })
         .catch((err) => console.log("error occured: " + err));
   }, []);

   if (!details) return <h3>Loading...</h3>;
   //  debugger;
   return (
      <div className="App">
         {console.log(details)}
         <Card details={details}></Card>
      </div>
   );
}
