import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AddSpriteModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const AddSpriteModal: React.FC<AddSpriteModalProps> = ({ 
  isOpen = false, 
  onClose 
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark overlay above canvas */}
          <motion.div 
            className="fixed inset-0 z-40"
            style={{ backgroundColor: 'rgba(20, 20, 20, 0.55)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />
          
          {/* Side drawer - fixed width, slides from right edge */}
          <motion.div 
            className="fixed top-0 right-0 h-screen w-96 bg-white shadow-2xl z-50"
            style={{ marginTop: 'var(--nav-height)' }}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30,
              duration: 0.4 
            }}
          >
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-primary font-retro">
                  Add New Sprite
                </h2>
                <button 
                  className="text-gray-500 hover:text-gray-700 text-2xl transition-colors"
                  onClick={onClose}
                >
                  ×
                </button>
              </div>
              
              {/* Scrollable content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                    placeholder="Enter sprite name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Relationship *
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                    placeholder="e.g., Friend, Family, Colleague"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Age (optional)
                  </label>
                  <input 
                    type="number" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                    placeholder="Enter age"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Initial Story (optional)
                  </label>
                  <textarea 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent h-20 resize-none transition-colors"
                    placeholder="Tell us about this person..."
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Default Sprite Image *
                  </label>
                  <input 
                    type="file" 
                    accept="image/*"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Hover Sprite Image *
                  </label>
                  <input 
                    type="file" 
                    accept="image/*"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                  />
                </div>
              </div>
              
              {/* Footer with buttons */}
              <div className="p-6 border-t border-gray-200">
                <div className="flex space-x-3">
                  <button 
                    className="flex-1 py-2 px-4 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                  <button className="flex-1 py-2 px-4 bg-accent text-white rounded-lg hover:bg-accent/80 transition-colors">
                    Create Sprite
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AddSpriteModal;