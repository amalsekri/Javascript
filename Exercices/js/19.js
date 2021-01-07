//demander l'heure en minute et en seconde
var heure=prompt("Entrez l'heure");
var minute=prompt("Entrez les minutes");
var seconde=prompt("Entrez les secondes");

//verifier l'heure saisi par l'utilisateur, verifier l'heure, les minutes et les secondes
if((heure>=0 && heure<=23) && (minute>=0 && minute<=59) && (seconde>=0 && seconde<=59)){
//on va incrementer les secondes et tester sur les cas spécifiques(minute est a 60, lorsque seocnde est a 60 et lorsque heure est a 24)
    seconde++;//on va s'incrémenter par une seconde a chque fois
        if(seconde==60){//60 secondes c'est que j'ai fait une minute(j'ai 1 minute et 00 secondes)
            minute++;//minute=minute+1//minute+=1
            seconde=0;
            if(minute==60){//60 minute c'est une heure
                heure++;//j'incrémente les heures
                minute=0;//je met les minutes a 0
                if(heure==24){//si heure est a 24 ca signifie on est a minuit 00

                    heure=0;//je met l'heure a 00

                }//fin de if heure


            }//fin de if minute

        }//fin de if seconde

    document.write("Dans une seconde on sera a :" +heure+"h"+minute+"m"+seconde+"s");

}else{//si non 
    document.write("l'heure saisi n'est pas correcte"); 
}

