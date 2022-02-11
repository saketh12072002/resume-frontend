import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Stripe from "../Images/Stripe.png" 
import Vector from "../Images/Vector.png"
import Rectangle1 from "../Images/Rectangle 1.png"
import Rectangle2 from "../Images/Rectangle 2.png"
import No1 from "../Images/No1.png"
import Vector2 from "../Images/Vector (2).png"
import Vector3 from "../Images/Vector (3).png"
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import {useInView} from 'react-intersection-observer'
import { useAnimation } from 'framer-motion';
import Rectangle3 from "../Images/Rectangle 3.png"

export const Header = () => {

    const {ref, inView} = useInView({
        threshold:0.2

   });
  

   const animation = useAnimation();
   const animation1 = useAnimation();
   const animation2 = useAnimation();


  

   useEffect(()=>{

                 if(inView){
                        animation.start({
                            rotate : -18,
                            opacity:1
                        });
                        animation1.start({
                            rotate : -18,
                            opacity:1

                        });
                        animation2.start({
                            rotate : -18,
                            opacity:1

                        });

                 }
                 if(!inView){
                           animation.start({
                             rotate:20,
                             opacity:0
                           })
                           animation1.start({
                            rotate : 40,
                            opacity:0
                        });
                        animation2.start({
                            rotate : 60,
                            opacity:0
                        });
                 }

             console.log("use effect hook, inView =",inView);
            

   },[inView]);





    return (
        <Container>
            <Nav>
                <Logo>
                 Logo
                </Logo>
               <Navlinks>
                <Links>home</Links>
                <Links>about</Links>
                <Links>category</Links>
                <Button>
                   login
                </Button>
               </Navlinks>
               
            </Nav>
            <Container1>
            <CenterTag
               initial={{opacity:0}}
               animate={{opacity:1}}
               transition={{delay:1.5,duration:1.5}}
            
            >
            Build your amazing <br/> resume just with a click
           
            </CenterTag>
            <ImgBox
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:1.5,duration:1.5}}
            >
            <img src={Stripe}/>
            <img className='hand' src={Vector}/>
            </ImgBox>
               <Details>
               Use professional field-tested resume templates that follow the exact <br/>‘resume rules’ employers look for. Easy to use and done within minutes -<br/> try now for free!
               </Details>
              <Button1 whileHover={{scale:1.3}}>
                  Create My Resume
              </Button1>
            </Container1>
           
          <Conatiner2>
              <Rectangle 
               ref={ref} 

               >
                   <motion.img className='img3'  animate={animation} src={Rectangle1}/>
                   <motion.img className='img2'    animate={animation1} src={Rectangle2}/>
                   <motion.img className='img1'     animate={animation2} src={Rectangle3}/> 
              </Rectangle>
              <Features>
                   <Feature>
                  <img src={No1} /> Make a resume that wins interviews
                   </Feature>
                   <Feature>
                  <img src={Vector2}/> Fully customisable and editable resumes 
                   </Feature>
                   <Feature>
                  <img src={Vector3}/>  Select from more than 50+ resume template
                   </Feature>
              </Features>
          </Conatiner2>
        </Container>
    )
}

const Container=styled.div`
height: 2395px;

width: 1ref;
border-radius: 0px;
background: #041562;
position: relative;




`;
const Nav=styled.div`
padding-top:70px;
font-family: DM Sans;
margin-left:245px;
color:white;
display:flex;
justify-content:space-between;
margin-right:245px;




`;
const Navlinks=styled.div`
display:flex;
margin-top:30px;
`;
const Links=styled.h3`
font-family: DM Sans;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 31px;
letter-spacing: 0em;
text-align: center;

margin-right:45px;
`;
const Logo=styled.h1`
font-family: DM Sans;
font-size: 48px;
font-style: normal;
font-weight: 700;
line-height: 62px;
letter-spacing: 0em;
text-align: left;
`;
const CenterTag=styled(motion.h1)`
font-family: DM Sans;
font-size: 78px;
font-style: normal;
font-weight: 700;
line-height: 101px;
letter-spacing: 0em;
text-align: center;
color:white;


`;
const Button = styled(motion.button)`
margin-top:10px;
font-family: DM Sans;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 31px;
letter-spacing: 0em;
text-align: center;

width: 126px;
height: 51px;
background: #FFC900;
border-radius: 7px;
`;
const Container1=styled.div`
display:block;
aligin-items:center;
position: absolute;
width: 1504px;
height: 700px;

text-aligin:center;
margin-top: 201px;
`;
const ImgBox=styled(motion.div)`

display:flex;
justify-content:center;
.hand{
    padding-top:20px;
    padding-left:10px;
}
`;
const Details=styled.div`
margin-top:54px;
font-family: DM Sans;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 31px;
letter-spacing: 0em;
text-align: center;
color: #FFF89A;
`;
const Button1=styled(motion.button)`
margin-top:58px;
font-family: DM Sans;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 31px;
letter-spacing: 0em;
text-align: center;

height: 69px;
width: 260px;

background: #FFC900;
border-radius: 7px;
padding: 10px;

`;
const Conatiner2=styled.div`
width: 481px;
height: 102px;
margin-top:980px;
display:flex;

`;

const Rectangle=styled(motion.div)`
margin-left:200px;
img{
  position:absolute;
}
.img1{
    margin-top :20px;
    margin-left: 60px;
    transform: matrix(0.99, 0.12, -0.1, 0.99, 0, 0);
}
.img2{
   
    margin-top :90px;
    margin-left: -13px;
     transform: matrix(1, -0.06, 0.06, 1, 0, 0);
}
.img3{
    margin-top:90px;
    margin-left: -133px;
     transform: matrix(0.97, -0.27, 0.24, 0.96, 0, 0);
}
`;
const Features=styled.div`

display:grid;
grid-template-rows: repeat(3);
font-family: DM Sans;
font-size: 36px;
font-style: normal;
margin-left:601px;
font-weight: 700;
line-height: 47px;
letter-spacing: 0em;
text-align: left;
color :white;


`;
const Feature=styled.div`
img{width:102px;
height:90px;
margin-right:30px;
}
display:flex;
width:650px;
margin-top:50px;

`;