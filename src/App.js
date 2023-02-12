import {useState} from 'react';

export default function App() {
  const [to, setTo] = useState('Ayana');
  const [pesan, setPesan] = useState('Hello');

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      alert(`You said ${pesan} to ${to}`);
    }, 1500);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        To:{' '}
        <select
          value={to}
          onChange={e => setTo(e.target.value)}>
          <option value="Ayana">Ayana</option>
          <option value="Balqis">Balqis</option>
        </select>
      </label>
      <textarea
        placeholder="Message"
        value={pesan}
        onChange={e => setPesan(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}