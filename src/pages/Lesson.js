import { Link, useParams } from 'react-router-dom';
import { getLesson } from '../data/courses';
import Exercises from '../components/Exercises';

function ContentBlock({ block }) {
  if (block.type === 'paragraph') {
    return <p dangerouslySetInnerHTML={{ __html: block.text }} />;
  }
  if (block.type === 'code') {
    return (
      <pre className="code-block">
        <code className={block.language ? `language-${block.language}` : ''}>{block.text}</code>
      </pre>
    );
  }
  return null;
}

function Lesson() {
  const { courseId, lessonId } = useParams();
  const result = getLesson(courseId, lessonId);

  if (!result) {
    return (
      <div className="page">
        <p className="error-state">Leçon introuvable.</p>
        <Link to="/cours" className="link-back">Retour aux cours</Link>
      </div>
    );
  }

  const { course, chapter, subChapter, lesson } = result;
  const content = Array.isArray(lesson.content) ? lesson.content : [{ type: 'paragraph', text: lesson.content || '' }];

  return (
    <div className="page">
      <div className="page-content">
        <nav className="breadcrumb">
          <Link to="/cours">Cours</Link>
          <span>›</span>
          <Link to={`/cours/${courseId}`}>{course.title}</Link>
          <span>›</span>
          <span>{chapter.title}</span>
          <span>›</span>
          <span>{subChapter.title}</span>
          <span>›</span>
          <strong>{lesson.title}</strong>
        </nav>

        <h1 className="page-title">{lesson.title}</h1>

        <div className="lesson-content">
          {content.map((block, i) => (
            <ContentBlock key={i} block={block} />
          ))}
        </div>

        <Exercises exercises={lesson.exercises} />

        <p className="lesson-footer">
          <Link to={`/cours/${courseId}`}>← Retour au cours</Link>
          <Link to="/cours">Tous les cours</Link>
        </p>
      </div>
    </div>
  );
}

export default Lesson;
