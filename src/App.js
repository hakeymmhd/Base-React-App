import React, { useState, useContext } from 'react';
import './styles.css';
import LeftComp from './components/LeftComp';
import RightComp from './components/RightComp';
import DataContext from './Context/DataContext';

const themes = {
  light: {
    background: 'lightblue',
    color: 'black'
  },
  dark: {
    background: '#222222',
    color: 'white'
  }
};

export default function App() {
  const [activeTheme, setActiveTheme] = useState(themes.light);

  const handleClick = () => {
    activeTheme === themes.light ? 
     setActiveTheme(themes.dark) : setActiveTheme(themes.light);
  }

  return (
    <div className="App">
      <h2>Click the button to toggle themes</h2>
      <button onClick={handleClick}>Toggle Themes</button>
      <div className="children">
        <DataContext.Provider value={activeTheme}>
        <LeftComp theme={activeTheme}/>
        <RightComp theme={activeTheme}/>
        </DataContext.Provider>
      </div>
    </div>
  );
}
