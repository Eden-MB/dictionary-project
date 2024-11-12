import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
    <App />
    <p className='mt-4'>This project was coded by Eden Million and is open-sourced on <a href='https://github.com/Eden-MB/dictionary-project/tree/main' target='blank_'>GitHub </a>and hosted on <a href='https://dictionary-app-project-edenmb.netlify.app/' target='blank_'>Netlify</a> </p>
    </div>
  </StrictMode>,
)
