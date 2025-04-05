import { createRoot } from 'react-dom/client';
import './index.css';
import '@fontsource-variable/onest';
import '@fontsource-variable/fira-code';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(<App />);
