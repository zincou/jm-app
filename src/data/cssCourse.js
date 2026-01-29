// Parcours CSS : CSS de base, puis LESS, puis SASS
const content = (blocks) => blocks;
const code = (text, lang = 'css') => ({ type: 'code', text, language: lang });
const para = (text) => ({ type: 'paragraph', text });

export const cssCourse = {
  id: 'css',
  title: 'CSS, LESS et SASS',
  description: 'Maîtriser le CSS, puis les préprocesseurs LESS et SASS pour des feuilles de style maintenables.',
  chapters: [
    {
      id: '1',
      title: 'CSS de base',
      subChapters: [
        {
          id: '1',
          title: 'Sélecteurs et propriétés',
          lessons: [
            {
              id: 'c1-s1-l1',
              title: 'Introduction au CSS',
              content: content([
                para('Le CSS (Cascading Style Sheets) gère l’apparence et la mise en page d’une page HTML. On lie une feuille de style avec <code>&lt;link rel="stylesheet" href="style.css"&gt;</code> dans le <code>&lt;head&gt;</code>.'),
                para('Une règle CSS se compose d’un sélecteur (qui cibler) et de propriétés (quoi appliquer).'),
                code('p {\n  color: blue;\n  font-size: 16px;\n}', 'css'),
              ]),
              exercises: [
                { type: 'qcm', question: 'À quoi sert le CSS ?', options: ['À structurer la page', 'À gérer l’apparence et la mise en page', 'À animer le serveur'], correctIndex: 1 },
                { type: 'text', question: 'Quelle balise HTML lie une feuille CSS externe ?', correctAnswer: 'link' },
              ],
            },
            {
              id: 'c1-s1-l2',
              title: 'Sélecteurs (élément, classe, id)',
              content: content([
                para('Sélecteur d’élément : <code>p</code>, <code>h1</code>. Classe : <code>.ma-classe</code> (attribut <code>class</code> en HTML). Id : <code>#mon-id</code> (attribut <code>id</code>, unique par page). On privilégie les classes pour le style répétable.'),
                code('.titre { font-weight: bold; }\n#header { background: #333; }\np { line-height: 1.5; }', 'css'),
              ]),
              exercises: [
                { type: 'qcm', question: 'Quel symbole précède une classe en CSS ?', options: ['#', '.', '@'], correctIndex: 1 },
                { type: 'qcm', question: 'Quel symbole précède un id en CSS ?', options: ['#', '.', '@'], correctIndex: 0 },
              ],
            },
            {
              id: 'c1-s1-l3',
              title: 'Couleurs et unités',
              content: content([
                para('Couleurs : nom (<code>red</code>), hex (<code>#ff0000</code>), rgb(<code>rgb(255,0,0)</code>), rgba (avec transparence). Unités : <code>px</code>, <code>em</code>, <code>rem</code>, <code>%</code>. <code>rem</code> est relatif à la taille de base du document (accessibilité).'),
                code('body { font-size: 16px; }\n.titre { font-size: 2rem; color: #1a1a1a; }\n.box { width: 50%; padding: 1em; }', 'css'),
              ]),
              exercises: [
                { type: 'qcm', question: 'Quelle unité est relative à la taille de base du document ?', options: ['px', 'em', 'rem'], correctIndex: 2 },
                { type: 'text', question: 'Comment écrit-on une couleur en notation hexadécimale (ex. rouge) ?', correctAnswer: '#ff0000' },
              ],
            },
          ],
        },
        {
          id: '2',
          title: 'Mise en page',
          lessons: [
            {
              id: 'c1-s2-l1',
              title: 'Box model (margin, padding, border)',
              content: content([
                para('Chaque élément est une boîte : contenu, puis <code>padding</code>, puis <code>border</code>, puis <code>margin</code>. <code>box-sizing: border-box</code> inclut padding et border dans la largeur/hauteur définie.'),
                code('.carte {\n  width: 300px;\n  padding: 20px;\n  margin: 10px;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n}', 'css'),
              ]),
              exercises: [
                { type: 'qcm', question: 'Quelle propriété crée de l’espace à l’intérieur de la bordure ?', options: ['margin', 'padding', 'gap'], correctIndex: 1 },
                { type: 'qcm', question: 'Que fait box-sizing: border-box ?', options: ['Exclut la bordure de la largeur', 'Inclut padding et border dans la largeur', 'Désactive le margin'], correctIndex: 1 },
              ],
            },
            {
              id: 'c1-s2-l2',
              title: 'Flexbox',
              content: content([
                para('Flexbox permet d’aligner et distribuer des éléments dans un conteneur. Sur le conteneur : <code>display: flex</code>, <code>flex-direction</code>, <code>justify-content</code>, <code>align-items</code>, <code>gap</code>. Sur les enfants : <code>flex-grow</code>, <code>flex-shrink</code>, <code>flex-basis</code>.'),
                code('.container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}', 'css'),
              ]),
              exercises: [
                { type: 'qcm', question: 'Quelle propriété active Flexbox sur un conteneur ?', options: ['display: grid', 'display: flex', 'display: block'], correctIndex: 1 },
                { type: 'text', question: 'Quelle propriété Flexbox aligne les éléments sur l’axe principal (horizontal par défaut) ?', correctAnswer: 'justify-content' },
              ],
            },
            {
              id: 'c1-s2-l3',
              title: 'Grid',
              content: content([
                para('CSS Grid crée des grilles en 2D. Sur le conteneur : <code>display: grid</code>, <code>grid-template-columns</code>, <code>grid-template-rows</code>, <code>gap</code>. On peut placer les enfants avec <code>grid-column</code>, <code>grid-row</code> ou <code>grid-area</code>.'),
                code('.grille {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 1rem;\n}', 'css'),
              ]),
              exercises: [
                { type: 'qcm', question: 'Quelle unité Grid représente une fraction de l’espace disponible ?', options: ['px', 'fr', 'em'], correctIndex: 1 },
                { type: 'text', question: 'Quelle propriété définit les colonnes d’une grille ?', correctAnswer: 'grid-template-columns' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: '2',
      title: 'LESS',
      subChapters: [
        {
          id: '1',
          title: 'Variables et mixins',
          lessons: [
            {
              id: 'c2-s1-l1',
              title: 'Introduction à LESS',
              content: content([
                para('LESS est un préprocesseur CSS : on écrit du code LESS, qui est compilé en CSS. On peut utiliser des variables, des mixins (blocs réutilisables), des fonctions, des imbrications. Le fichier source a souvent l’extension <code>.less</code>.'),
                para('Pour utiliser LESS dans un projet, on installe le compilateur (npm) ou on utilise un outil de build (Webpack, Vite, etc.).'),
              ]),
              exercises: [
                { type: 'qcm', question: 'LESS est un :', options: ['Langage de programmation', 'Préprocesseur CSS', 'Framework JavaScript'], correctIndex: 1 },
                { type: 'text', question: 'Quelle extension ont généralement les fichiers LESS ?', correctAnswer: '.less' },
              ],
            },
            {
              id: 'c2-s1-l2',
              title: 'Variables LESS',
              content: content([
                para('Les variables en LESS commencent par <code>@</code>. On les définit une fois et on les réutilise partout (couleurs, tailles, etc.).'),
                code('@couleur-principale: #3498db;\n@espacement: 16px;\n\n.bouton {\n  background: @couleur-principale;\n  padding: @espacement;\n}', 'less'),
              ]),
              exercises: [
                { type: 'qcm', question: 'Quel symbole précède une variable en LESS ?', options: ['$', '@', '#'], correctIndex: 1 },
                { type: 'text', question: 'Quel caractère utilise LESS pour les variables (réponse : arobase) ?', correctAnswer: '@' },
              ],
            },
            {
              id: 'c2-s1-l3',
              title: 'Mixins LESS',
              content: content([
                para('Un mixin est un bloc de règles réutilisable. On le définit avec un nom (sans point pour qu’il ne soit pas compilé en classe), puis on l’appelle avec le nom suivi de parenthèses. On peut passer des paramètres.'),
                code('.bordure-arrondie(@rayon: 8px) {\n  border-radius: @rayon;\n}\n\n.carte {\n  .bordure-arrondie();\n}\n.bouton {\n  .bordure-arrondie(4px);\n}', 'less'),
              ]),
              exercises: [
                { type: 'qcm', question: 'En LESS, un mixin permet de :', options: ['Créer des animations', 'Réutiliser un bloc de règles', 'Importer des polices'], correctIndex: 1 },
                { type: 'text', question: 'Comment appelle-t-on un mixin en LESS (syntaxe avec parenthèses) ?', correctAnswer: '.nom-mixin()' },
              ],
            },
          ],
        },
        {
          id: '2',
          title: 'Imbrication et fonctions',
          lessons: [
            {
              id: 'c2-s2-l1',
              title: 'Imbrication (nesting) en LESS',
              content: content([
                para('En LESS on peut imbriquer les sélecteurs comme en HTML. Cela évite de répéter le parent et rend le code plus lisible. Le <code>&</code> représente le sélecteur parent (ex. pour pseudo-classes).'),
                code('.menu {\n  list-style: none;\n  li {\n    display: inline-block;\n    a {\n      color: blue;\n      &:hover { text-decoration: underline; }\n    }\n  }\n}', 'less'),
              ]),
              exercises: [
                { type: 'qcm', question: 'Que représente & en LESS ?', options: ['Une variable', 'Le sélecteur parent', 'Un commentaire'], correctIndex: 1 },
                { type: 'text', question: 'Quel symbole représente le parent dans un mixin ou une imbrication LESS ?', correctAnswer: '&' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: '3',
      title: 'SASS / SCSS',
      subChapters: [
        {
          id: '1',
          title: 'Variables et imbrication',
          lessons: [
            {
              id: 'c3-s1-l1',
              title: 'Introduction à SASS',
              content: content([
                para('SASS (Syntactically Awesome Styleheets) est un préprocesseur CSS. Deux syntaxes : .sass (indentation, sans accolades) et .scss (proche du CSS, avec accolades). On utilise souvent .scss pour la compatibilité. Comme LESS : variables, mixins, imbrication, fonctions.'),
                para('SASS utilise <code>$</code> pour les variables, contrairement à LESS qui utilise <code>@</code>.'),
              ]),
              exercises: [
                { type: 'qcm', question: 'Quel symbole précède une variable en SASS/SCSS ?', options: ['@', '$', '#'], correctIndex: 1 },
                { type: 'qcm', question: 'Quelle extension est la plus proche du CSS ?', options: ['.sass', '.scss', '.less'], correctIndex: 1 },
              ],
            },
            {
              id: 'c3-s1-l2',
              title: 'Variables et nesting en SCSS',
              content: content([
                para('Variables : <code>$couleur: #3498db;</code>. Imbrication : comme en LESS, on écrit les sélecteurs enfants à l’intérieur du parent. Le <code>&</code> représente le parent (ex. <code>&:hover</code>).'),
                code('$couleur: #3498db;\n$espace: 1rem;\n\n.bouton {\n  background: $couleur;\n  padding: $espace;\n  &:hover { opacity: 0.9; }\n}', 'scss'),
              ]),
              exercises: [
                { type: 'qcm', question: 'En SCSS, & représente :', options: ['Une variable', 'Le sélecteur parent', 'Un import'], correctIndex: 1 },
                { type: 'text', question: 'Quel caractère utilise SASS pour les variables ?', correctAnswer: '$' },
              ],
            },
          ],
        },
        {
          id: '2',
          title: 'Mixins et héritage',
          lessons: [
            {
              id: 'c3-s2-l1',
              title: 'Mixins SASS',
              content: content([
                para('En SASS on définit un mixin avec <code>@mixin nom</code> et on l’inclut avec <code>@include nom</code>. On peut passer des arguments et des valeurs par défaut.'),
                code('@mixin bouton($bg: #3498db, $padding: 12px) {\n  background: $bg;\n  padding: $padding;\n  border: none;\n}\n\n.primary { @include bouton(); }\n.secondary { @include bouton(#2ecc71, 16px); }', 'scss'),
              ]),
              exercises: [
                { type: 'qcm', question: 'Quelle directive SASS inclut un mixin ?', options: ['@use', '@include', '@mixin'], correctIndex: 1 },
                { type: 'text', question: 'Quelle directive SASS définit un mixin ?', correctAnswer: '@mixin' },
              ],
            },
            {
              id: 'c3-s2-l2',
              title: 'Héritage (@extend)',
              content: content([
                para('@extend permet à un sélecteur d’hériter des styles d’un autre (sans dupliquer le code dans la sortie comme un mixin). On définit un « placeholder » avec <code>%nom</code> pour éviter de générer une classe inutile, puis <code>@extend %nom</code>.'),
                code('%message {\n  padding: 1rem;\n  border-radius: 4px;\n}\n.erreur { @extend %message; background: #e74c3c; }\n.succes { @extend %message; background: #2ecc71; }', 'scss'),
              ]),
              exercises: [
                { type: 'qcm', question: 'Que fait @extend en SASS ?', options: ['Importe un fichier', 'Fait hériter les styles d’un autre sélecteur', 'Définit une variable'], correctIndex: 1 },
                { type: 'text', question: 'Quel symbole précède un placeholder SASS (pour @extend sans classe générée) ?', correctAnswer: '%' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: '4',
      title: 'CSS avancé',
      subChapters: [
        {
          id: '1',
          title: 'Variables CSS et responsive',
          lessons: [
            {
              id: 'c4-s1-l1',
              title: 'Variables CSS (custom properties)',
              content: content([
                para('Les variables CSS (custom properties) se déclarent dans <code>:root</code> ou un sélecteur : <code>--couleur: #3498db;</code>. On les utilise avec <code>var(--couleur)</code>. On peut fournir une valeur de repli : <code>var(--couleur, blue)</code>. Elles sont héritées et peuvent être modifiées en JavaScript (<code>el.style.setProperty("--couleur", "red")</code>). Idéal pour les thèmes et les valeurs réutilisables.'),
                code(':root {\n  --primary: #3498db;\n  --spacing: 1rem;\n}\n.button {\n  background: var(--primary);\n  padding: var(--spacing);\n}', 'css'),
              ]),
              exercises: [
                { type: 'qcm', question: 'Comment déclare-t-on une variable CSS ?', options: ['$variable: value;', '--variable: value;', '@variable value;'], correctIndex: 1 },
                { type: 'text', question: 'Quelle fonction CSS permet d’utiliser une variable personnalisée ?', correctAnswer: 'var' },
              ],
            },
            {
              id: 'c4-s1-l2',
              title: 'Media queries et design responsive',
              content: content([
                para('Les media queries adaptent le style selon la largeur d’écran : <code>@media (min-width: 768px) { ... }</code>, <code>@media (max-width: 1024px) { ... }</code>. Approche mobile-first : styles de base pour mobile, puis <code>min-width</code> pour tablette et desktop. <code>@media (prefers-reduced-motion: reduce)</code> permet de réduire les animations pour l’accessibilité.'),
                code('@media (min-width: 768px) {\n  .grid { grid-template-columns: 1fr 1fr; }\n}\n@media (max-width: 600px) {\n  .menu { flex-direction: column; }\n}', 'css'),
              ]),
              exercises: [
                { type: 'qcm', question: 'Quelle approche recommande-t-on pour le responsive (base d’abord) ?', options: ['Desktop-first', 'Mobile-first', 'Tablette-first'], correctIndex: 1 },
                { type: 'text', question: 'Quelle règle at-rule permet d’appliquer des styles selon la largeur d’écran ?', correctAnswer: '@media' },
              ],
            },
          ],
        },
        {
          id: '2',
          title: 'Animations et transitions',
          lessons: [
            {
              id: 'c4-s2-l1',
              title: 'Transitions (transition)',
              content: content([
                para('Les transitions animent un changement de propriété : <code>transition: property duration timing-function delay;</code>. Exemple : <code>transition: background 0.3s ease;</code> ou <code>transition: all 0.3s;</code>. Propriétés courantes : <code>opacity</code>, <code>transform</code>, <code>color</code>, <code>background</code>. Privilégier <code>transform</code> et <code>opacity</code> pour de meilleures performances (GPU).'),
                code('.bouton {\n  background: blue;\n  transition: background 0.3s ease, transform 0.2s;\n}\n.bouton:hover {\n  background: darkblue;\n  transform: scale(1.05);\n}', 'css'),
              ]),
              exercises: [
                { type: 'qcm', question: 'Quelles propriétés sont les plus performantes pour les animations ?', options: ['width et height', 'transform et opacity', 'margin et padding'], correctIndex: 1 },
                { type: 'text', question: 'Quelle propriété CSS définit la durée d’une transition ?', correctAnswer: 'transition' },
              ],
            },
            {
              id: 'c4-s2-l2',
              title: '@keyframes et animation',
              content: content([
                para('Les keyframes définissent des étapes d’animation : <code>@keyframes nom { 0% { ... } 100% { ... } }</code>. On applique avec <code>animation: nom durée timing-function delay iteration-count;</code>. Exemple : <code>animation: fadeIn 0.5s ease 1;</code>. <code>animation-fill-mode: forwards</code> garde le dernier état. <code>animation-direction: alternate</code> alterne le sens.'),
                code('@keyframes fadeIn {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n.box {\n  animation: fadeIn 0.5s ease;\n}', 'css'),
              ]),
              exercises: [
                { type: 'qcm', question: 'Quelle règle at-rule définit les étapes d’une animation ?', options: ['@animation', '@keyframes', '@frames'], correctIndex: 1 },
                { type: 'text', question: 'Quelle propriété CSS applique une animation définie avec @keyframes ?', correctAnswer: 'animation' },
              ],
            },
          ],
        },
      ],
    },
  ],
};
