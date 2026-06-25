import { Stack, Typography } from '@mui/material';

import { EmptyState } from './EmptyState';
import { TaskList } from './TaskList';

import type { Task } from '../../../types';

interface TaskListSectionProps {
  emptyMessage: string;
  tasks: Task[];
}

// Agrupa el encabezado del listado y decide entre lista o estado vacio.
export function TaskListSection({ emptyMessage, tasks }: TaskListSectionProps) {
  return (
    <Stack spacing={2}>
      <Stack spacing={0.5}>
        <Typography component="h2" variant="h5" sx={{ fontWeight: 700 }}>
          Tareas
        </Typography>
        <Typography color="text.secondary">
          Revisa las tareas ordenadas por prioridad y filtra por estado.
        </Typography>
      </Stack>

      {tasks.length > 0 ? <TaskList tasks={tasks} /> : <EmptyState message={emptyMessage} />}
    </Stack>
  );
}
