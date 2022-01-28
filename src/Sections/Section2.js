import React from 'react';
import styled from "styled-components"
import Stripe2 from "../Images/stripe2.png"
import Rectangle from "../Images/RectangleSec2.png"
export const Section2 = () => {
  return (
        <Container>
             <Head>
             Effortlessly make
          
             <br/>
             <img src={Stripe2}/>
             
             a job-worthy resume
             </Head>
             <Features>
                 <Feature>
                   
                   <img src={Rectangle}/>

                <List>
                       <ListItem>
                         <Num>
                           01
                          </Num> 
                         <Big>
                             Select your resume from the category
                        </Big>
                       </ListItem>
                  
            
                    <ListItem>
                      <Snum>
                       02
                    </Snum>
                    <Small>
                       Update your info <br/>on the dashboard 
                    </Small>
                    </ListItem>
               
                    <ListItem>
                    <Snum>
                       03
                    </Snum>
                    <Small>
                    Download the resume <br/>just in a click
                    </Small>
                    </ListItem>
                </List>

                 </Feature>
                 <Feature>
                   <img src={Rectangle}/>
                   <List>
                       <ListItem>
                       <Snum>
                       01
                    </Snum>
                    <Small>
                    Select your resume from<br/> the category
                    </Small>
                       </ListItem>
                       <ListItem>
                         <Num>
                           02
                          </Num> 
                         <Big>
                         Update your info <br/>on the dashboard 
                        </Big>
                       </ListItem>
                       <ListItem>
                       <Snum>
                       03
                    </Snum>
                    <Small>
                    Download the resume <br/>just in a click
                    </Small>
                       </ListItem>


                   </List>
                 </Feature>
                 <Feature>
                   <img src={Rectangle}/>
                   <List>
                   <ListItem>
                         <Snum>
                           01
                          </Snum> 
                         <Small>
                             Select your resume from the category
                        </Small>
                       </ListItem>

                   <ListItem>
                      <Snum>
                       02
                    </Snum>
                    <Small>
                       Update your info <br/>on the dashboard 
                    </Small>
                    </ListItem>
                       <ListItem>






                   <Num>
                       03
                    </Num>
                    <Big>
                    Download the<br/>resume just in a click
                    </Big>
                       </ListItem>
                       </List>
                 </Feature>
             </Features>
        </Container>



  );
};
const Container=styled.div`
height: 2495px;

width: 1ref;
border-radius: 0px;
background: #041562;
position: relative;



`;



const Head=styled.div`
font-family: DM Sans;
font-size: 78px;
font-style: normal;
font-weight: 700;
line-height: 141px;
letter-spacing: 0em;
text-align: center;
padding-top:113px;
color:white;


img{
    margin-top:-35px;
    position:  absolute;
}

`;
const Features=styled.div`

display:inline-block;

//border:solid red 1px;
height:2075px;


`;
const Feature=styled.div`
//border:solid red 2px;
padding:60px 30px;
display:flex;
img{
    width: 615px;
height: 536px;
}
`;
const List =styled.div`
margin-left:80px;


`;
const Big=styled.div`
// border:solid white 3px;
font-family: DM Sans;
font-size: 58px;
font-style: normal;
font-weight: 700;
line-height: 62px;
letter-spacing: 0em;
text-align: left;
width:560px;
margin-top:30px;
color: #FFC900;
margin-left:10px;

`;
const Num=styled.div`
font-family: DM Sans;
font-style: normal;
font-weight: bold;
font-size:150px;
color: #FFF89A;
`;
const ListItem=styled.div`
display:flex;
`;
const Small=styled.div`
margin-top:20px;
font-family: DM Sans;
font-size: 36px;
font-style: normal;
font-weight: 700;
line-height: 47px;
letter-spacing: 0em;
text-align: left;
margin-left:30px;

color: rgba(255, 248, 154, 0.6);

`;
const Snum=styled.div`
font-family: DM Sans;
font-style: normal;
font-weight: bold;
font-family: DM Sans;
font-size: 100px;
font-style: normal;
font-weight: 700;
line-height: 130px;
letter-spacing: 0em;
text-align: right;
margin-left:20px;

color: rgba(255, 248, 154, 0.6);

`;
