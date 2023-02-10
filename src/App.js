import React from 'react';
import './App.css';

function Gelas(){
     let cups = [];
     
    for (let i = 1; i <= 12; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }
  return cups;
}

function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

function Recipe({ drinkers }) {
  return (
    <ol>    
      <li>Boil {drinkers} cups of water.</li>
      <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.</li>
      <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
    </ol>
  );
}

export default function App() {
  return (
    <section>
      <h1>Spiced Chai Recipe</h1>
      <h2>For two</h2>
      <Recipe drinkers={2} />
      <h2>For a gathering</h2>
      <Recipe drinkers={4} />
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
      <h4>Testing Pure Gelas</h4>
      <Gelas />
    </section>
  );
}
