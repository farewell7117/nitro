import { useEffect } from 'react';

export function useEffectAsync(effect: Function, inputs?: ReadonlyArray<any>) {
  useEffect(() => {
    effect();
  }, inputs);
}
