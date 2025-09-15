import { useState, useCallback } from 'react';
import { PanInfo } from 'framer-motion';

interface CanvasState {
  scale: number;
  position: { x: number; y: number };
}

interface UseCanvasReturn {
  scale: number;
  position: { x: number; y: number };
  handleWheel: (event: React.WheelEvent) => void;
  handleDragEnd: (event: any, info: PanInfo) => void;
  resetView: () => void;
  setScale: (scale: number) => void;
  setPosition: (position: { x: number; y: number }) => void;
}

const MIN_SCALE = 0.5;
const MAX_SCALE = 2;
const ZOOM_SENSITIVITY = 0.1;

export const useCanvas = (): UseCanvasReturn => {
  const [state, setState] = useState<CanvasState>({
    scale: 1,
    position: { x: 0, y: 0 }
  });

  // Handle mouse wheel zoom with smooth scaling
  const handleWheel = useCallback((event: React.WheelEvent) => {
    event.preventDefault();
    
    const delta = event.deltaY > 0 ? -ZOOM_SENSITIVITY : ZOOM_SENSITIVITY;
    const newScale = Math.min(Math.max(state.scale + delta, MIN_SCALE), MAX_SCALE);
    
    if (newScale !== state.scale) {
      setState(prev => ({ ...prev, scale: newScale }));
    }
  }, [state.scale]);

  // Handle drag end to update position
  const handleDragEnd = useCallback((_event: any, info: PanInfo) => {
    setState(prev => ({
      ...prev,
      position: {
        x: prev.position.x + info.offset.x,
        y: prev.position.y + info.offset.y
      }
    }));
  }, []);

  // Reset view to center and default scale
  const resetView = useCallback(() => {
    setState({
      scale: 1,
      position: { x: 0, y: 0 }
    });
  }, []);

  // Direct scale setter
  const setScale = useCallback((scale: number) => {
    const clampedScale = Math.min(Math.max(scale, MIN_SCALE), MAX_SCALE);
    setState(prev => ({ ...prev, scale: clampedScale }));
  }, []);

  // Direct position setter
  const setPosition = useCallback((position: { x: number; y: number }) => {
    setState(prev => ({ ...prev, position }));
  }, []);

  return {
    scale: state.scale,
    position: state.position,
    handleWheel,
    handleDragEnd,
    resetView,
    setScale,
    setPosition
  };
};