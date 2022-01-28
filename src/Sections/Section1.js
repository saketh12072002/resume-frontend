import React from 'react';
import styled from "styled-components"
import RectangleS from "../Images/RectangleS 1 (1).png"
import RectangleS1 from "../Images/RectangleS 3 (1).png"
import RectangleS2 from "../Images/RectangleS 4.png"


export const Section1 = () => {
  return (
<Container>


<Head>Resume Name</Head>
<Subhead>250+ People Using</Subhead>
<Rectangle>
  
  <img className="img1" src={RectangleS1}/>
  <img className="img2" src={RectangleS}/>
  <img className="img3" src={RectangleS1}/>


</Rectangle>
<Button>
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
border:solid red 1px;
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
const Rectangle=styled.div`
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

const Button= styled.button`
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