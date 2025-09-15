import React from 'react';

interface SideDrawerProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const SideDrawer: React.FC<SideDrawerProps> = ({ 
  isOpen = false, 
  onClose 
}) => {
  return (
    <div 
      className={`fixed top-0 right-0 h-full bg-paper shadow-2xl border-l-2 border-secondary transition-transform duration-300 ease-in-out z-40 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      style={{ width: 'var(--drawer-width)', marginTop: 'var(--nav-height)' }}
    >
      <div className="p-6 h-full overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-secondary font-retro">
            Scrapbook
          </h2>
          <button 
            className="text-gray-500 hover:text-gray-700 text-2xl"
            onClick={onClose}
          >
            ×
          </button>
        </div>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md border-2 border-dashed border-gray-300">
            <p className="text-gray-500 text-center">
              Scrapbook content will appear here
            </p>
            <p className="text-sm text-gray-400 text-center mt-2">
              Stories and photos will be draggable
            </p>
          </div>
          
          <div className="flex space-x-2">
            <button className="flex-1 py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors">
              Add Story
            </button>
            <button className="flex-1 py-2 px-4 bg-secondary text-white rounded-lg hover:bg-secondary/80 transition-colors">
              Add Photo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;