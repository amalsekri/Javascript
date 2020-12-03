var nombre=prompt("tapper un chiffre");//initialiser la variable nombre a 0 pour declencher l'exécution de la boucle
// while((nombre<50) || (nombre>100)){//si nombre est inferieur a 50 ou bien nombre superieur a 100 affiche la boite de dialogue(cad demande encore une fois a l'utilisateur de saisir un chiffre)
//     nombre=parseInt(prompt("tappez un chiffre entre 50 et 100"));
// }
// //si l'utilisateur tappe un chiffre entre 50 et 100 on va sortir de boucle

document.write("<h4>---------------Avec non !--------------</h4>")
while(!((nombre<50) || (nombre>100))){//si nombre est superieur a 50 ou bien nombre superieur a 100 affiche la boite de dialogue(cad demande encore une fois a l'utilisateur de saisir un chiffre)
    nombre=parseInt(prompt("tappez un chiffre entre 50 et 100"));
}
//si l'utilisateur tappe un chiffre entre 50 et 100 on va sortir de boucle