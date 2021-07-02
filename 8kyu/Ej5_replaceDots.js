let str = 'Yo. soy. Fides.';
let newStr = str.replace(/\./g,''); // . is a special character in regular expressions. If you want to use it literally, you have to escape it \.
console.log(str);
console.log(newStr);

var replaceDots = function(str) {
    return str.replace(/\./g, '-');
      
   }
console.log(replaceDots(str));
