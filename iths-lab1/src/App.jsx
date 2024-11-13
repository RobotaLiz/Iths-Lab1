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
      
    {name: 'Xbox serie x', image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Xbox_Series_X_logo.svg/1200px-Xbox_Series_X_logo.svg.png"},
    {name: 'Playstation 5', image:"https://e7.pngegg.com/pngimages/617/69/png-clipart-playstation-2-logo-playstation-4-playstation-4-logo-game-angle.png"},
    {name: 'Nintendo switch', image:"https://e7.pngegg.com/pngimages/485/678/png-clipart-wii-xbox-360-nintendo-switch-logo-nintendo-text-nintendo-thumbnail.png"},

  ]);
  
  // lista av spel 
  const [games, setGames] = useState([

    {name: 'Spider man 2', image:"https://w7.pngwing.com/pngs/752/262/png-transparent-spider-man-logo-captain-america-spider-man-icon-comics-superhero-fictional-character-thumbnail.png"},
    {name: 'Diablo', image:"https://www.pngplay.com/wp-content/uploads/10/Diablo-3-Logo-No-Background.png"},
    {name: 'Last of us 2', image:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aacf7545-f3cd-48d5-b931-28ce4a28db0e/dgkv6mo-a2160ba8-347d-4727-a76f-df2e88ed1376.png/v1/fill/w_894,h_894/the_last_of_us_part_ii_remastered__v1_by_saif96_dgkv6mo-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2FhY2Y3NTQ1LWYzY2QtNDhkNS1iOTMxLTI4Y2U0YTI4ZGIwZVwvZGdrdjZtby1hMjE2MGJhOC0zNDdkLTQ3MjctYTc2Zi1kZjJlODhlZDEzNzYucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.vZUVxohjsg_KcSMk6hjOFIxoCDFqTPaEzVHnP1b6ZO0"},

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
