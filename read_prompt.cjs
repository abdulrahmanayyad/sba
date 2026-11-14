const fs = require('fs');
const readline = require('readline');

async function readStep() {
  const fileStream = fs.createReadStream('C:\\Users\\20101\\.gemini\\antigravity\\brain\\8b763695-7840-4e29-be3c-1d33e6724125\\.system_generated\\logs\\transcript_full.jsonl');
  const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });
  
  for await (const line of rl) {
    if (line.includes('"step_index":1896')) {
      const parsed = JSON.parse(line);
      fs.writeFileSync('C:\\Users\\20101\\Downloads\\sba-brand-compass\\prompt_1896.txt', parsed.content, 'utf8');
      console.log('Saved prompt 1896. Length:', parsed.content.length);
      break;
    }
  }
}
readStep();
