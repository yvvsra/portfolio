//Portfolio page: includes at least 3 projects you have done during the bootcamp with their github links
import React, {Component} from 'react'
import Wrapper from './Wrapper';
import styled from 'styled-components';
  import '../App.css' 
 
const Title = styled.h1`
font-size: 2em;
text-align: center;
padding-top: 150px;
color: white;
 font-family:  monospace; `
 

export default class Portfolio extends Component {
    render() {
        
         return (
             <div className="portfolioPage">
             <Wrapper >       
             <Title>
This page is currently being updated and will be back very soon. <br/>

 
            </Title>
            </Wrapper>

            </div>
         )
    }
}
