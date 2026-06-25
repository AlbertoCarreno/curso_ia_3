import AddIcon from '@mui/icons-material/Add';
import {
  AppBar as MuiAppBar,
  Box,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { useMemo, useState } from 'react';

import { TaskListSection } from './components/TaskListSection';
import { TaskToolbar } from './components/TaskToolbar';
import { demoTasks } from './demoTasks';

import type { TaskSortMode, TaskStatusFilter } from './taskFilters';
import type { Task } from '../../types';

// Orquesta la pantalla principal con tareas demo, filtros y ordenacion local.
export function TaskDashboard() {
  const [tasks] = useState<Task[]>(demoTasks);
  const [filter, setFilter] = useState<TaskStatusFilter>('all');
  const [sortMode, setSortMode] = useState<TaskSortMode>('createdAt');

  const visibleTasks = useMemo(
    () => sortTasks(filterTasks(tasks, filter), sortMode),
    [filter, sortMode, tasks],
  );

  return (
    <Box component="main" sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <MuiAppBar position="static" elevation={0}>
        <Toolbar>
          <Typography component="h1" variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
            Gestor de Tareas ICE
          </Typography>
          <Button color="inherit" startIcon={<AddIcon />} disabled>
            Crear tarea
          </Button>
        </Toolbar>
      </MuiAppBar>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Stack spacing={3}>
          <Stack spacing={1}>
            <Typography component="h2" variant="h4" sx={{ fontWeight: 700 }}>
              Prioridad por ICE
            </Typography>
            <Typography color="text.secondary">
              Organiza las tareas por impacto, confianza y esfuerzo antes de decidir que hacer.
            </Typography>
          </Stack>

          <TaskToolbar
            filter={filter}
            onFilterChange={setFilter}
            onSortModeChange={setSortMode}
            sortMode={sortMode}
          />

          <TaskListSection emptyMessage={getEmptyMessage(filter)} tasks={visibleTasks} />
        </Stack>
      </Container>
    </Box>
  );
}

// Devuelve las tareas que corresponden al filtro de estado activo.
function filterTasks(tasks: Task[], filter: TaskStatusFilter): Task[] {
  if (filter === 'all') {
    return tasks;
  }

  return tasks.filter((task) => task.status === filter);
}

// Ordena las tareas por fecha de creacion o por puntuacion ICE descendente.
function sortTasks(tasks: Task[], sortMode: TaskSortMode): Task[] {
  return [...tasks].sort((firstTask, secondTask) => {
    if (sortMode === 'iceScore') {
      return secondTask.iceScore - firstTask.iceScore;
    }

    return Date.parse(secondTask.createdAt) - Date.parse(firstTask.createdAt);
  });
}

// Adapta el mensaje vacio al filtro seleccionado.
function getEmptyMessage(filter: TaskStatusFilter): string {
  if (filter === 'completed') {
    return 'No hay tareas completadas todavia.';
  }

  if (filter === 'pending') {
    return 'No hay tareas pendientes todavia.';
  }

  return 'No hay tareas creadas todavia.';
}
