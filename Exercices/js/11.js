var nbTours=prompt("Donnez le nombre de tours voulu");//on récupère le nombre de tours saisi
//Avec boucle while
var compteur=1;
if(nbTours<=10){//ici on limite l'utilisateur a ne pas faire plus que 10 tours, s'il tappe un chiffre supérieur à 10, on va lui afficher un message d'erreur
    while(compteur<=nbTours){
        //tant que compteur <=nbTours fait ceci.....
        document.write("<h5>C'est le tour de manège  n°:" +compteur+"</h5>");
        compteur++;//j'incrémente le compteur qui affiche le nombre de tour a chaque fois
    
    }

}else{//le sinon de la condition if
    document.write("<h5>Il faut tapper un chiffre inférieur ou égal à 10</h5>");
}
document.write("<h4>------------Avec Boucle for----------------------</h4>");
//Avec boucle for
if(nbTours<=10){
    for(var tour=1;tour<=nbTours; tour++){
        document.write("<h5>C'est le tour de manège  n°:" +tour+"</h5>");
       
    }
}else{
    document.write("<h5>Il faut tapper un chiffre inférieur ou égal à 10</h5>");
}

