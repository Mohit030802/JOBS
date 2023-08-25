import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  theme: {
    
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
    },
    },
    
    
  },
  plugins: [react()],
})
