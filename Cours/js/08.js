/*
Syntaxe switch
var semaine=prompt("donnez un chiffre entre 1 et 7");
switch(semaine){//selon la valeur de la variable semaine
    case 1://cas numero 1(c'est la première valeur de semaine)
    instruction1;
    break;
    case 2:
        instruction2;
        break;
    case 3:
        instruction3;
        break;//break pour sortir de ce cas la

    default://on fait d'autres possibilités, on traite les cas d'erreurs de l'utilisateur


}
 */
var semaine=parseInt(prompt("donnez un chiffre entre 1 et 7"));
switch(semaine){

    case 1:
        console.log("le chiffre tapper correspond a Lundi");
        break;
    case 2:
        console.log("le chiffre tapper correspond a Mardi");
        break;
    case 3:
        console.log("le chiffre tapper correspond a Mercredi");
        break;
    case 4:
        console.log("le chiffre tapper correspond a Jeudi");
        break;
    case 5:
        console.log("le chiffre tapper correspond a Vendredi");
        break;
    case 6:
        console.log("le chiffre tapper correspond a Samedi");
        break;
    case 7:
        console.log("le chiffre tapper correspond a Dimanche");
        break;
    default:
    console.log("le chiffre tapper ne correspond pas a un jour de la semaine");
}
//demander a l'utilisateur de tapper le premier caractère de son navigateur préferé
var browser=prompt("tappez le premier caractère de ton navigateur");

switch(browser){
    case 'C':
        console.log("Ton navigateur préféré est Chrome ");
        break;
    case 'O':
        console.log("Ton navigateur préféré est Opéra ");
        break;
        
    case 'F':
         console.log("Ton navigateur préféré est Firefox ");
        break;
     case 'S':
            console.log("Ton navigateur préféré est Safari ");
           break;
    case 'E':
            console.log("Ton navigateur préféré est Microsoft Edge ");
           break;
    default:
        console.log("Ce nom de navigateur n'est pas reconnu ");
        //il ya pas d'obligation de mettre break avec default
}
//vous allez déclarer deux variables a et b
//a=5;
//b=7;
document.write("<h4>-------------------Exemple operateur avec switch</h4>")
    var a=10;
    var b=7;
    var operateur=prompt("Donner un opérateur arithmétique");//je demande a l'utilisateur de saisir un opérateur arithmétique
    switch(operateur){

        case '+':
            document.write("L'addition de "+a+ " et  "+b +" donne "+(a+b));
            break;
        case '-':
            document.write("La soustraction de "+a+ " et  "+b +" donne "+(a-b));
            break;
        case '*':
             document.write("La Multiplication de "+a+ " et  "+b +" donne "+(a*b));
             break;
        case '/':
            document.write("La Division de "+a+ " et  "+b +" donne "+(a/b));
            break;
        case '%':
            document.write("La Modulo de "+a+ " et  "+b +" donne "+(a%b));
            break;
        default:
            document.write("l'opérateur saisi n'existe pas");
    }
   
    


