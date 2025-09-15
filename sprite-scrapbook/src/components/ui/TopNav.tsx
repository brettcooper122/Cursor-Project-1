import React from 'react';

interface TopNavProps {
  onAddSpriteClick?: () => void;
}

const TopNav: React.FC<TopNavProps> = ({ onAddSpriteClick }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b-2 border-accent">
      <div className="flex items-center justify-between px-6 py-4" style={{ height: 'var(--nav-height)' }}>
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-primary font-retro">
            Sprite Scrapbook
          </h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <button 
            className="px-6 py-2 bg-accent text-white rounded-lg font-medium hover:bg-accent/80 transition-colors"
            onClick={onAddSpriteClick}
          >
            Add New Sprite
          </button>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;