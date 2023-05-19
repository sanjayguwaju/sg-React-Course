// const fruits = ['apple', 'banana', 'orange'];

const books = {
    "name": "Harry Potter", //Key:Value
    "author": "J.K. Rowling",
    "year": "1997",
    "publisher": "Bloomsbury Publishing",
    "language": "English",
    "genre": "Fantasy",
}

// console.log(books.name);
// console.log(books.year);
// console.log(books.publisher);

const school = {
    "name": "Sekolah Hacktiv8",
    "year": "2019",
    "address": "BSD",
    "students": ["Jack", "John", "Jane"],
    "staffs": ["Yusuf", "Dimitri", "Bondra"],
    "facilities": ["Swimming Pool", "Basketball Court", "Library"],
    "printStudents": function () {
        console.log(this.students);
    },
    "services": {
        "facilities": ["Swimming Pool", "Basketball Court", "Library"],
        "games": ["Football", "Basketball", "Badminton"],
    }

}

// console.log(school);


const students = [{name: "Jack", age: 20}, {name: "John", age: 21}, {name: "Jane", age: 22}]

// console.log(students[0].name);


// function
function greet(donkey, dholbajao) {
    console.log('Hi' + ' ' + donkey);
    dholbajao();



    function dog() {
        console.log('I am callback hlsfhfkdhsfdlkfhdlkdfh');
    }

    dog();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing ofunction as an argument
// greet('Peter', callMe);

// greet (name, callback) =========================> name is parameter, callback is parameter
// greet ('Peter', callMe) ========================> Peter is argument, CallMe is argument

// const jpt =() => {
//     console.log("Kushal le Callback function bujxa aba ");
// }

// greet("dog call hunu paryoo haiii",jpt)



// Object also have methods
// Some object methods are Object.keys, Object.values, Object.entries, Object.assign, Object.freeze, Object.seal, Object.isFrozen, Object.isSealed, Object.is, Object.hasOwnProperty, etc.
// Array also have methods
// Some array methods are forEach, map, filter, reduce, find, findIndex, some, every, includes, indexOf, lastIndexOf, slice, splice, push, pop, shift, unshift, concat, join, reverse, sort, toString, toLocaleString, isArray, etc.


const fruits = ['apple', 'banana', 'orange'];

const deleteFruit = fruits.pop();
const addFruit = fruits.push('mango');

// console.log(fruits);
// console.log(addFruit)
// console.log(fruits)


// Splice kushal le bujera aauxa ani sabai methods bujaeraa aau
const divided = fruits.splice(1, 2);
console.log(divided);