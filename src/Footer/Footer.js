import React from 'react';
import {motion} from "framer-motion"
import styled from "styled-components"
export const Footer = () => {
  return (
       <Container>
           <SubContainer>
                 <Logo>
                     Logo
                 </Logo> 
                 <FluidContainer>
                  <Newsletter>
                  <Head>
                  SUBSCRIBE  TO  THE <br/> NEWSLETTER  FOR  UPDATE
                  </Head>
                  <Form>
                      < Input  value={"yourname@domain.com"}/>
                      <Button  whileHover={{scale:1.2}}>
                      Subscribe Now
                      </Button>
                  </Form>
                  </Newsletter>
                  <Morelinks>
                      <Head1>
                      GENERAL
                      </Head1>
                      <Item>Contact Us</Item>
                      <Item>Privacy Policy</Item>
                      <Item>Documentation</Item>

                  </Morelinks>
                  <Morelinks>
                      <Head1>
                      COMMUNITY
                      </Head1>
                      <Item>Github Repository</Item>
                      <Item>Join us on Discord</Item>
                    

                  </Morelinks>
                    
                 </FluidContainer>
              <Copywrite>
              Copyright © 2022 Logo
              </Copywrite>
           </SubContainer>

       </Container>


  );
};


const Container=styled.div`
height: 374px;
margin-top:-50px;
width: 1ref;
border-radius: 0px;
background: #041562;
position: relative;
display:flex;
justify-content:center;

`;

const SubContainer=styled.div`
height: 274px;
margin-top:-50px;
width:1400px;
border-radius: 0px;
background: #041562;
position: relative;
border-top:solid white 02px;

`;
const Head=styled.div`
text-align:left;
color:white;
font-family: DM Sans;
font-size: 36px;
font-style: normal;
font-weight: 700;
line-height: 47px;
letter-spacing: 0em;
text-align: left;
margin:15px 0px;

`;
const FluidContainer =styled.div`
display:flex;
`;
const Logo = styled.div`
text-align:left;
font-family: DM Sans;
font-size: 36px;
font-style: normal;
font-weight: 700;
line-height: 47px;
letter-spacing: 0em;
text-align: left;
color:white;
margin:30px 0px;;
`;
const Form =styled.div`
display:flex;
`;
const Newsletter=styled.div``;
const Button=styled(motion.button)`

background: #FFC900;
border-radius: 7px;
height: 69px;
width: 239px;
left: 825px;
top: 8159px;
border-radius: 7px;
padding: 10px;
font-family: DM Sans;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 31px;
letter-spacing: 0em;
text-align: center;
margin-left:15px;


`;
const Input = styled.input`
height: 69px;
width: 563px;
left: 242px;
top: 8159px;
border-radius: 5px;
border:none;
font-family: DM Sans;
font-size: 24px;
font-style: normal;
font-weight: 500;
letter-spacing: 0em;
text-align: left;



`;
const Morelinks=styled.div`
display:inline;
margin:0px 30px;
`;
const Head1=styled.div`
font-family: DM Sans;
font-size: 26px;
font-style: normal;
font-weight: 700;
line-height: 34px;
letter-spacing: 0em;
text-align: left;
margin:10px 0px;
color:white;
`;
const Item=styled.a`
display:block;
font-family: DM Sans;
font-size: 24px;
font-style: normal;
font-weight: 500;
letter-spacing: 0em;
text-align: left;
color:white;
padding:7px 0px;
`;
const Copywrite=styled.div`
margin: 60px 0px;
color:white;
font-family: DM Sans;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 37px;
letter-spacing: 0em;


`;