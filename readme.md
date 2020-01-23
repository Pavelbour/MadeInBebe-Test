La Poste met à disposition une API qui liste les codes postaux :

https://datanova.legroupe.laposte.fr/explore/dataset/laposte_hexasmal/api/?disjunctive.code_commune_insee&disjunctive.nom_de_la_commune&disjunctive.code_postal&disjunctive.libell_d_acheminement&disjunctive.ligne_5

Le but est de mettre en place une tâche (qui tournera automatiquement par la suite) qui va récupérer ces données pour les stocker dans une table SQL. (penser un faire un fichier d'install qui va créer la table si elle n'existe pas).

Ensuite faire une page avec un formulaire de contact (nom, prenom, adresse ...) et une requête AJAX sur le champ code postal qui à la saisit propose les communes et les renseignes automatiquement dans le champ ville.
