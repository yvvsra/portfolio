import React ,{Component} from 'react';
import Main from './Components/Main'
import {Content,Layout} from 'react-mdl'
import Contact from './Components/Contact'
import './App.css';
import {Link} from 'react-router-dom'

 
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
