// Structure : chapitres > sous-chapitres > leçons (content + exercises)
// Id leçon = "c{chapter}-s{sub}-l{lesson}" ex. "c1-s1-l1"

const content = (blocks) => blocks;
const code = (text, lang = 'html') => ({ type: 'code', text, language: lang });
const para = (text) => ({ type: 'paragraph', text });

export const htmlCourse = {
  id: 'html',
  title: 'HTML',
  description: 'Apprendre le HTML : structure, sémantique, formulaires et accessibilité.',
  chapters: [
    {
      id: '1',
      title: 'Découvrir le HTML',
      subChapters: [
        {
          id: '1',
          title: 'Les bases',
          lessons: [
            {
              id: 'c1-s1-l1',
              title: 'Qu\'est-ce que le HTML ?',
              content: content([
                para('Le HTML (HyperText Markup Language) est le langage qui décrit la structure d\'une page web. Il ne gère pas l\'apparence (c’est le rôle du CSS) ni les comportements dynamiques (JavaScript).'),
                para('Le navigateur lit le HTML et affiche titres, paragraphes, liens, images, etc. Chaque élément est délimité par des balises, par exemple <code>&lt;p&gt;</code> pour un paragraphe.'),
                code('<!DOCTYPE html>\n<html lang="fr">\n  <head>\n    <meta charset="UTF-8">\n    <title>Ma page</title>\n  </head>\n  <body>\n    <p>Bonjour le monde.</p>\n  </body>\n</html>', 'html'),
              ]),
              exercises: [
                { type: 'qcm', question: 'À quoi sert le HTML ?', options: ['À décorer la page', 'À décrire la structure du contenu', 'À animer la page'], correctIndex: 1 },
                { type: 'qcm', question: 'Qui interprète le HTML ?', options: ['Un éditeur de texte', 'Le navigateur', 'Le système d’exploitation'], correctIndex: 1 },
              ],
            },
            {
              id: 'c1-s1-l2',
              title: 'Structure d\'une page',
              content: content([
                para('Une page HTML valide commence par <code>&lt;!DOCTYPE html&gt;</code>, puis une balise <code>&lt;html&gt;</code> avec souvent l’attribut <code>lang</code> (ex. <code>lang="fr"</code>).'),
                para('À l’intérieur : <code>&lt;head&gt;</code> (métadonnées, titre, liens vers CSS) et <code>&lt;body&gt;</code> (contenu visible). Le <code>&lt;head&gt;</code> contient aussi <code>&lt;meta charset="UTF-8"&gt;</code> pour l’encodage des caractères.'),
                code('<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width">\n  <title>Mon site</title>\n</head>', 'html'),
              ]),
              exercises: [
                { type: 'qcm', question: 'Où place-t-on le titre de la page ?', options: ['Dans <body>', 'Dans <head>', 'Après </html>'], correctIndex: 1 },
                { type: 'text', question: 'Quelle balise contient le contenu visible de la page ?', correctAnswer: 'body' },
              ],
            },
            {
              id: 'c1-s1-l3',
              title: 'Premier document HTML',
              content: content([
                para('Créez un fichier <code>index.html</code>. Collez la structure de base, ajoutez un titre dans <code>&lt;head&gt;</code> et quelques lignes dans <code>&lt;body&gt;</code>. Ouvrez le fichier dans le navigateur pour voir le résultat.'),
                code('<body>\n  <h1>Bienvenue</h1>\n  <p>Ceci est mon premier paragraphe.</p>\n</body>', 'html'),
              ]),
              exercises: [
                { type: 'qcm', question: 'Quelle extension donne-t-on en général au fichier d’une page HTML ?', options: ['.txt', '.html', '.web'], correctIndex: 1 },
              ],
            },
          ],
        },
      ],
    },
    {
      id: '2',
      title: 'Texte et sémantique',
      subChapters: [
        {
          id: '1',
          title: 'Titres et paragraphes',
          lessons: [
            {
              id: 'c2-s1-l1',
              title: 'Les titres (h1 à h6)',
              content: content([
                para('Les titres structurent la page : <code>&lt;h1&gt;</code> pour le titre principal (un seul par page en général), puis <code>&lt;h2&gt;</code>, <code>&lt;h3&gt;</code>, etc. jusqu’à <code>&lt;h6&gt;</code>. Il faut respecter l’ordre (ne pas sauter de niveau).'),
                code('<h1>Mon site</h1>\n<h2>Présentation</h2>\n<p>...</p>\n<h2>Contact</h2>\n<p>...</p>', 'html'),
              ]),
              exercises: [
                { type: 'qcm', question: 'Combien de niveaux de titres existe-t-il en HTML ?', options: ['4', '6', '8'], correctIndex: 1 },
                { type: 'text', question: 'Quelle balise utilise-t-on pour le titre principal de la page ?', correctAnswer: 'h1' },
              ],
            },
            {
              id: 'c2-s1-l2',
              title: 'Paragraphes et mise en valeur',
              content: content([
                para('Un paragraphe se fait avec <code>&lt;p&gt;</code>. Pour mettre en valeur : <code>&lt;strong&gt;</code> (important, gras), <code>&lt;em&gt;</code> (emphase, italique). <code>&lt;span&gt;</code> sert à cibler un bout de texte sans sens particulier (souvent pour le style CSS).'),
                code('<p>Ce texte contient un <strong>mot important</strong> et un <em>terme en emphase</em>.</p>', 'html'),
              ]),
              exercises: [
                { type: 'qcm', question: 'Quelle balise utilise-t-on pour un paragraphe ?', options: ['<div>', '<p>', '<text>'], correctIndex: 1 },
                { type: 'qcm', question: 'Pour afficher un texte en gras avec du sens (important), on utilise :', options: ['<b>', '<strong>', '<bold>'], correctIndex: 1 },
              ],
            },
            {
              id: 'c2-s1-l3',
              title: 'Listes (ul, ol, li)',
              content: content([
                para('Liste non ordonnée : <code>&lt;ul&gt;</code> (puces). Liste ordonnée : <code>&lt;ol&gt;</code> (numéros). Chaque élément est un <code>&lt;li&gt;</code>. On peut imbriquer des listes.'),
                code('<ul>\n  <li>Premier point</li>\n  <li>Deuxième point</li>\n</ul>\n<ol>\n  <li>Étape 1</li>\n  <li>Étape 2</li>\n</ol>', 'html'),
              ]),
              exercises: [
                { type: 'qcm', question: 'Quelle balise représente un élément de liste ?', options: ['<item>', '<li>', '<list>'], correctIndex: 1 },
                { type: 'text', question: 'Quelle balise utilise-t-on pour une liste numérotée ?', correctAnswer: 'ol' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: '3',
      title: 'Liens, images et médias',
      subChapters: [
        {
          id: '1',
          title: 'Liens et images',
          lessons: [
            {
              id: 'c3-s1-l1',
              title: 'Les liens (a)',
              content: content([
                para('Un lien se crée avec <code>&lt;a href="url"&gt;texte du lien&lt;/a&gt;</code>. Pour ouvrir dans un nouvel onglet : <code>target="_blank"</code> et <code>rel="noopener noreferrer"</code> (sécurité). Liens internes : <code>href="#ancre"</code> avec un élément qui a <code>id="ancre"</code>.'),
                code('<a href="https://example.com">Visiter le site</a>\n<a href="#section2">Aller à la section 2</a>', 'html'),
              ]),
              exercises: [
                { type: 'qcm', question: 'Quel attribut de <a> contient l’URL du lien ?', options: ['src', 'href', 'link'], correctIndex: 1 },
                { type: 'qcm', question: 'Pour ouvrir un lien dans un nouvel onglet, on utilise :', options: ['target="_new"', 'target="_blank"', 'window="new"'], correctIndex: 1 },
              ],
            },
            {
              id: 'c3-s1-l2',
              title: 'Les images (img)',
              content: content([
                para('Image : <code>&lt;img src="chemin/image.jpg" alt="Description"&gt;</code>. La balise est orpheline (pas de contenu). L’attribut <code>alt</code> est obligatoire : il décrit l’image pour l’accessibilité et s’affiche si l’image ne charge pas.'),
                code('<img src="photo.jpg" alt="Photo de paysage">', 'html'),
              ]),
              exercises: [
                { type: 'qcm', question: 'L’attribut alt sur une image sert à :', options: ['Définir la taille', 'Décrire l’image (accessibilité)', 'Changer la couleur'], correctIndex: 1 },
                { type: 'text', question: 'Quel attribut indique le fichier source d’une image ?', correctAnswer: 'src' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: '4',
      title: 'Structure de page',
      subChapters: [
        {
          id: '1',
          title: 'Sémantique HTML5',
          lessons: [
            {
              id: 'c4-s1-l1',
              title: 'Header, nav, main, footer',
              content: content([
                para('HTML5 introduit des balises sémantiques : <code>&lt;header&gt;</code> (en-tête), <code>&lt;nav&gt;</code> (navigation), <code>&lt;main&gt;</code> (contenu principal, un seul par page), <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;footer&gt;</code>. Elles donnent du sens au document et améliorent l’accessibilité et le référencement.'),
                code('<header><h1>Mon site</h1></header>\n<nav>...</nav>\n<main>\n  <article>...</article>\n</main>\n<footer>© 2025</footer>', 'html'),
              ]),
              exercises: [
                { type: 'qcm', question: 'Combien de balise <main> doit-il y avoir par page ?', options: ['Autant qu’on veut', 'Une seule', 'Deux'], correctIndex: 1 },
                { type: 'text', question: 'Quelle balise contient généralement les liens de navigation ?', correctAnswer: 'nav' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: '5',
      title: 'Formulaires',
      subChapters: [
        {
          id: '1',
          title: 'Bases des formulaires',
          lessons: [
            {
              id: 'c5-s1-l1',
              title: 'Form, input, label',
              content: content([
                para('Un formulaire : <code>&lt;form action="url" method="get|post"&gt;</code>. Chaque champ est associé à un <code>&lt;label&gt;</code> (attribut <code>for</code> = <code>id</code> du champ). Inputs courants : <code>type="text"</code>, <code>type="email"</code>, <code>type="password"</code>, <code>type="submit"</code>.'),
                code('<form>\n  <label for="nom">Nom</label>\n  <input type="text" id="nom" name="nom">\n  <button type="submit">Envoyer</button>\n</form>', 'html'),
              ]),
              exercises: [
                { type: 'qcm', question: 'Quelle balise associe un libellé à un champ de formulaire ?', options: ['<legend>', '<label>', '<caption>'], correctIndex: 1 },
                { type: 'text', question: 'Quel attribut du <label> doit correspondre à l’id du champ ?', correctAnswer: 'for' },
              ],
            },
            {
              id: 'c5-s1-l2',
              title: 'Textarea, select et validation HTML5',
              content: content([
                para('<code>&lt;textarea id="msg" name="msg" rows="4"&gt;&lt;/textarea&gt;</code> pour du texte multiligne. <code>&lt;select name="ville"&gt;</code> avec <code>&lt;option value="paris"&gt;Paris&lt;/option&gt;</code>. Validation native : <code>required</code>, <code>minlength</code>, <code>maxlength</code>, <code>pattern</code>, <code>type="email"</code>, <code>min</code>/<code>max</code> pour les nombres. L’attribut <code>novalidate</code> sur le form désactive la validation pour gérer en JS.'),
                code('<textarea id="msg" name="msg" required minlength="10"></textarea>\n<select name="ville">\n  <option value="">Choisir</option>\n  <option value="paris">Paris</option>\n</select>\n<input type="email" required>', 'html'),
              ]),
              exercises: [
                { type: 'qcm', question: 'Quel attribut rend un champ obligatoire en HTML5 ?', options: ['mandatory', 'required', 'validate'], correctIndex: 1 },
                { type: 'text', question: 'Quelle balise utilise-t-on pour une liste déroulante de choix ?', correctAnswer: 'select' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: '6',
      title: 'Accessibilité et ARIA',
      subChapters: [
        {
          id: '1',
          title: 'Landmarks et hiérarchie',
          lessons: [
            {
              id: 'c6-s1-l1',
              title: 'Accessibilité sémantique (landmarks)',
              content: content([
                para('Les lecteurs d’écran utilisent les landmarks pour naviguer : <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;aside&gt;</code>, <code>&lt;footer&gt;</code>. Une hiérarchie de titres logique (<code>h1</code> → <code>h2</code> → <code>h3</code>) sans saut de niveau facilite la navigation. Les liens doivent être explicites (« En savoir plus » avec un contexte ou un <code>aria-label</code>).'),
                code('<main>\n  <h1>Page</h1>\n  <nav aria-label="Navigation principale">...</nav>\n  <article>...</article>\n</main>', 'html'),
              ]),
              exercises: [
                { type: 'qcm', question: 'Quelle balise sémantique représente le contenu principal de la page ?', options: ['<section>', '<main>', '<content>'], correctIndex: 1 },
                { type: 'text', question: 'Quel attribut ARIA donne un libellé à une région pour les lecteurs d’écran ?', correctAnswer: 'aria-label' },
              ],
            },
            {
              id: 'c6-s1-l2',
              title: 'ARIA : rôles, états et propriétés',
              content: content([
                para('ARIA (Accessible Rich Internet Applications) complète le HTML quand le natif ne suffit pas. Rôles : <code>role="button"</code>, <code>role="dialog"</code>, <code>role="alert"</code>. États : <code>aria-expanded</code>, <code>aria-pressed</code>, <code>aria-hidden</code>. Règle d’or : privilégier le HTML sémantique natif (<code>&lt;button&gt;</code>, <code>&lt;nav&gt;</code>) et n’utiliser ARIA que pour des widgets personnalisés sans équivalent natif.'),
                code('<div role="button" tabindex="0" aria-pressed="false">Toggle</div>\n<div role="alert" aria-live="assertive">Message important</div>', 'html'),
              ]),
              exercises: [
                { type: 'qcm', question: 'Quand doit-on utiliser ARIA ?', options: ['Toujours', 'Uniquement quand le HTML natif ne suffit pas', 'Jamais'], correctIndex: 1 },
                { type: 'text', question: 'Quel attribut ARIA indique qu’un élément est développé ou replié ?', correctAnswer: 'aria-expanded' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: '7',
      title: 'SEO et métadonnées',
      subChapters: [
        {
          id: '1',
          title: 'Meta et Open Graph',
          lessons: [
            {
              id: 'c7-s1-l1',
              title: 'Meta description et balises titre',
              content: content([
                para('Le <code>&lt;title&gt;</code> apparaît dans l’onglet et les résultats de recherche ; il doit être unique et descriptif par page. <code>&lt;meta name="description" content="…"&gt;</code> est souvent utilisé pour l’extrait dans les SERP (environ 150–160 caractères). <code>&lt;meta name="robots" content="index, follow"&gt;</code> pour le référencement. Éviter le duplicate content et les titres vides.'),
                code('<title>Formation HTML – Cours complet</title>\n<meta name="description" content="Apprenez le HTML de A à Z.">\n<meta name="robots" content="index, follow">', 'html'),
              ]),
              exercises: [
                { type: 'qcm', question: 'Où la meta description est-elle le plus souvent affichée ?', options: ['Dans la page', 'Dans les résultats de recherche', 'Dans l’URL'], correctIndex: 1 },
                { type: 'text', question: 'Quelle balise contient le titre affiché dans l’onglet du navigateur ?', correctAnswer: 'title' },
              ],
            },
            {
              id: 'c7-s1-l2',
              title: 'Open Graph et partage social',
              content: content([
                para('Open Graph (Facebook, LinkedIn, etc.) : <code>&lt;meta property="og:title" content="…"&gt;</code>, <code>og:description</code>, <code>og:image</code>, <code>og:url</code>, <code>og:type</code>. Twitter Card : <code>&lt;meta name="twitter:card" content="summary_large_image"&gt;</code>, <code>twitter:title</code>, <code>twitter:description</code>, <code>twitter:image</code>. Ces métadonnées améliorent l’aperçu lors du partage sur les réseaux sociaux.'),
                code('<meta property="og:title" content="Mon article">\n<meta property="og:description" content="Résumé">\n<meta property="og:image" content="https://…/image.jpg">\n<meta property="og:url" content="https://…">', 'html'),
              ]),
              exercises: [
                { type: 'qcm', question: 'À quoi sert og:image ?', options: ['Image de fond', 'Image d’aperçu lors du partage', 'Favicon'], correctIndex: 1 },
                { type: 'text', question: 'Quel préfixe de propriété meta est utilisé pour Open Graph ?', correctAnswer: 'og:' },
              ],
            },
          ],
        },
      ],
    },
  ],
};
