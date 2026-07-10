import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

import { Orchestrator } from "@/orchestrator/orchestrator";

async function main() {
  const rl = createInterface({
    input,
    output,
  });

  const prompt = await rl.question("💬 Ask anything: ");

  rl.close();

  const orchestrator = new Orchestrator();

  const result = await orchestrator.ask({
    prompt,
  });

  console.log("\n==============================");

  result.responses.forEach((response) => {
    console.log(`\n🤖 ${response.model}`);
    console.log("------------------------------");

    if (response.success) {
      console.log(response.content);
    } else {
      console.log(`❌ ${response.error}`);
    }

    console.log(`⏱ ${response.latency} ms`);
  });

  console.log("\n==============================");

  console.log("\n🏆 AI Judge");
  console.log("------------------------------");

  console.log(`Winner: ${result.evaluation.winner}`);

  console.log("\nScores");

  result.evaluation.scores.forEach((score) => {
    console.log(
      `${score.model.padEnd(15)} ${score.score}/10`
    );
  });

  console.log("\nConsensus");
  console.log("------------------------------");

  console.log(result.evaluation.consensus);

  console.log("\n==============================");
}

main();