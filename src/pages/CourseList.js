import { Link } from 'react-router-dom';
import { courses } from '../data/courses';

function CourseList() {
  return (
    <div className="page">
      <h1 className="page-title">Liste des cours</h1>
      <p className="page-subtitle">Choisissez un parcours pour commencer.</p>
      <div className="card-grid">
        {courses.map((course) => (
          <article key={course.id} className="card">
            <Link to={`/cours/${course.id}`}>
              <h2 className="card-title">{course.title}</h2>
              <p className="card-desc">{course.description}</p>
            </Link>
          </article>
        ))}
      </div>
      <Link to="/" className="link-back">← Retour à l'accueil</Link>
    </div>
  );
}

export default CourseList;
