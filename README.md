# Colourful Logger

A simple colored console logger with timestamps for Node.js applications.

## Installation

```bash
npm install colourful-logger
```

## Usage

### ES Modules (Recommended)

```javascript
import logUpdate from "colourful-logger";

// Log a normal message (cyan color)
logUpdate("This is a normal message");

// Log an error message (red color)
logUpdate("This is an error message", true);
```

### CommonJS

```javascript
const logUpdate = await import("colourful-logger").then((m) => m.default);

// Log a normal message (cyan color)
logUpdate("This is a normal message");

// Log an error message (red color)
logUpdate("This is an error message", true);
```

## Features

- Timestamps for all log messages
- Color-coded output (cyan for normal logs, red for errors)
- Simple and lightweight
- No dependencies
- ES Modules support
- Node.js >= 14.0.0

## License

MIT
