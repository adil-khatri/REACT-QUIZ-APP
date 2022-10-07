import React from 'react';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './About';
import Quiz from './Quiz';
import Contact from './Contact';
import "./App.css";

const App = () => {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Navbar />
         <Switch> 
            <Route exact path="/" component={Home} />  
            <Route exact path="/about" component={About} />  
            <Route exact path="/quiz" component={Quiz} />  
            <Route exact path="/contact" component={Contact} /> 
             
            < Redirect to="/" />    
        </Switch>
        </Router>
    );
};

export default App;
