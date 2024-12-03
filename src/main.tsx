import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const players = [
  { rank: 1, name: 'Renato', stars: 5, matchesPlayed: 4, matchesWon: 4, points: 100 },
  { rank: 1, name: 'Guille', stars: 5, matchesPlayed: 4, matchesWon: 4, points: 100 },
  { rank: 2, name: 'Chelo', stars: 5, matchesPlayed: 4, matchesWon: 4, points: 100 },
  { rank: 2, name: 'Juanki', stars: 5, matchesPlayed: 4, matchesWon: 4, points: 100 },
  { rank: 3, name: 'Ivan G', stars: 3, matchesPlayed: 3, matchesWon: 2, points: 67 },
  { rank: 3, name: 'Loa', stars: 3, matchesPlayed: 3, matchesWon: 2, points: 67 },
  { rank: 4, name: 'Franco', stars: 2, matchesPlayed: 4, matchesWon: 2, points: 50 },
  { rank: 4, name: 'Pepe', stars: 2, matchesPlayed: 4, matchesWon: 2, points: 50 },
  { rank: 5, name: 'Tingui', stars: 2, matchesPlayed: 4, matchesWon: 2, points: 50 },
  { rank: 5, name: 'Javi', stars: 2, matchesPlayed: 4, matchesWon: 2, points: 50 },
  { rank: 6, name: 'Carlitos', stars: 1, matchesPlayed: 3, matchesWon: 1, points: 33 },
  { rank: 6, name: 'Fer G', stars: 1, matchesPlayed: 3, matchesWon: 1, points: 33 },
  { rank: 7, name: 'Percha', stars: 1, matchesPlayed: 4, matchesWon: 1, points: 25 },
  { rank: 7, name: 'Vibora', stars: 1, matchesPlayed: 4, matchesWon: 1, points: 25 },
  { rank: 8, name: 'Mati Poe', stars: 1, matchesPlayed: 5, matchesWon: 1, points: 20 },
  { rank: 8, name: 'Ale Cuenca', stars: 1, matchesPlayed: 5, matchesWon: 1, points: 20 },
  { rank: 9, name: 'Chino', stars: 0, matchesPlayed: 3, matchesWon: 0, points: 0 },
  { rank: 9, name: 'Mati Gimenez', stars: 0, matchesPlayed: 3, matchesWon: 0, points: 0 }
];


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App players={players}/>
  </StrictMode>,
)
