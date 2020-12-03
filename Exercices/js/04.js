//conersion de celsius en farenheit
var tempC=prompt("saisir la température en Celsius");//on va demander a l'utilisateur de saisir le degrés en Celsius et on va recuperer ca dans une variable qui est tempC, on dirait on va stocker ce qu est tapé par l'utilsateur dans une variable
var tempF=(tempC*9/5)+32;//je stocke la formule de calcule dans une variable, pour l'afficher après
document.write("<h3>La température en Farenheit est:" + tempF +"</h3>");//l'affichage de la variable tempF
//pour le calcul de farenheit en celsius
var tempFarent=prompt("saisir la température en farenheit");
var tempCelsius=(tempFarent-32)*5/9;

document.write("<h3>La température en Celsius est:" + tempCelsius +"</h3>");//l'affichage de la variable tempF