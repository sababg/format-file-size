📦 format-file-size

A lightweight utility to format file sizes (in bytes) into a human-readable format such as KB, MB, GB, or TB.
🚀 Installation

```bash
npm install format-file-size
```

or using yarn:

```bash
yarn add format-file-size
```

💡 Usage

```ts
import { formatFileSize } from "format-file-size";

console.log(formatFileSize(0)); // "0 Bytes"
console.log(formatFileSize(512)); // "512 Bytes"
console.log(formatFileSize(2048)); // "2 KB"
console.log(formatFileSize(1048576)); // "1 MB"
console.log(formatFileSize(1073741824)); // "1 GB"
```

⚙️ API
formatFileSize(size: number): string

Converts a file size in bytes to a human-readable string.

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| `size`    | number | The file size in bytes. |

Returns: a formatted string, e.g. "2.45 MB"

📚 Example

```ts
const fileSize = 7340032; // bytes
const formatted = formatFileSize(fileSize);
console.log(`File size: ${formatted}`);
// Output: "File size: 7 MB"
```

🧩 Features

- ✅ Zero-dependency
- ✅ Written in TypeScript
- ✅ Lightweight and fast
- ✅ Rounds to 2 decimal places
- ✅ Supports Bytes → TB

🧠 How It Works

- The function:
- Uses logarithmic calculation to find the appropriate unit (Bytes, KB, MB, GB, or TB).
- Divides the input by the correct power of 1024.
- Rounds the result to 2 decimal places.

🪪 License

MIT © 2025 Saba Beigi

