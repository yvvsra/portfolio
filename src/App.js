import React ,{Component} from 'react';
import Main from './Components/Main'
import {Content,Layout} from 'react-mdl'
 import './App.css';
 
 
export default class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
      <Layout>
         
            <Content className="Pages">
              <div className="page-content" />
              <Main/>
              
          </Content>
      </Layout>
  </div>
    )
  }
}
