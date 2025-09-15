import { useState } from 'react';
import TopNav from './components/ui/TopNav';
import InfiniteCanvas from './components/canvas/InfiniteCanvas';
import SideDrawer from './components/ui/SideDrawer';
import AddSpriteModal from './components/ui/AddSpriteModal';
import './styles/globals.css';

function App() {
  const [isDrawerOpen] = useState(false);
  const [isModalOpen] = useState(false);

  return (
    <div className="App">
      <TopNav />
      <InfiniteCanvas />
      <SideDrawer />
      <AddSpriteModal />
      
      {/* Debug info */}
      <div className="fixed bottom-4 left-4 bg-black bg-opacity-75 text-white p-3 rounded-lg text-sm">
        <div>Drawer: {isDrawerOpen ? 'Open' : 'Closed'}</div>
        <div>Modal: {isModalOpen ? 'Open' : 'Closed'}</div>
        <div className="text-xs text-gray-300 mt-1">
          Infinite canvas with pan & zoom ready
        </div>
      </div>
    </div>
  );
}

export default App;