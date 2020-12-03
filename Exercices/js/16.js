var disMoi="";//j'intialise disMoi a string vide pour ne pas avoir undifined pour le premier essai
var compteur=1;//j'initailise le compteur de nombre de fois a 1
while(disMoi !=="oui" && disMoi!=="non"){ //oui && non =>
    disMoi=prompt("Dis moi OUI ou NON!");
    document.write(disMoi+" pour la "+compteur+"° fois, dis moi oui ou non! <br>");
    compteur++;//j'incremente compteur pour recuperer a chaque fois le numero de l'essai

}
document.write("<h1 style='background-color:cyan; text-align:center;'>Fini ;-) !</h1>");