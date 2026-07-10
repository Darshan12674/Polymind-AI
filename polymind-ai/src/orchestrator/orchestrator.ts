import { providers } from "@/providers";
import { AIProvider } from "@/types/provider";
import { AIRequest } from "@/types/request";
import { AIResponse } from "@/types/response";


export class Orchestrator {
  async ask(request: AIRequest): Promise<AIResponse[]> {
    return Promise.all(
      providers.map((provider) => this.executeProvider(provider, request))
    );
  }

  private async executeProvider(
    provider: AIProvider,
    request: AIRequest
  ): Promise<AIResponse> {
    const start = Date.now();

    try {
      const result = await provider.generate(request);

      return {
        model: provider.name,
        provider: provider.name,
        content: result.text,
        latency: Date.now() - start,
        success: true,
        usage: result.usage,
        metadata: result.metadata,
      };
    } catch (error) {
      return {
        model: provider.name,
        provider: provider.name,
        content: "",
        latency: Date.now() - start,
        success: false,
        error:
          error instanceof Error ? error.message : "Unknown error",
      };
    }
  }
}