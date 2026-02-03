import { useState } from 'react';

function runHtmlChecks(html) {
  const results = [];

  // Parser basique
  let doc;
  try {
    const parser = new DOMParser();
    doc = parser.parseFromString(html, 'text/html');
  } catch {
    results.push({ label: 'HTML valide', ok: false, detail: 'Impossible de parser le code HTML.' });
    return results;
  }

  // Check présence de base
  const hasDoctype = /^<!doctype html>/i.test(html.trim());
  results.push({ label: 'Doctype HTML5 présent', ok: hasDoctype });

  const htmlEl = doc.documentElement;
  results.push({ label: 'Balise <html> présente', ok: !!htmlEl });

  const headEl = doc.querySelector('head');
  const bodyEl = doc.querySelector('body');
  results.push({ label: 'Balises <head> et <body> présentes', ok: !!headEl && !!bodyEl });

  // Sémantique / accessibilité basique
  results.push({ label: 'Un seul <main> au maximum', ok: doc.querySelectorAll('main').length <= 1 });

  results.push({ label: 'Au moins un titre de niveau 1 (<h1>)', ok: doc.querySelectorAll('h1').length >= 1 });

  // Images avec attribut alt
  const imgs = Array.from(doc.querySelectorAll('img'));
  const allImgsHaveAlt = imgs.every((img) => img.hasAttribute('alt') && img.getAttribute('alt').trim() !== '');
  results.push({ label: 'Toutes les images ont un attribut alt non vide', ok: allImgsHaveAlt || imgs.length === 0 });

  // Labels associés aux inputs
  const inputs = Array.from(doc.querySelectorAll('input, textarea, select'));
  const labels = Array.from(doc.querySelectorAll('label'));
  const labeledInputs = inputs.filter((input) => {
    const id = input.getAttribute('id');
    if (!id) return false;
    return labels.some((label) => label.getAttribute('for') === id);
  });
  results.push({
    label: 'Les champs de formulaire ont un label associé',
    ok: labeledInputs.length === inputs.length || inputs.length === 0,
  });

  // Heuristique simple : balises potentiellement non fermées dans le texte brut
  const tagsToCheck = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'];
  const lowerHtml = html.toLowerCase();
  tagsToCheck.forEach((tag) => {
    const openRe = new RegExp(`<${tag}([^>]|>)*`, 'g');
    const closeRe = new RegExp(`</${tag}>`, 'g');
    const opens = (lowerHtml.match(new RegExp(`<${tag}[^>]*>`, 'g')) || []).length;
    const closes = (lowerHtml.match(closeRe) || []).length;
    if (opens > closes) {
      results.push({
        label: `Balise <${tag}> ouverte sans balise de fermeture explicite (le navigateur peut la corriger, mais il vaut mieux la fermer).`,
        ok: false,
      });
    }
  });

  return results;
}

export default function Workshops() {
  const [htmlCode, setHtmlCode] = useState(
    '<!DOCTYPE html>\n<html lang="fr">\n  <head>\n    <meta charset="UTF-8" />\n    <title>Atelier HTML</title>\n  </head>\n  <body>\n    <main>\n      <h1>Ma première page accessible</h1>\n      <p>Modifie ce code pour respecter les bonnes pratiques vues dans le cours.</p>\n    </main>\n  </body>\n</html>\n'
  );
  const [checks, setChecks] = useState([]);

  const handleCheck = () => {
    setChecks(runHtmlChecks(htmlCode));
  };

  return (
    <div className="page">
      <div className="page-content workshop">
        <h1 className="page-title">Ateliers pratiques</h1>
        <p className="page-subtitle">
          Ici, tu peux mettre en pratique ce que tu as appris en HTML. Modifie le code, puis lance les vérifications
          sémantiques pour voir ce qui va bien et ce qui peut être amélioré.
        </p>

        <div className="workshop-layout">
          <section className="workshop-editor">
            <h2 className="section-title">Éditeur HTML</h2>
            <textarea
              className="workshop-textarea"
              value={htmlCode}
              onChange={(e) => setHtmlCode(e.target.value)}
              rows={20}
            />
            <button type="button" className="btn btn-primary" onClick={handleCheck}>
              Vérifier la structure HTML
            </button>
          </section>

          <section className="workshop-results">
            <h2 className="section-title">Résultats des vérifications</h2>
            {checks.length === 0 ? (
              <p className="empty-state">Aucun contrôle lancé pour l’instant.</p>
            ) : (
              <ul className="workshop-checklist">
                {checks.map((c, index) => (
                  <li key={index} className={c.ok ? 'check-ok' : 'check-ko'}>
                    <span className="check-icon" aria-hidden>
                      {c.ok ? '✓' : '✗'}
                    </span>
                    <span>{c.label}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

