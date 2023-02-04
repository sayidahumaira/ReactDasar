import logo from './logo.svg';
import './App.css';
import React from 'react';



function App() {
    
    // Buat handleClick fungsi di dalam fungsi
    function myButton(){
        function handleClick() {
            alert('You clicked me!');
            
        return(
            <button onClick={ handleClick } className="tombol-satu">
                Kiss Me...
            </button>
            )
    }}
    
    // variabel obj yg ingin di display
    const akun = {
        name: 'Ayana Shahab',
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 90,
    }
    
    // Conditional Render example
    let sudahLogin = true ;
    
    // array Object buat renderlist
    const produks = [
        { title: 'Cabbage', isFruit: false, id: 1 },
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
    
    let tombolKeduaSama = myButton();

    
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
     
    <button onClick={tombolKeduaSama} className="tombol-satu">
            Kiss Me...
    </button>
    
    
        
    </div>
  ); // return
}; // app


export default App;
