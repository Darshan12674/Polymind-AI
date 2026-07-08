import { BaseProvider } from "./base";
import { AIResponse } from "@/ types/response";

export class GeminiProvider extends BaseProvider {
  readonly name = "Gemini";

  async generateResponse(prompt: string): Promise<AIResponse> {
    return {
      model: this.name,
      response: `Gemini response for: ${prompt}`,
      latency: 500,
      success: true,
    };
  }
}