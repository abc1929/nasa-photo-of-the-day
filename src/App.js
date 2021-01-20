import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/card.js";
import Navbar from "./components/navbar.js";
import { APIKEY } from "./private/apikey";
import dayjs from "dayjs";

import "./App.css";

var customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

export default function App() {
   const [details, setDetails] = useState([]);
   const [date, setDate] = useState("");
   const [currentdate, setCurrentdate] = useState("");

   const goforward = () => {
      setDate(dayjs(date).add(1, "day").format("YYYY-MM-DD"));
   };

   const goback = () => {
      setDate(dayjs(date).subtract(1, "day").format("YYYY-MM-DD"));
   };

   useEffect((e) => {
      axios
         // https://api.nasa.gov/planetary/apod?api_key=
         //"&date="
         .get("https://api.nasa.gov/planetary/apod?api_key=" + APIKEY)
         .then((res) => {
            setDetails(res.data);
            setCurrentdate(res.data.date);
            setDate(res.data.date);
            // console.log(res);
         })
         .catch((err) => console.log("error occured: " + err));
   }, []);

   useEffect(
      (e) => {
         axios
            // https://api.nasa.gov/planetary/apod?api_key=
            //"&date="
            .get(
               "https://api.nasa.gov/planetary/apod?api_key=" +
                  APIKEY +
                  "&date=" +
                  date
            )
            .then((res) => {
               setDetails(res.data);
               //  console.log(res);
            })
            .catch((err) => console.log("error occured: " + err));
      },
      [date]
   );

   useEffect(() => {
      const inputfield = document.querySelector(".datefield");
      inputfield.addEventListener("keyup", ({ key }) => {
         //  console.log(dayjs(inputfield.value, "YYYY-MM-DD", true).isValid());
         //  console.log(dayjs(inputfield.value, "YYYY-MM-DD"));
         if (
            key === "Enter" &&
            dayjs(inputfield.value, "YYYY-MM-DD", true).isValid()
         ) {
            setDate(inputfield.value);
         } else {
            // tbd: currently when in alert, pressing enter would trigger it again, maybe we can implement some better stuff
            if (key === "Enter") {
               alert("please input valid dates in the format of YYYY-MM-DD");
            }
         }
      });
   }, []);

   if (!details) return <h3>Loading...</h3>;
   //  debugger;
   return (
      <div className="App">
         {/* {console.log(date)} */}
         <h1> NASA Photo of the Day </h1>
         <Navbar
            currentdate={currentdate}
            date={date}
            goforward={goforward}
            goback={goback}
         />
         <Card details={details} />
      </div>
   );
}
