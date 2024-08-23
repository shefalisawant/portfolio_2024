import React from 'react';

import { About, Footer, Header, Skills, Testimonial, Work,Experience,Achievements } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About /> 
    <Experience/>
    <Skills />
    <Work />
    <Achievements/>
    <Testimonial />
    <Footer />
  </div>
);

export default App;
