import { Box, Container, Paper, Stack, Typography } from '@mui/material';

import { calculateIceScore } from './utils/calculateIceScore';

const exampleIceScore = calculateIceScore({
  impact: 8,
  confidence: 7,
  effort: 4,
});

function App() {
  return (
    <Box component="main" sx={{ minHeight: '100vh', bgcolor: 'background.default', py: 6 }}>
      <Container maxWidth="md">
        <Stack spacing={3}>
          <Stack spacing={1}>
            <Typography component="h1" variant="h4" sx={{ fontWeight: 700 }}>
              Gestor de Tareas ICE
            </Typography>
            <Typography color="text.secondary">
              Base inicial para priorizar tareas por impacto, confianza y esfuerzo.
            </Typography>
          </Stack>

          <Paper sx={{ p: 3 }}>
            <Stack spacing={2}>
              <Typography component="h2" variant="h6" sx={{ fontWeight: 700 }}>
                Layout base con Material UI
              </Typography>
              <Typography color="text.secondary">
                La puntuacion ICE se calcula localmente. Ejemplo: impacto 8, confianza 7 y esfuerzo
                4 dan como resultado <strong>{exampleIceScore}</strong>.
              </Typography>
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
}

export default App;
