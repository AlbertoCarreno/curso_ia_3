import FilterListIcon from '@mui/icons-material/FilterList';
import SortIcon from '@mui/icons-material/Sort';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';

import type { TaskSortMode, TaskStatusFilter } from '../taskFilters';
import type { SelectChangeEvent } from '@mui/material';
import type { MouseEvent } from 'react';

interface TaskToolbarProps {
  filter: TaskStatusFilter;
  onFilterChange: (filter: TaskStatusFilter) => void;
  onSortModeChange: (sortMode: TaskSortMode) => void;
  sortMode: TaskSortMode;
}

// Controla las opciones de ordenacion y filtrado del listado.
export function TaskToolbar({
  filter,
  onFilterChange,
  onSortModeChange,
  sortMode,
}: TaskToolbarProps) {
  const handleFilterChange = (event: SelectChangeEvent) => {
    onFilterChange(event.target.value as TaskStatusFilter);
  };

  const handleSortModeChange = (_event: MouseEvent<HTMLElement>, value: TaskSortMode | null) => {
    if (value) {
      onSortModeChange(value);
    }
  };

  return (
    <Box
      sx={{
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        bgcolor: 'background.paper',
        p: 2,
      }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        sx={{ alignItems: { sm: 'center' } }}
      >
        <ToggleButtonGroup
          exclusive
          value={sortMode}
          onChange={handleSortModeChange}
          aria-label="Ordenacion de tareas"
          size="small"
        >
          <ToggleButton value="iceScore" aria-label="Ordenar por ICE">
            <SortIcon fontSize="small" />
            ICE
          </ToggleButton>
          <ToggleButton value="createdAt" aria-label="Ordenar por fecha de creacion">
            Fecha
          </ToggleButton>
        </ToggleButtonGroup>

        <FormControl size="small" sx={{ minWidth: { xs: '100%', sm: 220 }, ml: { sm: 'auto' } }}>
          <InputLabel id="task-status-filter-label">Estado</InputLabel>
          <Select
            labelId="task-status-filter-label"
            id="task-status-filter"
            value={filter}
            label="Estado"
            onChange={handleFilterChange}
            startAdornment={<FilterListIcon color="action" fontSize="small" sx={{ mr: 1 }} />}
          >
            <MenuItem value="all">Todas</MenuItem>
            <MenuItem value="pending">Pendientes</MenuItem>
            <MenuItem value="completed">Completadas</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </Box>
  );
}
