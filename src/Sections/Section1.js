import React from 'react';
import styled from "styled-components"
import RectangleS from "../Images/RectangleS 1 (1).png"
import RectangleS1 from "../Images/RectangleS 3 (1).png"
import RectangleS2 from "../Images/RectangleS 4.png"

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

export const Section1 = () => {

  const {ref, inView} = useInView({
    threshold:0.1
  });
  const animation = useAnimation();    
  const animation1 = useAnimation(); 
  const animation2 = useAnimation();    


  useEffect(()=>{

    if(inView){
           animation.start({
            x:10,
            opacity:1,
            transition:{
              type:'spring',duration:2,bounce:0.3
            }
           });
           animation1.start({
               x:-10,
               opacity:1,
          
               transition:{
                 type:'spring',duration:2,bounce:0.3
               }
           })

    }
    if(!inView){
              animation.start({
                x:150,
                opacity:0
               

              })
              animation1.start({
                  x:-150,
                  opacity:0,
                  
              })
    }


console.log("use effect hook, inView =",inView);
},[inView]);



  return (
<Container>


<Head>Resume Name</Head>
<Subhead>250+ People Using</Subhead>
<Rectangle ref={ref}>
  
  <motion.img className="img1"  animate={animation}  src={RectangleS1}/>
  <motion.img className="img2"  src={RectangleS}/>
  <motion.img className="img3" animate={animation1}src={RectangleS1}/>


</Rectangle>
<Button whileHover={{scale:1.4}}>
Use This Template
</Button>



</Container>



  );
};
 

const Container=styled.div`
height: 1035px;
width: 1ref;
magin-left: 0px;
border-radius: 0px;
background-color: #FFF89A;


`;
const Head=styled.div`
color:black;
text-align:center;

font-family: DM Sans;
font-size: 36px;
font-style: normal;
font-weight: 700;
line-height: 47px;
letter-spacing: 0em;
text-align: center;
padding-top:73px;

`;
const Subhead=styled.div`

font-family: DM Sans;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 31px;
letter-spacing: 0em;
text-align: center;


`;
const Rectangle=styled(motion.div)`
margin-top:30px;
display:flex;
justify-content:center;


img{
  
  margin-left:20px;
}

.img1{
  width: 425px;

  height: 540.74px;
 margin-top:50px;
}

.img2{
  width: 492px;
  height: 625.99px;
}
.img3{
  width: 425px;
  height: 540.74px;
  margin-top:50px;
}
`;

const Button= styled(motion.button)`
margin-top:50px;
padding: 10px;
border:none;
background: #FFC900;
border-radius: 7px;
font-family: DM Sans;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 31px;
letter-spacing: 0em;
text-align: center;


`;