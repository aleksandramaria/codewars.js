function solution(number) {
  var sum = 0;
  for(var i = 3; i < number; i++) {
    if(0 === i % 3 || 0 === i % 5) {
      sum = sum + i;
    }
  }
  return sum;
}