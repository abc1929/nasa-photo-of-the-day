import React, { useEffect } from "react";
import { Input } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import "./components.css";
import styled from "styled-components";
// import { render } from "@testing-library/react";

const NavbarDiv = styled.div`
   nav {
      width: 80vw;
      display: flex;
      justify-content: space-evenly;
   }

   Button {
      height: 30px;
      width: 60px;
      border: none;
      background-color: rgba(255, 255, 255, 0);
   }

   Button:hover {
      opacity: 0.7;
      cursor: pointer;
   }

   Button:active {
      opacity: 1;
      transform: translateY(4px);
   }
`;

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
      <NavbarDiv>
         <nav>
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
               placeholder="Jumpto: YYYY-MM-DD"
            ></Input>
            <div>
               <div className="spread" />
               <Button
                  className="rightbutton"
                  rightIcon={<ArrowRightIcon w={27} h={27} color="#555555" />}
                  onClick={() => {
                     goforward();
                  }}
               >
                  {" "}
               </Button>
            </div>
         </nav>
      </NavbarDiv>
   );
}
