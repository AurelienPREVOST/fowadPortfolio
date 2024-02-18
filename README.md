### PORTFOLIO POUR TE LANCER

## A destination de Fowad uniquement:  

1 - clone le repo sur ton PC:

```bash
git clone https://github.com/AurelienPREVOST/fowadPortfolio.git
```

2 - installer les packages
 ```bash
 npm install
 ```

3 - lance le serveur

```bash
npm run dev
```

Le code css est volontairement non linéaire. Par cela j'entends que je t'ai par exemple mis du SCSS marié avec du CSS classique (donc imbriqué/nesté ou non) pour que tu vois la différence. Il y a aussi des positions absolute et relative pour toi comprendre et appréhender le concept. Tu trouvera aussi un eventlistener en JS qui supprime ou affiche da photo selon la resolution d'ecran. Ce n'est pas du CSS il est bel et bien supprimé du DOM. Je l'ai fais uniquement dans un but d'apprentissage pour que tu vois la dynamique.  

Le style graphique est volontairement discutable pour que tu te l'approprie et mette les couleurs que tu souhaite. N'hésite pas a manipuler les classes etc.  

Je t'ai mis quelques petites feature comme par exemple un deplacement sur une ancre html, un telechagement de fichier pdf vide a la place de CV que tu pourra remplacer par la suite par le tiens, attention il te faudra renommé le fichier et renommé le fichier a telecharger dans le component en question. Aussi tu trouvera un double affichage selon l'icone sur laquelle tu clic.  

Tout n'est pas parfait je t'ai fais ca vite fait à toi de peaufiné bien sûr  

En CSS je t'ai mis une navbar bootstrap pour que tu vois aussi une bibliotheque front-end.  

Pour ajouter des projets ce sera très simple. Tu va dans le fichier "projectData.jsx" et tu modifie les objets directement dedans.  

L'idée serait que tu te face un gitpages pour chaque projet et que ce soit ce lien que tu mette en URL de demo.  

Enfin pour tout ce qui est dynamique je te conseille plutot de mettre des GIF c'est beaucoup plus parlant. Tu as plein d'utilitaire pour faire des gif à partir de video en ligne. Si tu met une faible resolution et 8fps le fichier pèsera pas lourd.  


# Pour la suite sur react comme là c'est très simple je t'invite à regarder ces points là:  
-lazy loading  
-pagination  
-routeur pour renvoyé vers une vue d'un detail  
-authentification pour directement scoré tes nouveaux projets depuis une interface admin  
-qui dit admin dit authentification  
-qui dit modification en DB dit DB à hebergé et requête API sur le back-end.
-coder la barre de recherche pour avoir une recherche dynamique. Je voulais te le mettre mais ca va t'embrouiller pour l'heure. Demande moi si tu as besoin de l'implementer ou va voir mes autres repos pour comprendre.

Voila bon courage j'espere que ca t'aidera.  

