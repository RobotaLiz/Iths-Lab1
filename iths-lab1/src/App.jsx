import Games from './Components/Games';
import Consoles from './Components/Consoles';
import Form from './Components/Form';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import './App.css'


function App() {


  
  // en lista av konsoller 
  const [consoles, setConsoles] = useState([
      
    {name: 'Xbox serie x', image:""},
    {name: 'Playstation 5', image:""},
    {name: 'Nintendo switch', image:""},

  ]);
  
  // lista av spel 
  const [games, setGames] = useState([

    {name: 'Spider man 2', image:''},
    {name: 'Diablo', image:''},
    {name: 'Last of us 2', image:''},

  ]);
   
  // funtion för att lägga till ett spel i listan
  
  const addGame = (name, image) => {
    setGames([...games, { name, image }]);
  };
  
  // funktion för att lägga till en konsol i listan 
  const addConsole = (name, image) => {
    setConsoles([...consoles, { name, image }]);
  };

   return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/consoles" 
            element=
            {
              <>
                <Consoles AllConsoles={consoles} />
                <Form onAdd= {addConsole}/>
              </>
            } />
          <Route path="/games" 
            element=
            {
              <>
                <Games AllGames={games}  />
                <Form onAdd= {addGame}/>
              </>
            } />
        </Routes>
      </div>
    </Router>
  );
}

export default App
