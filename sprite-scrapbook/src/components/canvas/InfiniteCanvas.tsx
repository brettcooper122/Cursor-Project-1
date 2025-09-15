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
      className={`w-screen h-screen bg-white overflow-hidden relative ${className}`}
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
        {/* Canvas content area - only sprites will be placed here */}
        <div className="absolute inset-0">
          {children || (
            // Placeholder sprites when no children provided
            <div className="absolute inset-0">
              {/* Sample sprites scattered randomly */}
              {[...Array(6)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold text-sm gpu-accelerated cursor-pointer hover:scale-105 transition-transform duration-200"
                  style={{
                    left: `${20 + (i * 15) % 60}%`,
                    top: `${30 + (i * 20) % 50}%`,
                  }}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>

      {/* Zoom indicator - minimal and unobtrusive */}
      <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs font-mono">
        {Math.round(scale * 100)}%
      </div>
    </div>
  );
};

export default InfiniteCanvas;