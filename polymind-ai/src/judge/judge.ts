// src/judge/judge.ts

import { AIProvider } from "@/types/provider";
import { AIResponse } from "@/types/response";
import { JudgeResult } from "@/types/judge";
import { createJudgePrompt } from "@/prompts/judge";

export class Judge {
  constructor(
    private readonly provider: AIProvider
  ) {}

  async evaluate(
    question: string,
    responses: AIResponse[]
  ): Promise<JudgeResult> {
    const prompt = createJudgePrompt(
      question,
      responses
    );

    const result = await this.provider.generate({
      prompt,
    });

    try {
      const cleaned = result.text
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();

return JSON.parse(cleaned);
    } catch {
      throw new Error(
        "Judge returned invalid JSON."
      );
    }
  }
}