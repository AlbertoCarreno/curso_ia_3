import { Stack } from '@mui/material';

import { TaskCard } from './TaskCard';

import type { Task } from '../../../types';

interface TaskListProps {
  tasks: Task[];
}

// Renderiza la coleccion de tareas delegando la presentacion de cada item.
export function TaskList({ tasks }: TaskListProps) {
  return (
    <Stack spacing={2}>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </Stack>
  );
}
