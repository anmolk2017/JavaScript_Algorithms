function pairElement(str) {
var arr=str.split("");

let arr4=[];

for (let i=0; i<arr.length; i++){
  arrTemp=[];
  if (arr[i] === "G"){
    arr[i]=arr[i];
    arrTemp=arr.slice(i,i+1).concat("C");
    arr4.push(arrTemp);
  } else if(arr[i]=== "C"){
      arr[i]=arr[i];
      arrTemp=arr.slice(i,i+1).concat("G");
      arr4.push(arrTemp);
  } else if(arr[i]==="A"){
      arr[i]=arr[i];
      arrTemp=arr.slice(i,i+1).concat("T");
      arr4.push(arrTemp);
  } else if (arr[i]==="T"){
      arr[i]=arr[i];
      arrTemp=arr.slice(i,i+1).concat("A");
      arr4.push(arrTemp);
  }
}
let arr5=arr4.slice();
return arr5;

}

pairElement("ATCGA");