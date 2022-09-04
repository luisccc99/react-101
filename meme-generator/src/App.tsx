import Header from './components/Header'
import Meme from './components/Meme'
import './App.css'

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
