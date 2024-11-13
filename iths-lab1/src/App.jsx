import Games from './Components/Games';
import Consoles from './Components/Consoles';
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

  return (
    <>
     <Games AllGames = {games} />
     <Consoles AllConsoles = {consoles} />
    </>
  )
}

export default App
