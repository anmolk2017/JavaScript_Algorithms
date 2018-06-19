function uniteUnique(arr) {

var hash=[];
hash= arguments[0];
  for (var i=1; i<arguments.length; i++){

      var newarr=arguments[i].filter((item)=> !hash.includes(item));
      hash=hash.concat(newarr);
  }

return hash;

}

uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);