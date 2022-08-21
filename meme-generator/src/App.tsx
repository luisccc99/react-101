import './App.css'
import Header from './components/Header'
import Meme from './components/Meme'

function App() {

  return (
    <div>
      <Header />
      <div className='container mx-auto'>
        <Meme />
      </div>
    </div>
  )
}

export default App
