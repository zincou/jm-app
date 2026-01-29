// Données des cours — HTML, CSS/LESS/SASS, JavaScript.
import { htmlCourse } from './htmlCourse';
import { cssCourse } from './cssCourse';
import { javascriptCourse } from './javascriptCourse';

export const courses = [
  htmlCourse,
  cssCourse,
  javascriptCourse,
];

// Retourne un cours par id.
export function getCourse(courseId) {
  return courses.find((c) => c.id === courseId);
}

// Retourne une leçon par id (parcours des chapitres > sous-chapitres > leçons).
export function getLesson(courseId, lessonId) {
  const course = getCourse(courseId);
  if (!course || !course.chapters) return null;
  for (const ch of course.chapters) {
    for (const sub of ch.subChapters || []) {
      const lesson = (sub.lessons || []).find((l) => l.id === lessonId);
      if (lesson) return { course, chapter: ch, subChapter: sub, lesson };
    }
  }
  return null;
}
