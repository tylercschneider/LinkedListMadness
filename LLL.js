/////////////////////////////////////
// DOUBLE LINKED LIST CLASS w/some management methods
class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}
	unshift(item) {
		let prevNode = this.head;
		let node = new Node(item, this.head);

		if(this.tail === null) {
			this.tail = node;
		}
		else {
			prevNode.prev = node;
		}
		this.head = node;
	}
	shift() {
		let currentNode = this.head;
		this.head = currentNode.next;
	}
	removeAll(item) {
		let node = this.head;
		while(node) {
			if(node.value === item){
				let prevNode = node.prev;
				let nextNode = node.next;
				nextNode.prev = prevNode;
				prevNode.next = nextNode;
			}
			node = node.next;
		}
	}
	// removeAt(index) {
	// 	let node = this.head;
	// 	let prevNode = null;
	// 	for(let i=0; i<index; i++){
	// 		prevNode = node;
	// 		currentNode = node.next;
	// 		if(currentNode===null){
	// 			console.log("list is shorter than index chosen");
	// 			break;
	// 		}
	// 	}
	// }
	// insertAt(index, item){
	// 	let currentNode = this.head;
	// 	let nextNode = currentNode.next
	// 	let prevNode = null;

	// 	for(let i=0; i<index; i++) {
	// 		prevNode = node;
	// 		store = node.next;
	// 		node = node.next;
	// 		if(node===null){
	// 			console.log("list is shorter than index chosen");
	// 			break;
	// 		}
	// 	}
	// 	let newNode = new Node(item, node.next, node.prev);
	// }
	print() {
		let node = this.head;
		console.log('forward print');
		while(node) {
			console.log(node.value);

			node = node.next;
		}
		console.log('');
	}
	reversePrint() {
		let node = this.tail;
		console.log('reverse print');
		while(node) {
			console.log(node.value);
			node = node.prev;
		}
		console.log('');
	}
}

class Node {
	constructor(value, next) {
		this.value = value;
		this.next = next;
		this.prev = null;
	}
}

let list = new LinkedList();

list.unshift(1);
list.unshift(2);
list.unshift(3);
list.unshift(3);
list.unshift(4);
list.unshift(5);
list.unshift(3);
list.unshift(6);

list.print();
list.reversePrint();
list.removeAll(3);
console.log('');
list.print();
list.reversePrint();



///////////////////////////////////////
// CATALOGING ARRAY VALUES
let bigA = [2,8,5,8,3,5,2,0,8,6,2,5,1,7,0];

function countWithArray(array) {
	let dict = {};
	let keys = [];
	for(let i=0; i<array.length; i++) {
		let key = array[i];

		if(!(dict.hasOwnProperty(key))) {
			dict[key] = 1;
			keys.push(key);
		}
		else if(dict.hasOwnProperty(key)){
			let current = dict[key];
			dict[key] = current + 1;
		}
	}
	keys.sort(function(a, b){return a - b});
	for(let j=0; j<keys.length; j++) {
		let key = keys[j];
		let value = dict[key];
		console.log(`[${key}]: ${value}`);
	}
}
function countWithMap(array) {
	let map = new Map(array);

	console.log(Array.from(map.keys()));


}
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log("THE FOLLOWING IS countWithArray() ...");
countWithArray(bigA);

console.log('');
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log("THE FOLLOWING IS countWithMap() ...");
//countWithMap(bigA);


