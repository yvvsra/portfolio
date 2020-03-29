//Contact project: includes your linked, github and whatever contact you want to share
import React from 'react'
import Wrapper from './Wrapper';
  import styled from 'styled-components'

 const Title = styled.h1`
  font-size: 4em;
  text-align: center;
  padding-top: 150px;
  color: white;
  font-family: 'Inconsolata', monospace;
`;

 

function Contact(){
    return (
        <div className="container">
    <Wrapper>
     <Title> Find me here </Title>
     <div className="social-links">
    
      <a href="https://github.com/yvvsra" rel="noopener noreferrer" target="_blank">
          <i className="fa fa-github" aria-hidden="true"/>
      </a>
    
      <a href="https://medium.com/@yvvsra" rel="noopener noreferrer" target="_blank">
          <i className="fa fa-medium" aria-hidden="true"></i>
      </a>

        <a href="https://www.linkedin.com/in/yvvsra/" rel="noopener noreferrer" target="_blank">
          <i className="fa fa-linkedin" aria-hidden="true"></i>
      </a>   
      
        
      <a href="/Mailme"  rel="noopener noreferrer" target="_blank">
          <i className="fa fa-envelope" aria-hidden="true"></i>
      </a>   
          </div>
          </Wrapper>]
          </div>
    )
}
export default Contact;
