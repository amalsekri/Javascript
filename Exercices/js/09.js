var annee=prompt("saisir l'année");
//soit annee est divisible par 4 et n'est pas divisble par 100, ou bien elle est divisible par 400
if(!isNaN(annee)){//on exécute la conditon ci dessous si seulement si la valeur annee est de type number,  si non s'il est de type autre que number il va exécuter le message de else
    if((annee%4==0 && annee%100!=0) ||  (annee%400==0)) { //si la condition est vrai
        document.write("Cette année est bissextille");
    
    }else {//si non 
        document.write("Cette année n'est pas bissextille");
    }
}
else{//sinon(si la valeur de annee est n'est pas de type number)
    document.write("Vous avez pas tappé une année correcte");//on exécute ce bloc si la valeur annne est n'est pas de type number
}
