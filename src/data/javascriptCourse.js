// Parcours JavaScript : bases, ES6+, DOM, événements, asynchrone
const content = (blocks) => blocks;
const code = (text, lang = 'javascript') => ({ type: 'code', text, language: lang });
const para = (text) => ({ type: 'paragraph', text });

export const javascriptCourse = {
  id: 'javascript',
  title: 'JavaScript',
  description: 'Programmation côté navigateur : bases, ES6+, DOM, événements et programmation asynchrone.',
  chapters: [
    {
      id: '1',
      title: 'Bases du langage',
      subChapters: [
        {
          id: '1',
          title: 'Variables et types',
          lessons: [
            {
              id: 'c1-s1-l1',
              title: 'let, const et var',
              content: content([
                para('En JavaScript moderne on utilise <code>let</code> (variable réassignable) et <code>const</code> (référence constante). Évitez <code>var</code> : il est hoisté et scopé à la fonction, ce qui peut créer des bugs. <code>const</code> n’empêche pas de modifier le contenu d’un objet ou d’un tableau, seulement la réassignation de la variable.'),
                code('let count = 0;\ncount = 1;\n\nconst PI = 3.14;\n// PI = 3; → erreur\n\nconst user = { name: "Alice" };\nuser.name = "Bob"; // OK', 'javascript'),
              ]),
              exercises: [
                { type: 'qcm', question: 'Quelle déclaration empêche la réassignation de la variable ?', options: ['let', 'const', 'var'], correctIndex: 1 },
                { type: 'qcm', question: 'Avec const, peut-on modifier une propriété d’un objet ?', options: ['Non, jamais', 'Oui', 'Seulement en mode strict'], correctIndex: 1 },
              ],
            },
            {
              id: 'c1-s1-l2',
              title: 'Types primitifs et opérateurs',
              content: content([
                para('Types primitifs : <code>number</code>, <code>string</code>, <code>boolean</code>, <code>undefined</code>, <code>null</code>, <code>symbol</code>, <code>bigint</code>. Opérateurs : arithmétiques (<code>+ - * / %</code>), comparaison (<code>===</code> et <code>!==</code> pour éviter les coercitions), logiques (<code>&&</code>, <code>||</code>, <code>!</code>). Utilisez <code>===</code> plutôt que <code>==</code>.'),
                code('typeof 42;        // "number"\ntypeof "hello";   // "string"\ntypeof true;      // "boolean"\n3 === "3";        // false\n3 == "3";         // true (coercition)', 'javascript'),
              ]),
              exercises: [
                { type: 'qcm', question: 'Quel opérateur compare sans conversion de type ?', options: ['==', '===', '='], correctIndex: 1 },
                { type: 'text', question: 'Quelle valeur renvoie typeof pour un nombre ?', correctAnswer: 'number' },
              ],
            },
            {
              id: 'c1-s1-l3',
              title: 'Tableaux et objets',
              content: content([
                para('Tableaux : <code>const arr = [1, 2, 3]</code>. Méthodes utiles : <code>push</code>, <code>pop</code>, <code>map</code>, <code>filter</code>, <code>find</code>, <code>reduce</code>. Objets : <code>const obj = { a: 1, b: 2 }</code>. Accès : <code>obj.a</code> ou <code>obj["a"]</code>. Les deux sont des références : les modifier change l’original.'),
                code('const noms = ["Alice", "Bob"];\nnoms.push("Charlie");\nconst longs = noms.filter(n => n.length > 3);\n\nconst user = { name: "Alice", age: 30 };\nuser.age = 31;', 'javascript'),
              ]),
              exercises: [
                { type: 'qcm', question: 'Quelle méthode de tableau renvoie un nouveau tableau filtré ?', options: ['push', 'filter', 'pop'], correctIndex: 1 },
                { type: 'text', question: 'Comment accède-t-on à la propriété "age" de l’objet user (notation point) ?', correctAnswer: 'user.age' },
              ],
            },
          ],
        },
        {
          id: '2',
          title: 'Conditions et boucles',
          lessons: [
            {
              id: 'c1-s2-l1',
              title: 'if, else, switch',
              content: content([
                para('Conditions : <code>if (condition) { ... } else if (...) { ... } else { ... }</code>. Valeurs « falsy » : <code>false</code>, <code>0</code>, <code>""</code>, <code>null</code>, <code>undefined</code>, <code>NaN</code>. Pour des tests multiples sur une même variable, <code>switch (valeur) { case "a": ... break; default: ... }</code>.'),
                code('if (age >= 18) {\n  console.log("Majeur");\n} else {\n  console.log("Mineur");\n}\n\nswitch (role) {\n  case "admin": doAdmin(); break;\n  default: doUser();\n}', 'javascript'),
              ]),
              exercises: [
                { type: 'qcm', question: 'Quelle valeur est falsy en JavaScript ?', options: ['[]', '0', '"0"'], correctIndex: 1 },
                { type: 'text', question: 'Quelle instruction termine l’exécution d’un case dans un switch ?', correctAnswer: 'break' },
              ],
            },
            {
              id: 'c1-s2-l2',
              title: 'for, while, for...of',
              content: content([
                para('Boucle <code>for (let i = 0; i < arr.length; i++)</code> pour un index. <code>for (const item of arr)</code> pour parcourir les valeurs. <code>while (condition) { ... }</code> quand le nombre d’itérations est inconnu. <code>for...in</code> parcourt les clés (objets) ; pour les tableaux, préférer <code>for...of</code>.'),
                code('for (let i = 0; i < 5; i++) console.log(i);\n\nconst fruits = ["pomme", "poire"];\nfor (const f of fruits) console.log(f);', 'javascript'),
              ]),
              exercises: [
                { type: 'qcm', question: 'Quelle boucle parcourt les valeurs d’un tableau (sans index) ?', options: ['for...in', 'for...of', 'forEach uniquement'], correctIndex: 1 },
                { type: 'text', question: 'Quel mot-clé déclare une variable de boucle classique (ex. i) ?', correctAnswer: 'let' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: '2',
      title: 'Fonctions',
      subChapters: [
        {
          id: '1',
          title: 'Déclaration et portée',
          lessons: [
            {
              id: 'c2-s1-l1',
              title: 'Déclarer et appeler une fonction',
              content: content([
                para('Déclaration : <code>function nom(param1, param2) { return resultat; }</code>. Appel : <code>nom(arg1, arg2)</code>. Les paramètres non fournis valent <code>undefined</code>. Une fonction sans <code>return</code> renvoie <code>undefined</code>. Les fonctions sont des valeurs : on peut les passer en argument ou les renvoyer (fonctions d’ordre supérieur).'),
                code('function add(a, b) {\n  return a + b;\n}\nadd(2, 3); // 5\n\nfunction greet(name = "Invité") {\n  return `Bonjour, ${name}`;\n}', 'javascript'),
              ]),
              exercises: [
                { type: 'qcm', question: 'Que renvoie une fonction sans instruction return ?', options: ['null', 'undefined', 'Une erreur'], correctIndex: 1 },
                { type: 'text', question: 'Quel mot-clé permet de renvoyer une valeur depuis une fonction ?', correctAnswer: 'return' },
              ],
            },
            {
              id: 'c2-s1-l2',
              title: 'Arrow functions (ES6)',
              content: content([
                para('Syntaxe courte : <code>(param) => expression</code> ou <code>(param) => { return expression; }</code>. Pas de <code>this</code> propre : l’arrow function hérite du <code>this</code> du contexte où elle est définie (pratique pour les callbacks). Un seul paramètre peut s’écrire sans parenthèses : <code>x => x * 2</code>.'),
                code('const double = x => x * 2;\nconst add = (a, b) => a + b;\nconst fn = () => { console.log("hello"); };', 'javascript'),
              ]),
              exercises: [
                { type: 'qcm', question: 'Comment une arrow function hérite-t-elle de this ?', options: ['Elle a son propre this', 'Du contexte (lexical) où elle est définie', 'Toujours de window'], correctIndex: 1 },
                { type: 'text', question: 'Écrire en une ligne une arrow function qui renvoie le carré de n (paramètre n).', correctAnswer: 'n => n * n' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: '3',
      title: 'ES6+ : destructuring, spread, modules',
      subChapters: [
        {
          id: '1',
          title: 'Destructuring et template literals',
          lessons: [
            {
              id: 'c3-s1-l1',
              title: 'Destructuring tableaux et objets',
              content: content([
                para('Extraire des valeurs : <code>const [a, b] = [1, 2]</code> ; <code>const { name, age } = user</code>. Renommage : <code>const { name: nom } = user</code>. Valeur par défaut : <code>const { role = "user" } = user</code>. Pratique pour les paramètres de fonction et le retour de plusieurs valeurs.'),
                code('const [x, , z] = [1, 2, 3]; // x=1, z=3\nconst { name, age } = { name: "Alice", age: 30 };\nfunction f({ id, label }) { return label; }', 'javascript'),
              ]),
              exercises: [
                { type: 'qcm', question: 'Que vaut b après : const [a, b] = [10, 20] ?', options: ['10', '20', 'undefined'], correctIndex: 1 },
                { type: 'text', question: 'Quelle syntaxe permet d’extraire name d’un objet user en une ligne ?', correctAnswer: 'const { name } = user' },
              ],
            },
            {
              id: 'c3-s1-l2',
              title: 'Spread et rest',
              content: content([
                para('Spread <code>...</code> : copier ou fusionner. <code>const arr2 = [...arr1]</code> ; <code>const obj2 = { ...obj1, key: "new" }</code>. Rest dans les paramètres : <code>function f(a, ...rest) { }</code> — <code>rest</code> est un tableau des arguments restants.'),
                code('const nums = [1, 2, 3];\nconst more = [0, ...nums, 4]; // [0,1,2,3,4]\n\nfunction sum(a, ...others) {\n  return a + others.reduce((s, n) => s + n, 0);\n}', 'javascript'),
              ]),
              exercises: [
                { type: 'qcm', question: 'Que contient rest dans : function f(a, b, ...rest) {} appelée avec f(1,2,3,4) ?', options: ['[3, 4]', '[1,2,3,4]', '[2,3,4]'], correctIndex: 0 },
                { type: 'text', question: 'Quel opérateur (trois caractères) permet de spread un tableau ?', correctAnswer: '...' },
              ],
            },
            {
              id: 'c3-s1-l3',
              title: 'Modules (import / export)',
              content: content([
                para('Exporter : <code>export const maConst = 1;</code> ou <code>export { maConst, maFonction };</code> ou <code>export default maFonction;</code>. Importer : <code>import { maConst } from "./fichier.js"</code> ; <code>import def from "./fichier.js"</code> pour le default. Les modules sont en mode strict et ont leur propre scope.'),
                code('// utils.js\nexport const add = (a, b) => a + b;\nexport default function greet() {}\n\n// main.js\nimport greet, { add } from "./utils.js";', 'javascript'),
              ]),
              exercises: [
                { type: 'qcm', question: 'Comment importer un export nommé "log" depuis "./logger.js" ?', options: ['import log from "./logger.js"', 'import { log } from "./logger.js"', 'require("./logger.js")'], correctIndex: 1 },
                { type: 'text', question: 'Quel mot-clé permet d’exporter une valeur par défaut ?', correctAnswer: 'default' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: '4',
      title: 'Le DOM',
      subChapters: [
        {
          id: '1',
          title: 'Sélection et modification',
          lessons: [
            {
              id: 'c4-s1-l1',
              title: 'Sélectionner des éléments',
              content: content([
                para('<code>document.getElementById("id")</code> renvoie un élément ou <code>null</code>. <code>document.querySelector(".classe")</code> et <code>document.querySelector("#id")</code> renvoient le premier élément correspondant. <code>document.querySelectorAll(".classe")</code> renvoie une NodeList (statique). Pour un sélecteur CSS valide, querySelector/querySelectorAll sont les plus flexibles.'),
                code('const el = document.getElementById("header");\nconst first = document.querySelector(".active");\nconst all = document.querySelectorAll("li");', 'javascript'),
              ]),
              exercises: [
                { type: 'qcm', question: 'Quelle méthode renvoie une NodeList de tous les éléments correspondants ?', options: ['querySelector', 'querySelectorAll', 'getElementsByClassName'], correctIndex: 1 },
                { type: 'text', question: 'Quel objet global donne accès à l’arbre du document ?', correctAnswer: 'document' },
              ],
            },
            {
              id: 'c4-s1-l2',
              title: 'Modifier contenu et attributs',
              content: content([
                para('Contenu texte : <code>el.textContent = "texte"</code> (sécurisé, pas d’HTML). HTML : <code>el.innerHTML = "&lt;p&gt;...&lt;/p&gt;"</code> (attention XSS si le contenu vient de l’utilisateur). Attributs : <code>el.getAttribute("href")</code>, <code>el.setAttribute("aria-label", "…")</code>, <code>el.classList.add("active")</code>, <code>el.classList.remove("active")</code>, <code>el.classList.toggle("active")</code>.'),
                code('el.textContent = "Nouveau texte";\nel.classList.add("visible");\nel.setAttribute("data-id", "123");', 'javascript'),
              ]),
              exercises: [
                { type: 'qcm', question: 'Quelle propriété utiliser pour du texte sans interpréter du HTML ?', options: ['innerHTML', 'textContent', 'innerText'], correctIndex: 1 },
                { type: 'text', question: 'Quelle méthode de classList ajoute une classe à un élément ?', correctAnswer: 'add' },
              ],
            },
            {
              id: 'c4-s1-l3',
              title: 'Créer et insérer des nœuds',
              content: content([
                para('Créer : <code>document.createElement("div")</code>, <code>el.textContent = "..."</code>. Insérer : <code>parent.appendChild(noeud)</code> (à la fin), <code>parent.insertBefore(noeud, reference)</code>, <code>parent.replaceChild(nouveau, ancien)</code>. Supprimer : <code>noeud.remove()</code>. On peut aussi utiliser <code>parent.append(...)</code> (plusieurs nœuds ou texte).'),
                code('const div = document.createElement("div");\ndiv.textContent = "Hello";\ndocument.body.appendChild(div);\n// plus tard\ndiv.remove();', 'javascript'),
              ]),
              exercises: [
                { type: 'qcm', question: 'Quelle méthode insère un nœud à la fin des enfants du parent ?', options: ['insertBefore', 'appendChild', 'append'], correctIndex: 1 },
                { type: 'text', question: 'Quelle méthode du document crée un élément (ex. un paragraphe) ?', correctAnswer: 'createElement' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: '5',
      title: 'Événements',
      subChapters: [
        {
          id: '1',
          title: 'Écoute et objet event',
          lessons: [
            {
              id: 'c5-s1-l1',
              title: 'addEventListener et types d’événements',
              content: content([
                para('Attacher un écouteur : <code>el.addEventListener("click", handler)</code>. Types courants : <code>click</code>, <code>submit</code>, <code>input</code>, <code>change</code>, <code>keydown</code>, <code>keyup</code>, <code>focus</code>, <code>blur</code>. Pour retirer : <code>el.removeEventListener("click", handler)</code> (même référence de fonction). Évitez les attributs HTML <code>onclick</code> pour garder la logique dans le JS.'),
                code('button.addEventListener("click", () => {\n  console.log("Cliqué");\n});\nform.addEventListener("submit", (e) => {\n  e.preventDefault();\n});', 'javascript'),
              ]),
              exercises: [
                { type: 'qcm', question: 'Quelle méthode permet d’attacher un écouteur d’événement ?', options: ['onclick', 'addEventListener', 'attachEvent'], correctIndex: 1 },
                { type: 'text', question: 'Quel type d’événement est déclenché à la soumission d’un formulaire ?', correctAnswer: 'submit' },
              ],
            },
            {
              id: 'c5-s1-l2',
              title: 'Objet event, propagation et preventDefault',
              content: content([
                para('Le handler reçoit un objet <code>event</code> : <code>event.target</code> (élément qui a déclenché), <code>event.currentTarget</code> (élément sur lequel l’écouteur est attaché). <code>event.preventDefault()</code> annule le comportement par défaut (ex. soumission de formulaire, lien). Propagation : <code>event.stopPropagation()</code> arrête la remontée. Phase : capture → cible → bulble.'),
                code('link.addEventListener("click", (e) => {\n  e.preventDefault();\n  console.log(e.target);\n});', 'javascript'),
              ]),
              exercises: [
                { type: 'qcm', question: 'Que fait event.preventDefault() sur un lien ?', options: ['Empêche le clic', 'Empêche la navigation vers l’URL', 'Supprime l’élément'], correctIndex: 1 },
                { type: 'text', question: 'Quelle propriété de l’event donne l’élément qui a déclenché l’événement ?', correctAnswer: 'target' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: '6',
      title: 'Programmation asynchrone',
      subChapters: [
        {
          id: '1',
          title: 'Promises et async/await',
          lessons: [
            {
              id: 'c6-s1-l1',
              title: 'Promises (then, catch)',
              content: content([
                para('Une Promise représente une valeur (ou une erreur) future. <code>new Promise((resolve, reject) => { ... })</code>. Méthodes : <code>p.then(valeur => ...)</code>, <code>p.catch(erreur => ...)</code>, <code>p.finally(() => ...)</code>. <code>Promise.all([p1, p2])</code> attend toutes les promises ; <code>Promise.race([p1, p2])</code> renvoie la première terminée.'),
                code('const p = fetch("/api/data")\n  .then(res => res.json())\n  .then(data => console.log(data))\n  .catch(err => console.error(err));', 'javascript'),
              ]),
              exercises: [
                { type: 'qcm', question: 'Quelle méthode d’une Promise gère le succès ?', options: ['catch', 'then', 'finally'], correctIndex: 1 },
                { type: 'text', question: 'Quelle méthode statique de Promise attend que toutes les promises soient résolues ?', correctAnswer: 'Promise.all' },
              ],
            },
            {
              id: 'c6-s1-l2',
              title: 'async / await',
              content: content([
                para('<code>async function f() { }</code> renvoie toujours une Promise. À l’intérieur, <code>await promise</code> met en pause jusqu’à la résolution (ou rejet). On utilise <code>try/catch</code> pour gérer les erreurs. <code>await</code> ne fonctionne que dans une fonction <code>async</code> (ou en top-level dans les modules ES).'),
                code('async function getData() {\n  try {\n    const res = await fetch("/api/user");\n    const data = await res.json();\n    return data;\n  } catch (e) {\n    console.error(e);\n  }\n}', 'javascript'),
              ]),
              exercises: [
                { type: 'qcm', question: 'Dans quelle sorte de fonction peut-on utiliser await ?', options: ['Toute fonction', 'Une fonction async', 'Une fonction fléchée uniquement'], correctIndex: 1 },
                { type: 'text', question: 'Quel mot-clé précède une fonction qui renvoie une Promise et permet d’utiliser await ?', correctAnswer: 'async' },
              ],
            },
            {
              id: 'c6-s1-l3',
              title: 'fetch et requêtes HTTP',
              content: content([
                para('<code>fetch(url, options)</code> renvoie une Promise qui résout avec une <code>Response</code>. Méthodes : <code>res.json()</code>, <code>res.text()</code>. Vérifier <code>res.ok</code> avant de lire le corps (status 200–299). Options : <code>{ method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }</code>.'),
                code('const res = await fetch("https://api.example.com/data");\nif (!res.ok) throw new Error(res.status);\nconst data = await res.json();', 'javascript'),
              ]),
              exercises: [
                { type: 'qcm', question: 'Que renvoie res.json() sur une Response fetch ?', options: ['Une chaîne', 'Une Promise qui résout avec l’objet parsé', 'Un objet directement'], correctIndex: 1 },
                { type: 'text', question: 'Quelle propriété de Response indique un statut HTTP réussi (2xx) ?', correctAnswer: 'ok' },
              ],
            },
          ],
        },
      ],
    },
  ],
};
