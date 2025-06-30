# PDF Data Extractor - Backend

## Objectif

Ce service backend permet d'extraire du texte depuis un fichier PDF et d’en analyser le contenu à l’aide d'expressions régulières.

Il s'appuie sur `pdf-parse`, une bibliothèque Node.js permettant de transformer un fichier `.pdf` en texte brut exploitable.

---

## Stack technique

- Node.js
- Express
- pdf-parse
- dotenv

---

## Installation

1. Cloner le dépôt :

   ```bash
   git clone https://github.com/ton-utilisateur/pdf-data-extractor-back.git
   cd pdf-data-extractor-back
   ```

2. Installer les dépendances :

   ```bash
   npm install
   ```

3. Créer un fichier `.env` :

   ```env
   PORT=3000
   ```

4. Lancer le serveur :

   ```bash
   nodemon index.js
   ```

---

## Problème rencontré

Une erreur apparaissait lors de l'exécution :

```
Error: ENOENT: no such file or directory, open '.../data/05-versions-space.pdf'
```

### Analyse

Le module `pdf-parse` active un mode debug par défaut, ce qui peut générer une erreur s'il cherche un fichier absent.

### Solution temporaire

Dans le fichier `node_modules/pdf-parse/lib/index.js`, modifier la ligne :

```js
let isDebugMode = !module.parent;
```

en :

```js
let isDebugMode = false;
```

> Attention : Modifier directement les fichiers dans `node_modules` est déconseillé. Cette solution est temporaire. Une meilleure approche serait d’utiliser une version corrigée ou de forker la bibliothèque.

---

## Fonctionnement technique

1. Le fichier PDF est envoyé via POST (multipart/form-data).
2. Le backend lit et parse le fichier via `pdf-parse`.
3. Le texte brut est analysé avec des expressions régulières.
4. Les données extraites sont renvoyées en JSON.