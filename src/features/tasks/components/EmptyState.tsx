import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import { Box, Stack, Typography } from '@mui/material';

interface EmptyStateProps {
  message: string;
}

// Muestra el estado vacio del listado cuando no hay tareas que renderizar.
export function EmptyState({ message }: EmptyStateProps) {
  return (
    <Box
      sx={{
        border: '1px dashed',
        borderColor: 'divider',
        borderRadius: 2,
        bgcolor: 'background.paper',
        px: 3,
        py: 6,
        textAlign: 'center',
      }}
    >
      <Stack spacing={1.5} sx={{ alignItems: 'center' }}>
        <AssignmentOutlinedIcon color="primary" fontSize="large" />
        <Typography component="h2" variant="h6" sx={{ fontWeight: 700 }}>
          Sin tareas
        </Typography>
        <Typography color="text.secondary">{message}</Typography>
      </Stack>
    </Box>
  );
}
