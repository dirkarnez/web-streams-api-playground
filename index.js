const stream = new TextDecoderStream();

// Write data to be decoded
const data = new Uint8Array([228, 189, 160, 229, 165, 189, 228, 184, 150, 231, 149 /*, 140*/]);  //comment out 140 to simulate incomplete stream
const writer = stream.writable.getWriter();
writer.write(data);
writer.close();

// Read decoded data
const reader = stream.readable.getReader();
let done = false;
let output = "";
while (!done) {
  const { value, done: isDone } = await reader.read();
  done = isDone;
  
  if (value) {
    output += value;
  }
}
console.log(output); // 你好世(界)
