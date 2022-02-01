import React from 'react';
import styled from "styled-components"
import Stripe3 from "../Images/Stripe3.png"
import HalfStar from "../Images/HalfStar.png"
import Star from "../Images/Star.png"
import Picture from "../Images/Picture (3).png"
import Left from "../Images/Left.png"
import Right from "../Images/Right.png"
import Vertical from "../Images/Vertical.png"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

export const Section3 = () => {
    const {ref, inView} = useInView({
        threshold:0.2
      });
      const animation = useAnimation();    
      const animation1 = useAnimation();    

      useEffect(()=>{

        if(inView){
               animation.start({
                x:50,
                opacity: 1,
                transition:{
                  type:'spring',duration:1,bounce:0.3
                }
               });
               animation1.start({
                   x:-50,
                   opacity: 1,
                   transition:{
                     type:'spring',duration:1,bounce:0.3
                   }
               })

        }
        if(!inView){
                  animation.start({
                    x:0,
                   opacity:0,

                  })
                  animation1.start({
                      x:0,
                      opacity:1
                  })
        }


    console.log("use effect hook, inView =",inView);
},[inView]);



    
  return (
      <Container >
                   <Head>
                   Trusted by students <br/><img className='Stripe' src={Stripe3}/> accross nation
                   </Head>
                   <Reviews>
                       <img src={Star} />
                       <img src={Star} />
                       <img src={Star} />
                       <img src={Star} />
                       <img src={HalfStar} />
                       <Rating>
                        
                        4.5 of 5
                        
                        <Text>Based on 1000+ Reviews revieved</Text>
                       </Rating>
                        
  
                   </Reviews>
                   <CardSection ref={ref}>
                   <Card animate={animation}>
                       <Heading>
                       Efficient Collaborating
                      </Heading>
                      <Content>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.
                      </Content>
                      <Profile>
                        <img src={Picture }/>
                          <Post>
                          Jane Cooper
                          <h5>
                          CEO at ABC Corporation
                          </h5>
                          </Post>
                      </Profile>

                   </Card>
                   <Card animate={animation1}>
                   <Heading>
                       Efficient Collaborating
                      </Heading>
                      <Content>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.
                      </Content>
                     <Profile>
                        <img src={Picture }/>
                          <Post>
                          Jane Cooper
                          <h5>
                          CEO at ABC Corporation
                          </h5>
                          </Post>


                     </Profile>
                   </Card>

                   </CardSection>
                   <Proceed>
                   <Button >
                         <img src={Left}/>
                    </Button>
                    <img src={Vertical}/>
                    <Button>
                     <img src={Right}/>
                    </Button>
                   </Proceed>
                   
                  
      </Container>


  );
};

const Container=styled.div`
height: 1054px;

width: 1ref;
border-radius: 0px;
background: #041562;
position: relative;
background: #FFF89A;


`;
const Head=styled.div`
font-family: DM Sans;
font-size: 78px;
font-style: normal;
font-weight: 700;
line-height: 101px;
letter-spacing: 0em;
text-align: center;
padding-top:70px;
img{
    position:absolute;
    margin-left:70px;

}
.Stripe{
    padding-left:60px;
}

`;
const Reviews=styled.div`
img{
    margin:10px 10px;
}
display:flex;
justify-content:center;
`;
const Rating=styled.div`

font-family: DM Sans;
font-style: normal;
font-size: 28px;
text-align:left;
font-weight: bold;
margin-left:20px;
`;
const Text=styled.div`
font-family: DM Sans;
font-style: normal;
font-weight: normal;

`;
const CardSection=styled.div`

display:flex;
justify-content:space-evenly;
margin-top:98px;
`;
const Card=styled(motion.div)`
height: 256px;
width: 508px;
left: 403px;
top: 456px;
border-radius: 10px;
background: #FFC900;
padding-top:38px;

`;
const Heading=styled.div`
font-family: DM Sans;
font-size: 36px;
font-style: normal;
font-weight: 700;
line-height: 32px;
letter-spacing: 0em;
text-align: center;



`;
const Content=styled.div`
padding-top:32px;
font-family: DM Sans;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 29px;
letter-spacing: 0em;
text-align: center;


`;
const Post=styled.div`
font-family: DM Sans;
font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: 28px;
letter-spacing: 0em;
text-align: center;
h5{
    margin-top:-1px;
font-family: DM Sans;
font-style: normal;
font-weight: normal;
font-size: 18px;
color:#474A57;
}


`;
const Profile=styled.div`
margin-top:50px;

`;

const Proceed=styled.div`
margin-top:150px;
`;
const Button =styled(motion.button)`

background:transparent;
border:none;
`;