var prixHt=prompt("saisir le prix Hors taxe");
prixHt=parseInt(prixHt);//on va convertir le chaine de caractère en un number
var prixTtc=prixHt + (prixHt*0.2);
console.log(prixTtc);
document.write("Le prix TTC est de "+ prixTtc +" €");
alert(prixTtc);
//exemple pour calculer le prix Ht a partir de prix TTC
var ttc=prompt("Saisir le prix en TTC ");
var tva=20/100;// ca donne 0.2 pour obtenir le 20% du tva
var ht=ttc/1.2;
document.write("Le prix Ht est: "+ht + "€");
