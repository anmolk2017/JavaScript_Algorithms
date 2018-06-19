function translatePigLatin(str) {
    var regex = /[aeiou]/gi;
    var output="";
    if (str[0].match(regex)){
        output= str+"way";
       }
    else {

        if (str.match(regex)===null){
          var output= str.substr(0,str.length)+"ay";
          } 
        else { 
          var vowalIndex= str.indexOf(str.match(regex)[0]);
          var output= str.substr(vowalIndex)+str.substr(0,vowalIndex)+"ay";
          }
      }
return output;

}

translatePigLatin("ghvd");