// -------------------------------
// Async Code aur Event Loop Samajhne ka Simple Example
// -------------------------------

console.log("Start ho raha hai..."); // Yeh pehle chale ga (Sync Code)

// setTimeout => Async Code (Event Loop ise baad mein handle kare ga)
setTimeout(() => {
	console.log("Ye message 2 second baad aaye ga!");
}, 2000);

console.log("Khatam ho gaya!"); // Yeh bina wait kiye chale ga (Sync Code)

/*
  Output:
  Start ho raha hai...
  Khatam ho gaya!
  (2 second wait)  
  Ye message 2 second baad aaye ga!
*/
