import React, { useState } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header } from './components/header';
import { Footer } from './components/footer';
import { CardBar } from './components/card_bar';

import { Modal } from './components/page_element/modal';

import { HowTo } from './components/howto';
import { About } from './components/about';
import { Search } from './components/search';


function App() {
  const [isNewWordModalOpen, setIsNewWordModalOpen] = useState<boolean>(false);

  return (
    <Router>
      {isNewWordModalOpen && <Modal title="Add a new word" component={<div>Modal</div>} ModalClosed={modalStatus => { setIsNewWordModalOpen(!modalStatus) }} />}
      <div className="App">
        
        <div className="Header"><Header contributeIsOpen={e => { setIsNewWordModalOpen(e) }} /></div>
        
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
