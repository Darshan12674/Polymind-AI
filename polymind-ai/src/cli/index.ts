import { createInterface } from "node:readline/promises"
import { stdin as input, stdout as output } from "node:process"
import { Orchestrator } from "@/orchestrator/orchestrator"


async function main() {
  const rl = createInterface({
    input,
    output,
  });

  const prompt = await rl.question("💬 Ask anything: ");

  rl.close();

  const orchestrator = new Orchestrator();

  const responses = await orchestrator.ask({
    prompt
  });

  console.log("\n==============================");

  responses.forEach((response) => {
    console.log(`\n🤖 ${response.model}`);
    console.log("------------------------------");
    if(response.success) {
      console.log(response.content)
      console.log(`⏱ ${response.latency} ms`)
    } else {
      console.log(`❌ ${response.error}`)
    }
  });

  console.log("\n==============================");
}

main();