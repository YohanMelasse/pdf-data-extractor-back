# pdf-data-extractor-back

## démarrer le projet


Pour ce projet, j'ai voulu extraire les données d'un pdf.

J'utilise la bibliothèque _pdf-parse_
afin de pouvoir parser les données de type _.pdf_.

## Les bibliotèques utilisées.

- express.
- dotenv : Pour l'exécution des variables.
- pdf-parse: Pour parser les données de documents au format pdf.

## Installer les packages
- ``` npm install ```

## problèmes réglés :

Quand j'exécutais la fonction dans le point dans index.js, j'avais l'erreur suivante.

`` Error: ENOENT: no such file or directory, open 'C:\\...\\test\\data\\05-versions-space.pdf’``

J'ai trouvé la solution dans cet article médium 

['https://medium.com/@mbmrajatit/%EF%B8%8F-how-a-missing-debug-file-in-pdf-parse-crashed-my-node-js-app-and-how-i-fixed-it-be5ba7077527']

Pour régler le soucis il faut se rendre dans le chemin suivant: node_modules/pdf-parse/lib/index.js et passer  ``let isDebugMode = !module.parent `` à false, car le mode debug est actif par défaut, donc cela peut engendrer ce type de soucis.

Résumé :

> - Lecture du document dans son entier sous forme de texte 
> - Utilisation de regex pour faire pour retrouver plus facilement certaines données selons certains patterns.

> - Renvoi de données null (si celle-ci n'existe pas) ou non.
