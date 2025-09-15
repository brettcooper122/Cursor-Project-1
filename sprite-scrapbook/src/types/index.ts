// Core Data Types for Sprite Scrapbook App

export interface Position {
  x: number;
  y: number;
}

export interface Sprite {
  id: string;
  name: string;
  age?: number;
  relationship: string;
  defaultImage: string;
  hoverImage: string;
  position: Position;
  createdAt: Date;
  scrapbookItems: ScrapbookItem[];
}

export interface ScrapbookItem {
  id: string;
  type: 'story' | 'photo';
  content: string;
  position: Position;
  rotation?: number; // For polaroids
  createdAt: Date;
}

// UI State Types
export interface UIContextType {
  isDrawerOpen: boolean;
  activeSprite: string | null;
  isModalOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
  setActiveSprite: (id: string | null) => void;
  setModalOpen: (open: boolean) => void;
}

export interface SpritesContextType {
  sprites: Sprite[];
  addSprite: (sprite: Omit<Sprite, 'id' | 'createdAt'>) => void;
  updateSprite: (id: string, updates: Partial<Sprite>) => void;
  deleteSprite: (id: string) => void;
  getSprite: (id: string) => Sprite | undefined;
}

// Component Props Types
export interface SpriteProps {
  sprite: Sprite;
  onClick: (spriteId: string) => void;
  scale: number;
}

export interface CanvasProps {
  sprites: Sprite[];
  onSpriteClick: (spriteId: string) => void;
  scale: number;
}

export interface ScrapbookProps {
  sprite: Sprite;
  onClose: () => void;
}

// Event Handler Types
export type DragHandler = (id: string, position: Position) => void;
export type ClickHandler = (id: string) => void;

// Form Types
export interface AddSpriteFormData {
  name: string;
  age?: number;
  relationship: string;
  initialStory?: string;
  defaultImage: File | null;
  hoverImage: File | null;
}

// Validation Types
export interface ValidationError {
  field: string;
  message: string;
}

// Animation Types
export interface AnimationConfig {
  duration: number;
  ease: string;
  delay?: number;
}
