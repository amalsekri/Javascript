var mois =prompt("Saisir un mois");
if(mois==1 || mois==3 || mois==5 || mois==7 || mois==8 ||mois==10 || mois==12){
    document.write("Ce mois contient 31 jours");
}else if(mois==4 || mois==6 || mois==9 || mois==11){
    document.write("Ce mois contient 30 jours");
}else if(mois==2){
    document.write("Ce mois contient 28 jours");
}else{
    document.write("Ce mois saisi n'existe pas");
}

