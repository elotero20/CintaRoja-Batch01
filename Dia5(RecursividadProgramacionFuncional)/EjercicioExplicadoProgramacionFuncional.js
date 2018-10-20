//MAP()
var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(elem,index,arr) {
   return elem * 2;
});
// doubles is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]

var numbers2 = [1, 4, 9];
var roots = numbers2.map(Math.sqrt);
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]

console.log(numbers);
console.log(doubles);

//FILTER()
var words = ['spray', 'limit', 'elite', 'exuberant', 
             'destruction', 'present'];

const result = words.filter(word => word.length > 6);
const result2 = words.filter(function(elem,index,arr){
 return elem.length > 6;
})
var result3 = words.filter(word => word === 'elite');

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

//FIND()
var array1 = [5, 12, 8, 130, 44];

var found = array1.find(function(element) {
  return element > 10;
});

var found2 = array1.find(elem => elem > 10);

console.log(found2);
// expected output: 12 < el primero

//JOIN()
var elements = ['Fire', 'Wind', 'Rain'];

console.log(elements.join());
// expected output: Fire,Wind,Rain

console.log(elements.join(''));
// expected output: FireWindRain

console.log(elements.join('-'));
// expected output: Fire-Wind-Rain

//REVERSE
var miMatriz = ['uno', 'dos', 'tres'];

console.log(miMatriz); // ['uno', 'dos', 'tres']

miMatriz.reverse();

console.log(miMatriz); // ['tres', 'dos', 'uno']