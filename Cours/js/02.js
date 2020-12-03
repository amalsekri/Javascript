//la concaténation des variables et des chaines de caractères
var var1="Je suis une chaîne de caractères";
var var2="concaténée à partir de plusieurs chaines";
var result=var1+" "+var2;//la concaténation se fait avec l'operateur +, on peut concaténer des variables avec des chaines de caractères
console.log(result);
document.write(result + "<br>");
//la concténation des varibles de types number
var annee=2017;
var mois =11;
var calcul= annee + mois;//la concaténation avec des numbers ca déffère a celle des chaines de caractères, avec les numbers se fait comme operation d'addition

document.write(calcul +"<br>");
//pour concatener des number sous form de chaines de caractères, on peut utiliser la fonction toString()
var calcul= annee.toString() + mois.toString();
console.log(calcul);//ici il va concatener sous forme string
document.write("Bonjour groupe de Vitry vous etes en mois de : " +mois);