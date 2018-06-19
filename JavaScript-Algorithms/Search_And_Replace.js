function myReplace(str, before, after) {
 
   let arr=str.split(" ");
   var vowalIndex= arr.indexOf(before);
   var regex =arr[vowalIndex].match(/[A-Z]/);
   
   if (arr[vowalIndex].substring(0,1).match(regex)!==null){
        after=after.substring(0,1).toUpperCase()+after.substring(1);
    }
   
   arr.splice(vowalIndex, 1, after);
   var output= arr.join(" ");
   return output;
}

myReplace("Let us go to the store", "store", "mall");