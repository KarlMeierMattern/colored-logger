/**
 * A simple colored console logger with timestamps
 * @param {string} message - The message to log
 * @param {boolean} [isError=false] - Whether this is an error message
 */
const logUpdate = (message, isError = false) => {
  const timestamp = new Date().toISOString();
  const formattedMessage = `[${timestamp}] ${message}`;
  if (isError) {
    console.error("\x1b[31m%s\x1b[0m", formattedMessage); // Red color for errors
  } else {
    console.log("\x1b[36m%s\x1b[0m", formattedMessage); // Cyan color for normal logs
  }
};

export default logUpdate;
