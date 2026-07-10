import { providers } from "@/providers";
import { AIResponse } from "@/ types/response";


export class Orchestrator {
  async ask(prompt: string): Promise<AIResponse[]> {
    const responses = await Promise.all(
      providers.map((provider) => provider.generateResponse(prompt))
    );

    return responses;
  }
}