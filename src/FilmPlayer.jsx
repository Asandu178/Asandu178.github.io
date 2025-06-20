export default function FilmPlayer({ videoUrl }) {
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

