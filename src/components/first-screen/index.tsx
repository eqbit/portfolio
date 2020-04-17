import React from 'react';
import './style.scss';
import TripleDot from '@components/triple-dot';

const FirstScreen: React.FC = () => {
  return (
    <section className="section first-screen">
      <div className="container">
        <div className="row">
          <div className="col-lg-1"/>
          <div className="col-lg-10">
            <h1 className="h1">
              Hello! My name is Nikolay Mitryashkin. <br/>
              I am a Front End developer.
            </h1>
  
            <p>
              My main specialization is implementing complex interactive interfaces
              using javascript. Feel free to check out the projects that I’ve
              done below on this page.
            </p>
          </div>
        </div>
      </div>
      
      <TripleDot/>
    </section>
  );
};

export default FirstScreen;
