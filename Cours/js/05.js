var nb1=123;
var nb2="123";
//l'operateur de comparaison == signifie égal à
if(nb1==nb2){//teste est ce que les valeurs des variables sont egaux, == test que sur les valeurs
    console.log("les deux valeurs sont égaux"); 
}
//on tester sur la valeurs et le type
if(nb1===nb2){//=== signifie que les deux variables sont stritement égaux(égaux en valeur et égaux en type)
//puisque nb1 n'est pas strictement égal a nb2, donc la condition n'est pas vrai et il va pas exécuter ce que est entre les {}
    console.log("les deux variables sont identiques en valeurs et en types");
}
    /*
    if(true){

    }else{

    }

    En gros si la condition est verifée donc retourne true, si non retourne false
*/
//l'opérateur différent à -- != --, on appel not egal par --différent à--
if(nb1!=nb2){//retourne false, donc il va pas exécuter ce bloc la, il passe au else suivante

console.log("ces deux variables sont pas égaux");

}else{
    console.log("les deux variables sont égaux");
}
//l'opérateur strictement différent(en terme de valeur et de type)  !== , ici il teste sur la valeur et type
if(nb1!==nb2){//retourne true,parce que ici les deux variables sont pas identiques en terme de valeurs et type(ici ce qui valide la condition c'est le type qui est différent(l'une est number , l'autre est de type string))
    console.log("les deux variables sont strictement différents");

}
/* On a 4 opérateurs de comparaison
    == égal à(si la valeur égal à)
    != not égal à(si la valeur est différent à)
    === strictement égal à(si  la variable est egal à en terme de valeur et type)
    !== strictement différent à(si la variable est différente à l'autre varibale(soit en type, soit en valeur, soit en les deux) )
*/
/*-----------------------------------
Exercice
var prenom,age;
prenom="Amal";
age=60;

tu arrive sur un systeme sécurisé, ou il te demande de saisir ton prenom et ton age pour que tu puisse y accéder.
Au debut il te demande de saisir le prenom(a verfier avec la variable prenom en haut), si le prenom est valider je demande l'age qui est aussi verifier avec la varibale age en haut.
si tout va bien , il affiche un message de bienvenue dans votre espace sécurisé, si non des messages d'echec...


*-------------Imbrication de deux conditions if-------------------*/

var prenom,age;
prenom="Alex";
age=60;
//les variables age et prenom sont des valeurs réferences pour tester ce que l'utilsateur va saisir
var userPrenom=prompt("Tapez votre prenom");//il va demande a l'utilisateur de saisir son prénom
if(userPrenom==prenom){//si la condition1(condition sur le prénom) est vrai
    //je vérifie si le prénom tapé par l'utilisateur est egal a la valeur de prénom qui est ici "Amal"
    console.log("le prenom est corrrect");
    var userAge=prompt("Donnez votre Age");//je stocke la valeur saisi par l'utilisateur dans une varibles userAge, pour l'utiliser après pour les tests
    if(userAge==age){//si la condition2(condition sur l'age) est vrai
        console.log("Bienvenue " +userPrenom);
        //ici je demande de saisir le mot de passe 
    

    }else{//si l'age tappé est différent a celle qui est annoncé en haut

    console.log("l'age saisi n'est pas correct");
    }

}else{//si la condition n'est pas vrai(userPrenom==prenom)
console.log("le prenom n'est pas correct");
}

/*--------------Imbrication de trois conditions  if---------------*/
var prenom, monAge;
prenom = "Amal";
age = 60;
mdp = "admin";
var userPrenom=prompt("Tapez votre prenom");//il va demande a l'utilisateur de saisir son prénom
if(userPrenom.toLowerCase()==prenom.toLowerCase()){//si la condition1(condition sur le prénom) est vrai
    //je vérifie si le prénom tapé par l'utilisateur est egal a la valeur de prénom qui est ici "Amal"
    console.log("le prenom est corrrect");
    var userAge=prompt("Donnez votre Age");//je stocke la valeur saisi par l'utilisateur dans une varibles userAge, pour l'utiliser après pour les tests
    if(userAge==age){//si la condition2(condition sur l'age) est vrai
        //console.log("Bienvenue " +userPrenom);
        //ici je demande de saisir le mot de passe 
        var userMpd=prompt("saisir votre mot de passe");
        if(userMpd==mdp){
            console.log("Bienvenue "+userPrenom);

        }else{
           //le cas d'echec 
           console.log("le mot de passe saisi est incorrect");
        }

    }else{//si l'age tappé est différent a celle qui est annoncé en haut

    console.log("l'age saisi n'est pas correct");
    }

}else{//si la condition n'est pas vrai(userPrenom==prenom)
console.log("le prenom n'est pas correct");
}
//la boite de dialogue confirm
var dev=confirm("Aimez-vous le développement?");//confirmé une demande,soit oui soit annuler(non)
if(dev==true){//si retourne true j'execute les instructions ci dessous dans le bloc if
    console.log("c'est génial");
    var javascip=confirm("la programmation en Js aussi, je suppose?");
    if(javascip==true){
        document.write("C'est génial, bienvenue dans le jungle");
    }
    else{
        document.write("Dommage! le javascript vous permet d'animer votre page web");
    }

}else{//ici signifie que le test if(dev==true)==>retourne false
    document.write("Quel Dommage!");
}
