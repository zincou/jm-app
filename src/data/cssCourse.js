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
                para('Le CSS (Cascading Style Sheets) contrôle l’apparence et la mise en page de la page HTML : couleurs, typographie, alignements, espaces, comportements responsive, etc. On lie une feuille de style externe avec <code>&lt;link rel="stylesheet" href="style.css"&gt;</code> dans le <code>&lt;head&gt;</code>, ou bien on écrit des styles internes dans un bloc <code>&lt;style&gt;</code>.'),
                para('Une règle CSS se compose d’un sélecteur (quels éléments cibler) et d’un bloc de déclarations (quelles propriétés appliquer). La syntaxe générale est <code>selecteur { propriété: valeur; }</code>. Le même sélecteur peut définir plusieurs propriétés, et plusieurs sélecteurs peuvent viser le même élément : c’est la cascade qui décidera du style final.'),
                para('Trois notions-clés gouvernent le résultat final : l’ordre des règles (les dernières peuvent écraser les précédentes), la spécificité des sélecteurs (un id gagne sur une classe, qui gagne sur un sélecteur de type), et l’héritage (certaines propriétés se transmettent automatiquement aux descendants, comme la couleur de texte ou la police). Comprendre ce trio “cascade + spécificité + héritage” est essentiel pour éviter de se battre avec <code>!important</code>.'),
                code('p {\n  color: #333;\n  font-size: 1rem;\n}\n\n.article p {\n  line-height: 1.6;\n}\n\n.highlight {\n  color: #c62828;\n}', 'css'),
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
                para('Sélecteur de type (ou d’élément) : <code>p</code>, <code>h1</code>, <code>ul</code>… Classe : <code>.ma-classe</code> (attribut <code>class</code> en HTML). Id : <code>#mon-id</code> (attribut <code>id</code>, unique par page). En pratique, on privilégie les classes pour styliser l’interface, et on réserve les id aux ancres, aux scripts ou à quelques cas bien ciblés.'),
                para('Il existe aussi les sélecteurs d’attributs (<code>a[target="_blank"]</code>, <code>input[type="email"]</code>), très utiles pour cibler des éléments en fonction de leur rôle ou type. Les pseudo-classes comme <code>:hover</code>, <code>:focus</code>, <code>:focus-visible</code>, <code>:nth-child()</code> permettent de styler des états (survol, focus clavier, position dans une liste…). Les pseudo-éléments <code>::before</code> et <code>::after</code> servent à injecter du contenu décoratif.'),
                code('.titre {\n  font-weight: bold;\n}\n#header {\n  background: #333;\n}\na:hover {\n  text-decoration: underline;\n}\ninput[type="email"] {\n  border-color: #2196f3;\n}\n.button::before {\n  content: "▶";\n  margin-right: 0.25rem;\n}', 'css'),
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
                para('Couleurs : noms (ex. <code>red</code>), hexadécimal (<code>#ff0000</code>), <code>rgb()</code>, <code>rgba()</code> (avec transparence), <code>hsl()</code> (teinte, saturation, luminosité) très pratique pour créer des gammes cohérentes. Dans les navigateurs modernes, on trouve aussi des fonctions plus avancées (<code>color-mix()</code>, nouveaux espaces colorimétriques) mais <code>hex</code>, <code>rgb</code> et <code>hsl</code> couvrent la grande majorité des besoins.'),
                para('Pour les unités, <code>px</code> est une unité absolue, alors que <code>em</code> et <code>rem</code> sont relatives. <code>1rem</code> vaut la taille de police de la racine (souvent 16px), <code>1em</code> vaut la taille de police de l’élément courant. Utiliser des <code>rem</code> pour les tailles de texte et d’espacement facilite l’accessibilité : agrandir la taille de police de base grossit tout le reste de manière cohérente.'),
                code('html {\n  font-size: 16px;\n}\nbody {\n  color: #1a1a1a;\n}\n.titre {\n  font-size: 2rem; /* 32px */\n  color: hsl(210, 15%, 15%);\n}\n.box {\n  width: 50%;\n  padding: 1.5rem;\n}', 'css'),
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
                para('Chaque élément est une boîte : contenu, puis <code>padding</code>, puis <code>border</code>, puis <code>margin</code>. Par défaut, la largeur définie en CSS ne concerne que le contenu ; le padding et la bordure s’ajoutent par‑dessus, ce qui peut surprendre lors de la mise en page.'),
                para('En utilisant <code>box-sizing: border-box</code>, on indique que la largeur/hauteur inclut padding et border, ce qui simplifie énormément les layouts (particulièrement en responsive). C’est devenu une bonne pratique courante de l’appliquer globalement (<code>* { box-sizing: border-box; }</code>). Attention aussi aux “marges qui se collent” (margins verticales qui se fusionnent entre parent/enfant), un classique des bugs CSS.'),
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
                para('Flexbox permet d’aligner et de distribuer facilement des éléments sur un axe principal (horizontal par défaut) et un axe secondaire. C’est l’outil de base pour construire des barres de navigation, des rangées de boutons, des cartes alignées, etc. Sur le conteneur : <code>display: flex</code>, <code>flex-direction</code>, <code>justify-content</code>, <code>align-items</code>, <code>gap</code>.'),
                para('<code>flex-direction</code> définit l’axe principal (<code>row</code>, <code>column</code>…), <code>justify-content</code> distribue l’espace sur cet axe (gauche, centre, espace entre les éléments), <code>align-items</code> aligne les éléments sur l’axe secondaire. Sur les enfants, <code>flex</code> (abréviation de <code>flex-grow flex-shrink flex-basis</code>) contrôle la façon dont ils grandissent ou rétrécissent dans l’espace disponible.'),
                code('.container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}\n.container > .item {\n  flex: 1 1 0;\n}', 'css'),
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
                para('CSS Grid crée des grilles en 2D (lignes + colonnes). Sur le conteneur : <code>display: grid</code>, <code>grid-template-columns</code>, <code>grid-template-rows</code>, <code>gap</code>. On peut placer les enfants avec <code>grid-column</code>, <code>grid-row</code> ou <code>grid-area</code>. Grid est très adapté aux layouts complets (header / sidebar / contenu / footer) et aux galeries d’éléments.'),
                para('Les fonctions <code>repeat()</code>, <code>minmax()</code>, <code>auto-fit</code> et <code>auto-fill</code> permettent de créer des grilles responsives sans multiplier les media queries. Par exemple, une grille de cartes qui s’adapte au nombre de colonnes possible en fonction de la largeur d’écran.'), 
                code('.grille {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1rem;\n}', 'css'),
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
                para('LESS est un préprocesseur CSS : on écrit du code LESS, qui est compilé en CSS classique. Il ajoute des fonctionnalités utiles pour structurer de gros projets : variables, mixins (blocs réutilisables), fonctions, imbrication de sélecteurs, import de fichiers, etc. Le fichier source a l’extension <code>.less</code> et est transformé en <code>.css</code> lors d’une étape de build.'),
                para('Dans un workflow moderne, LESS est souvent intégré à une chaîne d’outils (Webpack, Vite, Gulp…) qui compile automatiquement les fichiers à chaque modification. Bien que LESS soit aujourd’hui moins populaire que SASS/SCSS, il reste présent dans de nombreux projets historiques et frameworks CSS. Comprendre ses concepts aide aussi à mieux saisir le rôle des préprocesseurs en général.'),
              ]),
              exercises: [
                { type: 'qcm', question: 'Le rôle principal d’un préprocesseur CSS comme LESS est de :', options: ['Remplacer complètement le CSS', 'Étendre le CSS avec des fonctionnalités supplémentaires', 'Générer du HTML'], correctIndex: 1 },
                { type: 'text', question: 'Quelle extension utilise-t-on en général pour un fichier LESS ?', correctAnswer: '.less' },
              ],
            },
            {
              id: 'c2-s1-l2',
              title: 'Variables LESS',
              content: content([
                para('Les variables en LESS commencent par <code>@</code>. On les définit une fois et on les réutilise partout (couleurs, tailles, espacements, z-index…). Contrairement aux variables CSS, elles sont évaluées à la compilation : une fois le CSS généré, il ne reste plus de variables, seulement des valeurs figées.'),
                code('@couleur-principale: #3498db;\n@espacement: 16px;\n\n.bouton {\n  background: @couleur-principale;\n  padding: @espacement;\n}', 'less'),
                para('On peut également composer des valeurs plus complexes (ex. concaténation de chaînes, calculs, couleurs modifiées avec des fonctions comme <code>lighten</code> ou <code>darken</code>). Cela permet de centraliser la charte graphique et d’éviter la duplication de valeurs partout dans le code.'),
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
                para('Un mixin est un bloc de déclarations réutilisable. On le définit avec un nom, puis on l’inclut dans d’autres règles comme s’il s’agissait d’une fonction. Un mixin peut accepter des paramètres (avec valeurs par défaut), ce qui en fait un outil puissant pour créer des motifs de style cohérents (boutons, cartes, grilles, etc.).'),
                code('.bordure-arrondie(@rayon: 8px) {\n  border-radius: @rayon;\n}\n\n.carte {\n  .bordure-arrondie();\n}\n.bouton {\n  .bordure-arrondie(4px);\n}', 'less'),
                para('Il est courant de combiner variables et mixins pour encapuler les décisions de design dans quelques points centraux, ce qui facilite les refontes (changer la couleur principale, le rayon des bordures, etc. en un seul endroit).'),
              ]),
              exercises: [
                { type: 'qcm', question: 'En LESS, un mixin permet de :', options: ['Créer des animations JavaScript', 'Réutiliser un bloc de déclarations CSS', 'Définir un nouveau type de sélecteur'], correctIndex: 1 },
                { type: 'text', question: 'Comment appelle-t-on un mixin en LESS (syntaxe générique, sans nom concret) ?', correctAnswer: '.nom-mixin()' },
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
                para('SASS (Syntactically Awesome Style Sheets) est un préprocesseur CSS très répandu. Il propose deux syntaxes : <code>.sass</code> (indentée, sans accolades ni points‑virgules) et <code>.scss</code> (syntaxe proche du CSS, avec accolades et points‑virgules). En pratique, la plupart des projets modernes utilisent la syntaxe SCSS pour une transition plus douce depuis le CSS pur.'),
                para('Comme LESS, SASS ajoute des fonctionnalités absentes du CSS de base : variables, mixins, imbrication, fonctions, imports, maps, etc. Il est particulièrement adapté à des architectures de styles complexes (pattern 7‑1, split par composants, etc.) et se marie bien avec des frameworks ou des design systems.'),
              ]),
              exercises: [
                { type: 'qcm', question: 'Quelle extension correspond à la syntaxe la plus proche du CSS classique ?', options: ['.sass', '.scss', '.less'], correctIndex: 1 },
                { type: 'qcm', question: 'Quel symbole précède une variable en SASS/SCSS ?', options: ['@', '$', '#'], correctIndex: 1 },
              ],
            },
            {
              id: 'c3-s1-l2',
              title: 'Variables et nesting en SCSS',
              content: content([
                para('En SCSS, une variable se déclare avec <code>$nom: valeur;</code>. On peut les utiliser pour les couleurs, les espacements, les breakpoints, etc. L’imbrication (nesting) permet d’écrire les sélecteurs enfants à l’intérieur du parent, ce qui rend le code plus lisible pour des composants complexes. Le <code>&</code> représente le sélecteur parent et s’utilise pour les états (<code>&:hover</code>, <code>&--modifier</code> dans BEM, etc.).'),
                code('$couleur: #3498db;\n$espace: 1rem;\n\n.bouton {\n  background: $couleur;\n  padding: $espace;\n\n  &:hover {\n    opacity: 0.9;\n  }\n\n  &--secondaire {\n    background: #2ecc71;\n  }\n}', 'scss'),
              ]),
              exercises: [
                { type: 'qcm', question: 'En SCSS, & représente :', options: ['Une variable', 'Le sélecteur parent', 'Un import'], correctIndex: 1 },
                { type: 'text', question: 'Quel caractère utilise SASS/SCSS pour déclarer une variable ?', correctAnswer: '$' },
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
                para('En SASS on définit un mixin avec <code>@mixin nom</code> et on l’inclut avec <code>@include nom</code>. On peut passer des arguments et des valeurs par défaut. Les mixins permettent de factoriser des motifs CSS répétitifs (boutons, cartes, grilles responsives…) sans dupliquer les mêmes déclarations partout.'),
                code('@mixin bouton($bg: #3498db, $padding: 12px) {\n  background: $bg;\n  padding: $padding;\n  border: none;\n  border-radius: 4px;\n}\n\n.primary {\n  @include bouton();\n}\n.secondary {\n  @include bouton(#2ecc71, 16px);\n}', 'scss'),
                para('Dans des architectures plus poussées, on peut créer des mixins pour les breakpoints (<code>@mixin respond-to($breakpoint) { ... }</code>) ou pour encapsuler des patterns complexes de layout. Cela rend le code plus déclaratif : on lit l’intention (par ex. <code>@include respond-to(tablet)</code>) plutôt que les détails d’implémentation.'),
              ]),
              exercises: [
                { type: 'qcm', question: 'Quelle directive SASS inclut le contenu d’un mixin dans une règle ?', options: ['@use', '@include', '@mixin'], correctIndex: 1 },
                { type: 'text', question: 'Quelle directive SASS est utilisée pour définir un mixin ?', correctAnswer: '@mixin' },
              ],
            },
            {
              id: 'c3-s2-l2',
              title: 'Héritage (@extend)',
              content: content([
                para('@extend permet à un sélecteur d’hériter des styles d’un autre (sans dupliquer le code dans la sortie comme un mixin). On définit un « placeholder » avec <code>%nom</code> pour éviter de générer une classe inutile, puis <code>@extend %nom</code>. Cela génère un sélecteur combiné dans le CSS final.'),
                code('%message {\n  padding: 1rem;\n  border-radius: 4px;\n}\n\n.erreur {\n  @extend %message;\n  background: #e74c3c;\n}\n\n.succes {\n  @extend %message;\n  background: #2ecc71;\n}', 'scss'),
                para('L’héritage via <code>@extend</code> doit être utilisé avec prudence, car il peut produire des sélecteurs complexes et difficiles à maintenir si on en abuse. Beaucoup d’équipes modernes préfèrent des mixins bien pensés ou des classes utilitaires plutôt que des chaînes d’<code>@extend</code> trop profondes.'),
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
                para('Les variables CSS (custom properties) se déclarent dans <code>:root</code> ou sur n’importe quel élément : <code>--couleur: #3498db;</code>. On les utilise avec <code>var(--couleur)</code>. On peut fournir une valeur de repli : <code>var(--couleur, blue)</code>. Elles sont héritées et peuvent être modifiées en JavaScript (<code>el.style.setProperty("--couleur", "red")</code>). C’est idéal pour centraliser les couleurs, espacements, tailles de police, etc. (design tokens).'),
                para('Par rapport aux préprocesseurs (LESS/SASS), les variables CSS vivent dans le navigateur, peuvent changer à l’exécution et peuvent dépendre du contexte (par exemple, changer un thème clair/sombre en ajoutant une classe sur le <code>body</code>). On peut combiner variables CSS et media queries pour adapter la charte selon la taille d’écran.'),
                code(':root {\n  --primary: #3498db;\n  --spacing: 1rem;\n}\n.button {\n  background: var(--primary);\n  padding: var(--spacing);\n}\nbody.dark {\n  --primary: #90caf9;\n}', 'css'),
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
                para('Les media queries adaptent le style selon des conditions (largeur d’écran, orientation, préférences utilisateur…). L’approche mobile-first consiste à écrire les styles de base pour les petits écrans, puis à ajouter des media queries en <code>min-width</code> pour enrichir la mise en page sur tablette et desktop. Par exemple : <code>@media (min-width: 768px) { ... }</code>.'),
                para('Au-delà de la largeur d’écran, il est important de respecter les préférences de l’utilisateur : <code>@media (prefers-reduced-motion: reduce)</code> pour réduire les animations, <code>@media (prefers-color-scheme: dark)</code> pour proposer un thème sombre, etc. Ces media queries d’accessibilité sont de plus en plus mises en avant dans les bonnes pratiques modernes.'),
                code('@media (min-width: 768px) {\n  .grid {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n\n@media (max-width: 600px) {\n  .menu {\n    flex-direction: column;\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  * {\n    scroll-behavior: auto;\n    animation-duration: 0.01ms !important;\n  }\n}', 'css'),
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
