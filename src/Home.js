import React from 'react';
import About from './components/About';
import Landing from './components/Landing';

export default function Home () {
  return (
    <div className="container font">
      <Landing />
      <About />
    </div>
  );
}
