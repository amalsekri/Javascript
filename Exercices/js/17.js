var solution = Math.floor(Math.random() * 100) + 1; //c'est valeur generer aleatoirement
//1 penser a demander a l'utilisateur de saisir un chiffre, je le garde dans une variable
//solution c'est la valeur a chercher et devinette c'est le chiffre tapper par l'utilisateur , 
//vous allez comparer ces deux valeurs, soit il est plus grand soit plus petit soit ils sont égaux  
//var devinette=prompt("tappez un chiffre");
console.log(solution);
// if(devinette==solution){ 3 ==45
//     console.log("barvo!");

// }else if(devinette>solution){
//     console.log("ton chiffre est plus grand!");
// }else{
//     console.log("ton chiffre est plus petit!");
// }
//comment je réaffiche le prompt a chaque fois que l'utilisateur tappe pas le bon chiffre
//si le devinette est differente a solution affiche le prompt
// var compteur=0;//le compteur de nombre d'essai de l'utilisateur
// while(devinette!=solution && compteur<7){//tant que devinette esr diff de solution
//     var devinette=prompt("tappez un chiffre");
//     compteur++;
//     if(devinette>solution){
//         alert("ton chiffre est plus grand!");
//     }else if(devinette<solution){
//         alert("ton chiffre est plus petit!");
//     }
// }
//alert(solution);
for(var compteur=1;compteur<=6;compteur++){//pour limiter le nombre d'execution de ce script a 6 fois au max
    //si la valeur est egal solution:bravo
    //si non:si valeur est > solution (plus grand), si non si valeur est < (valeur est plus petit)
    var devinette=parseInt(prompt("tappez un chiffre"));

    if(compteur<6){//on va tester si toujours le compteur est inferieur a 6 pour j'execute ce script
        if(devinette==solution){//si devinette est égal a solution
            console.log("bravo! tu as trouvé la solution au bout de "+compteur+" tours");
            compteur=6;//on va mettre le compteur a 6 pour qu'il sort du boucle
        }else{//elle va traiter le devinette est differente de solution(on a deux sous conditions(soit plus petit, soit grand))
    
             if(devinette>solution){//si devinette est plus grande que solution 
                   alert("ton chiffre est plus grand!");
             }else{//si non(n'est pas égal, n'est pas superieur , donc forcement que c'est plus petit)
                    alert("ton chiffre est plus petit!");
                }
        }
    }else{//si non si le compteur est depasse 6 (n'est pas inferieur a 6)
        console.log("Dommage la partie est terminée, le nombre chercher est: "+solution);
    }
  
}


