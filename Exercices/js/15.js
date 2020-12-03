/*for(var i=0;i<10;i+=2){
    //la boucle permet d'éxecuter des instructions plusieurs fois
 i vaut 0;
i vaut 1;
i vaut 2;
i vaut 3;
i vaut 4;
.....
i vaut 9;
}
*/

var nombre=prompt("Tappez un chiffre entre 2 et 9");
if(nombre>=2 && nombre<=9){//si nombre est sup a 2 et inf a 9

    for(var i=1;i<=10;i++){
        //cette boucle va s'éxécuter(va tourner) 10 fois, i a chaque fois va prendre nouvelle valeur
     var result=nombre*i;
     document.write(nombre+"x"+i+"="+result+"<br>");
    }
    
}else{
    document.write("Il faut tapper un chiffre entre 2 et 9");
}
