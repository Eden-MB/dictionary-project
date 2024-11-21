import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
    <App />
    <footer><p className='mt-4 mb-5'>This project was coded by Eden Million and is open-sourced on <a href='https://github.com/Eden-MB/dictionary-project/tree/main' target='blank_'>GitHub </a>and hosted on <a href='https://dictionary-app-project-edenmb.netlify.app/' target='blank_'>Netlify</a> </p></footer>
    </div>
  </StrictMode>,
)
