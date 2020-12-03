//les conditions se fait le bloc si sinon
/*
 if(condition1){
    instruction1;
    instruction2;
    instruction3;
    ...
 }
    else{
         autre instruction;
         instruction1;
         instruction2;
         ....
    }
   

*/
var nb1=20;
if(nb1<50){//ici les accoulates pour limiter les instructions pour la condition if
    //ici j'ecrit toutes les instructions, je peux avoir plusieurs instructions
    console.log("le nb1 est inferieur a 50");
}else{
   // si la condition de if n'est pas valider il execute le code qui est dans le bloc sinon(else)
    console.log("le nb1 est superieur ou egal à 50");
}

var age=70;
//ecrire une condition qui prend l'age est affiche mineur s'il est inferieur  a 18 et majeur sil est superieur ou egal a 18
if(age>=18){//si l'age est superieur ou egal a 18
    console.log("Bienvenue Vous êtes Majeur");
}else{
    console.log(" Vous êtes Mineur");
}
/*
si on a plusieurs conditions on peut faire des if...else imbriqués
la syntaxe:
if(condition1){
    instruction1;
    ....
}else if(condition2){
    instruction 1;
    .....

}else if(condition3){
    instruction 1;
    .....
}else{
    //else a la fin de chaque bloc if, permet de traiter les conditions qui ne sont pas vrai
}

Ecrire une condition qui permet d'afficher reussi si la moyenne est >10
rattrapage si la moyenne <10 et supperieur a 9 et refus si la moyenne est <9
*/
var moyenne=prompt("Tappez votre moyenne");//pour saisir la moyenne par l'utilisateur
if(moyenne<9){//ici on va traiter l'intervalle qui est strictement inferieur a 9
    console.log("refus");

}else if(moyenne<10){//si non signifie que moyenne >9 et moyenne <10
    //le traitement de >9 et <10
    console.log("ratrappage");

}else{//else ici traite l'autre partie qui n'est pas annoncé, ici c'est le >10
    console.log("reussi");
}