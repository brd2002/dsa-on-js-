// !  one side should be 0 and other side should be 1
function swap (arr , i , j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function ansArray(arr) {
  let first = 0;
  let second = arr.length - 1;
  while(first <= second){
    // till the time i and js have not passed each other
    if (arr[first] == 1){
        swap(arr , first , second) ;
        second-- ; 
    }else {
        first ++ ;
    }
  }
  return arr;
}
let arr = [1, 0, 1, 0, 1];
ansArray(arr);
console.log(arr);
// lectue 7 done