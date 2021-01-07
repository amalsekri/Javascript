//les tableaux c'est un type de variable, servent a stocker plusieurs infomations et de type différents  dans une meme variable
//les tableaux sont des variables particulières qu'on retrouve dans presque tous les languages de programmation
//un tableau est constitué d'une seule ligne et plusieurs colonnes(nombre de colonnes c'est infinie)
//les tableaux servent aussi a contenir les resultats des autres script dans un programme
/*
La déclaration d'un tableau
//Première méthode de déclaration d'un tableau
var apprenants=new Array('Amélie','Ahmad','Riad','Diana','Mona');//j'ai déclaré une variable de type tableau qui contient 5 elements
//Deuxième méthode de déclaration de tableau
var apprenants=['Jean','Nirmal','Omar','Alexis','Djindé','Selsabil'];

//les indices du tableau commence par 0 en tant que premier element, permettent d'accéder aux informations du tableau
*/
var apprenants=['Jean','Nirmal','Omar','Alexis','Djindé','Selsabil'];
 console.log(apprenants[3]);
//pour accéder a un element du tableau --------nom_du_tableau[indice]--------
for(var i=0;i<apprenants.length;i++){
    document.write(apprenants[i]+"<br>");
}

//vous allez creer un script qui lire un tableau chiffres et affiche pour chaque chiffre s'il est pair ou bien impair
var chiffres=[1,5,8,7,9,45,12,32,55,14,91,22,10,3,40,50,60,70];
for(var i=0;i<chiffres.length;i++){

if(chiffres[i]%2==0){//on dirait if(1%2==0), if(5%2==0)
    document.write(chiffres[i]+" est pair<br>");
}else{
    document.write(chiffres[i]+" est impair<br>");
}
    //i ici ca sert a etre l'indice du tableau 
   
}
// console.log(chiffres[0]);
// console.log(chiffres[1]);
// console.log(chiffres[2]);


//var fruits=['Mangue','Fraise','Figue','Kiwi'];
//Ecrire un programme qui affiche la liste des fruits présent dans le tableau, puis demander a l'utilsateur de tappez un nom de fruits et verifié est ce qu'il existe dans la liste ou non, si existe affiché disponible si non vous affichez indisponible
document.write("<h4>-------Quelques fonctions sur les tableaux---------</h4>")
//quelques fonctions sur les tableaux
var tabs=['Mathilde','Rafael'];
//la fonction push(), ajoute un élement a la fin du tableau
tabs.push("Ahmad");

tabs.push("Alexandre");
console.log(tabs);
//la fonction pop(), permet de retirer le dernier élement du tableau
tabs.pop();
console.log(tabs);
//la fonction shift(), permet du retirer le premier élement du tableau
tabs.shift();
console.log(tabs);
