// -------------------------------
// Event Loop Phases Samajhne ka Example
// -------------------------------

console.log("Pehla message");

// setTimeout => "Timers" phase of Event Loop
setTimeout(() => {
	console.log("setTimeout wala message");
}, 0);

// setImmediate => "Check" phase of Event Loop
setImmediate(() => {
	console.log("setImmediate wala message");
});

console.log("Akhrri message");

/*
  Possible Output:
  Pehla message
  Akhrri message
  setTimeout wala message
  setImmediate wala message
  (Dono async hain, order farq ho sakta hai!)
*/
