import { BaseProvider } from "./base";
import { AIResponse } from "@/ types/response";

export class QwenProvider extends BaseProvider {
  readonly name = "Qwen";

  async generateResponse(prompt: string): Promise<AIResponse> {
    return {
      model: this.name,
      response: `Qwen response for: ${prompt}`,
      latency: 500,
      success: true,
    };
  }
}