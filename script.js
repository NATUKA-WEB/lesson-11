// პარაგრაფი-1

let cars=['audi', 'bmw', 'lexux', 'volkswagen', 'porsche'];

for (let i=0; i<cars.length; i++) {

    if (cars[i] > 2) {
        console.log(cars[i]);
    }
}

// პარაგრაფი-2

let names=['martha', 'maya', 'nora', 'nitsa', 'sani', 'nana'];
for (let i=0; i < names.length; i++)
if (names[i] > 2) {
    console.log(names[3]);
}




// პარაგრაფი-3

let numbers=[2, 3, 4, 5, 6, 7];
for (let i=0; i < numbers.length; i++) {
    if (numbers[i] % 2 ==0) {
        console.log(numbers[i]);
    }
}
let numbers=[2, 3, 4, 5, 6, 7];
for (let i=0; i < numberslength; i++) {
    if (numbers[i] % 2 ==1) {
        console.log(numbers[i]);
    }
}


// პარაგრაფი-4








// პარაგრაფი-5

var person= {
    firstname: 'John'
    lastname: 'Doe'
    age: 50
    eyecolor: 'blue'

}

console.log(person.eyecolor);
console.log(person['firstname']);


// პარაგრაფი-6

let days=['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
console.log(days[0]);
console.log(days[1]);
console.log(days[2]);
console.log(days[3]);
console.log(days[days.length-1]);


// პარაგრაფი-7

let amount = [5, 25, 89, 120, 36];
amount.push('javascript', 'python');
console.log(amount);

amount.unshift('html', 'css');
console.log(amount);

amount.shift()
amount.pop()

// პარაგრაფი-8

let fruit= ['ფორთოხალი', 'ბანანი', 'მსხალი'];
for (let i=0; i < 3; i++);{
    console.log(fruit[i]);
}
fruit.push('ვაშლი', 'ანანასი');   
 console.log(fruit);
  

fruit.unshift('საზამთრო');
console.log(fruit);

fruit.pop();
fruit.shift();

for (let i=0; i < 4; i++); {
    console.log(fruit[i]);
}
fruit.splice (4,0 , 'მანგო');

// პარაგრაფი-9


let cars= ['audi', 'bmw', 'lexus', 'volkswagen', 'ferrary', 'porsche', 'bentley'];
for (let i=0; i < cars.length; i++); {
    if (cars[2]);
 
}
let newcars = cars.slice(start,end);
console.log(newcars);
