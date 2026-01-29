# Plan d'action — Site de formation front-end

Plan de développement et mesures de sécurité pour le projet **jm-app**.

---

## Phase 1 — Fondations (sécurité dès le début)

### 1.1 Sécurité des secrets et variables d'environnement
- [ ] **Ne jamais** commiter de clés API, mots de passe ou tokens dans le code.
- [ ] Créer un fichier `.env.local` à la racine du projet pour les variables sensibles (ex. clés Firebase).
- [ ] Vérifier que `.env.local` est dans `.gitignore` (Create React App l'ajoute normalement).
- [ ] Utiliser uniquement `REACT_APP_` pour les variables exposées au navigateur (ex. `REACT_APP_FIREBASE_API_KEY`).
- [ ] Documenter les variables nécessaires dans un `.env.example` (sans valeurs réelles) et le commiter.

### 1.2 Dépendances
- [ ] Lancer régulièrement `npm audit` et corriger les vulnérabilités (`npm audit fix`).
- [ ] Éviter `npm audit fix --force` sans comprendre les changements (risque de casser le projet).
- [ ] Tenir les dépendances à jour (`npm update`, mise à jour majeure avec prudence).

### 1.3 Structure du projet
- [ ] Installer **React Router** : `npm install react-router-dom`
- [ ] Définir les routes : Accueil, Liste des cours, Cours, Leçon.
- [ ] Créer la structure des dossiers : `src/pages/`, `src/components/`, `src/data/` (ou `content/`).

---

## Phase 2 — Contenu et affichage

### 2.1 Contenu des formations
- [ ] Définir les parcours (ex. HTML/CSS, JavaScript, React).
- [ ] Créer les données des cours (JSON ou Markdown) sans données personnelles ni secrets.
- [ ] Afficher le contenu de façon sûre (voir 2.2).

### 2.2 Sécurité côté front (XSS, contenu dynamique)
- [ ] Utiliser le JSX pour afficher le texte (React échappe le HTML par défaut).
- [ ] **Ne pas** utiliser `dangerouslySetInnerHTML` sauf si nécessaire ; si utilisé, sanitizer le contenu (ex. librairie dédiée).
- [ ] Si tu affiches du code utilisateur ou du contenu externe, valider/sanitizer avant affichage.

### 2.3 Headers et politique de sécurité (hébergement)
- [ ] En production, configurer les en-têtes HTTP sur ton hébergeur :
  - **Content-Security-Policy (CSP)** pour limiter les scripts et ressources autorisées.
  - **X-Content-Type-Options: nosniff**
  - **X-Frame-Options** (éviter le clickjacking) si pertinent.
- [ ] Utiliser **HTTPS** uniquement (obligatoire pour Firebase Auth et beaucoup de APIs).

---

## Phase 3 — Progression et utilisateurs

### 3.1 Progression simple (sans compte)
- [ ] Stocker la progression en `localStorage` (clé du type `jm-app-progress`).
- [ ] Ne pas y mettre de données sensibles (uniquement IDs de leçons complétées, préférences).
- [ ] Prévoir que les données peuvent être modifiées côté client (ne pas faire confiance au localStorage pour de la sécurité critique).

### 3.2 Authentification (si tu actives Firebase Auth)
- [ ] Garder les clés Firebase dans `.env.local` et utiliser `REACT_APP_` pour celles exposées.
- [ ] Configurer **Firebase Security Rules** pour Firestore/Realtime DB (refuser tout accès par défaut, ouvrir uniquement ce qui est nécessaire).
- [ ] Ne jamais gérer de mots de passe en clair côté front ; utiliser uniquement Firebase Auth (ou équivalent).
- [ ] Vérifier le token / l’état de connexion côté backend ou via les Rules avant d’exposer des données utilisateur.

### 3.3 Données utilisateur
- [ ] Si tu collectes des données (email, nom), respecter le RGPD : information, consentement, droit d’accès/suppression.
- [ ] Ne pas logger d’informations personnelles dans la console en production.

---

## Phase 4 — Exercices, quiz et déploiement

### 4.1 Exercices / quiz
- [ ] Valider les réponses côté client pour l’UX ; si un “score” compte, prévoir une vérification côté backend ou au moins une logique non triviale.
- [ ] Ne pas exposer les bonnes réponses dans le code de façon évidente si tu veux éviter la triche (pour un site de formation, souvent acceptable).

### 4.2 Build et déploiement
- [ ] Avant chaque déploiement : `npm run build` et vérifier qu’aucune erreur ni warning bloquant.
- [ ] S’assurer qu’en production aucune variable de dev (ex. `REACT_APP_DEBUG`) n’expose d’infos sensibles.
- [ ] Déployer sur une plateforme en HTTPS (Netlify, Vercel, GitHub Pages, etc.).

### 4.3 Répo GitHub
- [ ] Ne jamais pousser `.env`, `.env.local`, ni fichiers contenant des secrets.
- [ ] Utiliser des branches (ex. `main` pour la prod, `develop` pour le dev) si tu travailles en équipe ou que tu veux des revues.

---

## Récapitulatif sécurité — Checklist rapide

| Élément | Action |
|--------|--------|
| Secrets | `.env.local` + `.gitignore` + `.env.example` |
| Dépendances | `npm audit` régulier |
| XSS | Pas de `dangerouslySetInnerHTML` non sanitized |
| HTTPS | Toujours en production |
| Firebase | Rules strictes + clés en env |
| Données perso | RGPD + pas de log sensible en prod |

---

## Ordre suggéré des tâches

1. Vérifier `.gitignore` et créer `.env.example`.
2. Installer React Router et poser la structure des pages.
3. Ajouter le contenu des premiers cours (données statiques).
4. Implémenter la progression (localStorage).
5. Si besoin : configurer Firebase Auth et Rules, puis lier la progression à un compte.
6. Mettre en place CSP/headers sur l’hébergeur et déployer en HTTPS.

Tu peux cocher les cases au fur et à mesure. Pour toute étape précise (ex. rédiger un `.env.example` ou des règles Firebase), on peut détailler dans le projet.
