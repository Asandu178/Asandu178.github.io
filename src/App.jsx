import React from 'react';

function FilmPlayer({ videoUrl }) {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Watch Film</h1>
      <iframe
        src={videoUrl}
        width="800"
        height="450"
        allow="autoplay"
        allowFullScreen
        title="Film Player"
        style={{ border: 'none' }}
      />
    </div>
  );
}

// Example usage with your Google Drive preview URL
export default function App() {
  const filmUrl = 'https://drive.google.com/file/d/1Ct8lYzDFxaTBdyUs7AkzXmdP7H-iNcIK/preview';

  return <FilmPlayer videoUrl={filmUrl} />;
}
