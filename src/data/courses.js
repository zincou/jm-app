// Données des cours — HTML, CSS/LESS/SASS, et JavaScript (existant).
import { htmlCourse } from './htmlCourse';
import { cssCourse } from './cssCourse';

export const courses = [
  htmlCourse,
  cssCourse,
  {
    id: 'javascript',
    title: 'JavaScript',
    description: 'Programmation côté navigateur : logique et interactivité.',
    chapters: [
      {
        id: '1',
        title: 'Bases',
        subChapters: [
          {
            id: '1',
            title: 'Variables et types',
            lessons: [
              { id: 'c1-s1-l1', title: 'Variables et types', content: [{ type: 'paragraph', text: 'Déclarer des variables avec let, const ; types de base.' }], exercises: [] },
              { id: 'c1-s1-l2', title: 'Fonctions', content: [{ type: 'paragraph', text: 'Créer et appeler des fonctions.' }], exercises: [] },
              { id: 'c1-s1-l3', title: 'DOM', content: [{ type: 'paragraph', text: 'Manipuler la page avec le DOM.' }], exercises: [] },
            ],
          },
        ],
      },
    ],
  },
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
