 import React, {Component, useState} from 'react'
  import styled from 'styled-components';
 import '../App.css'

const Title = styled.h1`
font-size: 3.5em;
text-align: center;
padding-top: 30px;
color: white;
font-family: monospace;
 `
 

class About extends Component {
render() {
return (
  <div className="aboutpage">
  <div className="container">
  <Title> About me? </Title> 

<div class="card-deck">
  <div class="card">
    <img class="card-img-top" src="https://i.gifer.com/Ts3R.gif" alt="" />
    <div class="card-body">
       <Title>I've always loved computers</Title>
     </div>
  </div>

  <div class="card">
  <img class="card-img-top" src="https://images.squarespace-cdn.com/content/v1/589ba404414fb513e70016e4/1487554453578-QCN6ZOSAJT4P0L4MJ4BF/ke17ZwdGBToddI8pDm48kCGvZd8U0l1BMl83M929nXF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmJzIhFE-FvwYZ2JTReDUxzxy8gwUsTS2ATeRK94mlk59INXNNL-A7zp8RcpK5sFZR/image-asset.gif" alt="" />
    <div class="card-body">
      <Title>So far I can communicate with them using HTML, CSS, JAVASCRIPT, REACT, C, C++, C#, SQL...</Title>
      </div>
  </div>
</div>
</div>


<div className="container">
<div class="card-deck">


<div class="card">
  <img class="card-img-top" src="https://media.giphy.com/media/fedryX7dMGMe6lgqDm/giphy.gif" alt="" />
    <div class="card-body">
       <Title>I am a  Computer Enginee-ring  student</Title>
     </div>
  </div>


  <div class="card">
    <img class="card-img-top" src="https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif" alt="" />
    <div class="card-body">
       <Title>I went to a 5 months coding bootcamp with Recoded</Title>
     </div>
  </div>

  

  <div class="card">
  <img class="card-img-top" src="https://media.giphy.com/media/QzBNRXuAw6atO1Sger/giphy.gif" alt="" />
    <div class="card-body">
       <Title>I plan on teaching more girls to code to save the world </Title>
     </div>
  </div>

</div>
</div>

  </div>
);
}
}

export default About;  
