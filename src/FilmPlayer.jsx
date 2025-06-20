export default function FilmPlayer({ videoUrl, filmName }) {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Watch {filmName}</h2>
      <iframe
        src={videoUrl}
        width="200"
        height="200"
        allow="autoplay"
        allowFullScreen
        title="Film Player"
        style={{ border: 'none' }}
      />
    </div>
  );
}

