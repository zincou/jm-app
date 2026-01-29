import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page">
      <div className="page-content">
        <h1 className="page-title">Formation front-end</h1>
        <p className="page-subtitle">
          Bienvenue sur la plateforme. Apprenez HTML, CSS, LESS, SASS et JavaScript à votre rythme, avec des leçons structurées et des exercices.
        </p>
        <Link to="/cours" className="btn btn-primary">Voir les cours</Link>
      </div>
    </div>
  );
}

export default Home;
