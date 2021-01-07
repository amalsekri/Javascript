//boucle for pour afficher tous les chiffres de 1 a 100
for(var compteur=1;compteur<=100;compteur++){
    if((compteur%3==0) && (compteur%5==0)){//je vérifier que le chiffre est divisible par 3 et 5 en meme temps"
    document.write("FizzBuzz <br>");

    }else if(compteur%3==0){//pour verifier que compteur est divisible par 3
        document.write("Fizz <br>");
    }else if(compteur%5==0){//pour tester si compteur esr divisible par 5 et non pas par 3(non divisible par 3, ell est valide avec le else deja)
        document.write("Buzz <br>");
    }else{
        document.write(compteur+"<br>");
    }

}