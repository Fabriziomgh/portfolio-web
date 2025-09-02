import { createRoot } from 'react-dom/client';
import './index.css';

// @ts-expect-error Fuentes que no traen tipos
import '@fontsource-variable/inter';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(<App />);
