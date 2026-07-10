import { providers } from "@/providers";
import { AIProvider } from "@/types/provider";
import { AIRequest } from "@/types/request";
import { AIResponse } from "@/types/response";
import { Judge } from "@/judge/judge";
import { judgeProvider } from "@/config/judge";
import { AIResult } from "@/types/result";


export class Orchestrator {

  private readonly judge = new Judge(judgeProvider)

async ask(request: AIRequest): Promise<AIResult> {
  const responses = await Promise.all(
    providers.map((provider) =>
      this.executeProvider(provider, request)
    )
  );

  const evaluation = await this.judge.evaluate(
    request.prompt,
    responses
  );

  return {
    responses,
    evaluation,
  };
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