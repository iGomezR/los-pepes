import { Card, CardContent, Typography, Box, Stack } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { Player } from '../interfaces/interfaces';

const PlayerCard = ({ player }: { player: Player }) => {
  const { rank, name, stars, matchesPlayed, matchesWon, points } = player;

  return (
    <Card sx={{ marginBottom: 2 }}>
      <Stack
        direction='row' // Column para pantallas pequeñas, row para más grandes
        alignItems="center"
      >
        {/* Imagen centrada y responsiva */}
        <Box
          component="img"
          src={`${import.meta.env.BASE_URL}logo-pepes.png`}
          alt={`${name}'s avatar`}
          sx={{
            width: { xs: 100, sm: 150, md: 200 }, // Ajusta el tamaño según el tamaño de pantalla
            height: { xs: 100, sm: 150, md: 200 },
            borderRadius: '50%', // Circular
            objectFit: 'cover', // Ajustar la imagen
          }}
        />
        {/* Contenido de la tarjeta */}
        <CardContent
          sx={{
            textAlign: { xs: 'left', sm: 'left' }, // Centrado en pantallas pequeñas
            flex: 1, // Asegura que ocupe el espacio necesario
          }}
        >
          <Typography variant="h6">
            {rank}. {name}
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
          >
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
