
var login="admin";
var mdp="admin";
//les opérateurs logiques, ET, OU, NON
// ET/AND ==> && , je cumule plusieurs conditions en meme temps
// OU/OR ==> || , si une des conditions est vérifier ca renvoie true
// NON/NOT ==> !
if(login=="admin" && mdp=="admin"){//si l'un des deux variables est different la condition sera pas validée
//si login est correct et mdp n'est pas correct====>je passe pas
//si login est incorrect et mdp est correct ====> je passe pas
//si login est incorrect et mdp est incorrect  ===>je passe pas

}
/*--------------Opérateur OR/OU--------------*/
if(login=="admin" || mdp=="admin"){
    //ici il suffit qu'une des conditions est vrai, je passe(signifie que la condition renvoie true)
}
var A;
var B;
if((A) && (B)){
//si A est vrai et B est vrai => renvoie True
//Si A est vrai et B est Faux =>renvoie False
//Si A est Faux et B est Faux ==>renvoie False
//Si A est Faux  et B est vrai ==> renvoie False
}
if((A) || (B)){
    //Si A est Vrai et B est Faux ==>renvoie True
    //Si A est Faux et B est vrai ==>renvoie True
    //Si A est faux et B  est Faux==>renvoie False
    //Si A est Vrai et B est Vrai ==>renvoie True
}
if(!(A)){
    //loading ......
    
}
if(!(login=="admin")){
    //if(login=="admin") ==>ici renvoir true
    //if(!(login=="admin"))==>ici je cherche que le login n'est pas égal à "admin", alors que ce n'est pas le cas, donc ici elle renvoie False
    /*--------------------------

        if(!(true))==>renvoi false
        if(!(false))==> renvoie true

    ---------------------------*/
//avec le non ! on cherche le contraire de la condition
}
if(!(login=="admin" || mdp=="admin")){//renvoie False
    //cet bloc sera exécuté si la condition renvoie true
console.log("vrai");
}
else{
    //cet bloc sera exécuté si la condition renvoie false
    console.log("faux");
}
