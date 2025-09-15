import React, { useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useCanvas } from '../../hooks/useCanvas';

interface InfiniteCanvasProps {
  children?: React.ReactNode;
  className?: string;
}

const InfiniteCanvas: React.FC<InfiniteCanvasProps> = ({ 
  children, 
  className = '' 
}) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const { scale, position, handleWheel, handleDragEnd } = useCanvas();

  // Prevent context menu and other default behaviors
  const handleContextMenu = useCallback((event: React.MouseEvent) => {
    event.preventDefault();
  }, []);

  return (
    <div 
      ref={canvasRef}
      className={`w-full h-screen bg-white overflow-hidden relative ${className}`}
      style={{ 
        marginTop: 'var(--nav-height)',
        cursor: 'grab'
      }}
      onWheel={handleWheel}
      onContextMenu={handleContextMenu}
    >
      <motion.div
        className="w-full h-full relative gpu-accelerated"
        drag
        dragConstraints={canvasRef}
        dragElastic={0.1}
        dragMomentum={true}
        onDragEnd={handleDragEnd}
        style={{
          scale,
          x: position.x,
          y: position.y,
          transformOrigin: 'center center'
        }}
        whileDrag={{ 
          cursor: 'grabbing',
          scale: scale * 0.98 // Slight scale down while dragging for feedback
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30
        }}
      >
        {/* Canvas content area - this is where sprites will be placed */}
        <div className="absolute inset-0">
          {children || (
            // Default placeholder content when no children
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-400 mb-4 font-retro">
                  Infinite Canvas
                </h2>
                <p className="text-lg text-gray-500 mb-2">
                  Pan: Click and drag to move around
                </p>
                <p className="text-lg text-gray-500 mb-2">
                  Zoom: Mouse wheel (0.5x - 2x)
                </p>
                <div className="mt-8 grid grid-cols-4 gap-4 max-w-md mx-auto">
                  {[...Array(8)].map((_, i) => (
                    <div 
                      key={i}
                      className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold text-sm gpu-accelerated"
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* Zoom indicator */}
      <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white px-3 py-2 rounded-lg text-sm font-mono">
        {Math.round(scale * 100)}%
      </div>

      {/* Instructions overlay */}
      <div className="absolute top-4 left-4 bg-black bg-opacity-75 text-white p-3 rounded-lg text-sm max-w-xs">
        <div className="font-bold mb-2">Canvas Controls:</div>
        <div>• Drag to pan around</div>
        <div>• Mouse wheel to zoom</div>
        <div>• Sprites will appear here</div>
      </div>
    </div>
  );
};

export default InfiniteCanvas;