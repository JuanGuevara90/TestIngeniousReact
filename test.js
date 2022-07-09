// DEFINIR CONSTANTES
const PI = 3.14;
let num = 2;

function sumNumbers(num1, num2) {
	let resul = num1 + num2 * 4;
	return num1 + num2;
}

const printString = (parm1) => console.log(parm1);

let objectPerson = {
	name: "Adriana",
	age: 23,
	lastName: "Abad",
	talk: () => console.log("Soy chevre"),
};

const { lastName } = objectPerson;

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let newArray = [10, 11, ...array];
/* let result = sumNumbers(2, 6);
printString("Hola Sara");
 */
console.log(newArray);
