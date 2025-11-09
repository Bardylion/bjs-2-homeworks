function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[arr.length - 1] ;
  let sum = 0;
  for (let value of arr) {
    if (value > max){
      max = value
    }
    if (value < min){
      min = value
    }
    sum += value
  };
  let avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0){
    return 0
  };
  return arr.reduce((acc, current) => acc + current, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0){
    return 0
  }  
  return Math.max(...arr) - Math.min(...arr)
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0){
    return 0
  }
  let sumEvenElement = 0
  let sumOddElement = 0
  let index = 0
  while (index < arr.length){
    if (arr[index] % 2 === 0){
      sumEvenElement += arr[index]
    }
    else {
      sumOddElement += arr[index]
    }
    index++
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0){
    return 0
  }
  let sumEvenElement = 0
  let countEvenElement = 0
  let index = 0
  while (index < arr.length){
    if (arr[index] % 2 === 0){
      countEvenElement += 1
      sumEvenElement += arr[index]
    }
    index++;
  }
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity
  let index = 0
  while (index < arrOfArr.length){
    let result = func(...arrOfArr[index])
    if (result > maxWorkerResult){
      maxWorkerResult = result
    }
    index ++
  }
  return maxWorkerResult
}

const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
console.log(makeWork(arr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72