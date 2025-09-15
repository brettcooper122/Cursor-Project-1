import { useState } from 'react';
import TopNav from './components/ui/TopNav';
import InfiniteCanvas from './components/canvas/InfiniteCanvas';
import SideDrawer from './components/ui/SideDrawer';
import AddSpriteModal from './components/ui/AddSpriteModal';
import './styles/globals.css';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddSpriteClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="App">
      <TopNav onAddSpriteClick={handleAddSpriteClick} />
      <InfiniteCanvas />
      <SideDrawer 
        isOpen={isDrawerOpen} 
        onClose={handleCloseDrawer} 
      />
      <AddSpriteModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </div>
  );
}

export default App;