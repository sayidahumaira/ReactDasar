import logo from './logo.svg';
import './App.css';

function MyButton(props) {
  return (
    <button
      onClick={() => {
        alert(props.pesan);
      }}
    >
      {props.judul}
    </button>
  );
}

function MessageBox() {
  return (
    <div>
      <h1>Kotak Pesan ihsandev</h1>
      <MyButton judul="Ayana" pesan="Selamat Datang Ayana" />
      <MyButton judul="Kabar" pesan="Ayana mau nikah sama aku" />
      <MyButton judul="Pesan" pesan="khusus Keluarga Inti aja" />
    </div>
  );
}

function App() {
    
  return (
    <div className="App">
    <MessageBox />
    <h3>Belajar Props</h3>
    </div>
  );
}

export default App;
