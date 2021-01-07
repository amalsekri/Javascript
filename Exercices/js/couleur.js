var color="";
var stock="";
var arret=true;
while(arret){
    
    if(color!="stop"){
        stock+=color+" ";
       color=prompt("donner une couleur");
        
    }else{
          arret=false;
    }
      
    
}
document.write(stock);