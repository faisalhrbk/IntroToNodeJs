// -------------------------------
// File Parhne ka Async Example (fs module)
// -------------------------------
const fs = require("fs"); // Node.js ka built-in module

console.log("File parhna shuru karo...");

// Async tareeqay se file parho (Non-Blocking)
fs.readFile("example.txt", "utf-8", (err, data) => {
	if (err) {
		console.log("Error aya hai:", err);
	} else {
		console.log("File ka data:", data); // Jab file parh li jaye gi
	}
});

console.log("Dekho, main wait nahi karta!"); // Ye pehle chale ga

/*
  Agar 'example.txt' mein "Hello World" likha hai, output:
  File parhna shuru karo...
  Dekho, main wait nahi karta!
  (File read hone ke baad...)
  File ka data: Hello World
*/
