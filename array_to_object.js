// Input array
let arr = ['A', 'B', 'C', 'D'];
	
// Function to create object
function toObject(arr) {
	// target object
	let rv = {};
	// Traverse array using loop
	for (let i = 0; i < arr.length; ++i)
		// Assign each element to object
		rv[i] = arr[i];
	return rv;
}
// Display output
console.log(JSON.stringify(toObject(arr)));
