import React, { useState } from 'react';
import Header from './components/Header';
import PlayerCard from './components/PlayerCard';
import { Container, Tab, Tabs, Typography } from '@mui/material';

const App = () => {


  const fecha_1 = [
    { id: 1, name: 'Renato', matchesPlayed: 4, matchesWon: 4, points: 100, stars: 4 },
    { id: 2, name: 'Guille', matchesPlayed: 4, matchesWon: 4, points: 100, stars: 4 },
    { id: 3, name: 'Chelo', matchesPlayed: 4, matchesWon: 4, points: 100, stars: 4 },
    { id: 4, name: 'Juanki', matchesPlayed: 4, matchesWon: 4, points: 100, stars: 4 },
    { id: 5, name: 'Ivan G', matchesPlayed: 3, matchesWon: 2, points: 67, stars: 2 },
    { id: 6, name: 'Loa', matchesPlayed: 3, matchesWon: 2, points: 67, stars: 2 },
    { id: 7, name: 'Franco', matchesPlayed: 4, matchesWon: 2, points: 50, stars: 2 },
    { id: 8, name: 'Pepe', matchesPlayed: 4, matchesWon: 2, points: 50, stars: 2 },
    { id: 9, name: 'Tingui', matchesPlayed: 4, matchesWon: 2, points: 50, stars: 2 },
    { id: 10, name: 'Javi', matchesPlayed: 4, matchesWon: 2, points: 50, stars: 2 },
    { id: 11, name: 'Carlitos', matchesPlayed: 3, matchesWon: 1, points: 33, stars: 1 },
    { id: 12, name: 'Fer G', matchesPlayed: 3, matchesWon: 1, points: 33, stars: 1 },
    { id: 13, name: 'Percha', matchesPlayed: 4, matchesWon: 1, points: 25, stars: 1 },
    { id: 14, name: 'Vibora', matchesPlayed: 4, matchesWon: 1, points: 25, stars: 1 },
    { id: 15, name: 'Mati Poe', matchesPlayed: 5, matchesWon: 1, points: 20, stars: 0 },
    { id: 16, name: 'Ale Cuenca', matchesPlayed: 5, matchesWon: 1, points: 20, stars: 0 },
    { id: 17, name: 'Chino', matchesPlayed: 3, matchesWon: 0, points: 0, stars: 0 },
    { id: 18, name: 'Mati Gimenez', matchesPlayed: 3, matchesWon: 0, points: 0, stars: 0 }
  ];
  
  
  const fecha_2 = [
    { id: 1, name: 'Renato', matchesPlayed: 4, matchesWon: 3, points: 75.0, stars: 3 },
    { id: 6, name: 'Loa', matchesPlayed: 4, matchesWon: 3, points: 75.0, stars: 3 },
    { id: 5, name: 'Ivan G', matchesPlayed: 4, matchesWon: 1, points: 25.0, stars: 1 },
    { id: 8, name: 'Pepe', matchesPlayed: 4, matchesWon: 1, points: 25.0, stars: 1 },
    { id: 15, name: 'Mati Poe', matchesPlayed: 4, matchesWon: 3, points: 75.0, stars: 3 },
    { id: 14, name: 'Vibora', matchesPlayed: 4, matchesWon: 3, points: 75.0, stars: 3 },
    { id: 16, name: 'Ale Cuenca', matchesPlayed: 4, matchesWon: 2, points: 50.0, stars: 2 },
    { id: 9, name: 'Tingui', matchesPlayed: 4, matchesWon: 2, points: 50.0, stars: 2 },
    { id: 27, name: 'Juancho', matchesPlayed: 4, matchesWon: 2, points: 50.0, stars: 2 }, // Nuevo jugador
    { id: 12, name: 'Fer G', matchesPlayed: 4, matchesWon: 2, points: 50.0, stars: 2 },
    { id: 7, name: 'Franco', matchesPlayed: 4, matchesWon: 2, points: 50.0, stars: 2 },
    { id: 2, name: 'Guille', matchesPlayed: 4, matchesWon: 2, points: 50.0, stars: 2 },
    { id: 11, name: 'Carlitos', matchesPlayed: 4, matchesWon: 2, points: 50.0, stars: 2 },
    { id: 10, name: 'Javi', matchesPlayed: 4, matchesWon: 2, points: 50.0, stars: 2 },
    { id: 17, name: 'Chino', matchesPlayed: 4, matchesWon: 0, points: 0.0, stars: 0 },
    { id: 13, name: 'Percha', matchesPlayed: 4, matchesWon: 0, points: 0.0, stars: 0 }
  ];
  
  
  const acumulado = [
    { id: 1, name: 'Renato', matchesPlayed: 8, matchesWon: 7, points: 175.0, stars: 5 },
    { id: 2, name: 'Guille', matchesPlayed: 8, matchesWon: 6, points: 150.0, stars: 5 },
    { id: 3, name: 'Chelo', matchesPlayed: 4, matchesWon: 4, points: 100.0, stars: 4 },
    { id: 4, name: 'Juanki', matchesPlayed: 4, matchesWon: 4, points: 100.0, stars: 4 },
    { id: 5, name: 'Ivan G', matchesPlayed: 7, matchesWon: 3, points: 92.0, stars: 3 },
    { id: 6, name: 'Loa', matchesPlayed: 7, matchesWon: 5, points: 142.0, stars: 4 },
    { id: 7, name: 'Franco', matchesPlayed: 8, matchesWon: 4, points: 100.0, stars: 4 },
    { id: 8, name: 'Pepe', matchesPlayed: 8, matchesWon: 3, points: 75.0, stars: 3 },
    { id: 9, name: 'Tingui', matchesPlayed: 8, matchesWon: 4, points: 100.0, stars: 4 },
    { id: 10, name: 'Javi', matchesPlayed: 8, matchesWon: 4, points: 100.0, stars: 4 },
    { id: 11, name: 'Carlitos', matchesPlayed: 7, matchesWon: 3, points: 83.0, stars: 3 },
    { id: 12, name: 'Fer G', matchesPlayed: 7, matchesWon: 3, points: 83.0, stars: 3 },
    { id: 13, name: 'Percha', matchesPlayed: 8, matchesWon: 1, points: 25.0, stars: 1 },
    { id: 14, name: 'Vibora', matchesPlayed: 8, matchesWon: 4, points: 100.0, stars: 4 },
    { id: 15, name: 'Mati Poe', matchesPlayed: 9, matchesWon: 4, points: 95.0, stars: 3 },
    { id: 16, name: 'Ale Cuenca', matchesPlayed: 9, matchesWon: 3, points: 70.0, stars: 2 },
    { id: 17, name: 'Chino', matchesPlayed: 7, matchesWon: 0, points: 0.0, stars: 0 },
    { id: 18, name: 'Mati Gimenez', matchesPlayed: 3, matchesWon: 0, points: 0.0, stars: 0 },
    { id: 27, name: 'Juancho', matchesPlayed: 4, matchesWon: 2, points: 50.0, stars: 2 }
  ];
  const [activeTab, setActiveTab] = useState(0);
  const [players, setPlayers] = useState(acumulado);
  
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    event.preventDefault()
    setActiveTab(newValue);
    // Cambiar los datos según la pestaña seleccionada
    if (newValue === 0) setPlayers(acumulado);
    if (newValue === 1) setPlayers(fecha_1);
    if (newValue === 2) setPlayers(fecha_2);
  };

  return (
    <div>
    <Header />
    <Container sx={{ marginTop: 2 }}>
      {/* Tabs de Material-UI */}
      <Tabs
        value={activeTab}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        centered
      >
        <Tab label="Tabla" />
        <Tab label="Primera Fecha" />
        <Tab label="Segunda Fecha" />
      </Tabs>

      {/* Contenido dinámico según los jugadores */}
      {players.length > 0 ? (
        React.Children.toArray(players
          .sort((a, b) => b.points - a.points)
          .map((player) => <PlayerCard player={player} />)
      )) : (
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          No hay datos disponibles para esta selección.
        </Typography>
      )}
    </Container>
  </div>
  );
};

export default App;