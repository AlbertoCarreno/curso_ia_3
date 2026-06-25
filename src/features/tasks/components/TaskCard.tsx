import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Box, Card, CardContent, Chip, Stack, Typography } from '@mui/material';

import type { Task } from '../../../types';

interface TaskCardProps {
  task: Task;
}

const statusLabels: Record<Task['status'], string> = {
  pending: 'Pendiente',
  completed: 'Completada',
};

// Presenta una tarea con su estado, valores ICE y justificacion disponible.
export function TaskCard({ task }: TaskCardProps) {
  const StatusIcon =
    task.status === 'completed' ? CheckCircleOutlinedIcon : RadioButtonUncheckedIcon;

  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <CardContent>
        <Stack spacing={2}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1.5}
            sx={{ justifyContent: 'space-between' }}
          >
            <Box>
              <Typography component="h3" variant="h6" sx={{ fontWeight: 700 }}>
                {task.title}
              </Typography>
              <Typography color="text.secondary">{task.description}</Typography>
            </Box>

            <Chip
              icon={<StatusIcon />}
              label={statusLabels[task.status]}
              color={task.status === 'completed' ? 'success' : 'primary'}
              variant="outlined"
              sx={{ alignSelf: { xs: 'flex-start', sm: 'center' }, minWidth: 128 }}
            />
          </Stack>

          <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
            <Chip label={`ICE ${task.iceScore}`} color="primary" />
            <Chip label={`Impacto ${task.impact}`} variant="outlined" />
            <Chip label={`Confianza ${task.confidence}`} variant="outlined" />
            <Chip label={`Esfuerzo ${task.effort}`} variant="outlined" />
          </Stack>

          {task.reason ? (
            <Typography color="text.secondary" variant="body2">
              {task.reason}
            </Typography>
          ) : null}
        </Stack>
      </CardContent>
    </Card>
  );
}
