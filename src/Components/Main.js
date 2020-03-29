import React, { useContext } from "react";
import { Switch, Route, __RouterContext } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import Home from './Home'
import Portfolio from './Portfolio';
import Cv from './Cv';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import Mailme from './Mailme'
import { useAnimatedState } from 'framer-motion';
 
const Main = () => { 
const {location} = useContext(__RouterContext);
const transitions = useTransition(location, location => location.pathname, {
    from: {opacity: 0, transform: "translate(100%, 0)"},
    enter: {opacity:1, transform: "translate(0%, 0)"},
    leave: {opacity:0, transform: "translate(-50%, 0)"}
});



return (
    <> 
  <Navbar/>
  
   <main className="container-fluid"> 
   {transitions.map(({item, props, key }) => (
       <animated.div key={key} style={props}>
     <Switch location={item}>
        <Route exact path="/" component={Home}/>
         <Route path="/Portfolio" component={Portfolio}/>
         <Route path="/Cv" component={Cv}/>
         <Route path="/About" component={About}/>
         <Route path="/Contact" component={Contact}/>
         <Route path="/Mailme" component={Mailme}/>
         </Switch>
          </animated.div>
        ))}
      </main>
    </>
  );
};

export default Main; 