import React from 'react';
import Demo from './pages/Demo';
import Header from './component/Header';
import Hero from './component/Hero';
import Main from './component/Main';
import Contauct from './component/Contauct';
import Footer from './component/Footer';
// import Hero from 'daisyui/components/hero';

const App = () => {
  return (
    <div>
      <Header/>
     <Hero/>
      <Main/>
      <Demo/>
      <Contauct/>
      <Footer/>
      
    </div>
  );
};

export default App;