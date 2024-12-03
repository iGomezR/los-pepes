// import React from 'react';
import { Card, CardContent, Typography, Box, Stack } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { Player } from '../interfaces/interfaces';

const PlayerCard = ({ player }: {player: Player}) => {
  const { rank, name, stars, matchesPlayed, matchesWon, points } = player
  return (
    <Card sx={{ marginBottom: 1 }}>
      <Stack direction="row" alignItems="center" spacing={1}>
        {/* Imagen centrada a la izquierda */}
        <Box
          component="img"
          src={`${import.meta.env.BASE_URL}logo-pepes.png`}
          alt={`${name}'s avatar`}
          sx={{
            width: 200,
            height: 200,
            borderRadius: '50%', // Para que sea circular
            objectFit: 'cover', // Ajustar la imagen
          }}
        />
        {/* Contenido de la tarjeta */}
        <CardContent>
          <Typography variant="h6">
            {rank}. {name}
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="body2">Estrellas:</Typography>
            <Box>
              {Array(stars)
                .fill(null)
                .map((_, index) => (
                  <StarIcon key={index} color="primary" />
                ))}
            </Box>
          </Stack>
          <Typography variant="body2">Partidos Jugados: {matchesPlayed}</Typography>
          <Typography variant="body2">Partidos Ganados: {matchesWon}</Typography>
          <Typography variant="body2">Puntos: {points}</Typography>
        </CardContent>
      </Stack>
    </Card>
  );
};

export default PlayerCard;