//includes your CV implemented in the same way you learnt from thinkific career prep course.
import React, {Component} from 'react'
import Wrapper from './Wrapper';
import {Link} from 'react-router';
import mailme from './Mailme';
import styled from 'styled-components';
import '../App.css'
 
const Title = styled.h1`
font-size: 5em;
text-align: center;
padding-top: 150px;
 font-family: 'Inconsolata', monospace;
 display:flex;
 justify-content: 'space-evenly';
 }
`


export default class Cv extends Component {
    render() {
        return (
             <div id="boxoffice">
            <Wrapper>  

                      
            <Title className="cv">
            <ul class="flex-container">
            Education <br/><br/> <br/> <br/>
            Employment <br/> <br/> <br/> <br/> 
            Skills <br/> <br/> 
            Languages
          </ul>
          <ul>
            Computer Engineering - Istanbul Kultur University (2017)
            <br/>
            CELTA (2017)
            <br/>
           RE:CODED BOOTCAMP  (2020) 
            <br/> 
            <br/>English Language teacher (2016-2020)
            <br/>
              OSN - Customer Service Representative(2013)
              <br/>
                CANADA2000  Translator English/ Arabic - Arabic/English  (2012) 
                <br/>  <br/>  
             HTML | CSS | JAVASCRIPT | REACT JS | SQL | C++ | C |
             <br/>  <br/> 
             English | Arabic | Tigrinya | Turkish - | French -
             </ul>

          
             </Title>
        
           
            </Wrapper> 
        </div>
);
      }
    }
