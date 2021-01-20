import React, { useEffect } from "react";
import { Input } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import "./components.css";

export default function Navbar(props) {
   const date = props.date;
   const currentdate = props.currentdate;
   const goback = props.goback;
   const goforward = props.goforward;

   useEffect(() => {
      if (currentdate === date) {
         document.querySelector(".rightbutton").style.display = "none";
      } else {
         document.querySelector(".rightbutton").style.display = "initial";
      }
   }, [date, currentdate]);

   return (
      <div>
         <nav className="navbar">
            <Button
               leftIcon={<ArrowLeftIcon w={27} h={27} color="#555555" />}
               onClick={() => {
                  goback();
               }}
            >
               {" "}
            </Button>
            <Input
               className="datefield"
               placeholder="Date Format YYYY-MM-DD"
            ></Input>
            <Button
               className="rightbutton"
               rightIcon={<ArrowRightIcon w={27} h={27} color="#555555" />}
               onClick={() => {
                  goforward();
               }}
            >
               {" "}
            </Button>
         </nav>
      </div>
   );
}
