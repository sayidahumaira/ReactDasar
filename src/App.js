import './App.css';
import React from 'react';
import {useState} from 'react';



function App() {
    
    // variabel obj yg ingin di display
    const akun = {
        name: 'Mona Nabilah',
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 90,
    }
    
    // Conditional Render example
    let sudahLogin = true ;
    
    // array Object buat renderlist
    const produks = [
        { title: 'HTML', isFruit: false, id: 1 },
        { title: 'Garlic', isFruit: false, id: 2 },
        { title: 'Apple', isFruit: true, id: 3 },
    ];
    
    // contoh rendering list 
    const listItems = produks.map(produk =>
        <li key={produk.id} style={{
            color: produk.isFruit ? 'magenta' : 'darkgreen'}}>
         {produk.title}
        </li>
    );

    // buat tombol props
    const [count, setCount] = useState(0);
    
    function handleClick() {
        setCount(count + 1);
    }

    
  return (
    <div className="App">
        <img className="avatar" />
        <h1>{akun.name}</h1>
        <h3>Belajar Display React</h3>
      <img
        className="avatar"
        src={akun.imageUrl}
        alt={'Photo of ' + akun.name}
        style={{
          width: akun.imageSize,
          height: akun.imageSize
        }}
      />
      
    <p>{listItems }</p>

    {sudahLogin ? (
        <h2>Anda Berhasil Login</h2>
        ) : (
         <h2>Anda gagal login</h2>
    )}
     
     
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    
</div>
  ); // return
}; // app


function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

export default App;
