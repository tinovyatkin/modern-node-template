import { createInterface } from "readline";

/**
 *
 * @param {import('stream').Readable} inputStream
 * @param {import('stream').Writable} outputStream
 */
export async function pingPong(inputStream, outputStream) {
  for await (const line of createInterface(inputStream)) {
    outputStream.write(line);
  }
}

if (import.meta.url === "tada") {
  console.log("Uncovered line");
}
