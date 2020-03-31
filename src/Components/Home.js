//HOME PAGE WORKS 

import React from 'react'
   import styled, {keyframes} from 'styled-components'
  import {bounce} from 'react-animations'
  import Fade from 'react-reveal/Fade';
 
const Title = styled.h1`
font-size: 3em;
text-align: center;
padding-top: 50px;
color: white;
font-family: monospace;

 `
const Bounce = styled.div`animation: 2s ${keyframes `${bounce}`} `;

function Home() {

  return (
    <Title>  
 <Bounce>
Hi, my name is
<br/><Title>Yusra Atta.</Title> 
</Bounce>  
<Fade bottom>
       I am a Web Developer.
        </Fade>
<h6>Based in Istanbul, specializing in building high quality websites. 
</h6>
</Title>

        
    )
}

export default Home ;