// 1. odwróć liczbę
// np dla 12345, funkcja powinna zwrócić 54321
function reverseNumber(number) {
  str = number.toString()
  len = str.length
  solution = ""
  for(let i=len-1;i>=0;i--){
    solution+=str[i]
  }
  return parseInt(solution)
}

console.log("1.", reverseNumber(12345));

// 2. doodaj do siebie wszystkie wartości z tablicy, które są parzyste
// dla tablicy tab powinniśmy otrzymać 2 + 4 + 6 + 8 = 20
const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function addEven(array) {
  let sum = 0;
  for(const number of array){
    if(number%2==0){
      sum+=number
    }
  }
  return sum
}

console.log("2.", addEven(tab));
