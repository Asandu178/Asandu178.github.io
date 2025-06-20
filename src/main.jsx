import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FilmPlayer from './FilmPlayer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FilmPlayer videoUrl={'https://drive.google.com/file/d/1Ct8lYzDFxaTBdyUs7AkzXmdP7H-iNcIK/preview'} />
    <FilmPlayer videoUrl={'https://drive.google.com/file/d/1V-FQEM-hr2lcgMmR93PSGtttbONNVh-M/preview'} />
  </StrictMode>,
)
