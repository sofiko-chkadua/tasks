function convert(...args) { // []
  // let res = [];
  
  // args.forEach(function(item) {
  //   if(typeof item == 'string') {
  //     res.push(parseInt(item));
  //   } else {
  //     res.push(item + '');
  //   }
  // })
  
  // let res = [];
  
  const res = args.map(function(item) {
    if(typeof item == 'string') {
      return parseInt(item)
    } else {
      return item + ''
    }
  })
  
  return res
}

// convert(124) // [124]
// convert(124,56756,87687678) // [124,56756,87687678]
// convert() // []

// console.log(convert(124, '234', 55));

const executeforEach = (arr, fn) => {
  arr.forEach(function(item){
    fn(item)
  })
};

const bla = function(el) {console.log(el * 2)}
const bla2 = function(el) {console.log(el * 2)}

// console.log(executeforEach([1,2,3], bla)) // logs 2 4 6
// executeforEach([1,2,3], bla2) // logs 2 4 6




const mapArray = (arr, fn) => {
  const mapper = function(item){
    if(typeof item == 'string') {
      item = parseInt(item) // '6' 6
    }
    
    return fn(item)
  }
  
  return arr.map(mapper)
};


// const bla3 = function(el) {return el + 3})
// console.log(mapArray([2, '5', 8], bla3) // returns [5, 8, 11]


// [1,2,3,2].filter(function(item) { return item == 2 })

const filterArray = (arr, fn) => {
  return arr.filter(fn)
};

// console.log(filterArray([2, 5, 8], function(el) { return el % 2 === 0 })) // returns [2, 8]


const flipOver = (str) => {
  return str.split('').reverse().join('');
};

// console.log(flipOver('hey world'));

const makeListFromRange = (arr) => { // [2,8]
  if (arr.length == 1) {
    return arr;
  }
  let start = arr[0];
  let end = arr[1];
  let res = [];
  
  while (start <= end) {
    res.push(start)
    start++
  }
  
  return res;
};


// let conunter = 0

// while(conunter !==3) {
//   console.log(conunter)
//   conunter++
// }



// console.log(makeListFromRange([5, 8])); // [2,3,4,5,6,7]
// console.log(makeListFromRange([2, 7])); // [2,3,4,5,6,7]
// console.log(makeListFromRange([8])) // [8]

const getArrayOfKeys = (arr, key) => { // key = 'age'
//  let res = [];
//  arr.forEach(function(item) {
//    res.push(item[key])
//  })
  // return res; 
  
  return arr.map(function(item) {
    return item[key];
  })
};


// const actors = [
//   { name: 'tommy', age: 36},
//   { name: 'lee', age: 28 },
//   { name: 'lee', age: 28 },
//   { name: 'lee', age: 28 },
// ];
 
// console.log(getArrayOfKeys(actors, 'name')); // [‘tommy’, ‘lee’]
// console.log(getArrayOfKeys(actors, 'age')); // [‘tommy’, ‘lee’]



const substitute = (arr) => {
  return arr.map(function(item) {
    if (item < 30) {
      return '*'
    } else {
      return item;
    }
  });
};

// console.log(substitute([58, 14, 48, 2, 31, 29])); // [58, '*', 48, '*', 31, '*']


const getPastDay = (date, daysNumber) => {
  const newDateTimeStamp =  (+date) - (1000 * 60 * 60 * 24 * daysNumber) // 123123435345
  const newDate = new Date(newDateTimeStamp)

  const day = newDate.getDate()
  const month = newDate.toLocaleString('default', {month: 'short'})
  const year = newDate.getFullYear()
  
  // return `${day}, (${day} ${month} ${year})`; 
  return day;

  // return day + ', (' + day + ' ' + month + ' ' + year;  // 1, (1 Jan 2019)
};



// const date = new Date(2019, 0, 2);
// console.log(getPastDay(date, 1)); // 1, (1 Jan 2019)
// console.log(getPastDay(date, 2)); // 31, (31 Dec 2018)
// console.log(getPastDay(date, 365)); // 2, (2 Jan 2018)


const formatDate = (date) => {
  const day = date.getDate()
  const month = (date.getMonth() + 1 + '').padStart(2,0)
  const year = date.getFullYear()
  const minutes = (date.getMinutes() + '').padStart(2,0)
  const hours = (date.getHours() + '').padStart(2,0)
  
  // Student implementation
  return `${year}/${month}/${day} ${hours}:${minutes}`
};

// '33345'.padStart(10, '0') // '000033345'
// '1'.padStart(10, '0') // '000000001'

// console.log(formatDate(new Date('6/15/2018 09:15:00'))) // "2018/06/15 09:15"
// console.log(formatDate(new Date())) // gets current local time in given format("YYYY/MM/dd HH:mm")


module.exports = {
  convert,
  executeforEach,
  mapArray,
  filterArray,
  flipOver,
  makeListFromRange,
  getArrayOfKeys,
  substitute,
  getPastDay,
  formatDate,
};
