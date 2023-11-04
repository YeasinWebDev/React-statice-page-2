import './index.css'
import { createRoot } from 'react-dom/client';
import App from './App'

const show = createRoot(document.getElementById("root"))
show.render(<App />)