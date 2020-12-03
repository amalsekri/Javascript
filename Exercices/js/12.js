for(var compteur=1;compteur<=10;compteur++){
    if(compteur%2===0){//pour verifier que le chiffre est pair, le reste de la division par 2 est égal a 0
        document.write(compteur+" est pair<br>");
    }else{//si non 
        document.write(compteur+" est impair<br>");
    }
}
document.write("<h5>------------Avec chiffre saisdir par l'itlisateur</h5>");

var nbUser=prompt("Choisir un nombre entier");//on récupère le chiffre saisi par l'utilisateur
if(isNaN(nbUser)){//on va verifier que ce qui est tapper par l'utilisateur s'agit bien d'un chiffre
    for(var chiffre=1;chiffre<=nbUser;chiffre++){
        if(chiffre%2===0){//si la conditon renvoi true fait ceci
            document.write(chiffre+" est pair<br>");
        }else{//si non
            document.write(chiffre+" est impair<br>");
        }
    
    }
}else{///le sinon de (!isNaN())
    document.write("Il faut bien saisir un chiffre");
}

document.write("<h5>------------On commence a partir de chiffre tapper par l'utilisateur on ajoutant 10</h5>");

var nbUser1=parseInt(prompt("Choisir un nombre entier"));//on va convertir en number ce que l'utilisateur a tappé
for(var tour=nbUser1;  tour<=(nbUser1+10) ;tour++){//nbUser1+10 c'est la condition de sorti de la condition 

    if(tour%2===0){//si la conditon renvoi true fait ceci
        document.write(tour+" est pair<br>");
    }else{//si non
        document.write(tour+" est impair<br>");
    }

}
