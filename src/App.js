import { useState } from 'react';
import { contohData } from './components/data.js';

export default function App() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

    // data JSON 
  let dataKarosel = contohData[index];
  return (
    <>
      <button onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>{dataKarosel.name} </i>
        by {dataKarosel.artist}
      </h2>
      <h3>
        ({index + 1} of {contohData.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{dataKarosel.description}</p>}
      <img
        src={dataKarosel.url}
        alt={dataKarosel.alt}
      />
    </>
  );
}