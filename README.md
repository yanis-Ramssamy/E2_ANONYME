# Portail WebCraft Solutions (React)

Ce projet est la suite de mon portail E1, que j'ai refait en React. À l'origine, tout était écrit en HTML, CSS et JavaScript pur. Je l'ai découpé en composants pour que le code soit plus facile à lire, à modifier et à réutiliser.

Le site présente les projets et les formations de WebCraft Solutions. On peut chercher, filtrer, ouvrir les détails dans une fenêtre et s'inscrire à une formation grâce à un formulaire.

## Ce que j'ai utilisé

J'ai travaillé avec React et Vite, React Router pour passer d'une page à l'autre, et du JavaScript moderne. Pour le style, j'ai gardé le CSS de l'E1 et le lien CDN de Bootstrap, mais sans son JavaScript : le menu mobile et le modal sont gérés directement par React. Je n'ai utilisé aucune bibliothèque d'interface comme Material-UI ou Ant Design.

## Lancer le projet

Il faut d'abord installer les dépendances, puis démarrer le site en local :

```bash
npm install
npm run dev
```

Il y a aussi `npm run build` pour générer la version de production et `npm run lint` pour vérifier le code.

## Les données

Le site charge deux API :

- les projets : `https://webcraft-api.vercel.app/data/projects.json`
- les formations : `https://webcraft-api.vercel.app/data/courses.json`

Les deux adresses sont écrites une seule fois, dans `src/config/constants.js`. Un petit spinner tourne pendant le chargement, et si un appel échoue, un message d'erreur s'affiche à la place des données.

## Comment le code est organisé

```
src/
├── App.jsx            # Composant racine et routes
├── App.css            # Styles
├── pages/             # Une page par route
│   ├── Home.jsx             # /            Hero + projets + formations
│   ├── ProjectsPage.jsx     # /projets
│   ├── CoursesPage.jsx      # /formations
│   └── InscriptionPage.jsx  # /inscription
├── components/        # Les composants réutilisables
├── hooks/             # Les hooks que j'ai créés
├── utils/             # La validation du formulaire
└── config/            # Les constantes (URLs, liens du menu)
```

Le dossier `components` contient les éléments de la page : le `Header`, le `Footer` et le `Hero`, puis les cartes (`ProjectCard` et `CourseCard`) et les sections complètes (`ProjectsSection` et `CoursesSection`). Les sections de projets et de formations fonctionnent de la même façon, donc elles partagent la barre de recherche (`SearchBar`), les filtres (`FilterBar`) et la fenêtre de détails (`Modal`). Je n'ai écrit chacun de ces composants qu'une seule fois. Il y a aussi quelques petits composants utilisés à plusieurs endroits, comme les badges de technologies, le bouton d'inscription, le `Loader` et le message d'erreur. Le formulaire est découpé en `InscriptionForm` et `FormField`.

Pour la logique, j'ai créé trois hooks dans le dossier `hooks` :

- `useFetch` appelle une API et renvoie les données, l'état de chargement et l'erreur éventuelle ;
- `useSearch` fait la recherche en temps réel, avec un petit délai pour ne pas filtrer à chaque lettre tapée ;
- `useFilter` filtre par catégorie, niveau et technologie, et les filtres se combinent entre eux.

Les règles de validation du formulaire (champ obligatoire, longueur minimale, email, téléphone) sont dans `utils/validation.js`, séparées des composants.

## Mes choix

J'ai voulu que chaque composant ne fasse qu'une seule chose et reste court (moins de 150 lignes). J'ai aussi séparé la logique (appels API, recherche, filtres, validation) de l'affichage, pour que les composants restent simples. Pour gérer l'état, `useState` et `useEffect` m'ont suffi, donc je n'ai ajouté aucune bibliothèque supplémentaire.

## Utilisation de l'IA

J'ai utilisé l'IA pour la partie responsive.
Pour la partie modal, je me suis renseignée sur le site W3C : https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal

J'ai utilisé l'IA pour la partie CSS des boutons et la gestion des erreurs dans le main.js.

J'ai utilisé l'IA pour les fonctions JavaScript liées à la recherche et à la validation du formulaire.

Jai demandé des conseil à l'ia pour la migration. Les bonnes pratiques. Je lui ai demandé des exemples types de hook composants réutilisables fonctionnelles. Mais aussi des conseils pour migrer la validation du formulaire et l'appliquer.


J'ai demandé des conseils a l'IA pour une refont visuelle apres Migration pour rendre le site plus vivant et moins monotone sans trahir le visuel de départ du site. Les cartes, badges sont un peu plus animés pareil pour le formulaire. Les titres de section ont un trait d'accent  et le header a un fond flout.Elle a aussi nettoyé le CSS inutilisé.