import React from 'react';
import { useState } from 'react';
import {motion} from "framer-motion"
import styled from 'styled-components';
import arrow from "./akar-icons_arrow-up.png"
export const MyAccordian = ({question,answer}) => {

    const [show, setShow] = useState(false);
    const[IsOpend,setIsOpend]=useState(false);
    const iconVariants =
     {
    opened:{
      rotate:180,
      
    },
    closed:{
    rotate:0,
    scale:1
    }
  };
  return (
   
   

    <Main>
        <Question>
        {question}
        </Question>
        
        <Ans>
           

        {show && <div>{answer}</div>}
        <motion.div
       variants={iconVariants}
       animate={IsOpend? "opened":"closed"}
      
       onClick={()=> { setIsOpend(state =>!state); setShow(!show) ;}}
       >
          <img src={arrow} />
       </motion.div>
        </Ans>
       
      </Main>



  );
};

const Main=styled.div`


margin-left:200px;
margin-right:200px;
padding:20px 20px;
border-bottom:solid white 2px;
`;
const Question=styled.div`
display:flex;
font-family: DM Sans;
font-size: 36px;
font-style: normal;
font-weight: 700;
line-height: 32px;
letter-spacing: 0em;
text-align: left;
color:white;

`;
const Ans=styled.div`
display:flex;
justify-content:flex-end;
margin-top:15px;
font-family: DM Sans;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 29px;
letter-spacing: 0em;
text-align: left;
color:white;

`;