import { PassThrough, Readable } from "stream";
import { expect } from "chai";

import { pingPong } from "../src/index.js";

describe("pingPong", function () {
  it("should output input", async function () {
    const src = ["one", "two", "three"];
    const input = Readable.from(src.map(s => s + "\n"));
    const res = [];
    const output = new PassThrough({
      write(chunk, _, cb) {
        res.push(chunk.toString("utf8"));
        cb();
      },
    });
    await pingPong(input, output);
    expect(res).to.deep.equal(src);
  });
});
