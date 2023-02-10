import React from 'react';
import './App.css';
import { people } from './components/data.js';
import { getImageUrl } from './components/utils.js';

export default function App(){
        
    const listItems = people.map(person =>
      <li key={person.id}>
         <img
           src={getImageUrl(person)}
           alt={person.name}
         />
         <p>
           <b>{person.name}:</b>
           {' ' + person.profession + ' '}
           known for {person.accomplishment}
         </p>
      </li>
);
    
    return(
        <ul>{listItems}</ul>
        );
        
}//App

