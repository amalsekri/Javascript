
var jour=prompt("saisir un jour");
if(jour=="lundi"){//si ce qui est tappé egal a lundi ....
    document.write("Demain nous serons à Mardi");

}else if(jour=="mardi"){
    document.write("Demain nous serons à Mercredi");
}else if(jour=="mercredi"){
    document.write("Demain nous serons à Jeudi");
}else if(jour=="jeudi"){
    document.write("Demain nous serons à Vendredi");
}else if(jour=="vendredi"){
    document.write("Demain nous serons à Samedi");
}else if(jour=="samedi"){
    document.write("Demain nous serons à Diamanche");
}
else if(jour=="dimanche"){
    document.write("Demain nous serons à Lundi");
}else{
    document.write("Ce que vous avez tappez c'est un jour incorrect");
}