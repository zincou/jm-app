import { Link, useParams } from 'react-router-dom';
import { getCourse } from '../data/courses';

function Course() {
  const { courseId } = useParams();
  const course = getCourse(courseId);

  if (!course) {
    return (
      <div className="page">
        <p className="error-state">Cours introuvable.</p>
        <Link to="/cours" className="link-back">Retour aux cours</Link>
      </div>
    );
  }

  const hasChapters = course.chapters && course.chapters.length > 0;

  return (
    <div className="page">
      <div className="page-content">
        <h1 className="page-title">{course.title}</h1>
        <p className="page-subtitle">{course.description}</p>

        {hasChapters ? (
          <>
            <h2 className="section-title">Chapitres</h2>
            {course.chapters.map((chapter) => (
              <div key={chapter.id} className="chapter-block">
                <h3 className="chapter-title">{chapter.title}</h3>
                {(chapter.subChapters || []).map((sub) => (
                  <div key={sub.id} className="subchapter-block">
                    <h4 className="subchapter-title">{sub.title}</h4>
                    <ul className="lesson-list">
                      {(sub.lessons || []).map((lesson) => (
                        <li key={lesson.id}>
                          <Link to={`/cours/${courseId}/lecon/${lesson.id}`}>{lesson.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </>
        ) : (
          <p className="empty-state">Aucun chapitre pour l'instant.</p>
        )}

        <Link to="/cours" className="link-back">← Retour aux cours</Link>
      </div>
    </div>
  );
}

export default Course;
