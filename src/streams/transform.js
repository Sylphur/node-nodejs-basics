import stream from 'stream'

const transform = async () => {
    const reverseStream = new stream.Transform({
        transform(chunk, _, callback) {
          const reversedChunk = chunk.toString().split("").reverse().join("");
          callback(null, reversedChunk + "\n");
        },
      });
      process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();