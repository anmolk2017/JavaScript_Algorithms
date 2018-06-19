
function convertHTML(str) {
  // &colon;&rpar;
var arr= str.split("");
  
for (var i=0; i<arr.length; i++){

    if (arr[i]==="&"){
       arr[i]=arr[i].replace("&","&amp;")
       console.log(arr[i]);
     } else if (arr[i]==="<"){
       arr[i]=arr[i].replace("<","&lt;")
       console.log(arr[i]);
     } else if (arr[i]===">"){
       arr[i]=arr[i].replace("<","&gt;")
       console.log(arr[i]);
     } else if (arr[i]==='"'){
       arr[i]=arr[i].replace('"',"&quot;")
       console.log(arr[i]);
     } else if (arr[i]==="'"){
       arr[i]=arr[i].replace("'","&apos;")
       console.log(arr[i]);
     }
}

return arr.join("");
 
}