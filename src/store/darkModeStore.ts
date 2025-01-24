import { create } from 'zustand';

interface DarkModeState {
    darkMode: boolean;
    toggleDarkMode: () => void; 
  }
  
  const useDarkModeStore = create<DarkModeState>((set) => ({
    darkMode: true, 
    toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  }));
  
  export default useDarkModeStore;
  