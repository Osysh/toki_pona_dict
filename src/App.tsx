import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header } from './components/header';
import { Footer } from './components/footer';
import { CardBar } from './components/card_bar';

import { HowTo } from './components/howto';
import { About } from './components/about';
import { Search } from './components/search';


function App() {
  return (
    <Router>
      <div className="App">
        <div className="Header"><Header /></div>
        <div className="Main-container">
        <Switch>
          <Route path='/' exact component={Search} />
          <Route path='/howto' component={HowTo} />
          <Route path='/about' component={About} />
            </Switch>
        </div>
        <div className="Footer">
            <Footer />
          </div>
        <div className="Card-bar"><CardBar /></div>
      </div>
    </Router>
  );
}

export default App;
