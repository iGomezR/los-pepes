export interface HeaderProps {
  logoSrc?: string; // Ruta opcional del logo
  title?: string; // Título del encabezado (opcional)
}

export interface Player {
  rank: number; // Posición en el ranking
  name: string; // Nombre del jugador
  stars: number; // Cantidad de estrellas según su rendimiento
  matchesPlayed: number; // Partidos jugados
  matchesWon: number; // Partidos ganados
  points: number; // Puntos totales acumulados
}

export interface PlayerCardProps {
  player: Player; // Información del jugador
}

export interface AppProps {
  players: Player[]; // Lista de jugadores para el ranking
}
