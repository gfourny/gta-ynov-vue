# gta-ynov-vue

Progressive Web App de gestion du temps et des activités

Pour se connecter à l'application :
login: gfourny@domain.com
password: Password01

Programme du jeudi 08/11/2018:
Préparer le projet gta-ynov-vue. Configurer un hébergement pour l'application web.
Lecture du cahier des charges. Prise de main de Vue CLI. 

Début du développement Front uniquement

Fin de journée du 08/11/2018:
Le projet est lancé, début du développement front. Ajout d'une page de connexion. Les données saisi dans ldes formulaires doivent être enregistré en global et lors du boutton submit je dois pouvoir être redirigé sur la vue Profil qui existe.

Programme du vendredi 09/11/2018:
Le bouton submit doit renvoyer vers la page Profil. Cette page doit contenir les informations relative à la personne qui s'est connecté
Ajout d'un calendrier dans une page dédié

Fin de journée du 09/11/2018:
Le bouton submit renvoi vers la page profil avec l'email et le status. Le calendrier à été ajouté

Programme du 15/11/2018:
Ajouter d'un store. Mettre le calendrier en français. Créer des utilisateurs.

Fin de journée du 15/11/2018:
Le calendrier a été mis en français. Un fichier js DataManager.js a été créé. Il servira de stockage des données. Des utilisateurs ont été créé dans le store mais pas encore fonctionnel au travers de l'application.

Programme du 16/11/2018
Résoudre les erreurs bloquante (les inputs ne s'affichent plus). Le store doit être fonctionnel.
Modifier le système d'agenda.

Fin de journée du 16/11/2018
Les erreurs de data on été traitées. Le store est désormais fonctionnel et le module de connexion aussi.
Le calendrier a été supprimé et remplacé par un choix par demi-journée avec sélection de la semaine.

Programme du 22/11/2018
Corriger les id pour la sélection du type de demi-journée. Enregistrer les valeurs pour la semaine sélectionné

Fin de journée du 22/11/2018
Changement de page agenda, enregistrement des horaires et type de journée fonctionnel.

Programme du 23/11/2018
Modifier l'affichage de la page agenda. Afficher le nombre d'heure par semaine.
Enregistrer les données des différentes semaines dans le localStorage.

Progamme du 25/11/2018
Boucle v-for mise en place sur l'affichage de la page calendrier
Attention: Le bind v-model ne fonctionne pas, aucune explication pour le moment car day est bien affecté. Problème bootstrap ?

Programme du 28/11/2018
Revert sur précédent commit afin de pouvoir présenter quelque chose de fonctionnel. Annulation de la boucle v-for sur la page profil.

Application visible sur https://gfourny.github.io/

