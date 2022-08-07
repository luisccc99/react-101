import './App.css'
import Header from './components/Header';
import Place from './components/Place';
import places from './data';

function App() {
  return (
    <div className='container'>
      <Header />
      {
        places.map((p, idx) => (
          <Place key={idx} place={p} />
        ))
      }
    </div>
  );
}

export default App;
