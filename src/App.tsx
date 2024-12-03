import React from 'react';
import { AppProps } from './interfaces/interfaces';
import Header from './components/Header';
import PlayerCard from './components/PlayerCard';
import { Container, Typography } from '@mui/material';

const App: React.FC<AppProps> = ({ players }) => {
  return (
    <div >
      <Header />
      <Container sx={{ marginTop: 2 }}>
        <Typography variant="h4" gutterBottom>
          Ranking de Jugadores
        </Typography>
        {players.map((player) => (
          <PlayerCard key={player.rank} player={player} />
        ))}
      </Container>
    </div>
  );
};

export default App;