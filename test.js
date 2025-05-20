import logUpdate from "./index.js";

// Test normal logging
logUpdate("This is a test message");

// Test error logging
logUpdate("This is a test error message", true);

console.log("\nAll tests completed!");
