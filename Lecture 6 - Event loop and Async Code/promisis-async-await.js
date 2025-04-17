// -------------------------------
// Promises aur Async/Await ka Basic Example
// -------------------------------

// 1. Simple Promise
let promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Promise pura ho gaya!"); // Success
	}, 1000);
});

// 2. Async/Await ka istemal
async function fetchData() {
	console.log("Await shuru...");
	let result = await promise; // Promise ka wait karo
	console.log(result); // Result ayega
	console.log("Await khatam!");
}

fetchData();
console.log("Main code chal raha hai..."); // Ye pehle print hoga

/*
  Output:
  Await shuru...
  Main code chal raha hai...
  (1 second wait)
  Promise pura ho gaya!
  Await khatam!
*/
