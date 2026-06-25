import { calculateIceScore } from '../../utils/calculateIceScore';

import type { Task } from '../../types';

export const demoTasks: Task[] = [
  {
    id: 'task-1',
    title: 'Preparar demo del MVP',
    description: 'Montar una demo breve para explicar como se priorizan las tareas con ICE.',
    status: 'pending',
    impact: 9,
    confidence: 8,
    effort: 4,
    iceScore: calculateIceScore({ impact: 9, confidence: 8, effort: 4 }),
    reason: 'Ayuda a comunicar el valor del proyecto con un esfuerzo moderado.',
    createdAt: '2026-06-23T10:00:00.000Z',
  },
  {
    id: 'task-2',
    title: 'Revisar estilos base',
    description: 'Ajustar espaciado, colores y jerarquia visual de la pantalla principal.',
    status: 'pending',
    impact: 6,
    confidence: 7,
    effort: 3,
    iceScore: calculateIceScore({ impact: 6, confidence: 7, effort: 3 }),
    reason: 'Mejora la claridad de la interfaz antes de avanzar con el formulario.',
    createdAt: '2026-06-23T11:00:00.000Z',
  },
  {
    id: 'task-3',
    title: 'Documentar criterios de aceptacion',
    description: 'Resumir los criterios que definen cuando el MVP esta completo.',
    status: 'pending',
    impact: 5,
    confidence: 6,
    effort: 5,
    iceScore: calculateIceScore({ impact: 5, confidence: 6, effort: 5 }),
    reason: 'Aporta orden al trabajo, aunque su prioridad ICE es menor.',
    createdAt: '2026-06-23T12:00:00.000Z',
  },
];
