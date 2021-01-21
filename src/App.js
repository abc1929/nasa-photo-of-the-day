import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/card.js";
import Navbar from "./components/navbar.js";
import { APIKEY } from "./private/apikey";
// need a apikey to test the project
import dayjs from "dayjs";
import styled from "styled-components";
// import { keyframes } from "styled-components";
import "./App.css";

var customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

// const kf = keyframes`
// 100% {
//   opacity: 1;
//   transform: scale(1);
// }`;

const MainDiv = styled.div`
   text-align: center;
   display: flex;
   align-items: center;
   flex-direction: column;
   justify-content: center;
   font-family: "roboto";
`;

const Logo = styled.span`
   display: inline-block;
   margin-right: 30px;
   background: url(${process.env.PUBLIC_URL + "/NASA_Worm_logo.svg"}) 50% 50%
      no-repeat;
   background-size: 100% 100%;
   width: 2em;
   transform: scale(1.8);

   text-indent: -9999px;
`;

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
      <MainDiv
         onLoad={(e) => {
            // this pulls the card component
            const card = e.currentTarget.children[2];
            card.animate(
               [
                  // keyframes
                  { opacity: 0 },
                  { opacity: 0.5 },
                  { opacity: 1 },
               ],
               {
                  // timing options
                  duration: 200,
                  iterations: 1,
               }
            );
            card.style.opacity = 1;
         }}
      >
         {/* {console.log(date)} */}
         <h1>
            {" "}
            <Logo>NASA</Logo> Photo of the Day{" "}
         </h1>
         <Navbar
            currentdate={currentdate}
            date={date}
            goforward={goforward}
            goback={goback}
         />{" "}
         <Card details={details} />{" "}
      </MainDiv>
   );
}
