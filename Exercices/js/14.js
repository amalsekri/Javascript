document.write("<h4>Afficvhage de triangle avec for</h4>");
var diese="";//j'ai initialiser une variable  de type string qui est vide
for(var i=1;i<=7;i++){//la boucle va tourner 7 fois
   // console.log(i);
   diese+="#";//a chaque exécution de la boucle on va ajouter(concatiner) une diese a l'existant
   console.log(diese);
   document.write(diese+"<br>");

}
document.write("<h4>Afficvhage de triangle avec while</h4>");
var j=1;
var triangle="";//initiliser la variable triangle a une chaine de caractère vide, si non il va afficher undifined
while(j<=7){
    triangle+="#";//je concatine la variable triangle par une diese à chaque incrémentation
    document.write(triangle+"<br>");
    j++;//avec while il faut absolument incrementer le compteur(j), si non l'incrementation n'est pas automatique ici

}