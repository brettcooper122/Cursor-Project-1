import React from 'react';

const InfiniteCanvas: React.FC = () => {
  return (
    <div 
      className="w-full h-screen bg-white overflow-hidden relative"
      style={{ marginTop: 'var(--nav-height)' }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-400 mb-4 font-retro">
            Infinite Canvas
          </h2>
          <p className="text-lg text-gray-500">
            Sprites will appear here with pan and zoom functionality
          </p>
          <div className="mt-8 grid grid-cols-4 gap-4 max-w-md mx-auto">
            {[...Array(8)].map((_, i) => (
              <div 
                key={i}
                className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold text-sm"
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteCanvas;
