/* 
javascript c'est un language de programation interprété (comme java , python ...)
       les variables
       la declaration des variables en javascript se fait avec
       var nom_de_varaible=valeur;
       il ya deux versions javacript(deux standard) Ecmascript5(es5) et Ecmascript6(es6)
       avec Es6= let nom_variables=valeur;
       idealament les noms des variables contient des alphanumeriques avec underscore tout est attaché et pas de caractères speciaux, il faut pas qu'il commence par un chiffre
       je peux declarer des variables vides:
       var prenom;

   */
 /* 
    les types de variables:
        on a le type number(entier), string(chaine de caractere), boolean(true ou false),tableau,objet, float(nombre decimal qui est avec virgule)
        chaque instruction se termine avec pont virgule ;
        var age=30;// déclaration d'une variable de type number
        var prenom="Amal";//déclaration d'une varaible de type chaine de caractère
        var bool=true/false;(vrai ou faux)//la declaration d'une variable
        var nombre_dec=5.35;//la declaration d'un nombre decimal(float)


    */
   var nom;//ici j'ai déclarer une varibale
   nom= "SEKRI";//ici j'affecte une valeur pour cette variabme déclarer; 
   console.log(nom);
   nom="Mejai";//ici je réaffecte une autre valeur pour la varibale nom, qui ecrase deja l'ancienne valeur
   console.log(nom);
   var prenom="Amal";

   var age=50;
   console.log(typeof prenom);
   console.log(prenom);//console.log()permet d'afficher des variables et des instructions le console et pas dasn la page html
   console.log(age);
   //pour afficher une variable dans l'html,on utilise la fonction write()
   document.write(prenom);
   //afficher une boite de dialogue
   //alert("Super Groupe de Vitry, ils ont commencé le javascript");
   //on le faire aussi avec autre manière avec window.alert()
    //window.alert(prenom);

   var question= prompt("EST ce que vous avez aimé le Javascript?");
   console.log(question);
   //document.write(question);
    //la déclaration d'une constante se fait avec const, le nom de la consntante s'ecrit tout en majuscule, c'est une valeur constante tout au long le projet qui change pas
    const DEVISE="Euro";
    const ANNEE="2020";
   // console.log(typeof age);//typeof permet d'afficher le type de la variable
    //on dit que javascript est autotypés, puisque il affecte les types de varibales selon la valeur affecté

    //le changement de type de variable,changement de number vers string, de string vers number, de number vers float, de float vers number.
    var age=age.toString();//ici je change le type de variable age de number en chaine de caractere avec la fonction toString()
    console.log(typeof age);
    var votreDernierPrix;//les noms des varibales et les fonctions ca commence par un minuscule et pour chaque nouveau mot doit commencer par un majuscule
    var annee="2020";//variable annne est de type string
    console.log(typeof annee);
    var annee=parseInt(annee);//la fonctionparseInt() permet de changer le type de variables en number, integer/entier
    console.log(typeof annee);

    /*
    Attention javascript est sensible à la casse('case sensitive'), il fait la difference entre majuscule et minuscule
    maVariable =/= mavariable =/= ma_variable , ici pour javascript ils sont tous des variables différentes
    */
   /*
   la conversion de type de varibale pour un type float avec parseFloat()
   */
    var prix=200.4;
    console.log(typeof prix);
    var prix=parseFloat("amal");
    console.log(typeof prix);