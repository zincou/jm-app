import { useState } from 'react';

function ExerciseBlock({ exercise, index }) {
  const [selected, setSelected] = useState(null);
  const [textAnswer, setTextAnswer] = useState('');
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(true);
  };

  if (exercise.type === 'qcm') {
    const correct = selected === exercise.correctIndex;
    return (
      <div className="exercise-card">
        <p><strong>Question {index + 1} :</strong> {exercise.question}</p>
        <ul className="exercise-options">
          {exercise.options.map((opt, i) => (
            <li key={i}>
              <label>
                <input
                  type="radio"
                  name={`qcm-${index}`}
                  checked={selected === i}
                  onChange={() => setSelected(i)}
                  disabled={checked}
                />
                {opt}
              </label>
            </li>
          ))}
        </ul>
        {!checked ? (
          <button type="button" className="btn btn-primary" onClick={handleCheck}>Vérifier</button>
        ) : (
          <p className={`exercise-feedback ${correct ? 'correct' : 'incorrect'}`}>
            {correct ? '✓ Correct !' : '✗ Faux. La bonne réponse était : ' + exercise.options[exercise.correctIndex]}
          </p>
        )}
      </div>
    );
  }

  if (exercise.type === 'text') {
    const normalized = (s) => s.trim().toLowerCase();
    const correct = normalized(textAnswer) === normalized(exercise.correctAnswer);
    return (
      <div className="exercise-card">
        <p><strong>Question {index + 1} :</strong> {exercise.question}</p>
        <input
          type="text"
          className="exercise-input"
          value={textAnswer}
          onChange={(e) => setTextAnswer(e.target.value)}
          disabled={checked}
          placeholder="Votre réponse"
        />
        {!checked ? (
          <button type="button" className="btn btn-primary" onClick={handleCheck}>Vérifier</button>
        ) : (
          <p className={`exercise-feedback ${correct ? 'correct' : 'incorrect'}`}>
            {correct ? '✓ Correct !' : '✗ Faux. Réponse attendue : ' + exercise.correctAnswer}
          </p>
        )}
      </div>
    );
  }

  return null;
}

export default function Exercises({ exercises }) {
  if (!exercises || exercises.length === 0) return null;
  return (
    <section className="exercises-section">
      <h2>Exercices</h2>
      {exercises.map((ex, i) => (
        <ExerciseBlock key={i} exercise={ex} index={i} />
      ))}
    </section>
  );
}
