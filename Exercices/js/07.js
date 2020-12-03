var nb1=parseInt(prompt("Donnez 1er chiffre"));//parseInt permet de convertir ce que l'utilisateur va tapper en un number
var nb2=parseInt(prompt("Donnez 2ème chiffre"));//je stocke la valeur saisi par l'utilisateur dans une variables
/*----------La version sans verification le type des variables-----*/
if(nb1<nb2){
    document.write("le premier chiffre est inférieur au deuxieme chiffre");
}else if(nb1>nb2){
    document.write("le premier chiffre est supérieur au deuxieme chiffre");
}else if(nb1==nb2){
    document.write("Les deux chiffres sont égaux");
}else{//tous les cas d'echec(les cas qui ne sont pas traités ou bien les autres possibilités),les cas possibles d'echec(on tappe rien, on tappe des alphabets, on donne un seul chiffre)
    document.write("Vous n'avez pas saisi de chiffre(s)");
 }
 /*
 if(true){
     //ici je traite le true
 }else if(true)
// var x=10;
// if(isNaN(x)){

// }
/*-------Correction avec vérifications de types des variables qu'il soit number-------------*/
//isNaN()->renvoie true lorsque la variable est n'est pas de type number
if((!isNaN(nb1)) && (!isNaN(nb2))){//debut de conditon1
    if(nb1<nb2){
        document.write("le premier chiffre est inférieur au deuxieme chiffre");
    }else if(nb1>nb2){
        document.write("le premier chiffre est supérieur au deuxieme chiffre");
    }else if(nb1==nb2){
        document.write("Les deux chiffres sont égaux");
    }/*else{
        //     //document.write("Vous n'avez pas saisi de chiffre(s)");
        // }
        */
 }/*la fin du conditon 1 */else{
        console.log("Vous avez pas tappé des chiffres");
    }