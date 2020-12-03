//demander a l'utilisateur de saisir la moyenne
var moyenne=parseInt(prompt("Saisissez votre moyenne"));
if(isNaN(moyenne)){//isNaN renvoi true si moyenne est de type autre que number, si la moyenne est de type number 
   document.write("il faut tapper un chiffre"); 
}else{
    if(moyenne<10){// si la moyenne est inférieure à 10
        document.write("Dommage tu es recalé ");// J'affiche qu'il est recalé
    }else if((moyenne>=10) && (moyenne<12)){// sinon, si la moyenne est entre 10 et 12

    document.write("Super tu passes");// J'affiche que le candidat passe
    }else if((moyenne>=12) && (moyenne<=20)){ // sinon, si la moyenne est supérieure à 12
        document.write("Bravo! pour la mention");// J'affiche qu'il a une mention
    }else{// en cas de saisie ne rentrant pas dans les cas ci-avant
        document.write("le chiffre que tu as tappé est tres grand");// Je lui indique qu'il n'a pas saisi ce que l'on lui demandait
    }
}
/***avec l'utilisation de not */
if(!isNaN(moyenne)){
    
    if(moyenne<10){// si la moyenne est inférieure à 10
        document.write("Dommage tu es recalé ");// J'affiche qu'il est recalé
    }else if((moyenne>=10) && (moyenne<12)){// sinon, si la moyenne est entre 10 et 12

    document.write("Super tu passes");// J'affiche que le candidat passe
    }else if((moyenne>=12) && (moyenne<=20)){ // sinon, si la moyenne est supérieure à 12
        document.write("Bravo! pour la mention");// J'affiche qu'il a une mention
    }else{// en cas de saisie ne rentrant pas dans les cas ci-avant
        document.write("le chiffre que tu as tappé est tres grand");// Je lui indique qu'il n'a pas saisi ce que l'on lui demandait
    }
 }else{
    document.write("il faut tapper un chiffre"); 
 }
    
 