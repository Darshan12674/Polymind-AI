import { BaseProvider } from "./base";
import { AIResponse } from "@/ types/response";

export class DeepSeekProvider extends BaseProvider {
  readonly name = "Deepseek";

  async generateResponse(prompt: string): Promise<AIResponse> {
    return {
      model: this.name,
      response: `Deepseek response for: ${prompt}`,
      latency: 500,
      success: true,
    };
  }
}