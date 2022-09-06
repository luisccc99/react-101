import React, { useCallback, useState } from 'react';
import Main from './componentes/Main'
import Navbar from './componentes/Navbar'

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = useCallback(() => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  }, setDarkMode);

  return (
    <div className='container'>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={darkMode} />
    </div>
  );
};

export default App;