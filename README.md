# pdf-data-extractor-back

## _29 juin 2025_

> Tout d'abord, il faut interpréter le document et lire les données.

> J'ai utilisé la bibliothèque pdf-parser, pour parser les données du document.

> Cette bibliothèque fournit une propriété (text) permettant d'extraire le texte du pdf.

> Je dois préparer une variables ayant pour valeur des tableaux vide pour plus tard.

> Je stocke dans une variable, la chaîne de caractère extraite.

> Le docuement fournit depuis ma machine remplaçait les "N" par ' " ', J'ai dû utiliser la méthode replace pour remplacer le caractère corompu.

> J'ai créé deux tableaux : le premier tableau contient une liste de regex et l'autre des chaîne de caractère qui servir d'identifiant.

> Pour extraire des données en particulier et les extraire, je dois trouver une correspondance entre les expression régulières et des chaînes de caractères.

>Dans un but d'extraction de données et pour le DRY : Don't repeat yourself, j'ai dû faire une boucle et filtrer les chaînes de caractères correspondantes à chaque expression régulière.

> Puis les ajouter dans le tableau vide initialisé précédemment. (On obtient les valeurs extraites).

> Pour finir, je dois créer un nouveau tableau d'objet clé/valeur à partir de deux tableau : Le tableau de valeurs extraites, et le tableau d'didentifant sous forme de chaîne de caractère.