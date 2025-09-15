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
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 p-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="bg-white rounded-lg shadow-2xl w-full max-w-md mx-auto h-full max-h-[calc(100vh-96px)] overflow-y-auto"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30,
              duration: 0.4 
            }}
          >
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
            
            <div className="p-6 space-y-4">
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
              
              <div className="flex space-x-3 pt-4">
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddSpriteModal;