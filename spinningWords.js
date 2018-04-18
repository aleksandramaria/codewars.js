function spinWords(str) {
    var arr = str.split(" ");
    var newArr = [];
    
    for(i = 0; i < arr.length; i++) {
      if(arr[i].length > 4) {
        var newStr = arr[i].split("").reverse().join("");
        newArr.push(newStr); 
      } else {
        newStr = arr[i];
        newArr.push(newStr); 
      }
    }
    return newArr.join(" ");
}


