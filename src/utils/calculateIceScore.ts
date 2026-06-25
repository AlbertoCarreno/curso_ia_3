import type { IceSuggestion } from '../types';

// Calcula la prioridad ICE local a partir de impacto, confianza y esfuerzo.
export function calculateIceScore({
  impact,
  confidence,
  effort,
}: Pick<IceSuggestion, 'impact' | 'confidence' | 'effort'>): number {
  if (effort <= 0) {
    return 0;
  }

  return Number(((impact * confidence) / effort).toFixed(2));
}
