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
                para('Une page HTML valide commence par <code>&lt;!DOCTYPE html&gt;</code>, qui indique au navigateur que l’on utilise HTML5. Vient ensuite la balise racine <code>&lt;html&gt;</code> avec en général un attribut <code>lang</code> (ex. <code>lang="fr"</code>) pour préciser la langue du document, utile pour l’accessibilité et le référencement.'),
                para('L’élément <code>&lt;head&gt;</code> regroupe toutes les métadonnées qui ne s’affichent pas directement dans la page : <code>&lt;title&gt;</code>, <code>&lt;meta&gt;</code>, liens vers les feuilles de style, polices, scripts chargés de manière non bloquante, etc. C’est aussi là qu’on déclare l’encodage (<code>&lt;meta charset="UTF-8"&gt;</code>) et la fameuse meta viewport pour le responsive.'),
                code('<!DOCTYPE html>\n<html lang="fr">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <title>Mon site</title>\n  </head>\n  <body>\n    <!-- Contenu visible -->\n  </body>\n</html>', 'html'),
                para('Le <code>&lt;body&gt;</code> contient tout ce qui doit être visible ou accessible à l’utilisateur : titres, paragraphes, navigation, formulaires, etc. Dans un site moderne, on y structure le contenu avec des sections sémantiques (<code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;aside&gt;</code>, <code>&lt;footer&gt;</code>) plutôt qu’avec une succession de <code>&lt;div&gt;</code> anonymes.'),
                para('On peut voir cette structure comme un “squelette” : le doctype et <code>&lt;html&gt;</code> définissent le type de document, <code>&lt;head&gt;</code> décrit la page pour les navigateurs, moteurs de recherche et lecteurs d’écran, <code>&lt;body&gt;</code> décrit le contenu pour l’utilisateur. Comprendre ce squelette est crucial avant même de parler de CSS ou de JavaScript.'),
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
                para('Image de base : <code>&lt;img src="chemin/image.jpg" alt="Description"&gt;</code>. La balise est orpheline (pas de contenu enfant). L’attribut <code>alt</code> est obligatoire : il décrit l’image pour les technologies d’assistance et sert de texte de remplacement si l’image ne peut pas être chargée. La description doit être concise mais significative (“Photo de paysage au bord de mer”).'),
                para('Pour les performances, on évite les images énormes affichées en petit. En responsive, on préfère proposer plusieurs versions adaptées à la taille de l’écran. C’est là qu’intervient la syntaxe d’images responsives : <code>srcset</code>, <code>sizes</code> et la balise <code>&lt;picture&gt;</code> pour les cas avancés.'),
                code(
                  `<img
  src="image-800.jpg"
  srcset="image-400.jpg 400w, image-800.jpg 800w, image-1200.jpg 1200w"
  sizes="(max-width: 600px) 100vw, 600px"
  alt="Portrait d'un développeur concentré devant son écran"
/>`,
                  'html'
                ),
                para('Ici, le navigateur choisit automatiquement la ressource la plus adaptée en fonction de la largeur d’écran et de la densité de pixels. <code>sizes</code> décrit l’espace réel que prendra l’image dans la mise en page (par exemple “100vw” sur mobile). C’est une fonctionnalité clé pour rendre un site rapide et agréable sur mobile comme sur grand écran.'),
                para('Pour des cas plus complexes (formats différents selon le navigateur, art direction), on peut utiliser <code>&lt;picture&gt;</code> avec plusieurs <code>&lt;source&gt;</code> et une balise <code>&lt;img&gt;</code> de repli.'),
              ]),
              exercises: [
                { type: 'qcm', question: 'L’attribut alt sur une image sert à :', options: ['Définir la taille', 'Décrire l’image (accessibilité)', 'Changer la couleur'], correctIndex: 1 },
                { type: 'text', question: 'Quel attribut indique le fichier source d’une image ?', correctAnswer: 'src' },
              ],
            },
            {
              id: 'c3-s1-l3',
              title: 'Images responsives avancées avec picture',
              content: content([
                para('La balise <code>&lt;picture&gt;</code> permet de contrôler plus finement quelle image sera chargée selon le contexte : largeur d’écran, densité de pixels, mais aussi format supporté (ex. WebP, AVIF) ou “art direction” (montrer un cadrage différent sur mobile et desktop). On définit plusieurs <code>&lt;source&gt;</code> avec des media queries ou des formats différents, puis une balise <code>&lt;img&gt;</code> de repli.'),
                code(
                  `<picture>
  <source
    srcset="image-portrait.avif 1x, image-portrait@2x.avif 2x"
    type="image/avif"
    media="(max-width: 600px)"
  />
  <source
    srcset="image-paysage.webp 1x, image-paysage@2x.webp 2x"
    type="image/webp"
  />
  <img
    src="image-paysage.jpg"
    alt="Illustration d'une interface web sur différents écrans"
    loading="lazy"
  />
</picture>`,
                  'html'
                ),
                para('Dans cet exemple, on fournit une version “portrait” optimisée pour les petits écrans via une media query, et une version “paysage” pour les écrans plus larges. On propose aussi des formats modernes (AVIF, WebP) avec un fallback JPEG dans <code>&lt;img&gt;</code>. Le navigateur choisit la meilleure option qu’il sait afficher.'),
                para('Côté performance, l’objectif est de charger <em>l’image la plus légère suffisante</em> pour le contexte de l’utilisateur. Combiner <code>srcset</code>/<code>sizes</code>, <code>&lt;picture&gt;</code>, le lazy‑loading (<code>loading=\"lazy\"</code>) et une bonne optimisation des fichiers (compression, dimensions réelles adaptées) est essentiel pour un site de formation agréable à utiliser sur mobile comme sur ordinateur.'),
              ]),
              exercises: [
                { type: 'qcm', question: 'À quoi sert principalement la balise <picture> ?', options: ['Remplacer <img>', 'Proposer plusieurs sources d’image selon le contexte', 'Créer une galerie d’images'], correctIndex: 1 },
                { type: 'text', question: 'Quel attribut sur <img> permet de différer le chargement des images hors écran ?', correctAnswer: 'loading' },
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
                para('HTML5 introduit des balises sémantiques qui remplacent beaucoup de <code>&lt;div&gt;</code> anonymes. <code>&lt;header&gt;</code> sert pour l’en-tête d’une page ou d’une section (logo, titre, actions), <code>&lt;nav&gt;</code> regroupe les liens de navigation, <code>&lt;main&gt;</code> représente le contenu principal (en général une seule fois par page), et <code>&lt;footer&gt;</code> contient les informations de pied de page (mentions, liens secondaires, etc.).'),
                para('<code>&lt;section&gt;</code> désigne une partie thématique du document (un bloc de contenu avec un titre), tandis que <code>&lt;article&gt;</code> représente un contenu autonome pouvant être réutilisé ou syndiqué (article de blog, fiche produit, commentaire important). On utilise <code>&lt;aside&gt;</code> pour les contenus connexes : encadrés, blocs “à lire aussi”, barres latérales.'),
                code('<header>\n  <h1>Mon site</h1>\n</header>\n<nav aria-label=\"Navigation principale\">\n  <!-- menu principal -->\n</nav>\n<main>\n  <article>\n    <h2>Article principal</h2>\n    <p>Contenu…</p>\n  </article>\n  <aside>\n    <h2>Ressources utiles</h2>\n    <ul>...</ul>\n  </aside>\n</main>\n<footer>© 2025</footer>', 'html'),
                para('En combinant ces éléments, on améliore la lisibilité du code, l’accessibilité (les lecteurs d’écran peuvent “sauter” d’une zone à l’autre) et le SEO (les moteurs de recherche comprennent mieux la structure du contenu). Une bonne pratique est de toujours se demander : “Est-ce que cette section a un titre et un sens autonome ?” avant de choisir entre <code>&lt;div&gt;</code>, <code>&lt;section&gt;</code> et <code>&lt;article&gt;</code>.'),
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
                para('Un formulaire se déclare avec <code>&lt;form action="URL" method="get|post"&gt;</code>. L’attribut <code>action</code> indique où les données seront envoyées, <code>method</code> comment elles le seront (GET dans l’URL, POST dans le corps de la requête). Même si, en pratique, beaucoup d’applications modernes utilisent du JavaScript et des APIs, il est important de comprendre ce modèle de base.'),
                para('Chaque champ doit être associé à un <code>&lt;label&gt;</code> décrivant son contenu. On relie les deux avec <code>for</code> (sur le label) et <code>id</code> (sur le champ). Cela améliore l’accessibilité : cliquer sur le label place le focus dans le champ et les lecteurs d’écran lisent le bon intitulé. Inputs courants : <code>type="text"</code>, <code>type="email"</code>, <code>type="password"</code>, <code>type="number"</code>, <code>type="submit"</code>.'),
                para('On peut également utiliser l’attribut <code>autocomplete</code> pour indiquer au navigateur le type de donnée attendu (<code>name</code>, <code>email</code>, <code>street-address</code>, etc.), ce qui améliore l’UX en proposant un remplissage automatique cohérent.'),
                code('<form action="/inscription" method="post">\n  <label for="nom">Nom</label>\n  <input type="text" id="nom" name="nom" autocomplete="name" required>\n\n  <label for="email">Email</label>\n  <input type="email" id="email" name="email" autocomplete="email" required>\n\n  <button type="submit">Envoyer</button>\n</form>', 'html'),
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
                para('<code>&lt;textarea&gt;</code> permet de saisir du texte multiligne : on contrôle sa taille avec des attributs comme <code>rows</code> et <code>cols</code>, mais en pratique on stylise plutôt la zone en CSS. <code>&lt;select&gt;</code> crée une liste déroulante, avec des <code>&lt;option&gt;</code>. On peut grouper les options avec <code>&lt;optgroup&gt;</code> pour améliorer la lisibilité de longs menus.'),
                code('<label for=\"msg\">Message</label>\n<textarea id=\"msg\" name=\"msg\" rows=\"4\" required></textarea>\n\n<label for=\"ville\">Ville</label>\n<select id=\"ville\" name=\"ville\" required>\n  <option value=\"\">Choisir</option>\n  <option value=\"paris\">Paris</option>\n  <option value=\"lyon\">Lyon</option>\n</select>', 'html'),
                para('HTML5 fournit une validation native très puissante : attributs <code>required</code>, <code>minlength</code>, <code>maxlength</code>, <code>pattern</code> (expression régulière), ainsi que des types spécialisés (<code>email</code>, <code>url</code>, <code>number</code>, etc.). Le navigateur peut afficher des messages d’erreur automatiques, que l’on peut personnaliser côté JavaScript avec l’API de validation de contraintes. L’attribut <code>novalidate</code> sur <code>&lt;form&gt;</code> désactive cette validation si l’on préfère tout gérer soi‑même.'),
                code('<form novalidate>\n  <label for=\"site\">Site web</label>\n  <input id=\"site\" name=\"site\" type=\"url\" pattern=\"https?://.*\" required>\n</form>', 'html'),
                para('Pour des formulaires réellement accessibles, il faut également penser aux messages d’erreur (liés aux champs), à l’ordre de tabulation (navigation clavier) et aux attributs ARIA lorsque le HTML seul ne suffit pas (<code>aria-invalid</code>, <code>aria-describedby</code> pour lier un champ à un message explicatif, etc.).'),
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
