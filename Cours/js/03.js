//les opérateurs arithmétiques
var nb1,nb2,result,mult,mod,div;//il permet de déclarer plusieurs variables en meme temps, au lieu de mettre ce qui est au dessous:
        /*
        var nb1;
        var nb2;
        var result;
        */
nb1=10;//ici je fais l'affectation de valeur pour la variable
nb2=42;
//les additions
result=nb1 + nb2;
//console.log(result);
//les soustractions
result=nb2 - nb1;
console.log(result);
//les multiplications
mult=nb1*nb2;
document.write(mult+ "<br>");
//les divisions
div=nb2/nb1;
document.write(div +"<br>");
//le reste des divisions
mod=nb2%nb1;//c'est le reste de division, mod est toujours strictement inferieur a le diviseur(ici nb1)
document.write(mod);
//les incrémentations
var nb3=6;
nb3 = nb3 +1;//la première façon d'incrémenter
console.log(nb3);
var nb4=1;
nb4++;//la 2 eme facon d'incrémenter, nb3++, permet de s'incremnetr par un
nb4++;//a chaque fois je fais ++ j'incrimente avec 1
nb4++;
//on peut le faire autrement
++nb4;
/*
    nb4++ equivalent a ++nb4 est equivalent a nb4 = nb4+1 c'est equivalent a nb4+=1

*/
console.log(nb4);
//les décrémentation, c'est l'inverse d'incrémentation
var nb5=8;//on a déclarer une variable nb5
nb5++;//ici c'est 9
nb5--;//ici 8
nb5-=1;//ici on est a 7
//nb5-- equivalent a nb5 = nb5-1 c'est equivalent a nb5-=1
