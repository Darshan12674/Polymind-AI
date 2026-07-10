import { AIResponse } from "@/types/response";

export function createJudgePrompt(
    question: string,
    responses: AIResponse[]
): string {

    const formatted = responses 
        .filter(r => r.success)
        .map(r => 
`MODEL: ${r.model}

${r.content}`)
    .join("\n\n-----------------\n\n");

  return `
You are an expert AI evaluator.

The original question is:

${question}

Below are answers from multiple AI models.

${formatted}

Evaluate every answer.

Score each model from 1 to 10 based on:

- Accuracy
- Completeness
- Clarity
- Practical usefulness

Return ONLY valid JSON.

{
  "winner":"",
  "scores":[
      {
         "model":"",
         "score":0,
         "strengths":[],
         "weaknesses":[]
      }
  ],
  "reason":"",
  "consensus":""
}`
        
}