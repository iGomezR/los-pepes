import { Card, CardContent, Typography, Box, Stack } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { Player } from '../interfaces/interfaces';

const PlayerCard = ({ player }: { player: Player }) => {
  const { rank, name, stars, matchesPlayed, matchesWon, points } = player;

  return (
    <Card sx={{ marginBottom: 2 }}>
      <Stack
        direction='row'
        alignItems="center"
      >
        <Box
          component="img"
          src={`${import.meta.env.BASE_URL}logo-pepes.png`}
          alt={`${name}'s avatar`}
          sx={{
            width: { xs: 100, sm: 150, md: 200 },
            height: { xs: 100, sm: 150, md: 200 },
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />
        <CardContent
          sx={{
            textAlign: { xs: 'left', sm: 'left' },
            flex: 1,
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
