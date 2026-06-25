export type TaskStatus = 'pending' | 'completed';

export interface IceSuggestion {
  impact: number;
  confidence: number;
  effort: number;
  reason?: string;
}

export interface Task extends IceSuggestion {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  iceScore: number;
  createdAt: string;
}
