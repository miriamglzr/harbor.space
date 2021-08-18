import React from 'react';
import About from './components/About';
import FAQ from './components/FAQ';
import Landing from './components/Landing';
import Testimony from './components/Testimony';

export default function Home () {
  return (
    <div className="container font">
      <Landing />
      <About />
      <Testimony />
      <FAQ />
    </div>
  );
}
