function fearNotLetter(str) {
let output;

for (let i=0; i<str.length; i++){
let num=Math.abs(str.charCodeAt(i)-str.charCodeAt(i+1));
if(num !== 1){
   output=str.charCodeAt(i)+1;
   if (output !== 123){
   return String.fromCharCode(output);
   }
}

}
   

}

fearNotLetter("abcdefghijklmnopqrstuvwxyz");